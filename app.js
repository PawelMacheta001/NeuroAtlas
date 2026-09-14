
(() => {
  const data = window.NEUROPHARM_DATA;
  const app = document.getElementById('app');
  const stickyMount = document.getElementById('stickyProgressMount');
  const searchInput = document.getElementById('globalSearch');
  const searchResults = document.getElementById('searchResults');
  if (!data || !Array.isArray(data.concepts)) {
    app.innerHTML = '<section class="panel"><h2>Błąd</h2><p>Nie udało się wczytać bazy.</p></section>';
    return;
  }

  const categoryById = new Map(data.categories.map(x => [x.id, x]));
  const conceptById = new Map(data.concepts.map(x => [x.id, x]));
  const sourceById = new Map(data.sources.map(x => [x.id, x]));
  const pathById = new Map(data.learning_paths.map(x => [x.id, x]));
  const reverseDeps = new Map();
  data.concepts.forEach(c => c.dependencies.forEach(dep => {
    if (!reverseDeps.has(dep)) reverseDeps.set(dep, []);
    reverseDeps.get(dep).push(c.id);
  }));

  let pageCleanup = null;
  const CAT_ACCENT = {
    foundations: '#9ff4be', receptors: '#9c89ff', enzymes: '#77efab', transporters: '#ffd977',
    neurotransmission: '#86efff', pharmacokinetics: '#ff9e72', interactions: '#ff88a8',
    endocannabinoid: '#d4ff6f', terpenes: '#b8ff91', evidence: '#9db2aa'
  };

  const esc = s => String(s ?? '').replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
  const normalize = s => String(s || '').toLocaleLowerCase('pl').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  let routeOverride = '';
  const routeParts = () => (routeOverride || location.hash).replace(/^#\/?/, '').split('/').filter(Boolean);
  const catTitle = id => categoryById.get(id)?.title || id;
  const catAccent = id => CAT_ACCENT[id] || '#9ff4be';
  const evidenceLabel = x => ({established:'dobrze ustalone', preclinical:'przedkliniczne', mixed:'mieszane', emerging:'rozwijające się', 'context-dependent':'zależne od kontekstu', hypothesis:'hipoteza'}[x] || x || 'brak danych');
  const cannabisLabel = x => ({none:'brak', low:'niska', medium:'średnia', high:'wysoka'}[x] || x);
  const difficultyLabel = n => ['','start','łatwe','średnie','trudniejsze','zaawansowane'][n] || `poziom ${n}`;
  const relationText = rel => data.relation_types?.[rel] || rel;
  const visibleConcepts = () => data.concepts;


  // Some attachment/preview environments block localStorage entirely.
  // Never let that prevent the encyclopedia from rendering.
  const memoryStorage = new Map();
  const safeStorage = {
    get(key, fallback = null) {
      try {
        const value = window.localStorage.getItem(key);
        return value === null ? fallback : value;
      } catch (_) {
        return memoryStorage.has(key) ? memoryStorage.get(key) : fallback;
      }
    },
    set(key, value) {
      memoryStorage.set(key, value);
      try { window.localStorage.setItem(key, value); } catch (_) {}
    }

  };

  function runPageCleanup() {
    if (typeof pageCleanup === 'function') {
      try { pageCleanup(); } catch (_) {}
    }
    pageCleanup = null;
  }

  function categorySummary(id) {
    const cat = categoryById.get(id);
    return cat?.description || 'Blok wiedzy porządkujący pojęcia z podobnego obszaru.';
  }

  function graphLegendHTML() {
    return `<div class="graph-legend">
      <div class="legend-item"><span class="legend-dot category"></span><strong>Kategoria</strong><small>główna grupa pojęć</small></div>
      <div class="legend-item"><span class="legend-dot concept"></span><strong>Pojęcie</strong><small>konkretny temat / wpis</small></div>
      <div class="legend-item"><span class="legend-line dep"></span><strong>Zależność</strong><small>najpierw to, potem tamto</small></div>
      <div class="legend-item"><span class="legend-line path"></span><strong>Ścieżka</strong><small>kolejność w kursie</small></div>
    </div>`;
  }

  function buildKnowledgeMap(categoryFilter = 'all', pathFilter = 'all') {
    let concepts = visibleConcepts();
    if (pathFilter !== 'all') {
      const path = pathById.get(pathFilter);
      const allowed = new Set(path?.steps || []);
      concepts = concepts.filter(c => allowed.has(c.id));
    }
    if (categoryFilter !== 'all') concepts = concepts.filter(c => c.category === categoryFilter);

    const categories = [...new Set(concepts.map(c => c.category))]
      .map(id => categoryById.get(id))
      .filter(Boolean)
      .sort((a, b) => (a.order || 0) - (b.order || 0));

    const categoryNodes = categories.map((cat, i) => {
      const angle = (Math.PI * 2 * i) / Math.max(categories.length, 1) - Math.PI / 2;
      return {
        id: `cat:${cat.id}`,
        rawId: cat.id,
        kind: 'category',
        label: cat.title,
        category: cat.id,
        data: cat,
        x: Math.cos(angle) * 300,
        y: Math.sin(angle) * 178,
        z: Math.sin(angle) * 170,
        baseR: 26,
        seed: i + 1
      };
    });

    const nodes = [...categoryNodes];
    const conceptIds = new Set(concepts.map(c => c.id));
    const conceptNodes = [];
    categories.forEach((cat, catIndex) => {
      const parent = categoryNodes[catIndex];
      const items = concepts.filter(c => c.category === cat.id);
      items.forEach((c, i) => {
        const angle = (Math.PI * 2 * i) / Math.max(items.length, 1) + (catIndex * 0.48);
        const radius = 96 + (i % 4) * 26 + Math.floor(i / 4) * 14;
        const wobble = ((i % 3) - 1) * 24;
        conceptNodes.push({
          id: c.id,
          rawId: c.id,
          kind: 'concept',
          label: c.title,
          category: c.category,
          data: c,
          x: parent.x + Math.cos(angle) * radius,
          y: parent.y + Math.sin(angle) * (62 + (i % 5) * 9),
          z: parent.z + Math.cos(angle * 1.4) * 92 + wobble,
          baseR: 14,
          seed: i + 1 + catIndex * 13,
          parentId: parent.id
        });
      });
    });
    nodes.push(...conceptNodes);

    const edges = [];
    conceptNodes.forEach(n => {
      edges.push({ from: n.parentId, to: n.id, kind: 'membership' });
      (n.data.dependencies || []).forEach(depId => {
        if (conceptIds.has(depId)) edges.push({ from: depId, to: n.id, kind: 'dependency' });
      });
      (n.data.related || []).slice(0, 3).forEach(rel => {
        if (conceptIds.has(rel.id)) edges.push({ from: n.id, to: rel.id, kind: 'related' });
      });
    });

    if (pathFilter !== 'all') {
      const steps = pathById.get(pathFilter)?.steps || [];
      for (let i = 0; i < steps.length - 1; i++) {
        if (conceptIds.has(steps[i]) && conceptIds.has(steps[i + 1])) {
          edges.push({ from: steps[i], to: steps[i + 1], kind: 'path' });
        }
      }
    }

    return { nodes, edges, categories, concepts };
  }

  function projectGraphNode(node, t, mode) {
    const spin = mode === '3d' ? (t * 0.00010) : 0;
    const wave = mode === '3d' ? Math.sin(t * 0.00075 + node.seed) * 7 : 0;
    const cos = Math.cos(spin);
    const sin = Math.sin(spin);
    const rx = node.x * cos - node.z * sin;
    const rz = node.z * cos + node.x * sin;
    const ry = node.y + wave;
    const cam = mode === '3d' ? 960 : 999999;
    const scale = cam / (cam - rz);
    return {
      x: 600 + rx * scale,
      y: 370 + ry * scale * 0.86,
      scale,
      z: rz
    };
  }

  function graphNodeLabel(node) {
    if (node.kind === 'category') return node.label;
    const short = abbrev(node.label);
    return short.length <= 10 ? short : short.slice(0, 10);
  }

  function graphNodePanel(node, model, pathFilter) {
    if (!node) {
      return `<div class="kicker">Mapa</div><h3>Wybierz pojęcie</h3><p>Kliknij element na mapie, aby zobaczyć jego opis, relacje i szybkie przejście do pełnego tematu.</p>${graphLegendHTML()}`;
    }
    if (node.kind === 'category') {
      const inside = model.concepts.filter(c => c.category === node.rawId).slice(0, 6);
      return `
        <div class="kicker">Kategoria</div>
        <h3>${esc(node.label)}</h3>
        <p>${esc(categorySummary(node.rawId))}</p>
        <div class="graph-stat-grid">
          <div class="graph-stat"><strong>${inside.length}</strong><span>pojęć w widoku</span></div>
          <div class="graph-stat"><strong>${esc(catAccent(node.rawId))}</strong><span>kolor akcentu</span></div>
        </div>
        <div class="graph-chip-list">${inside.map(c => `<a class="graph-chip" href="#/concept/${encodeURIComponent(c.id)}">${esc(c.title)}</a>`).join('')}</div>
        ${graphLegendHTML()}`;
    }
    const c = node.data;
    const deps = (c.dependencies || []).map(id => conceptById.get(id)).filter(Boolean).slice(0, 5);
    const inPaths = data.learning_paths.filter(p => p.steps.includes(c.id)).slice(0, 3);
    return `
      <div class="kicker">Pojęcie</div>
      <h3>${esc(c.title)}</h3>
      <p>${esc(textBlock(c))}</p>
      <p>${esc(whyItMatters(c))}</p>
      <div class="graph-stat-grid">
        <div class="graph-stat"><strong>${c.difficulty}</strong><span>poziom</span></div>
        <div class="graph-stat"><strong>${esc(cannabisLabel(c.cannabis_relevance))}</strong><span>cannabis</span></div>
        <div class="graph-stat"><strong>${deps.length}</strong><span>zależności</span></div>
      </div>
      <div class="graph-actions-row">
        <a class="button" href="#/concept/${encodeURIComponent(c.id)}">Otwórz temat</a>
        ${pathFilter !== 'all' ? `<a class="button-secondary" href="#/path/${encodeURIComponent(pathFilter)}">Wróć do kursu</a>` : ''}
      </div>
      ${deps.length ? `<div class="graph-subtitle">Najpierw przeczytaj</div><div class="graph-chip-list">${deps.map(d => `<a class="graph-chip" href="#/concept/${encodeURIComponent(d.id)}">${esc(d.title)}</a>`).join('')}</div>` : ''}
      ${inPaths.length ? `<div class="graph-subtitle">Występuje w kursach</div><div class="graph-chip-list">${inPaths.map(p => `<a class="graph-chip" href="#/path/${encodeURIComponent(p.id)}">${esc(p.title)}</a>`).join('')}</div>` : ''}
      ${graphLegendHTML()}`;
  }

  function hashCode(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return Math.abs(h >>> 0);
  }
  function pick(arr, idx) { return arr[idx % arr.length]; }
  function leafPath() {
    return 'M300 396 C273 362 267 320 281 278 C243 298 205 293 172 267 C210 257 235 236 257 209 C219 194 193 165 175 127 C215 145 249 145 281 132 C267 93 271 49 300 12 C329 49 333 93 319 132 C351 145 385 145 425 127 C407 165 381 194 343 209 C365 236 390 257 428 267 C395 293 357 298 319 278 C333 320 327 362 300 396 Z';
  }

  function svgUri(svg) {
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  function visual(seed, accent='#9ff4be', label='') {
    const h = hashCode(seed);
    const pos = (shift, mod, add=0) => add + ((h >> shift) % mod);
    const a = `${pos(1, 70, 6)}% ${pos(4, 42, 8)}%`;
    const b = `${pos(7, 30, 58)}% ${pos(9, 28, 8)}%`;
    const c = `${pos(12, 24, 68)}% ${pos(15, 20, 56)}%`;
    const d = `${pos(2, 24, 6)}% ${pos(18, 20, 72)}%`;
    const e = `${pos(5, 16, 38)}% ${pos(10, 12, 40)}%`;
    const labelSafe = String(label || '').replace(/&/g,'&amp;').replace(/</g,'&lt;');
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#08110d"/>
          <stop offset="55%" stop-color="#0d1713"/>
          <stop offset="100%" stop-color="#101522"/>
        </linearGradient>
        <linearGradient id="acc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${accent}" stop-opacity="1"/>
          <stop offset="100%" stop-color="#9580ff" stop-opacity=".88"/>
        </linearGradient>
        <filter id="blur"><feGaussianBlur stdDeviation="32"/></filter>
      </defs>
      <rect width="1200" height="800" fill="url(#bg)"/>
      <circle cx="124" cy="120" r="120" fill="${accent}" opacity=".20" filter="url(#blur)"/>
      <circle cx="1040" cy="132" r="140" fill="#9580ff" opacity=".18" filter="url(#blur)"/>
      <circle cx="930" cy="640" r="170" fill="#d4ff6f" opacity=".10" filter="url(#blur)"/>
      <g fill="none" stroke="rgba(255,255,255,.08)">
        <path d="M0 136 H1200"/><path d="M0 272 H1200"/><path d="M0 408 H1200"/><path d="M0 544 H1200"/><path d="M0 680 H1200"/>
        <path d="M160 0 V800"/><path d="M360 0 V800"/><path d="M560 0 V800"/><path d="M760 0 V800"/><path d="M960 0 V800"/>
      </g>
      <path d="M0 170 L286 0 H538 L262 228 H0Z" fill="rgba(255,255,255,.04)"/>
      <path d="M1200 0 V148 L968 332 H750 L1034 0Z" fill="rgba(255,255,255,.035)"/>
      <path d="M0 800 V566 L262 304 H446 L158 800Z" fill="rgba(255,255,255,.03)"/>
      <path d="M1200 800 H842 L596 494 V304 L1200 560Z" fill="rgba(255,255,255,.04)"/>
      <polygon points="${a},${b},${e}" fill="url(#acc)" opacity=".25"/>
      <polygon points="${a},${c},${d}" fill="rgba(255,255,255,.06)" opacity=".25"/>
      <g transform="translate(712,112) scale(.86)" opacity=".30">
        <path d="${leafPath()}" fill="none" stroke="${accent}" stroke-width="12"/>
        <path d="M300 96 V342" stroke="${accent}" stroke-width="10"/>
      </g>
      <g transform="translate(70,74)">
        <rect x="0" y="0" width="190" height="38" rx="19" fill="rgba(6,11,9,.56)" stroke="rgba(255,255,255,.10)"/>
        <text x="20" y="24" fill="#e7f9ec" font-size="15" font-family="Inter,Arial" font-weight="800" letter-spacing="1.6">${labelSafe}</text>
      </g>
    </svg>`;
    return svgUri(svg);
  }

  function homeCannabisVisual() {
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#08110d"/>
          <stop offset="60%" stop-color="#0d1713"/>
          <stop offset="100%" stop-color="#141326"/>
        </linearGradient>
        <filter id="blur"><feGaussianBlur stdDeviation="26"/></filter>
      </defs>
      <rect width="1200" height="800" fill="url(#bg)"/>
      <circle cx="180" cy="126" r="130" fill="#89f7ad" opacity=".18" filter="url(#blur)"/>
      <circle cx="1010" cy="150" r="140" fill="#9580ff" opacity=".16" filter="url(#blur)"/>
      <circle cx="960" cy="630" r="170" fill="#d4ff6f" opacity=".10" filter="url(#blur)"/>
      <path d="M0 140 H1200 M0 280 H1200 M0 420 H1200 M0 560 H1200 M0 700 H1200 M160 0 V800 M360 0 V800 M560 0 V800 M760 0 V800 M960 0 V800" stroke="rgba(255,255,255,.06)" fill="none"/>
      <g transform="translate(440,160) scale(1.1)">
        <path d="${leafPath()}" fill="none" stroke="#89f7ad" stroke-width="18"/>
        <path d="M300 96 V344" stroke="#89f7ad" stroke-width="14"/>
      </g>
      <g transform="translate(96,498)">
        <circle cx="0" cy="0" r="64" fill="#161d1a" stroke="#89f7ad" stroke-width="4"/>
        <circle cx="-22" cy="-10" r="7" fill="#89f7ad"/><circle cx="22" cy="-10" r="7" fill="#89f7ad"/>
        <path d="M-26 18 C-6 40, 6 40, 26 18" fill="none" stroke="#89f7ad" stroke-width="6" stroke-linecap="round"/>
        <text x="0" y="108" fill="#e7f9ec" text-anchor="middle" font-family="Inter,Arial" font-size="24" font-weight="800">ŚMIECH</text>
      </g>
      <g transform="translate(284,612)">
        <rect x="-76" y="-20" width="152" height="20" rx="10" fill="#f4b85f"/>
        <rect x="-64" y="0" width="128" height="42" rx="18" fill="#5c3f24"/>
        <rect x="-72" y="44" width="144" height="18" rx="9" fill="#f4b85f"/>
        <path d="M-58 0 Q-20 -28 18 0 T64 0" fill="#7dd95a"/>
        <text x="0" y="112" fill="#e7f9ec" text-anchor="middle" font-family="Inter,Arial" font-size="24" font-weight="800">GŁÓD</text>
      </g>
      <g transform="translate(920,518)">
        <path d="M-72 12 C-38 -48, 36 -48, 70 12" fill="none" stroke="#9580ff" stroke-width="8"/>
        <rect x="-82" y="14" width="164" height="58" rx="10" fill="#161c28" stroke="#9580ff" stroke-width="4"/>
        <circle cx="-38" cy="43" r="8" fill="#9580ff"/><circle cx="0" cy="43" r="8" fill="#9580ff"/><circle cx="38" cy="43" r="8" fill="#9580ff"/>
        <text x="0" y="122" fill="#e7f9ec" text-anchor="middle" font-family="Inter,Arial" font-size="24" font-weight="800">RELAKS</text>
      </g>
      <g transform="translate(1030,250)">
        <rect x="-56" y="-56" width="112" height="112" rx="18" fill="#152118" stroke="#d4ff6f" stroke-width="4"/>
        <rect x="-12" y="-38" width="24" height="76" rx="6" fill="#d4ff6f"/>
        <rect x="-38" y="-12" width="76" height="24" rx="6" fill="#d4ff6f"/>
        <text x="0" y="106" fill="#e7f9ec" text-anchor="middle" font-family="Inter,Arial" font-size="24" font-weight="800">MEDYCZNIE</text>
      </g>
      <g transform="translate(170,218)">
        <ellipse cx="0" cy="0" rx="74" ry="42" fill="none" stroke="#86efff" stroke-width="8"/>
        <circle cx="0" cy="0" r="18" fill="#86efff"/>
        <text x="0" y="106" fill="#e7f9ec" text-anchor="middle" font-family="Inter,Arial" font-size="24" font-weight="800">SKUPIENIE</text>
      </g>
      <g transform="translate(70,74)">
        <rect x="0" y="0" width="248" height="38" rx="19" fill="rgba(6,11,9,.56)" stroke="rgba(255,255,255,.10)"/>
        <text x="20" y="24" fill="#e7f9ec" font-size="15" font-family="Inter,Arial" font-weight="800" letter-spacing="1.6">MEDYCZNA + REKREACYJNA</text>
      </g>
    </svg>`;
    return svgUri(svg);
  }

  function conceptSceneType(concept) {
    const t = normalize(`${concept.id} ${concept.title} ${concept.short} ${concept.explanation}`);
    if (/(ache|esteraz|enzym|mao|comt|faah|magl|bche|cyp)/.test(t)) return 'enzyme';
    if (/(receptor|agonist|antagon|alloster|inverse|cb1|cb2|gaba|nmda|ampa|trpv|5-ht|dopamin|seroton|nikotyn|muskaryn)/.test(t)) return 'receptor';
    if (/(transport|sert|dat|net|reuptake|wychwyt)/.test(t)) return 'transporter';
    if (/(synaps|neurotrans|acetylocholin|dopamin|serotonin|noradrenalin|glutamin|gaba)/.test(t)) return 'synapse';
    if (/(terpen|limonen|linalol|pinen|myrcen|mircen|kariofil|caryophyll|ocimen|borneol|terpineol|sabinen)/.test(t)) return 'terpene';
    if (/(thc|cbd|anandamid|2-ag|endokannabino|cannabinoid|cannabis)/.test(t)) return 'cannabis';
    if (/(synergi|antagon|addyc|interakc)/.test(t)) return 'interaction';
    if (/(evidence|in vitro|in vivo|klin|trial|random|dowod|proof|hypothesis)/.test(t)) return 'evidence';
    if (concept.category === 'foundations') return 'foundation';
    return concept.category;
  }

  function conceptIllustration(concept) {
    const type = conceptSceneType(concept);
    const accent = catAccent(concept.category);
    const title = String(concept.title).replace(/&/g,'&amp;').replace(/</g,'&lt;');
    const sub = String(concept.short || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').slice(0, 96);
    const tag = String(catTitle(concept.category)).toUpperCase().replace(/&/g,'&amp;').replace(/</g,'&lt;');
    const abb = String(abbrev(concept.title) || 'ID').replace(/&/g,'&amp;').replace(/</g,'&lt;');
    const scenes = {
      enzyme: `<g transform="translate(100,136)"><path d="M180 88 H456" stroke="rgba(255,255,255,.14)" stroke-width="32" stroke-linecap="round"/><path d="M180 88 H456" stroke="${accent}" stroke-width="10" stroke-linecap="round" opacity=".8"/><circle cx="210" cy="88" r="18" fill="#d4ff6f"/><circle cx="280" cy="88" r="18" fill="#d4ff6f"/><circle cx="350" cy="88" r="18" fill="#d4ff6f"/><path d="M492 42 L544 94" stroke="#89f7ad" stroke-width="20" stroke-linecap="round"/><path d="M544 42 L492 94" stroke="#89f7ad" stroke-width="20" stroke-linecap="round"/><rect x="602" y="28" width="170" height="120" rx="18" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.14)"/><path d="M642 88 H730" stroke="#9580ff" stroke-width="16" stroke-linecap="round"/><circle cx="620" cy="88" r="18" fill="#9580ff"/><text x="686" y="198" fill="#e9f6ed" font-size="24" font-weight="800" font-family="Inter,Arial">rozkład / hamowanie</text></g>`,
      receptor: `<g transform="translate(120,144)"><rect x="124" y="84" width="224" height="224" rx="34" fill="rgba(255,255,255,.04)" stroke="${accent}" stroke-width="8"/><circle cx="236" cy="196" r="66" fill="none" stroke="#9580ff" stroke-width="12"/><circle cx="236" cy="196" r="18" fill="#9580ff"/><path d="M0 194 H124" stroke="#d4ff6f" stroke-width="16" stroke-linecap="round"/><polygon points="96,162 154,194 96,226" fill="#d4ff6f"/><path d="M350 194 H474" stroke="#89f7ad" stroke-width="16" stroke-linecap="round"/><polygon points="474,194 420,160 420,228" fill="#89f7ad"/><text x="0" y="246" fill="#d4ff6f" font-size="24" font-weight="800" font-family="Inter,Arial">ligand</text><text x="382" y="246" fill="#89f7ad" font-size="24" font-weight="800" font-family="Inter,Arial">sygnał</text></g>`,
      transporter: `<g transform="translate(120,136)"><rect x="86" y="104" width="280" height="132" rx="28" fill="rgba(255,255,255,.04)" stroke="${accent}" stroke-width="8"/><rect x="460" y="104" width="104" height="132" rx="24" fill="rgba(149,128,255,.15)" stroke="#9580ff" stroke-width="8"/><path d="M0 170 H86" stroke="#d4ff6f" stroke-width="16" stroke-linecap="round"/><polygon points="86,170 42,138 42,202" fill="#d4ff6f"/><path d="M366 170 H460" stroke="#89f7ad" stroke-width="16" stroke-linecap="round"/><polygon points="460,170 416,138 416,202" fill="#89f7ad"/><circle cx="606" cy="170" r="28" fill="#9580ff"/><path d="M650 170 H760" stroke="#9580ff" stroke-width="14" stroke-linecap="round"/><text x="0" y="286" fill="#e9f6ed" font-size="24" font-weight="800" font-family="Inter,Arial">wychwyt zwrotny / przenoszenie</text></g>`,
      synapse: `<g transform="translate(94,130)"><path d="M86 132 C176 34, 278 34, 358 132" fill="none" stroke="${accent}" stroke-width="14" stroke-linecap="round"/><path d="M436 132 C526 230, 628 230, 708 132" fill="none" stroke="#9580ff" stroke-width="14" stroke-linecap="round"/><circle cx="248" cy="182" r="14" fill="#d4ff6f"/><circle cx="292" cy="168" r="12" fill="#d4ff6f"/><circle cx="336" cy="190" r="14" fill="#d4ff6f"/><circle cx="408" cy="182" r="14" fill="#89f7ad"/><circle cx="452" cy="168" r="12" fill="#89f7ad"/><circle cx="496" cy="190" r="14" fill="#89f7ad"/><path d="M354 182 H394" stroke="#ffffff" stroke-width="8" stroke-linecap="round" opacity=".55"/><text x="236" y="284" fill="#e9f6ed" font-size="24" font-weight="800" font-family="Inter,Arial">synapsa</text></g>`,
      cannabis: `<g transform="translate(124,100)"><g transform="translate(18,0) scale(.72)"><path d="${leafPath()}" fill="none" stroke="${accent}" stroke-width="18"/><path d="M300 96 V344" stroke="${accent}" stroke-width="14"/></g><rect x="434" y="140" width="160" height="160" rx="26" fill="rgba(149,128,255,.15)" stroke="#9580ff" stroke-width="8"/><circle cx="514" cy="220" r="46" fill="none" stroke="#d4ff6f" stroke-width="12"/><circle cx="514" cy="220" r="14" fill="#d4ff6f"/><path d="M356 220 H434" stroke="#89f7ad" stroke-width="14" stroke-linecap="round"/><polygon points="434,220 392,190 392,250" fill="#89f7ad"/><text x="130" y="366" fill="#e9f6ed" font-size="24" font-weight="800" font-family="Inter,Arial">kannabinoid → receptor</text></g>`,
      terpene: `<g transform="translate(120,132)"><path d="M122 58 C164 146, 164 146, 122 232 C80 146, 80 146, 122 58 Z" fill="#d4ff6f" opacity=".9"/><path d="M268 98 C314 196, 314 196, 268 298 C222 196, 222 196, 268 98 Z" fill="#89f7ad" opacity=".9"/><path d="M424 46 C468 144, 468 144, 424 246 C380 144, 380 144, 424 46 Z" fill="#9580ff" opacity=".9"/><path d="M530 114 C580 76, 648 76, 698 114" fill="none" stroke="rgba(255,255,255,.34)" stroke-width="10" stroke-linecap="round"/><path d="M530 176 C580 138, 648 138, 698 176" fill="none" stroke="rgba(255,255,255,.34)" stroke-width="10" stroke-linecap="round"/><path d="M530 238 C580 200, 648 200, 698 238" fill="none" stroke="rgba(255,255,255,.34)" stroke-width="10" stroke-linecap="round"/><text x="120" y="344" fill="#e9f6ed" font-size="24" font-weight="800" font-family="Inter,Arial">aromat / profil</text></g>`,
      interaction: `<g transform="translate(144,132)"><circle cx="208" cy="180" r="92" fill="#89f7ad" opacity=".74"/><circle cx="340" cy="180" r="92" fill="#9580ff" opacity=".62"/><circle cx="274" cy="180" r="42" fill="#d4ff6f" opacity=".95"/><path d="M492 180 H648" stroke="#e8f6ec" stroke-width="16" stroke-linecap="round" opacity=".75"/><polygon points="648,180 590,146 590,214" fill="#e8f6ec" opacity=".75"/><rect x="698" y="126" width="190" height="108" rx="20" fill="rgba(255,255,255,.05)" stroke="${accent}" stroke-width="8"/><text x="732" y="192" fill="#e9f6ed" font-size="34" font-weight="800" font-family="Inter,Arial">1 + 1 ?</text><text x="160" y="336" fill="#e9f6ed" font-size="24" font-weight="800" font-family="Inter,Arial">synergia / antagonizm / suma</text></g>`,
      evidence: `<g transform="translate(126,118)"><rect x="0" y="0" width="240" height="250" rx="28" fill="rgba(255,255,255,.04)" stroke="${accent}" stroke-width="8"/><rect x="36" y="46" width="170" height="22" rx="11" fill="#89f7ad"/><rect x="36" y="96" width="132" height="22" rx="11" fill="#9580ff"/><rect x="36" y="146" width="192" height="22" rx="11" fill="#d4ff6f"/><rect x="36" y="196" width="108" height="22" rx="11" fill="#ffd977"/><circle cx="498" cy="180" r="88" fill="none" stroke="#9580ff" stroke-width="14"/><line x1="560" y1="242" x2="640" y2="320" stroke="#9580ff" stroke-width="18" stroke-linecap="round"/><text x="0" y="420" fill="#e9f6ed" font-size="24" font-weight="800" font-family="Inter,Arial">badanie / jakość dowodu</text></g>`,
      foundation: `<g transform="translate(124,140)"><rect x="58" y="72" width="168" height="168" rx="28" fill="rgba(255,255,255,.05)" stroke="${accent}" stroke-width="8"/><path d="M310 144 h120 a40 40 0 0 1 0 80 h-120 a40 40 0 0 1 0 -80 z" fill="rgba(149,128,255,.18)" stroke="#9580ff" stroke-width="8"/><path d="M230 156 h70" stroke="#e9f6ed" stroke-width="12" stroke-linecap="round"/><circle cx="458" cy="184" r="24" fill="#d4ff6f"/><text x="52" y="324" fill="#e9f6ed" font-size="24" font-weight="800" font-family="Inter,Arial">podstawa pojęcia</text></g>`
    };
    let scene = scenes[type];
    if (!scene) {
      if (concept.category === 'endocannabinoid') scene = scenes.cannabis;
      else if (concept.category === 'terpenes') scene = scenes.terpene;
      else if (concept.category === 'enzymes') scene = scenes.enzyme;
      else if (concept.category === 'receptors') scene = scenes.receptor;
      else if (concept.category === 'transporters') scene = scenes.transporter;
      else if (concept.category === 'interactions') scene = scenes.interaction;
      else if (concept.category === 'neurotransmission') scene = scenes.synapse;
      else if (concept.category === 'evidence') scene = scenes.evidence;
      else scene = scenes.foundation;
    }
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#09110d"/><stop offset="55%" stop-color="#0d1713"/><stop offset="100%" stop-color="#121522"/></linearGradient><filter id="blur"><feGaussianBlur stdDeviation="28"/></filter></defs><rect width="1200" height="800" fill="url(#bg)"/><circle cx="146" cy="124" r="116" fill="${accent}" opacity=".16" filter="url(#blur)"/><circle cx="1036" cy="132" r="138" fill="#9580ff" opacity=".15" filter="url(#blur)"/><circle cx="960" cy="650" r="170" fill="#d4ff6f" opacity=".09" filter="url(#blur)"/><g fill="none" stroke="rgba(255,255,255,.07)"><path d="M0 132 H1200"/><path d="M0 270 H1200"/><path d="M0 408 H1200"/><path d="M0 546 H1200"/><path d="M0 684 H1200"/><path d="M160 0 V800"/><path d="M360 0 V800"/><path d="M560 0 V800"/><path d="M760 0 V800"/><path d="M960 0 V800"/></g><path d="M0 166 L298 0 H546 L264 228 H0Z" fill="rgba(255,255,255,.04)"/><path d="M1200 0 V160 L968 322 H756 L1038 0Z" fill="rgba(255,255,255,.035)"/>${scene}<g transform="translate(70,66)"><rect x="0" y="0" width="222" height="40" rx="20" fill="rgba(6,11,9,.56)" stroke="rgba(255,255,255,.10)"/><text x="18" y="25" fill="#e7f9ec" font-size="15" font-family="Inter,Arial" font-weight="800" letter-spacing="1.5">${tag}</text></g><g transform="translate(744,552)"><rect x="0" y="0" width="374" height="158" rx="18" fill="rgba(7,12,10,.64)" stroke="rgba(255,255,255,.11)"/><text x="24" y="42" fill="#ffffff" font-size="38" font-family="Inter,Arial" font-weight="800">${title}</text><text x="24" y="78" fill="#c1d1c8" font-size="20" font-family="Inter,Arial">${sub}</text><rect x="24" y="98" width="110" height="36" rx="18" fill="${accent}" opacity=".18" stroke="${accent}"/><text x="44" y="121" fill="#eaf6ee" font-size="18" font-family="Inter,Arial" font-weight="800">${abb}</text></g></svg>`;
    return svgUri(svg);
  }

  function mapVisual(concept) {
    const deps = concept.dependencies.slice(0,3).map(id => conceptById.get(id)?.title || id);
    const rels = concept.related.slice(0,3).map(r => conceptById.get(r.id)?.title || r.id);
    const nodes = [concept.title, ...deps, ...rels].filter(Boolean).slice(0,7);
    const pos = [[400,180,58], [180,110,34], [620,110,34], [130,310,34], [670,310,34], [250,430,34], [560,430,34]];
    const lines = nodes.slice(1).map((n,i)=>`<line x1="400" y1="180" x2="${pos[i+1][0]}" y2="${pos[i+1][1]}" stroke="rgba(255,255,255,.20)" stroke-width="2" />`).join('');
    const labels = nodes.map((n,i)=>{ const [x,y,r]=pos[i]; const fill = i===0 ? catAccent(concept.category) : (i<1+deps.length ? '#d4ff6f' : '#9580ff'); const title = String(n).replace(/&/g,'&amp;').replace(/</g,'&lt;').slice(0,18); return `<g><circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" opacity="${i===0?'.95':'.85'}" /><text x="${x}" y="${y+4}" text-anchor="middle" fill="#06110b" font-family="Inter,Arial" font-weight="800" font-size="11">${title}</text></g>`; }).join('');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520" width="800" height="520"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1410"/><stop offset="100%" stop-color="#111520"/></linearGradient><filter id="b"><feGaussianBlur stdDeviation="24"/></filter></defs><rect width="800" height="520" fill="url(#bg)"/><circle cx="90" cy="90" r="90" fill="${catAccent(concept.category)}" opacity=".12" filter="url(#b)"/><circle cx="690" cy="420" r="110" fill="#9580ff" opacity=".12" filter="url(#b)"/><path d="M0 110 H800 M0 250 H800 M0 390 H800 M120 0 V520 M300 0 V520 M500 0 V520 M680 0 V520" stroke="rgba(255,255,255,.06)"/>${lines}${labels}</svg>`;
    return svgUri(svg);
  }

  function abbrev(title) {
    const words = String(title).replace(/—/g,' ').split(/\s+/).filter(Boolean);
    return words.slice(0,2).map(w => w.replace(/[^A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż0-9]/g,'').slice(0,4)).join(' ');
  }

  function heroVisualForConcept(c) { return conceptIllustration(c); }
  function heroVisualForPath(path) { return visual('path:'+path.id, '#9580ff', 'KURS'); }
  function heroVisualForCategory(cat) { return visual('cat:'+cat.id, catAccent(cat.id), 'KATEGORIA'); }


  function semanticGlyph(concept) {
    const t = normalize(`${concept.id} ${concept.title}`);
    const rules = [
      [/(ache|esteraz)/, '✂'],
      [/(enzyme|enzym|mao|comt|faah|magl|cyp|bche)/, '⚙'],
      [/(partial.*agon|częściowy)/, '◐'],
      [/(inverse|odwrotny)/, '↓'],
      [/(antagon)/, '⊘'],
      [/(agon)/, '●'],
      [/(pam|positive allosteric)/, '＋'],
      [/(nam|negative allosteric)/, '−'],
      [/(alloster)/, '◇'],
      [/(receptor|cb1|cb2|gaba|nmda|ampa|trpv|nachr|machr)/, '◎'],
      [/(synaps)/, '⇄'],
      [/(dopamin)/, '★'],
      [/(seroton)/, '☺'],
      [/(norepine|noradren)/, '⚡'],
      [/(acetylcholin|acetylocholin)/, 'ACh'],
      [/(transport|sert|dat|net|wychwyt|reuptake)/, '↺'],
      [/(terpen|limonen|linalol|pinen|mircen|myrcen|kariofil|ocimen|sabinen)/, '◒'],
      [/(thc)/, 'THC'],
      [/(cbd)/, 'CBD'],
      [/(anandamid)/, 'AEA'],
      [/(2-ag)/, '2AG'],
      [/(endokannabino|cannabis|kannabinoid)/, '✣'],
      [/(synergi)/, '1+1↑'],
      [/(antagonizm)/, '1+1↓'],
      [/(addyc)/, '1+1'],
      [/(interakc)/, '↔'],
      [/(in vitro)/, '◫'],
      [/(in vivo)/, '●'],
      [/(klin|trial)/, '✓'],
      [/(evidence|dowod)/, '⌕'],
      [/(affinity|powinowactw)/, '⌁'],
      [/(efficacy|skuteczno)/, '↗'],
      [/(potency|siła)/, '▲'],
      [/(dose|dawka)/, '▰'],
      [/(ligand)/, '◆'],
      [/(substrat)/, '■'],
      [/(active site|miejsce aktywne)/, '⌂'],
      [/(blood|brain|barrier|bbb)/, '║'],
      [/(metabol)/, '⟳'],
      [/(absorp|wchłan)/, '⇣'],
      [/(distrib|dystryb)/, '⇢'],
      [/(elimin|wydal)/, '⇡']
    ];
    for (const [re,g] of rules) if (re.test(t)) return g;
    return '•';
  }

  function simpleConceptThumb(concept) {
    const glyph = semanticGlyph(concept);
    const accent = catAccent(concept.category);
    const title = String(concept.title).replace(/&/g,'&amp;').replace(/</g,'&lt;').slice(0,28);
    const tag = String(catTitle(concept.category)).replace(/&/g,'&amp;').replace(/</g,'&lt;').slice(0,20);
    const isWord = glyph.length > 2;
    const glyphSize = isWord ? 86 : 138;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#09120f"/><stop offset="100%" stop-color="#121522"/></linearGradient></defs><rect width="640" height="360" fill="url(#bg)"/><circle cx="320" cy="150" r="112" fill="${accent}" opacity=".10"/><text x="320" y="188" text-anchor="middle" fill="${accent}" font-family="Inter,Arial" font-size="${glyphSize}" font-weight="900">${glyph}</text><rect x="26" y="22" width="190" height="30" rx="15" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.08)"/><text x="42" y="42" fill="#e9f6ed" font-size="14" font-family="Inter,Arial" font-weight="800">${tag}</text><text x="320" y="314" text-anchor="middle" fill="#ffffff" font-size="26" font-family="Inter,Arial" font-weight="800">${title}</text></svg>`;
    return svgUri(svg);
  }

  function courseCover(path) {
    const title = String(path.title).replace(/&/g,'&amp;').replace(/</g,'&lt;');
    const desc = String(path.description || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').slice(0,86);
    let svg = '';

    if (path.id === 'path.zero_to_pharmacology') {
      svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 680"><rect width="1200" height="680" fill="#0a120f"/><path d="M0 540 L300 540 L300 410 L500 410 L500 280 L700 280 L700 150 L980 150" fill="none" stroke="#89f7ad" stroke-width="42"/><circle cx="300" cy="410" r="34" fill="#d4ff6f"/><circle cx="500" cy="280" r="34" fill="#9580ff"/><circle cx="700" cy="150" r="34" fill="#86efff"/><text x="84" y="110" fill="#89f7ad" font-size="26" font-family="Inter,Arial" font-weight="900">KURS 01 • FUNDAMENTY</text><text x="84" y="596" fill="#fff" font-size="48" font-family="Inter,Arial" font-weight="900">${title}</text><text x="84" y="636" fill="#bfd0c6" font-size="22" font-family="Inter,Arial">${desc}</text></svg>`;
    } else if (path.id === 'path.ache') {
      svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 680"><rect width="1200" height="680" fill="#0d1411"/><path d="M112 282 H650" stroke="#77efab" stroke-width="34" stroke-linecap="round"/><circle cx="170" cy="282" r="22" fill="#d4ff6f"/><circle cx="260" cy="282" r="22" fill="#d4ff6f"/><circle cx="350" cy="282" r="22" fill="#d4ff6f"/><circle cx="440" cy="282" r="22" fill="#d4ff6f"/><path d="M664 180 L790 306" stroke="#89f7ad" stroke-width="46" stroke-linecap="round"/><path d="M790 180 L664 306" stroke="#89f7ad" stroke-width="46" stroke-linecap="round"/><text x="842" y="294" fill="#9580ff" font-size="126" font-family="Inter,Arial" font-weight="900">AChE</text><text x="84" y="104" fill="#77efab" font-size="26" font-family="Inter,Arial" font-weight="900">KURS 02 • ENZYM + HAMOWANIE</text><text x="84" y="574" fill="#fff" font-size="50" font-family="Inter,Arial" font-weight="900">${title}</text><text x="84" y="620" fill="#bfd0c6" font-size="22" font-family="Inter,Arial">${desc}</text></svg>`;
    } else if (path.id === 'path.monoamines') {
      svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 680"><rect width="1200" height="680" fill="#11120d"/><circle cx="270" cy="280" r="126" fill="#89f7ad"/><circle cx="600" cy="280" r="126" fill="#9580ff"/><circle cx="930" cy="280" r="126" fill="#ffd977"/><text x="270" y="310" text-anchor="middle" fill="#07100b" font-size="74" font-family="Inter,Arial" font-weight="900">DA</text><text x="600" y="310" text-anchor="middle" fill="#07100b" font-size="64" font-family="Inter,Arial" font-weight="900">5-HT</text><text x="930" y="310" text-anchor="middle" fill="#07100b" font-size="74" font-family="Inter,Arial" font-weight="900">NA</text><text x="84" y="104" fill="#ffd977" font-size="26" font-family="Inter,Arial" font-weight="900">KURS 03 • MONOAMINY</text><text x="84" y="574" fill="#fff" font-size="46" font-family="Inter,Arial" font-weight="900">${title}</text><text x="84" y="620" fill="#bfd0c6" font-size="22" font-family="Inter,Arial">${desc}</text></svg>`;
    } else if (path.id === 'path.brain_signaling') {
      svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 680"><rect width="1200" height="680" fill="#0a1115"/><path d="M178 338 L366 120 L510 338 L694 126 L928 338" fill="none" stroke="#86efff" stroke-width="30" stroke-linejoin="round"/><circle cx="342" cy="338" r="76" fill="#0e1720" stroke="#9580ff" stroke-width="16"/><text x="342" y="365" text-anchor="middle" fill="#9580ff" font-size="92" font-family="Inter,Arial" font-weight="900">−</text><circle cx="800" cy="338" r="76" fill="#0e1720" stroke="#d4ff6f" stroke-width="16"/><text x="800" y="365" text-anchor="middle" fill="#d4ff6f" font-size="92" font-family="Inter,Arial" font-weight="900">+</text><text x="84" y="104" fill="#86efff" font-size="26" font-family="Inter,Arial" font-weight="900">KURS 04 • SYGNAŁ W MÓZGU</text><text x="84" y="574" fill="#fff" font-size="46" font-family="Inter,Arial" font-weight="900">${title}</text><text x="84" y="620" fill="#bfd0c6" font-size="22" font-family="Inter,Arial">${desc}</text></svg>`;
    } else if (path.id === 'path.pk') {
      svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 680"><rect width="1200" height="680" fill="#15100d"/><circle cx="150" cy="290" r="58" fill="#ff9e72"/><text x="150" y="309" text-anchor="middle" fill="#10100d" font-size="54" font-family="Inter,Arial" font-weight="900">💊</text><path d="M220 290 H360" stroke="#fff" stroke-width="18" stroke-linecap="round"/><circle cx="420" cy="290" r="64" fill="none" stroke="#ffd977" stroke-width="16"/><text x="420" y="310" text-anchor="middle" fill="#ffd977" font-size="38" font-family="Inter,Arial" font-weight="900">krew</text><path d="M492 290 H632" stroke="#fff" stroke-width="18" stroke-linecap="round"/><path d="M710 218 c70 0 108 66 108 122 s-38 122-108 122 s-108-66-108-122 s38-122 108-122z" fill="none" stroke="#89f7ad" stroke-width="16"/><text x="710" y="354" text-anchor="middle" fill="#89f7ad" font-size="32" font-family="Inter,Arial" font-weight="900">wątroba</text><path d="M826 290 H966" stroke="#fff" stroke-width="18" stroke-linecap="round"/><circle cx="1030" cy="290" r="64" fill="none" stroke="#9580ff" stroke-width="16"/><text x="1030" y="304" text-anchor="middle" fill="#9580ff" font-size="30" font-family="Inter,Arial" font-weight="900">mózg</text><text x="84" y="104" fill="#ff9e72" font-size="26" font-family="Inter,Arial" font-weight="900">KURS 05 • ADME / FARMAKOKINETYKA</text><text x="84" y="574" fill="#fff" font-size="42" font-family="Inter,Arial" font-weight="900">${title}</text><text x="84" y="620" fill="#bfd0c6" font-size="22" font-family="Inter,Arial">${desc}</text></svg>`;
    } else {
      svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 680"><rect width="1200" height="680" fill="#0b120e"/><g transform="translate(84,92) scale(.55)"><path d="${leafPath()}" fill="none" stroke="#89f7ad" stroke-width="22"/><path d="M300 96 V344" stroke="#89f7ad" stroke-width="16"/></g><circle cx="510" cy="268" r="74" fill="none" stroke="#9580ff" stroke-width="14"/><text x="510" y="282" text-anchor="middle" fill="#9580ff" font-size="36" font-family="Inter,Arial" font-weight="900">CB1</text><path d="M666 182 C710 268,710 268,666 354 C622 268,622 268,666 182 Z" fill="#d4ff6f"/><path d="M784 182 C828 268,828 268,784 354 C740 268,740 268,784 182 Z" fill="#89f7ad"/><rect x="900" y="174" width="170" height="190" rx="24" fill="rgba(255,255,255,.04)" stroke="#ffd977" stroke-width="10"/><rect x="936" y="220" width="96" height="16" rx="8" fill="#ffd977"/><rect x="936" y="260" width="68" height="16" rx="8" fill="#ffd977"/><rect x="936" y="300" width="112" height="16" rx="8" fill="#ffd977"/><text x="84" y="104" fill="#b8ff91" font-size="26" font-family="Inter,Arial" font-weight="900">KURS 06 • CANNABIS MODEL</text><text x="84" y="574" fill="#fff" font-size="44" font-family="Inter,Arial" font-weight="900">${title}</text><text x="84" y="620" fill="#bfd0c6" font-size="22" font-family="Inter,Arial">${desc}</text></svg>`;
    }
    return svgUri(svg);
  }



  function categoryIllustration(cat) {
    const accent = catAccent(cat.id);
    const title = String(cat.title).replace(/&/g,'&amp;').replace(/</g,'&lt;');
    const count = visibleConcepts().filter(c => c.category === cat.id).length;
    const scenes = {
      foundations: `<g transform="translate(84,86)"><rect x="0" y="154" width="150" height="120" rx="28" fill="rgba(255,255,255,.03)" stroke="${accent}" stroke-width="10"/><rect x="184" y="104" width="150" height="170" rx="28" fill="rgba(255,255,255,.03)" stroke="#d4ff6f" stroke-width="10"/><rect x="368" y="54" width="150" height="220" rx="28" fill="rgba(255,255,255,.03)" stroke="#9580ff" stroke-width="10"/><text x="0" y="330" fill="#fff" font-size="34" font-family="Inter,Arial" font-weight="900">język podstawowy</text></g>`,
      receptors: `<g transform="translate(88,96)"><rect x="146" y="50" width="208" height="168" rx="38" fill="rgba(255,255,255,.03)" stroke="${accent}" stroke-width="10"/><circle cx="250" cy="134" r="46" fill="none" stroke="#9580ff" stroke-width="12"/><path d="M0 134 H132" stroke="#d4ff6f" stroke-width="18" stroke-linecap="round"/><polygon points="132,134 86,100 86,168" fill="#d4ff6f"/><path d="M368 134 H504" stroke="#89f7ad" stroke-width="18" stroke-linecap="round"/><polygon points="504,134 458,100 458,168" fill="#89f7ad"/><text x="0" y="308" fill="#fff" font-size="34" font-family="Inter,Arial" font-weight="900">wiązanie i sygnał</text></g>`,
      enzymes: `<g transform="translate(92,98)"><path d="M60 116 H346" stroke="${accent}" stroke-width="34" stroke-linecap="round"/><circle cx="104" cy="116" r="16" fill="#d4ff6f"/><circle cx="172" cy="116" r="16" fill="#d4ff6f"/><circle cx="240" cy="116" r="16" fill="#d4ff6f"/><path d="M392 44 L486 138" stroke="#89f7ad" stroke-width="28" stroke-linecap="round"/><path d="M486 44 L392 138" stroke="#89f7ad" stroke-width="28" stroke-linecap="round"/><rect x="538" y="56" width="190" height="122" rx="24" fill="rgba(255,255,255,.03)" stroke="#9580ff" stroke-width="10"/><text x="580" y="132" fill="#9580ff" font-size="34" font-family="Inter,Arial" font-weight="900">off</text><text x="0" y="306" fill="#fff" font-size="34" font-family="Inter,Arial" font-weight="900">synteza, rozkład, inhibicja</text></g>`,
      transporters: `<g transform="translate(92,96)"><rect x="92" y="62" width="190" height="146" rx="30" fill="rgba(255,255,255,.03)" stroke="${accent}" stroke-width="10"/><rect x="350" y="62" width="86" height="146" rx="26" fill="rgba(149,128,255,.14)" stroke="#9580ff" stroke-width="10"/><path d="M0 134 H82" stroke="#d4ff6f" stroke-width="18" stroke-linecap="round"/><polygon points="82,134 36,100 36,168" fill="#d4ff6f"/><path d="M282 134 H350" stroke="#89f7ad" stroke-width="18" stroke-linecap="round"/><polygon points="350,134 304,100 304,168" fill="#89f7ad"/><path d="M438 134 H576" stroke="#9580ff" stroke-width="18" stroke-linecap="round"/><text x="0" y="306" fill="#fff" font-size="34" font-family="Inter,Arial" font-weight="900">przenoszenie i wychwyt</text></g>`,
      neurotransmission: `<g transform="translate(74,88)"><path d="M42 136 C138 34, 242 34, 326 136" fill="none" stroke="${accent}" stroke-width="16" stroke-linecap="round"/><path d="M422 136 C516 238, 620 238, 704 136" fill="none" stroke="#9580ff" stroke-width="16" stroke-linecap="round"/><circle cx="232" cy="184" r="14" fill="#d4ff6f"/><circle cx="270" cy="166" r="14" fill="#d4ff6f"/><circle cx="308" cy="188" r="14" fill="#d4ff6f"/><circle cx="424" cy="184" r="14" fill="#89f7ad"/><circle cx="462" cy="166" r="14" fill="#89f7ad"/><circle cx="500" cy="188" r="14" fill="#89f7ad"/><text x="0" y="318" fill="#fff" font-size="34" font-family="Inter,Arial" font-weight="900">przekaźnictwo w synapsie</text></g>`,
      pharmacokinetics: `<g transform="translate(74,94)"><circle cx="82" cy="136" r="48" fill="#ff9e72"/><text x="82" y="152" text-anchor="middle" fill="#10100d" font-size="42" font-family="Inter,Arial" font-weight="900">💊</text><path d="M142 136 H264" stroke="#fff" stroke-width="16" stroke-linecap="round" opacity=".75"/><circle cx="326" cy="136" r="48" fill="none" stroke="#ffd977" stroke-width="12"/><text x="326" y="146" text-anchor="middle" fill="#ffd977" font-size="22" font-family="Inter,Arial" font-weight="900">krew</text><path d="M384 136 H506" stroke="#fff" stroke-width="16" stroke-linecap="round" opacity=".75"/><path d="M570 86 c46 0 70 42 70 80 s-24 80 -70 80 s-70 -42 -70 -80 s24 -80 70 -80z" fill="none" stroke="#89f7ad" stroke-width="12"/><text x="570" y="150" text-anchor="middle" fill="#89f7ad" font-size="22" font-family="Inter,Arial" font-weight="900">wątroba</text><text x="0" y="316" fill="#fff" font-size="34" font-family="Inter,Arial" font-weight="900">co organizm robi z lekiem</text></g>`,
      interactions: `<g transform="translate(102,100)"><circle cx="158" cy="130" r="98" fill="#89f7ad" opacity=".72"/><circle cx="286" cy="130" r="98" fill="#9580ff" opacity=".66"/><circle cx="222" cy="130" r="38" fill="#d4ff6f" opacity=".96"/><rect x="438" y="68" width="230" height="124" rx="26" fill="rgba(255,255,255,.03)" stroke="${accent}" stroke-width="10"/><text x="484" y="146" fill="#fff" font-size="52" font-family="Inter,Arial" font-weight="900">1 + 1 ?</text><text x="0" y="306" fill="#fff" font-size="34" font-family="Inter,Arial" font-weight="900">synergia, antagonizm, suma</text></g>`,
      endocannabinoid: `<g transform="translate(86,80)"><g transform="translate(0,0) scale(.44)"><path d="${leafPath()}" fill="none" stroke="${accent}" stroke-width="24"/><path d="M300 96 V344" stroke="${accent}" stroke-width="18"/></g><circle cx="320" cy="132" r="46" fill="none" stroke="#9580ff" stroke-width="12"/><text x="292" y="142" fill="#9580ff" font-size="26" font-family="Inter,Arial" font-weight="900">CB1</text><circle cx="438" cy="132" r="46" fill="none" stroke="#d4ff6f" stroke-width="12"/><text x="410" y="142" fill="#d4ff6f" font-size="26" font-family="Inter,Arial" font-weight="900">CB2</text><text x="0" y="316" fill="#fff" font-size="34" font-family="Inter,Arial" font-weight="900">układ endokannabinoidowy</text></g>`,
      terpenes: `<g transform="translate(92,90)"><path d="M88 44 C136 144,136 144,88 248 C40 144,40 144,88 44 Z" fill="#d4ff6f"/><path d="M244 82 C292 182,292 182,244 286 C196 182,196 182,244 82 Z" fill="#89f7ad"/><path d="M408 32 C456 132,456 132,408 236 C360 132,360 132,408 32 Z" fill="#9580ff"/><path d="M552 82 q42 -30 84 0 q42 30 84 0" fill="none" stroke="#fff" stroke-width="10" opacity=".5"/><path d="M552 128 q42 -30 84 0 q42 30 84 0" fill="none" stroke="#fff" stroke-width="10" opacity=".5"/><path d="M552 174 q42 -30 84 0 q42 30 84 0" fill="none" stroke="#fff" stroke-width="10" opacity=".5"/><text x="0" y="314" fill="#fff" font-size="34" font-family="Inter,Arial" font-weight="900">aromat, profil, zapach</text></g>`,
      evidence: `<g transform="translate(90,88)"><rect x="0" y="32" width="212" height="234" rx="26" fill="rgba(255,255,255,.03)" stroke="${accent}" stroke-width="10"/><rect x="34" y="76" width="142" height="18" rx="9" fill="#89f7ad"/><rect x="34" y="116" width="182" height="18" rx="9" fill="#9580ff"/><rect x="34" y="156" width="122" height="18" rx="9" fill="#d4ff6f"/><circle cx="462" cy="146" r="94" fill="none" stroke="#9580ff" stroke-width="14"/><line x1="528" y1="212" x2="620" y2="294" stroke="#9580ff" stroke-width="18" stroke-linecap="round"/><text x="0" y="314" fill="#fff" font-size="34" font-family="Inter,Arial" font-weight="900">jak oceniać jakość dowodu</text></g>`
    };
    const scene = scenes[cat.id] || scenes.foundations;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 680"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#08110d"/><stop offset="100%" stop-color="#121522"/></linearGradient></defs><rect width="1200" height="680" fill="url(#bg)"/><path d="M0 120 H1200 M0 240 H1200 M0 360 H1200 M0 480 H1200 M0 600 H1200 M160 0 V680 M360 0 V680 M560 0 V680 M760 0 V680 M960 0 V680" stroke="rgba(255,255,255,.05)"/>${scene}<g transform="translate(70,40)"><rect x="0" y="0" width="170" height="36" rx="18" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.08)"/><text x="18" y="24" fill="#eaf6ee" font-size="15" font-family="Inter,Arial" font-weight="800">KATEGORIA</text></g><g transform="translate(70,560)"><text x="0" y="0" fill="#fff" font-size="56" font-family="Inter,Arial" font-weight="900">${title}</text><text x="0" y="42" fill="#9cf7be" font-size="24" font-family="Inter,Arial" font-weight="800">${count} pojęć</text></g></svg>`;
    return svgUri(svg);
  }

  function conceptKeywordIcon(concept) {
    const t = normalize(concept.title + ' ' + concept.id);
    if (t.includes('ligand')) return { glyph:'→', accent:'#d4ff6f' };
    if (t.includes('receptor')) return { glyph:'◉', accent:'#9580ff' };
    if (t.includes('miejsce') || t.includes('wiązania') || t.includes('wiazania')) return { glyph:'⌂', accent:'#89f7ad' };
    if (t.includes('agonist')) return { glyph:'ON', accent:'#89f7ad' };
    if (t.includes('antagonist')) return { glyph:'OFF', accent:'#ff8da7' };
    if (t.includes('allostery')) return { glyph:'◎', accent:'#86efff' };
    if (t.includes('powinowactw')) return { glyph:'∞', accent:'#ffd977' };
    if (t.includes('skuteczno') || t.includes('efikac')) return { glyph:'↑', accent:'#89f7ad' };
    if (t.includes('moc') || t.includes('potenc')) return { glyph:'↗', accent:'#ffd977' };
    if (t.includes('dawka') || t.includes('dose')) return { glyph:'⚖', accent:'#ff9e72' };
    if (t.includes('ache')) return { glyph:'✂', accent:'#77efab' };
    if (t.includes('faah') || t.includes('magl') || t.includes('mao') || t.includes('comt')) return { glyph:'✕', accent:'#77efab' };
    if (t.includes('cb1')) return { glyph:'CB1', accent:'#9580ff' };
    if (t.includes('cb2')) return { glyph:'CB2', accent:'#d4ff6f' };
    if (t.includes('thc')) return { glyph:'THC', accent:'#89f7ad' };
    if (t.includes('cbd')) return { glyph:'CBD', accent:'#86efff' };
    if (t.includes('anandamid') || t.includes('2-ag')) return { glyph:'ECS', accent:'#b8ff91' };
    if (t.includes('limonen')) return { glyph:'🍋', accent:'#ffd977' };
    if (t.includes('linalol')) return { glyph:'✿', accent:'#9580ff' };
    if (t.includes('pinen')) return { glyph:'🌲', accent:'#89f7ad' };
    if (t.includes('kariofil') || t.includes('caryophyll')) return { glyph:'◎', accent:'#ff9e72' };
    if (t.includes('myrcen') || t.includes('mircen')) return { glyph:'~', accent:'#89f7ad' };
    if (t.includes('sert') || t.includes('dat') || t.includes('net')) return { glyph:'⇄', accent:'#9580ff' };
    if (t.includes('seroton')) return { glyph:'5-HT', accent:'#9580ff' };
    if (t.includes('dopamin')) return { glyph:'DA', accent:'#89f7ad' };
    if (t.includes('noradren')) return { glyph:'NA', accent:'#ffd977' };
    if (t.includes('gaba')) return { glyph:'−', accent:'#86efff' };
    if (t.includes('glutamin') || t.includes('nmda') || t.includes('ampa')) return { glyph:'+', accent:'#ff9e72' };
    if (t.includes('synaps')) return { glyph:'⋯', accent:'#89f7ad' };
    if (t.includes('adme') || t.includes('farmakokin')) return { glyph:'ADME', accent:'#ff9e72' };
    if (t.includes('interakc') || t.includes('synergi')) return { glyph:'1+1', accent:'#d4ff6f' };
    if (t.includes('evidence') || t.includes('dowod')) return { glyph:'✓', accent:'#86efff' };
    const type = simpleType(conceptSceneType(concept));
    const map = {
      foundation:{glyph:'□', accent:catAccent(concept.category)},
      receptor:{glyph:'◉', accent:'#9580ff'},
      enzyme:{glyph:'✂', accent:'#77efab'},
      transporter:{glyph:'⇄', accent:'#86efff'},
      synapse:{glyph:'⋯', accent:'#89f7ad'},
      terpene:{glyph:'✦', accent:'#d4ff6f'},
      cannabis:{glyph:'✤', accent:'#89f7ad'},
      interaction:{glyph:'1+1', accent:'#ffd977'},
      evidence:{glyph:'✓', accent:'#86efff'}
    };
    return map[type] || map.foundation;
  }


  function simpleType(type) {
    if (type === 'endocannabinoid') return 'cannabis';
    if (type === 'terpenes') return 'terpene';
    if (type === 'enzymes') return 'enzyme';
    if (type === 'receptors') return 'receptor';
    if (type === 'transporters') return 'transporter';
    if (type === 'interactions') return 'interaction';
    if (type === 'neurotransmission') return 'synapse';
    if (type === 'evidence') return 'evidence';
    return type;
  }

  function conceptThumbnail(concept) {
    const { glyph, accent } = conceptKeywordIcon(concept);
    const title = String(concept.title).replace(/&/g,'&amp;').replace(/</g,'&lt;').slice(0, 30);
    const tag = String(catTitle(concept.category)).replace(/&/g,'&amp;').replace(/</g,'&lt;').slice(0, 18);
    const short = String(concept.short || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').slice(0, 52);
    const h = hashCode(concept.id);
    const template = h % 4;
    const glyphSize = glyph.length > 3 ? 72 : glyph.length > 2 ? 84 : 112;
    const blocks = [
      `<rect x="56" y="76" width="528" height="164" rx="28" fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.08)"/><circle cx="170" cy="158" r="78" fill="rgba(255,255,255,.03)" stroke="${accent}" stroke-width="10"/><text x="170" y="188" text-anchor="middle" fill="${accent}" font-size="${glyphSize}" font-family="Inter,Arial" font-weight="900">${glyph}</text><text x="290" y="150" fill="#fff" font-size="38" font-family="Inter,Arial" font-weight="900">${title}</text><text x="290" y="192" fill="#bfd0c6" font-size="20" font-family="Inter,Arial">${short}</text>`,
      `<rect x="72" y="64" width="200" height="196" rx="32" fill="rgba(255,255,255,.03)" stroke="${accent}" stroke-width="10"/><text x="172" y="184" text-anchor="middle" fill="${accent}" font-size="${glyphSize}" font-family="Inter,Arial" font-weight="900">${glyph}</text><rect x="314" y="82" width="242" height="40" rx="20" fill="rgba(255,255,255,.05)"/><text x="338" y="109" fill="#9cf7be" font-size="16" font-family="Inter,Arial" font-weight="800">${tag}</text><text x="314" y="172" fill="#fff" font-size="42" font-family="Inter,Arial" font-weight="900">${title}</text><text x="314" y="214" fill="#bfd0c6" font-size="20" font-family="Inter,Arial">${short}</text>`,
      `<path d="M64 242 L248 78 H578 V242 Z" fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.08)"/><text x="124" y="188" fill="${accent}" font-size="${glyphSize}" font-family="Inter,Arial" font-weight="900">${glyph}</text><text x="286" y="142" fill="#9cf7be" font-size="16" font-family="Inter,Arial" font-weight="800">${tag}</text><text x="286" y="184" fill="#fff" font-size="42" font-family="Inter,Arial" font-weight="900">${title}</text><text x="286" y="224" fill="#bfd0c6" font-size="20" font-family="Inter,Arial">${short}</text>`,
      `<rect x="58" y="76" width="524" height="164" rx="28" fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.08)"/><rect x="84" y="104" width="170" height="108" rx="26" fill="rgba(255,255,255,.02)" stroke="${accent}" stroke-width="10"/><text x="170" y="178" text-anchor="middle" fill="${accent}" font-size="${glyphSize}" font-family="Inter,Arial" font-weight="900">${glyph}</text><path d="M290 120 H544" stroke="rgba(255,255,255,.10)" stroke-width="8" stroke-linecap="round"/><path d="M290 154 H498" stroke="rgba(255,255,255,.08)" stroke-width="8" stroke-linecap="round"/><text x="290" y="206" fill="#fff" font-size="40" font-family="Inter,Arial" font-weight="900">${title}</text>`
    ];
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" width="640" height="360"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0a120f"/><stop offset="100%" stop-color="#121522"/></linearGradient></defs><rect width="640" height="360" fill="url(#bg)"/><path d="M0 72 H640 M0 144 H640 M0 216 H640 M0 288 H640 M128 0 V360 M256 0 V360 M384 0 V360 M512 0 V360" stroke="rgba(255,255,255,.05)"/><rect x="26" y="22" width="190" height="30" rx="15" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.08)"/><text x="42" y="42" fill="#e9f6ed" font-size="14" font-family="Inter,Arial" font-weight="800">${tag}</text>${blocks[template]}</svg>`;
    return svgUri(svg);
  }

  function pathProgress(path) {
    const done = new Set(JSON.parse(safeStorage.get('neuroatlas-progress:'+path.id, '[]') || '[]'));
    return { done, count: done.size, pct: Math.round((done.size / path.steps.length) * 100) || 0 };
  }

  function setStepDone(pathId, stepId, done) {
    const key = 'neuroatlas-progress:'+pathId;
    const set = new Set(JSON.parse(safeStorage.get(key, '[]') || '[]'));
    if (done) set.add(stepId); else set.delete(stepId);
    safeStorage.set(key, JSON.stringify([...set]));
  }

  function markActiveNav() {
    const first = routeParts()[0] || '';
    document.querySelectorAll('.main-nav a').forEach(a => a.classList.remove('active'));
    const match = [...document.querySelectorAll('.main-nav a')].find(a => (a.getAttribute('href') === '#/' && !first) || a.getAttribute('href') === '#/' + first);
    if (match) match.classList.add('active');
  }

  function stickyProgressHTML(path) {
    const prog = pathProgress(path);
    const nextId = path.steps.find(id => !prog.done.has(id)) || path.steps[path.steps.length - 1];
    const next = conceptById.get(nextId);
    return `<div class="sticky-progress-wrap"><div class="sticky-progress"><div><div class="kicker">Postęp kursu</div><div class="progress-title">${esc(path.title)}</div></div><div><div class="progress-track"><span style="width:${prog.pct}%"></span></div><div class="sticky-meta">${prog.count}/${path.steps.length} kroków • następny: ${esc(next?.title || '')}</div></div><div class="pill"><strong>${prog.pct}%</strong></div></div></div>`;
  }

  function textBlock(c) {
    const keyLine = c.key_points?.length ? `Najważniejsze rzeczy do zapamiętania to: ${c.key_points.join(', ')}.` : '';
    const evidence = c.evidence_status ? `Poziom dowodów dla tego wpisu najlepiej opisać jako: ${evidenceLabel(c.evidence_status)}.` : '';
    return `${c.short} ${c.explanation} ${keyLine} ${evidence}`.replace(/\s+/g,' ').trim();
  }

  function whyItMatters(c) {
    const dep = c.dependencies?.length ? `Najłatwiej rozumieć ten temat po poznaniu ${c.dependencies.slice(0,3).map(id=>conceptById.get(id)?.title || id).join(', ')}.` : 'Ten wpis nie wymaga wcześniejszych pojęć, więc nadaje się jako punkt wejścia.';
    const rel = c.related?.length ? `Potem naturalnie prowadzi do takich tematów jak ${c.related.slice(0,3).map(r => conceptById.get(r.id)?.title || r.id).join(', ')}.` : 'Ten temat jest dość samodzielny i nie wymaga wielu dodatkowych pojęć.';
    const can = c.cannabis_relevance !== 'none' ? 'W części cannabis pomaga odróżnić realny mechanizm od skrótów marketingowych i uproszczonych opisów działania.' : 'To pojęcie jest ogólne, ale daje język potrzebny do dalszych tematów.';
    return `${dep} ${can} ${rel}`;
  }

  function practicalUse(c) {
    const ex = c.examples?.length ? `Przykłady pomagające to zobaczyć: ${c.examples.join(', ')}.` : 'Dobrym sposobem nauki jest porównanie tego wpisu z sąsiednimi pojęciami i zobaczenie, co je odróżnia.';
    const ques = c.check_yourself?.length ? `Najlepsze pytanie kontrolne brzmi: ${c.check_yourself[0]}` : 'Po przeczytaniu spróbuj własnymi słowami odpowiedzieć, co ten mechanizm robi i czego nie robi.';
    return `${ex} ${ques}`;
  }

  function categoryCard(cat) {
    const count = visibleConcepts().filter(c => c.category === cat.id).length;
    return `<a class="cover-card" href="#/category/${encodeURIComponent(cat.id)}"><img class="cover-thumb" src="${categoryIllustration(cat)}" alt="Okładka kategorii ${esc(cat.title)}" /><div class="kicker">${count} pojęć</div><h3>${esc(cat.title)}</h3><p>${esc(cat.description)}</p></a>`;
  }

  function topicCard(c) {
    return `<a class="topic-card" href="#/concept/${encodeURIComponent(c.id)}"><img class="topic-thumb" src="${conceptThumbnail(c)}" alt="Miniatura pojęcia ${esc(c.title)}" /><div class="kicker">${esc(catTitle(c.category))}</div><h3>${esc(c.title)}</h3><p>${esc(textBlock(c))}</p><div class="meta-line"><span class="pill">Poziom <strong>${c.difficulty}</strong></span><span class="pill">Cannabis <strong>${esc(cannabisLabel(c.cannabis_relevance))}</strong></span></div></a>`;
  }

  function renderHome() {
    stickyMount.innerHTML = '';
    const sample = visibleConcepts().slice(0, 6);
    const pathCards = data.learning_paths.slice(0,4).map(p => {
      const prog = pathProgress(p);
      return `<a class="cover-card" href="#/path/${encodeURIComponent(p.id)}">
        <img class="course-cover-thumb" src="${courseCover(p)}" alt="Okładka kursu ${esc(p.title)}" />
        <div class="kicker">${prog.count}/${p.steps.length} kroków</div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.description)}</p>
        <div class="meta-line"><span class="pill"><strong>${prog.pct}%</strong> ukończone</span></div>
      </a>`;
    }).join('');
    app.innerHTML = `
      <div class="stack">
        <section class="hero">
          <div class="card-bg"><img class="card-bg" src="${homeCannabisVisual()}" alt="" /></div><div class="card-shade"></div>
          <div class="hero-content">
            <div class="kicker">Baza wiedzy • Profiler osobisty</div>
            <h1 class="section-title">Zrozum, co dzieje się od chemii do efektu.</h1>
            <p class="section-lead">Przeglądaj pojęcia neurofarmakologii, ucz się w uporządkowanych kursach, sprawdzaj zależności na mapie wiedzy i porównuj przewidywany profil działania cannabis z własnymi obserwacjami.</p>
            <div class="pills"><span class="pill">Pojęcia <strong>${data.concepts.length}</strong></span><span class="pill">Kategorie <strong>${data.categories.length}</strong></span><span class="pill">Kursy <strong>${data.learning_paths.length}</strong></span></div>
            <div class="cta-row"><a class="button" href="#/topics">Przeglądaj tematy</a><a class="button-secondary" href="#/paths">Przejdź do kursów</a><a class="button-secondary" href="#/profiler">Otwórz Profiler</a></div>
          </div>
          <div class="hero-visual"><img src="${homeCannabisVisual()}" alt="Okładka z motywami cannabis: śmiech, głód, relaks, medyczne zastosowania i skupienie" /></div>
        </section>

        <section class="stack">
          <div><div class="kicker">Kategorie</div><h2 class="section-title">Wejdź przez temat</h2><p class="section-lead">Wybierz obszar, od którego chcesz zacząć. Każda kategoria prowadzi do powiązanych pojęć i materiałów.</p></div>
          <div class="grid-3">${[...data.categories].sort((a,b)=>a.order-b.order).map(categoryCard).join('')}</div>
        </section>

        <section class="stack">
          <div><div class="kicker">Kursy</div><h2 class="section-title">Ucz się krok po kroku</h2></div>
          <div class="grid-2">${pathCards}</div>
        </section>

        <section class="stack">
          <div><div class="kicker">Na start</div><h2 class="section-title">Kilka tematów z ilustracjami</h2></div>
          <div class="grid-2">${sample.map(topicCard).join('')}</div>
        </section>
      </div>`;
  }

  function renderTopics() {
    stickyMount.innerHTML = '';
    const list = visibleConcepts();
    app.innerHTML = `
      <div class="stack">
        <section class="page-cover card">
          <div class="card-bg"><img class="card-bg" src="${visual('topics-page', '#89f7ad', 'TEMATY')}" alt="" /></div><div class="card-shade"></div>
          <div class="page-cover-main">
            <div class="kicker">Encyklopedia</div>
            <h1 class="section-title">Wszystkie pojęcia</h1>
            <p class="section-lead">Znajdź pojęcie po nazwie albo zawęź listę kategorią i poziomem trudności.</p>
          </div>
          <div class="page-cover-visual"><img src="${visual('topics-visual', '#89f7ad', 'POJĘCIA')}" alt="Okładka strony tematy" /></div>
        </section>
        <div class="filters">
          <input id="topicsSearch" class="filter" placeholder="Szukaj w tematach…" />
          <select id="topicsCategory" class="filter"><option value="">Wszystkie kategorie</option>${data.categories.map(c => `<option value="${esc(c.id)}">${esc(c.title)}</option>`).join('')}</select>
          <select id="topicsDifficulty" class="filter"><option value="">Wszystkie poziomy</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select>
        </div>
        <div id="topicsList" class="list-rows"></div>
      </div>`;
    const q = document.getElementById('topicsSearch');
    const cat = document.getElementById('topicsCategory');
    const diff = document.getElementById('topicsDifficulty');
    function paint() {
      const query = normalize(q.value);
      const category = cat.value;
      const difficulty = Number(diff.value || 0);
      const filtered = list.filter(c => (!category || c.category === category) && (!difficulty || c.difficulty === difficulty) && (!query || normalize(`${c.title} ${c.short} ${c.explanation}`).includes(query)));
      document.getElementById('topicsList').innerHTML = filtered.length ? filtered.map(c => `
        <a class="thumb-row" href="#/concept/${encodeURIComponent(c.id)}">
          <img class="row-thumb" src="${conceptThumbnail(c)}" alt="Miniatura pojęcia ${esc(c.title)}" />
          <div>
            <div class="row-head"><div class="row-title">${esc(c.title)}</div><span class="pill">${esc(catTitle(c.category))}</span></div>
            <p>${esc(textBlock(c))}</p>
            <div class="meta-line"><span class="pill">Poziom <strong>${c.difficulty}</strong></span><span class="pill">Dowody <strong>${esc(evidenceLabel(c.evidence_status))}</strong></span><span class="pill">Cannabis <strong>${esc(cannabisLabel(c.cannabis_relevance))}</strong></span></div>
          </div>
        </a>`).join('') : '<div class="panel empty">Brak wyników dla tych filtrów.</div>';
    }
    [q, cat, diff].forEach(el => el.addEventListener('input', paint));
    paint();
  }

  function renderCategory(id) {
    stickyMount.innerHTML = '';
    const cat = categoryById.get(id);
    if (!cat) return renderNotFound();
    const list = visibleConcepts().filter(c => c.category === id);
    app.innerHTML = `
      <div class="stack">
        <section class="page-cover card">
          <div class="card-bg"><img class="card-bg" src="${categoryIllustration(cat)}" alt="" /></div><div class="card-shade"></div>
          <div class="page-cover-main">
            <div class="breadcrumbs"><a href="#/">Start</a> / <a href="#/topics">Tematy</a> / <span>${esc(cat.title)}</span></div>
            <div class="kicker">${list.length} pojęć</div>
            <h1 class="section-title">${esc(cat.title)}</h1>
            <p class="section-lead">${esc(cat.description)}</p>
          </div>
          <div class="page-cover-visual"><img src="${categoryIllustration(cat)}" alt="Okładka kategorii ${esc(cat.title)}" /></div>
        </section>
        <div class="grid-2">${list.map(topicCard).join('')}</div>
      </div>`;
  }

  function renderConcept(id) {
    stickyMount.innerHTML = '';
    const c = conceptById.get(id);
    if (!c) return renderNotFound();
    const deps = c.dependencies.map(id => conceptById.get(id)).filter(Boolean);
    const next = (reverseDeps.get(c.id) || []).map(id => conceptById.get(id)).filter(Boolean).slice(0,6);
    const related = c.related.map(r => ({...r, concept: conceptById.get(r.id)})).filter(r => r.concept);
    const sources = c.sources.map(id => sourceById.get(id)).filter(Boolean);

    app.innerHTML = `
      <div class="stack">
        <section class="page-cover card">
          <div class="card-bg"><img class="card-bg" src="${visual('concept-bg:'+c.id, catAccent(c.category), catTitle(c.category).toUpperCase())}" alt="" /></div><div class="card-shade"></div>
          <div class="page-cover-main">
            <div class="breadcrumbs"><a href="#/">Start</a> / <a href="#/topics">Tematy</a> / <a href="#/category/${encodeURIComponent(c.category)}">${esc(catTitle(c.category))}</a> / <span>${esc(c.title)}</span></div>
            <div class="kicker">Temat</div>
            <h1 class="section-title">${esc(c.title)}</h1>
            <p class="section-lead">${esc(c.short)}</p>
            <div class="pills"><span class="pill">Poziom <strong>${c.difficulty}</strong></span><span class="pill">Dowody <strong>${esc(evidenceLabel(c.evidence_status))}</strong></span><span class="pill">Cannabis <strong>${esc(cannabisLabel(c.cannabis_relevance))}</strong></span></div>
          </div>
          <div class="page-cover-visual"><img src="${heroVisualForConcept(c)}" alt="Ilustracja okładkowa pojęcia ${esc(c.title)}" /></div>
        </section>

        <div class="content-grid">
          <div class="main-stack">
            <section class="panel lesson-intro">
              <div class="kicker">W skrócie</div>
              <h2>Co to jest?</h2>
              <p class="strong-lead">${esc(c.short)}</p>
              ${(c.learning?.overview_paragraphs || [c.explanation]).map(p => `<p>${esc(p)}</p>`).join('')}
              <div class="highlight-line">${(c.key_points?.length ? c.key_points : ['Oddziel wiązanie od efektu', 'Patrz na mechanizm', 'Sprawdzaj realną ekspozycję']).slice(0,4).map(x => `<div class="highlight">${esc(x)}</div>`).join('')}</div>
            </section>

            <section class="panel mechanism-panel">
              <div class="kicker">Mechanizm</div>
              <h2>Jak to działa krok po kroku?</h2>
              <div class="mechanism-steps">${(c.learning?.mechanism_steps || []).map((x,i) => `<div class="mechanism-step"><div class="mechanism-number">${i+1}</div><div><strong>${i===0?'Punkt startowy':i===(c.learning?.mechanism_steps?.length||1)-1?'Efekt / wniosek':'Co dzieje się dalej'}</strong><p>${esc(x)}</p></div></div>`).join('')}</div>
            </section>

            <section class="split-card lesson-context">
              <div>
                <div class="kicker">Znaczenie</div>
                <h2>Po co to właściwie wiedzieć?</h2>
                <p>${esc(c.learning?.why_it_matters || whyItMatters(c))}</p>
                <div class="concept-divider"></div>
                <div class="kicker">Porównaj</div>
                <h3>Z czym najłatwiej to pomylić lub połączyć?</h3>
                <p>${esc(c.learning?.compare_note || '')}</p>
              </div>
              <div><img class="inline-thumb" src="${mapVisual(c)}" alt="Schemat powiązań pojęcia ${esc(c.title)}" /></div>
            </section>

            <section class="panel evidence-reading">
              <div class="kicker">Czytanie badań</div>
              <h2>Na co patrzeć w danych?</h2>
              <p>${esc(c.learning?.study_note || '')}</p>
              <div class="evidence-strip"><span>${esc(evidenceLabel(c.evidence_status))}</span><small>status dowodów tego wpisu</small></div>
            </section>

            <section class="quote-card">
              <div class="kicker">Zapamiętaj</div>
              <h3>Jedno zdanie, które warto wynieść</h3>
              <p>${esc(c.learning?.memory_hook || c.analogy || c.short)}</p>
            </section>

            ${c.examples?.length ? `<section class="panel"><div class="kicker">Praktyka</div><h2>Przykłady</h2><div class="bullet-list">${c.examples.map(x => `<div class="bullet"><i>•</i><div>${esc(x)}</div></div>`).join('')}</div></section>` : ''}
            ${c.misconceptions?.length ? `<section class="panel"><div class="kicker">Uważaj</div><h2>Typowe nieporozumienia</h2><div class="bullet-list">${c.misconceptions.map(x => `<div class="bullet"><i>✕</i><div>${esc(x)}</div></div>`).join('')}</div></section>` : ''}
            ${c.check_yourself?.length ? `<section class="panel"><div class="kicker">Sprawdź się</div><h2>Pytania kontrolne</h2><div class="bullet-list">${c.check_yourself.map(x => `<div class="bullet"><i>?</i><div>${esc(x)}</div></div>`).join('')}</div></section>` : ''}
            ${related.length ? `<section class="panel"><div class="kicker">Połączenia</div><h2>Powiązane pojęcia</h2><div class="related-grid">${related.map(r => `<a class="related-card" href="#/concept/${encodeURIComponent(r.concept.id)}"><strong>${esc(r.concept.title)}</strong><small>${esc(relationText(r.relation) + ' — ' + r.why)}</small></a>`).join('')}</div></section>` : ''}
            ${sources.length ? `<section class="panel"><div class="kicker">Źródła</div><h2>Skąd to pochodzi?</h2><div class="source-grid">${sources.map(s => `<a class="source-card" href="${esc(s.url)}" target="_blank" rel="noreferrer"><strong>${esc(s.title || s.id)}</strong><small>${esc((s.publisher || '') + (s.year ? ' • ' + s.year : ''))}</small></a>`).join('')}</div></section>` : ''}
          </div>

          <aside class="side-stack">
            <section class="mini-card">
              <img class="side-thumb" src="${visual('pre:'+c.id, '#d4ff6f', 'NAJPIERW')}" alt="Ilustracja sekcji najpierw poznaj" />
              <div class="kicker">Najpierw poznaj</div>
              <h3>Z czego to wyrasta?</h3>
              <div class="link-stack">${deps.length ? deps.map(dep => `<a class="link-chip" href="#/concept/${encodeURIComponent(dep.id)}"><strong>${esc(dep.title)}</strong><span>${esc(dep.short)}</span></a>`).join('') : '<div class="link-chip"><strong>Brak wymagań</strong><span>Ten wpis możesz czytać bez przygotowania.</span></div>'}</div>
            </section>
            <section class="mini-card">
              <img class="side-thumb" src="${visual('next:'+c.id, '#9580ff', 'DALEJ')}" alt="Ilustracja sekcji co dalej" />
              <div class="kicker">Co dalej?</div>
              <h3>Dokąd warto pójść po tym wpisie</h3>
              <div class="link-stack">${next.length ? next.map(dep => `<a class="link-chip" href="#/concept/${encodeURIComponent(dep.id)}"><strong>${esc(dep.title)}</strong><span>${esc(dep.short)}</span></a>`).join('') : '<div class="link-chip"><strong>Brak dalszych zależności</strong><span>Na razie to samodzielny blok wiedzy w bazie.</span></div>'}</div>
            </section>
            <section class="mini-card">
              <img class="side-thumb" src="${visual('quick:'+c.id, catAccent(c.category), 'PODGLĄD')}" alt="Ilustracja sekcji szybki podgląd" />
              <div class="kicker">Szybki podgląd</div>
              <h3>Najważniejsze dane</h3>
              <div class="link-stack">
                <div class="link-chip"><strong>Kategoria</strong><span>${esc(catTitle(c.category))}</span></div>
                <div class="link-chip"><strong>Poziom</strong><span>${c.difficulty} — ${difficultyLabel(c.difficulty)}</span></div>
                <div class="link-chip"><strong>Znaczenie dla cannabis</strong><span>${esc(cannabisLabel(c.cannabis_relevance))}</span></div>
                <div class="link-chip"><strong>Dowody</strong><span>${esc(evidenceLabel(c.evidence_status))}</span></div>
              </div>
            </section>
          </aside>
        </div>
      </div>`;
  }

  function renderPaths() {
    stickyMount.innerHTML = '';
    app.innerHTML = `
      <div class="stack">
        <section class="page-cover card">
          <div class="card-bg"><img class="card-bg" src="${visual('paths-page', '#9580ff', 'KURSY')}" alt="" /></div><div class="card-shade"></div>
          <div class="page-cover-main">
            <div class="kicker">Ścieżki nauki</div>
            <h1 class="section-title">Ucz się krok po kroku</h1>
            <p class="section-lead">Wybierz ścieżkę i przechodź przez pojęcia w kolejności, która ułatwia budowanie podstaw i łączenie mechanizmów.</p>
          </div>
          <div class="page-cover-visual"><img src="${visual('paths-visual', '#9580ff', 'PROGRESS')}" alt="Okładka strony kursy" /></div>
        </section>
        <div class="path-grid">
          ${data.learning_paths.map(path => {
            const p = pathProgress(path);
            const actionLabel = p.pct >= 100 ? 'Przejrzyj kurs' : p.count > 0 ? 'Kontynuuj kurs' : 'Otwórz kurs';
            return `<article class="cover-card course-card">
              <a class="course-card-media" href="#/path/${encodeURIComponent(path.id)}" aria-label="${esc(actionLabel)}: ${esc(path.title)}">
                <img class="course-cover-thumb" src="${courseCover(path)}" alt="Okładka kursu ${esc(path.title)}" />
              </a>
              <div class="kicker">${p.count}/${path.steps.length} kroków</div>
              <h3>${esc(path.title)}</h3>
              <p>${esc(path.description)}</p>
              <div class="course-card-footer">
                <div class="meta-line"><span class="pill"><strong>${p.pct}%</strong> ukończone</span></div>
                <a class="button course-open-button" href="#/path/${encodeURIComponent(path.id)}">${actionLabel}<span aria-hidden="true">→</span></a>
              </div>
            </article>`;
          }).join('')}
        </div>
      </div>`;
  }

  function renderPath(id) {
    const path = pathById.get(id);
    if (!path) return renderNotFound();
    stickyMount.innerHTML = stickyProgressHTML(path);
    const prog = pathProgress(path);
    app.innerHTML = `
      <div class="stack">
        <section class="page-cover card">
          <div class="card-bg"><img class="card-bg" src="${courseCover(path)}" alt="" /></div><div class="card-shade"></div>
          <div class="page-cover-main">
            <div class="breadcrumbs"><a href="#/">Start</a> / <a href="#/paths">Kursy</a> / <span>${esc(path.title)}</span></div>
            <div class="kicker">Ścieżka nauki</div>
            <h1 class="section-title">${esc(path.title)}</h1>
            <p class="section-lead">${esc(path.description)}</p>
            <div class="pills"><span class="pill">Postęp <strong>${prog.pct}%</strong></span><span class="pill">Kroki <strong>${path.steps.length}</strong></span></div>
          </div>
          <div class="page-cover-visual"><img src="${courseCover(path)}" alt="Okładka kursu ${esc(path.title)}" /></div>
        </section>
        <section class="path-step-list">
          ${path.steps.map((stepId, idx) => {
            const c = conceptById.get(stepId); if (!c) return '';
            const done = prog.done.has(stepId);
            return `<article class="path-step card">
              <img class="simple-topic-thumb" src="${simpleConceptThumb(c)}" alt="Miniatura kroku ${idx+1} ${esc(c.title)}" />
              <div class="step-body">
                <div class="step-top"><div style="display:flex;gap:12px;align-items:center"><div class="step-index">${idx+1}</div><div class="kicker">${esc(catTitle(c.category))}</div></div></div>
                <h3>${esc(c.title)}</h3>
                <p>${esc(textBlock(c))}</p>
                <div class="meta-line"><span class="pill">Poziom <strong>${c.difficulty}</strong></span><span class="pill">Cannabis <strong>${esc(cannabisLabel(c.cannabis_relevance))}</strong></span></div>
                <div class="course-step-actions">
                  <a class="button course-lesson-button" href="#/concept/${encodeURIComponent(c.id)}">${done ? 'Przejrzyj lekcję' : 'Otwórz lekcję'}<span aria-hidden="true">→</span></a>
                  <button class="toggle-done ${done ? 'done' : ''}" data-path="${esc(path.id)}" data-step="${esc(stepId)}">${done ? 'Ukończone ✓' : 'Oznacz jako ukończone'}</button>
                </div>
              </div>
            </article>`;
          }).join('')}
        </section>
      </div>`;
    document.querySelectorAll('.toggle-done').forEach(btn => btn.addEventListener('click', () => {
      const pathId = btn.dataset.path, stepId = btn.dataset.step; const will = !btn.classList.contains('done');
      setStepDone(pathId, stepId, will); renderPath(pathId);
    }));
  }


  const PROFILER_KEY = 'neuroatlas-profiler-sessions-v1';
  const PROFILER_TERPS = [
    ['myrcene','Myrcen'], ['limonene','Limonen'], ['caryophyllene','β-kariofilen'],
    ['pinene','α/β-pinen'], ['linalool','Linalol'], ['terpinolene','Terpinolen'],
    ['humulene','Humulen'], ['ocimene','Ocimen']
  ];
  const PROFILER_DIMS = [
    ['intensity','Intensywność'], ['euphoria','Euforia'], ['relaxation','Relaks'],
    ['sleepiness','Senność'], ['appetite','Apetyt'], ['focus','Skupienie'],
    ['sociability','Towarzyskość'], ['anxiety','Niepokój / dyskomfort'],
    ['memory','Zaburzenie pamięci'], ['body','Body high / efekt fizyczny']
  ];

  const clampN = (n, min, max) => Math.max(min, Math.min(max, Number.isFinite(Number(n)) ? Number(n) : min));
  const round1 = n => Math.round(Number(n) * 10) / 10;
  const fmt = n => Number.isFinite(Number(n)) ? (Math.abs(n) >= 10 ? String(Math.round(n)) : round1(n).toFixed(1)) : '—';
  const pct = n => `${Math.round(clampN(n, 0, 1) * 100)}%`;

  function profilerSessions() {
    try {
      const raw = safeStorage.get(PROFILER_KEY, '[]') || '[]';
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (_) { return []; }
  }
  function saveProfilerSessions(items) { safeStorage.set(PROFILER_KEY, JSON.stringify(items.slice(0, 120))); }
  function profilerId() { return `s_${Date.now()}_${Math.random().toString(36).slice(2,8)}`; }

  function frequencyToleranceBase(v) {
    return ({never:1.14,rare:1.08,monthly:1.03,weekly:.94,multi:.80,daily:.64,heavy:.52})[v] || .94;
  }
  function toleranceFactor(v, daysRaw) {
    const base = frequencyToleranceBase(v);
    if (v === 'never' || base >= 1.03) return base;
    const days = clampN(daysRaw,0,365);
    const tau = ({weekly:4.8,multi:6.0,daily:7.5,heavy:9.0})[v] || 6.0;
    const recovered = base + (1.10 - base) * (1 - Math.exp(-days / tau));
    return clampN(recovered, base, 1.10);
  }
  function breakRecoveryFactor(v, daysRaw) {
    const base = frequencyToleranceBase(v);
    return base > 0 ? toleranceFactor(v, daysRaw) / base : 1;
  }
  function doseResponseIntensity(input, chem, delivery) {
    const absorbed = input.route === 'oral' ? chem.thcPotential : chem.thcPotential * delivery.center;
    const specs = {
      oral:{ec50:8.5,hill:1.16,max:.98},
      sublingual:{ec50:3.7,hill:1.12,max:.98},
      vaporizer:{ec50:4.2,hill:1.18,max:1},
      cart:{ec50:4.0,hill:1.18,max:1},
      dab:{ec50:3.6,hill:1.20,max:1},
      bong:{ec50:3.8,hill:1.18,max:1},
      pipe:{ec50:4.1,hill:1.16,max:1},
      joint:{ec50:4.5,hill:1.14,max:1}
    };
    const spec = specs[input.route] || specs[input.method] || specs.vaporizer;
    const x = Math.max(0, absorbed);
    const num = Math.pow(x, spec.hill);
    const den = Math.pow(spec.ec50, spec.hill) + num;
    return den > 0 ? 10 * spec.max * (num / den) : 0;
  }
  function routeTiming(input) {
    const method = input.method || '';
    if (input.route === 'oral') {
      const meal = input.meal || 'unknown';
      if (meal === 'empty') return {onset:[25,90], peak:[90,210], duration:[4,8], label:'wolniejszy początek, dłuższy przebieg'};
      if (meal === 'after') return {onset:[45,150], peak:[135,270], duration:[4,9], label:'posiłek może opóźnić początek'};
      if (meal === 'fatty') return {onset:[45,180], peak:[150,300], duration:[5,10], label:'bardziej zmienny przebieg po tłustym posiłku'};
      return {onset:[30,120], peak:[120,240], duration:[4,8], label:'wolniejszy początek, dłuższy przebieg'};
    }
    if (input.route === 'sublingual') return {onset:[15,45], peak:[45,120], duration:[3,6], label:'pośredni profil czasowy'};
    if (method === 'joint') return {onset:[1,5], peak:[10,30], duration:[2,4], label:'szybki początek'};
    return {onset:[1,5], peak:[8,25], duration:[2,4], label:'szybki początek'};
  }
  function deliveryParams(input) {
    if (input.route === 'oral') return {center:.08, low:.04, high:.15, effectScale:.88, label:'oral'};
    if (input.route === 'sublingual') return {center:.15, low:.08, high:.25, effectScale:.62, label:'sublingual'};
    const byMethod = {
      joint:{center:.16,low:.07,high:.27,effectScale:1}, bong:{center:.23,low:.12,high:.35,effectScale:1},
      vaporizer:{center:.29,low:.15,high:.40,effectScale:1}, cart:{center:.32,low:.18,high:.45,effectScale:1},
      dab:{center:.35,low:.20,high:.50,effectScale:1}, pipe:{center:.21,low:.10,high:.33,effectScale:1}
    };
    return byMethod[input.method] || {center:.23,low:.10,high:.35,effectScale:1,label:'inhalacja'};
  }

  function chemistryFromInput(input) {
    let thcPotential = 0, cbdPotential = 0, cbg = 0, cbn = 0;
    if (input.sourceMode === 'mg') {
      thcPotential = clampN(input.thcMg,0,5000);
      cbdPotential = clampN(input.cbdMg,0,5000);
      cbg = clampN(input.cbgMg,0,5000);
      cbn = clampN(input.cbnMg,0,5000);
    } else {
      const massMg = clampN(input.amountG,0,20) * 1000;
      thcPotential = massMg * (clampN(input.thcPct,0,100) + .877 * clampN(input.thcaPct,0,100)) / 100;
      cbdPotential = massMg * (clampN(input.cbdPct,0,100) + .877 * clampN(input.cbdaPct,0,100)) / 100;
      cbg = massMg * clampN(input.cbgPct,0,100) / 100;
      cbn = massMg * clampN(input.cbnPct,0,100) / 100;
    }
    return {thcPotential, cbdPotential, cbg, cbn, cbdRatio: thcPotential > 0 ? cbdPotential / thcPotential : 0};
  }

  function terpenePersonalSimilarity(a={}, b={}) {
    const av = PROFILER_TERPS.map(([k])=>clampN(a[k],0,15));
    const bv = PROFILER_TERPS.map(([k])=>clampN(b[k],0,15));
    const sa = av.reduce((x,y)=>x+y,0), sb = bv.reduce((x,y)=>x+y,0);
    // Missing terpene data is not evidence that two products have a zero-terpene profile.
    // Treat it as neutral similarity and let stronger dimensions drive the match.
    if (sa < .01 || sb < .01) return 1;
    let d=0;
    for(let i=0;i<av.length;i++) d += Math.abs(av[i]/sa - bv[i]/sb);
    return clampN(1-d/2,0,1);
  }

  function feedbackHasData(f) {
    if (!f || typeof f !== 'object') return false;
    if (PROFILER_DIMS.some(([k])=>Number.isFinite(Number(f[k])))) return true;
    return ['onsetMin','peakMin','durationH'].some(k=>Number.isFinite(Number(f[k])) && Number(f[k])>0);
  }

  function feedbackSimilarity(input, currentChem, oldSession) {
    if (!feedbackHasData(oldSession?.feedback) || !oldSession?.input) return 0;
    const oldChem = chemistryFromInput(oldSession.input);
    const routeW = input.route === oldSession.input.route ? 1 : .28;
    const methodW = input.method === oldSession.input.method ? 1 : .78;
    const doseW = Math.exp(-Math.abs(Math.log((currentChem.thcPotential + 1)/(oldChem.thcPotential + 1))) * 1.25);
    const cbdKnownNow = input.sourceMode === 'mg' ? !!input.chemistryKnown?.cbdMg : !!(input.chemistryKnown?.cbdPct || input.chemistryKnown?.cbdaPct);
    const cbdKnownOld = oldSession.input.sourceMode === 'mg' ? !!oldSession.input.chemistryKnown?.cbdMg : !!(oldSession.input.chemistryKnown?.cbdPct || oldSession.input.chemistryKnown?.cbdaPct);
    const cbdW = cbdKnownNow && cbdKnownOld ? Math.exp(-Math.abs(Math.log((currentChem.cbdRatio + .15)/(oldChem.cbdRatio + .15))) * .45) : 1;
    const freqW = input.frequency === oldSession.input.frequency ? 1 : .78;
    const terpW = .68 + .32 * terpenePersonalSimilarity(input.terpenes, oldSession.input.terpenes);
    return routeW * methodW * doseW * cbdW * freqW * terpW;
  }

  function baseProfilerPrediction(input) {
    const chem = chemistryFromInput(input);
    const delivery = deliveryParams(input);
    const timing = routeTiming(input);
    const days = clampN(input.daysSince,0,365);
    const tolerance = toleranceFactor(input.frequency, days);
    const sensitivity = clampN(input.sensitivity, .65, 1.4);

    const deliveredCenter = chem.thcPotential * delivery.center;
    const deliveredRange = [chem.thcPotential * delivery.low, chem.thcPotential * delivery.high];
    let intensity = doseResponseIntensity(input, chem, delivery);
    intensity = clampN(intensity * tolerance * sensitivity, 0, 10);

    const stress = clampN(input.stress,0,10);
    const fatigue = clampN(input.fatigue,0,10);
    const terps = input.terpenes || {};
    const terpTotal = PROFILER_TERPS.reduce((s,[k])=>s+clampN(terps[k],0,15),0);
    const terpCap = x => clampN(x, -.75, .75);
    const terpMods = {
      relaxation: terpCap(clampN(terps.myrcene,0,15)*.18 + clampN(terps.linalool,0,15)*.22 + clampN(terps.caryophyllene,0,15)*.10),
      sleepiness: terpCap(clampN(terps.myrcene,0,15)*.16 + clampN(terps.linalool,0,15)*.20),
      euphoria: terpCap(clampN(terps.limonene,0,15)*.10 + clampN(terps.terpinolene,0,15)*.05),
      focus: terpCap(clampN(terps.pinene,0,15)*.08 - clampN(terps.myrcene,0,15)*.05),
      sociability: terpCap(clampN(terps.limonene,0,15)*.06),
      body: terpCap(clampN(terps.myrcene,0,15)*.10 + clampN(terps.caryophyllene,0,15)*.08)
    };

    let anxiety = clampN((intensity-4.2)*.48 + stress*.28 + (tolerance>1.03 ? .3 : 0), 0, 10);
    const dims = {
      intensity,
      euphoria: clampN(1.2 + intensity*.67 + terpMods.euphoria,0,10),
      relaxation: clampN(1.0 + intensity*.53 + terpMods.relaxation - stress*.05,0,10),
      sleepiness: clampN(.5 + intensity*.35 + fatigue*.22 + terpMods.sleepiness,0,10),
      appetite: clampN(.8 + intensity*.57,0,10),
      focus: clampN(6.3 - intensity*.31 - fatigue*.16 - anxiety*.10 + terpMods.focus,0,10),
      sociability: 0,
      anxiety,
      memory: clampN(.4 + intensity*.63,0,10),
      body: 0
    };
    dims.sociability = clampN(2.4 + dims.euphoria*.42 - dims.anxiety*.28 + terpMods.sociability,0,10);
    dims.body = clampN(.7 + intensity*.46 + dims.relaxation*.25 + terpMods.body,0,10);

    const chemKnown = chem.thcPotential > 0 ? 1 : 0;
    let confidence = .25 + chemKnown*.25 + (input.route ? .12 : 0) + (input.frequency ? .08 : 0) + (input.sourceMode==='percent' && clampN(input.amountG,0,20)>0 ? .08 : .05);
    if (terpTotal > 0) confidence += .03;
    confidence = clampN(confidence, .18, .76);

    return {chem, delivery, timing, dims, confidence, deliveredCenter, deliveredRange, terpTotal, personal:{count:0,effective:0,weight:0}};
  }

  function personalizedProfilerPrediction(input, sessions) {
    const base = baseProfilerPrediction(input);
    const populationDims = {...base.dims};
    const matches = sessions
      .filter(s=>feedbackHasData(s.feedback) && s.input)
      .map(s=>({s,w:feedbackSimilarity(input,base.chem,s)}))
      .filter(x=>x.w>.10)
      .sort((a,b)=>b.w-a.w)
      .slice(0,8);
    const sumW = matches.reduce((s,x)=>s+x.w,0);
    const sumW2 = matches.reduce((s,x)=>s+x.w*x.w,0);
    const effectiveN = sumW2 > 0 ? (sumW*sumW)/sumW2 : 0;
    const personalWeight = clampN((sumW/5.2)*.46 + (effectiveN/6)*.22, 0, .68);
    if (sumW > 0) {
      for (const [key] of PROFILER_DIMS) {
        const usable = matches.filter(x=>Number.isFinite(Number(x.s.feedback[key])));
        const uw = usable.reduce((s,x)=>s+x.w,0);
        if (!uw) continue;
        const avg = usable.reduce((s,x)=>s+Number(x.s.feedback[key])*x.w,0)/uw;
        base.dims[key] = clampN(base.dims[key]*(1-personalWeight)+avg*personalWeight,0,10);
      }
      const numericTime = (field, fallback) => {
        const arr=matches.filter(x=>Number.isFinite(Number(x.s.feedback[field])) && Number(x.s.feedback[field])>0);
        if(!arr.length)return fallback;
        const w=arr.reduce((s,x)=>s+x.w,0), avg=arr.reduce((s,x)=>s+Number(x.s.feedback[field])*x.w,0)/w;
        return avg;
      };
      const baseOnset=(base.timing.onset[0]+base.timing.onset[1])/2;
      const basePeak=(base.timing.peak[0]+base.timing.peak[1])/2;
      const baseDur=(base.timing.duration[0]+base.timing.duration[1])/2;
      const po=numericTime('onsetMin',baseOnset), pp=numericTime('peakMin',basePeak), pd=numericTime('durationH',baseDur);
      base.timing.personalized = {
        onset: round1(baseOnset*(1-personalWeight)+po*personalWeight),
        peak: round1(basePeak*(1-personalWeight)+pp*personalWeight),
        duration: round1(baseDur*(1-personalWeight)+pd*personalWeight)
      };
    }
    const deltaByDim = Object.fromEntries(PROFILER_DIMS.map(([key])=>[key, round1(base.dims[key]-populationDims[key])]));
    const errorRows = matches.map(x=>{
      const pred=x.s?.prediction?.dims||{};
      const fb=x.s?.feedback||{};
      const errors=PROFILER_DIMS.map(([key])=>Number.isFinite(Number(pred[key]))&&Number.isFinite(Number(fb[key]))?Math.abs(Number(pred[key])-Number(fb[key])):null).filter(v=>v!==null);
      return errors.length?{w:x.w,mae:errors.reduce((a,b)=>a+b,0)/errors.length}:null;
    }).filter(Boolean);
    const errW=errorRows.reduce((a,x)=>a+x.w,0);
    const calibrationMae=errW?errorRows.reduce((a,x)=>a+x.mae*x.w,0)/errW:null;
    const calibrationScore=calibrationMae===null?null:Math.round(clampN(96-calibrationMae*22,28,94));
    base.personal = {count:matches.length,effective:round1(sumW),effectiveN:round1(effectiveN),weight:personalWeight,ids:matches.map(x=>x.s.id),deltaByDim,calibrationMae:calibrationMae===null?null:round1(calibrationMae),calibrationScore};
    base.trust = profilerTrustAssessment(input, base);
    base.confidence = clampN(base.trust.score/100, .30, .86);
    return base;
  }

  const DIM_UNCERTAINTY = {
    intensity:1.00,euphoria:1.55,relaxation:1.28,sleepiness:1.30,appetite:1.38,
    focus:1.48,sociability:1.62,anxiety:1.42,memory:1.28,body:1.38
  };
  function scoreRangeForDimension(key, score, confidence, personal={}) {
    const base = DIM_UNCERTAINTY[key] || 1.4;
    const trustScale = 1.32 - clampN(confidence,.2,.9)*.58;
    const personalScale = personal?.effectiveN >= 4 ? .88 : personal?.effectiveN >= 2 ? .94 : 1;
    const calibrationScale = Number.isFinite(Number(personal?.calibrationMae)) ? clampN(.86 + Number(personal.calibrationMae)*.08,.90,1.12) : 1.05;
    const half = clampN(base * trustScale * personalScale * calibrationScale, .65, 2.35);
    return [clampN(score-half,0,10), clampN(score+half,0,10)];
  }
  function confidenceLabel(c) { return c < .42 ? 'niska' : c < .68 ? 'umiarkowana' : 'wyższa'; }
  function trustLabel(score) { return score < 45 ? 'niska' : score < 68 ? 'umiarkowana' : 'wyższa'; }
  function trustTone(score) { return score < 45 ? 'low' : score < 68 ? 'mid' : 'good'; }
  function profilerMethodLabel(method) {
    return ({vaporizer:'vaporizer',bong:'bong',joint:'joint',pipe:'lufka / pipe',cart:'cartridge / vape',dab:'dab / rig',edible:'edible',oil:'olej'})[method] || method || 'nieznana metoda';
  }
  function profilerRouteLabel(route) {
    return ({inhaled:'inhalacja',oral:'droga doustna',sublingual:'podjęzykowo'})[route] || route || 'nieznana droga';
  }
  function profilerTrustAssessment(input, result) {
    let doseScore, doseReason;
    if (input.sourceMode === 'mg') {
      doseScore = input.thcMg > 0 ? 82 : 28;
      doseReason = input.thcMg > 0
        ? 'Znasz deklarowaną ilość THC w użytej porcji. Nadal nie znamy dokładnej ilości faktycznie wchłoniętej.'
        : 'Brakuje użytecznej informacji o dawce THC.';
    } else {
      const hasMass = clampN(input.amountG,0,20) > 0;
      const hasThc = clampN(input.thcPct,0,100) > 0 || clampN(input.thcaPct,0,100) > 0;
      doseScore = hasMass && hasThc ? 78 : hasThc ? 48 : 24;
      if (hasMass && hasThc && ['flower','hash'].includes(input.productType)) doseScore += 4;
      doseReason = hasMass && hasThc
        ? 'Znana jest masa użytego produktu oraz THC/THCA, więc model może oszacować potencjalną ilość THC w porcji.'
        : 'Skład lub ilość produktu są niepełne, więc punkt startowy modelu jest słabszy.';
    }

    const routeScores = {oral:46,sublingual:50};
    const methodScores = {vaporizer:64,cart:60,dab:61,bong:52,pipe:49,joint:45,edible:46,oil:50};
    const deliveryScore = routeScores[input.route] ?? methodScores[input.method] ?? 52;
    const deliveryReason = input.route === 'oral'
      ? 'Wchłanianie doustne i czas działania są bardzo zmienne między sesjami i osobami.'
      : input.route === 'sublingual'
        ? 'Podanie podjęzykowe jest szybsze niż doustne, ale rzeczywista absorpcja nadal mocno zależy od sposobu użycia.'
        : `${profilerMethodLabel(input.method)} daje szybki początek, ale rzeczywista ilość THC wchłonięta podczas inhalacji ma duży rozrzut.`;

    let contextScore = 58;
    if (input.frequency) contextScore += 8;
    if (input.frequency === 'never' || Number.isFinite(Number(input.daysSince))) contextScore += 6;
    if (Number.isFinite(Number(input.sensitivity))) contextScore += 5;
    if (Number.isFinite(Number(input.stress)) && Number.isFinite(Number(input.fatigue))) contextScore += 5;
    contextScore = Math.min(82, contextScore);
    const contextReason = 'Częstotliwość, przerwa, własna wrażliwość, stres i zmęczenie są podane, ale część z nich jest samooceną.';

    const eff = clampN(result.personal?.effective,0,20);
    const effN = clampN(result.personal?.effectiveN,0,20);
    const count = Number(result.personal?.count || 0);
    const calibration = Number.isFinite(Number(result.personal?.calibrationScore)) ? Number(result.personal.calibrationScore) : null;
    const historyStrength = count ? Math.min(92, Math.round(20 + eff*8 + effN*7)) : 10;
    const personalScore = count ? Math.round(calibration===null ? historyStrength : historyStrength*.58 + calibration*.42) : 10;
    const personalReason = count
      ? calibration===null
        ? `${count} podobnych sesji wpływa na tę predykcję; efektywna liczba niezależnych dopasowań to około ${fmt(effN)}.`
        : `${count} podobnych sesji wpływa na wynik; efektywna liczba dopasowań ~${fmt(effN)}, a średni wcześniejszy błąd podobnych predykcji to około ${fmt(result.personal.calibrationMae)} pkt /10.`
      : 'Brak podobnych sesji z feedbackiem — wynik opiera się wyłącznie na modelu ogólnym.';

    const modelScore = result.terpTotal > 0 ? 50 : 54;
    const modelReason = result.terpTotal > 0
      ? 'Subiektywne efekty są trudne do przewidzenia, a wpływ terpenów na konkretne odczucia ma ograniczone dane — dlatego ich waga jest mała.'
      : 'Model dobrze rozróżnia główne czynniki, ale subiektywnych efektów nie da się przewidywać z dokładnością laboratoryjnego pomiaru.';

    let score = Math.round(doseScore*.29 + deliveryScore*.21 + contextScore*.18 + personalScore*.21 + modelScore*.11);
    score = Math.min(count ? 86 : 73, Math.max(24, score));
    const components = [
      {label:'Dawka i skład',score:Math.round(doseScore),reason:doseReason},
      {label:'Droga podania',score:Math.round(deliveryScore),reason:deliveryReason},
      {label:'Kontekst użytkownika',score:Math.round(contextScore),reason:contextReason},
      {label:'Kalibracja osobista',score:Math.round(personalScore),reason:personalReason},
      {label:'Ograniczenia modelu',score:Math.round(modelScore),reason:modelReason}
    ];
    const caveats=[];
    if (!count) caveats.push('brak osobistej kalibracji');
    else if (calibration !== null && calibration < 55) caveats.push('podobne wcześniejsze predykcje miały duży błąd');
    if (input.route === 'oral') caveats.push('duża zmienność wchłaniania doustnego');
    else if (input.route === 'inhaled') caveats.push('duży rozrzut faktycznie wchłoniętej dawki');
    if (result.terpTotal > 0) caveats.push('terpeny mają słabsze podstawy predykcyjne');
    if (Math.abs(clampN(input.sensitivity,.65,1.4)-1) > .01) caveats.push('wrażliwość THC jest samooceną');
    return {score,label:trustLabel(score),tone:trustTone(score),components,caveats};
  }

  function profilerWhyFactors(input, result) {
    const factors=[];
    const deliveredMid = (result.deliveredRange[0]+result.deliveredRange[1])/2;
    const intensity = result.dims.intensity;
    const doseStrength = intensity >= 7 ? 'strong' : intensity >= 4 ? 'medium' : 'low';
    factors.push({
      signal:'THC / ekspozycja',
      direction:intensity >= 5 ? '↑' : '→',
      strength:doseStrength,
      title:`${fmt(result.chem.thcPotential)} mg potencjalnego THC`,
      targets:['Intensywność ↑','Euforia ↑','Pamięć ↓'],
      detail: input.route === 'oral'
        ? 'To główny punkt startowy. Dla drogi doustnej model używa osobnej nieliniowej krzywej dawka → odpowiedź i szerszej niepewności czasowej.'
        : `Dla ${profilerMethodLabel(input.method)} model szacuje ekspozycję systemową w szerokim zakresie około ${fmt(result.deliveredRange[0])}–${fmt(result.deliveredRange[1])} mg (środek ~${fmt(deliveredMid)} mg), a następnie stosuje nieliniową krzywą odpowiedzi.`,
    });

    const baseTol = frequencyToleranceBase(input.frequency);
    const totalTol = toleranceFactor(input.frequency,input.daysSince);
    const baseDelta = Math.round((baseTol-1)*100);
    factors.push({
      signal:'Tolerancja',
      direction:baseDelta < -2 ? '↓' : baseDelta > 2 ? '↑' : '→',
      strength:Math.abs(baseDelta) >= 18 ? 'strong' : Math.abs(baseDelta) >= 7 ? 'medium' : 'low',
      title:baseDelta === 0 ? 'neutralny punkt wyjścia' : `${baseDelta>0?'+':''}${baseDelta}% przed uwzględnieniem przerwy`,
      targets:['Intensywność','Euforia','Body high'],
      detail:'Częstotliwość używania ustawia bazowy poziom tolerancji. To heurystyczny wskaźnik reakcji, nie pomiar receptorów ani wartość kliniczna.'
    });

    if (input.frequency !== 'never') {
      const recovery = breakRecoveryFactor(input.frequency,input.daysSince);
      const rd = Math.round((recovery-1)*100);
      factors.push({
        signal:'Przerwa', direction:rd>1?'↑':'→', strength:rd>=12?'medium':rd>=5?'low':'low',
        title:`${fmt(input.daysSince)} dni od poprzedniej sesji`,
        targets:['Intensywność','Wrażliwość na dawkę'],
        detail:rd>0
          ? `Model zwiększa odpowiedź płynnie wraz z długością przerwy. W tej sesji odzysk względem bazowej tolerancji wynosi około +${rd}%, bez skokowych progów 3/7/14 dni.`
          : 'Ta przerwa jest zbyt krótka, aby model zwiększał odpowiedź względem bazowej tolerancji.'
      });
    }

    const sens = clampN(input.sensitivity,.65,1.4);
    const sd = Math.round((sens-1)*100);
    factors.push({
      signal:'Wrażliwość', direction:sd>2?'↑':sd<-2?'↓':'→', strength:Math.abs(sd)>=20?'medium':'low',
      title:`${sens.toFixed(2)}×`, targets:['Intensywność','Wszystkie efekty zależne od intensywności'],
      detail: sd ? `Twoja samoocena wrażliwości przesuwa odpowiedź o około ${sd>0?'+':''}${sd}% przed ograniczeniem wyniku do skali 0–10.` : 'Ustawiona jest neutralnie, więc nie przesuwa bazowej intensywności.'
    });

    const stress=clampN(input.stress,0,10);
    if (stress > 0) factors.push({
      signal:'Stres', direction:'↑', strength:stress>=7?'medium':'low',
      title:`${fmt(stress)}/10`, targets:['Niepokój ↑','Relaks ↓'],
      detail:'W aktualnym modelu stres podnosi składową niepokoju i lekko obniża relaks. Nie zwiększa bezpośrednio „mocy THC”.'
    });
    const fatigue=clampN(input.fatigue,0,10);
    if (fatigue > 0) factors.push({
      signal:'Zmęczenie', direction:'↕', strength:fatigue>=7?'medium':'low',
      title:`${fmt(fatigue)}/10`, targets:['Senność ↑','Skupienie ↓'],
      detail:'Zmęczenie koryguje głównie senność i skupienie, a nie całkowitą intensywność.'
    });

    if (result.terpTotal > 0) {
      const top = PROFILER_TERPS.map(([k,l])=>({k,l,v:clampN(input.terpenes?.[k],0,15)})).filter(x=>x.v>0).sort((a,b)=>b.v-a.v).slice(0,2);
      factors.push({
        signal:'Terpeny', direction:'≈', strength:'uncertain',
        title:top.length ? top.map(x=>`${x.l} ${fmt(x.v)}%`).join(' • ') : `${fmt(result.terpTotal)}% łącznie`,
        targets:['Małe korekty wybranych wymiarów'],
        detail:'Terpeny mogą wprowadzić tylko małą korektę wybranych wymiarów. Model celowo nie pozwala im dominować, bo dowody dla przewidywania konkretnych odczuć u człowieka są ograniczone.'
      });
    }

    if (result.personal?.count) {
      const deltas = Object.entries(result.personal.deltaByDim||{}).map(([k,v])=>({k,v:Number(v),label:PROFILER_DIMS.find(([id])=>id===k)?.[1]||k})).filter(x=>Math.abs(x.v)>=.1).sort((a,b)=>Math.abs(b.v)-Math.abs(a.v)).slice(0,3);
      factors.push({
        signal:'Twoja historia', direction:'↔', strength:result.personal.weight>=.35?'strong':'medium',
        title:`${result.personal.count} podobnych sesji • ${Math.round(result.personal.weight*100)}% wagi osobistej`,
        targets:deltas.length?deltas.map(x=>`${x.label} ${x.v>0?'+':''}${fmt(x.v)}`):['Kalibracja całego profilu'],
        detail:deltas.length
          ? `Efektywna liczba dopasowań to około ${fmt(result.personal.effectiveN)}. Największe korekty pochodzą z wymiarów pokazanych wyżej.${Number.isFinite(Number(result.personal.calibrationMae))?` Średni wcześniejszy błąd podobnych predykcji: ~${fmt(result.personal.calibrationMae)} pkt /10.`:''}`
          : 'Podobne sesje są uwzględnione, ale ich średnia reakcja jest bliska predykcji populacyjnej.'
      });
    } else {
      factors.push({
        signal:'Twoja historia', direction:'?', strength:'uncertain',
        title:'brak osobistej kalibracji', targets:['Większa niepewność'],
        detail:'Model nie ma jeszcze podobnych sesji z rzeczywistym feedbackiem, więc nie wie, czy zwykle reagujesz mocniej, słabiej lub inaczej niż jego baza.'
      });
    }
    return factors;
  }

  function collectProfilerInput(form) {
    const fd = new FormData(form);
    const raw = key => String(fd.get(key) ?? '').trim();
    const n = key => raw(key) === '' ? 0 : Number(raw(key));
    const known = key => raw(key) !== '';
    const sourceMode = String(fd.get('sourceMode') || 'percent');
    const terpeneMode = String(fd.get('terpeneMode') || 'unknown');
    const terpPairs = PROFILER_TERPS.map(([k]) => [k, n('terp_'+k)]);
    const terpKnown = Object.fromEntries(PROFILER_TERPS.map(([k]) => [k, terpeneMode === 'known' && known('terp_'+k)]));
    return {
      label:String(fd.get('label')||'').trim().slice(0,80), productType:String(fd.get('productType')||'flower'),
      sourceMode, route:String(fd.get('route')||'inhaled'), method:String(fd.get('method')||'vaporizer'),
      amountG:n('amountG'), thcPct:n('thcPct'), thcaPct:n('thcaPct'), cbdPct:n('cbdPct'), cbdaPct:n('cbdaPct'), cbgPct:n('cbgPct'), cbnPct:n('cbnPct'),
      thcMg:n('thcMg'), cbdMg:n('cbdMg'), cbgMg:n('cbgMg'), cbnMg:n('cbnMg'), vaporTemp:n('vaporTemp'), meal:String(fd.get('meal')||'unknown'),
      frequency:String(fd.get('frequency')||'weekly'), daysSince:n('daysSince'), sensitivity:n('sensitivity')||1, stress:n('stress'), fatigue:n('fatigue'),
      caffeine:fd.get('caffeine')==='on', nicotine:fd.get('nicotine')==='on', alcohol:fd.get('alcohol')==='on',
      chemistryKnown:{
        amountG:known('amountG'), thcPct:known('thcPct'), thcaPct:known('thcaPct'), cbdPct:known('cbdPct'), cbdaPct:known('cbdaPct'), cbgPct:known('cbgPct'), cbnPct:known('cbnPct'),
        thcMg:known('thcMg'), cbdMg:known('cbdMg'), cbgMg:known('cbgMg'), cbnMg:known('cbnMg')
      },
      terpeneMode,
      terpenes:Object.fromEntries(terpPairs),
      terpenesKnown:terpKnown
    };
  }

  function profilerValidationIssues(input) {
    const errors=[];
    const warnings=[];
    if (input.sourceMode === 'percent') {
      const pctKeys=['thcPct','thcaPct','cbdPct','cbdaPct','cbgPct','cbnPct'];
      const sum=pctKeys.reduce((s,k)=>s+Math.max(0,Number(input[k]||0)),0);
      if (sum > 100.5) errors.push(`Suma podanych kannabinoidów wynosi ${sum.toFixed(1)}%. Sprawdź wartości lub jednostki.`);
      if (input.amountG < 0 || input.amountG > 20) errors.push('Ilość produktu musi mieścić się w zakresie 0–20 g.');
    } else {
      for (const k of ['thcMg','cbdMg','cbgMg','cbnMg']) if (Number(input[k]) < 0 || Number(input[k]) > 5000) errors.push('Wartości w mg muszą mieścić się w zakresie 0–5000 mg.');
    }
    if (input.vaporTemp && (input.vaporTemp < 80 || input.vaporTemp > 260)) errors.push('Temperatura vaporizera powinna mieścić się w zakresie 80–260°C.');
    if (input.terpeneMode === 'known') {
      const knownCount=Object.values(input.terpenesKnown||{}).filter(Boolean).length;
      const total=PROFILER_TERPS.reduce((s,[k])=>s+Math.max(0,Number(input.terpenes?.[k]||0)),0);
      if (!knownCount) warnings.push('Wybrano „mam wyniki”, ale nie wpisano żadnej wartości terpenów. Puste pola traktujemy jako brak danych, nie jako 0%.');
      if (total > 15) warnings.push(`Suma wpisanych terpenów to ${total.toFixed(1)}%. To nietypowo wysoka wartość — sprawdź, czy laboratorium podaje procenty, mg/g lub inną jednostkę.`);
      if (PROFILER_TERPS.some(([k])=>Number(input.terpenes?.[k]||0)>10)) warnings.push('Co najmniej jeden terpen przekracza 10%. Sprawdź jednostkę na COA.');
    }
    return {errors,warnings};
  }

  function profilerInputIsUsable(input) {
    if (input.sourceMode === 'mg') return input.thcMg > 0;
    return input.amountG > 0 && (input.thcPct > 0 || input.thcaPct > 0);
  }

  function routeMethodOptions(route, current='', productType='flower') {
    let options;
    if (productType === 'vape') options = [['cart','Cartridge / vape']];
    else if (productType === 'edible') options = [['edible','Edible']];
    else if (productType === 'oil') options = route === 'oral' ? [['oil','Olej / kapsułka']] : [['oil','Olej podjęzykowy']];
    else if (productType === 'concentrate') options = [['dab','Dab / rig'],['vaporizer','Vaporizer do koncentratów']];
    else if (productType === 'hash') options = [['vaporizer','Vaporizer'],['bong','Bong'],['joint','Joint'],['pipe','Lufka / pipe']];
    else options = [['vaporizer','Vaporizer'],['bong','Bong'],['joint','Joint'],['pipe','Lufka / pipe']];
    return options.map(([v,l])=>`<option value="${v}" ${v===current?'selected':''}>${l}</option>`).join('');
  }

  function profilerFormHTML() {
    return `
      <form id="profilerForm" class="profiler-form" novalidate>
        <section class="profiler-section" id="profilerStepProduct" data-profiler-step="1">
          <div class="kicker">1 • Produkt i podanie</div><h2>Co dokładnie analizujemy?</h2>
          <div class="profiler-field-grid">
            <label class="profiler-field wide"><span>Nazwa / odmiana <small>opcjonalnie</small></span><input name="label" placeholder="np. Ghost Train Haze / własna próbka" maxlength="80"></label>
            <label class="profiler-field"><span>Produkt</span><select name="productType" id="profilerProduct"><option value="flower">Susz</option><option value="hash">Hash</option><option value="concentrate">Koncentrat</option><option value="vape">Vape / cartridge</option><option value="edible">Edible</option><option value="oil">Olej</option></select></label>
            <label class="profiler-field" id="profilerRouteField"><span>Droga podania</span><select name="route" id="profilerRoute"><option value="inhaled">Inhalacja</option><option value="oral">Oral</option><option value="sublingual">Podjęzykowo</option></select></label>
            <label class="profiler-field" id="profilerMethodField"><span>Metoda</span><select name="method" id="profilerMethod">${routeMethodOptions('inhaled','vaporizer','flower')}</select></label>
            <label class="profiler-field" id="profilerVaporTempField"><span>Temperatura vaporizera °C <small>opcjonalnie</small></span><input type="number" name="vaporTemp" min="80" max="260" step="1" placeholder="185"></label>
            <label class="profiler-field" id="profilerMealField" hidden><span>Posiłek przy użyciu doustnym</span><select name="meal"><option value="unknown">Nie wiem / bez znaczenia</option><option value="empty">Na pusty żołądek</option><option value="after">Po posiłku</option><option value="fatty">Po tłustym posiłku</option></select></label>
          </div>
          <div id="profilerAutoHint" class="profiler-auto-hint" aria-live="polite"></div>
        </section>

        <section class="profiler-section" id="profilerStepChem" data-profiler-step="2">
          <div class="kicker">2 • Chemia</div><h2>Co wiesz o składzie?</h2>
          <div id="profilerModeSwitch" class="profiler-mode-switch" role="radiogroup" aria-label="Sposób podania składu">
            <label><input type="radio" name="sourceMode" value="percent" checked><span>Mam % / COA</span></label>
            <label><input type="radio" name="sourceMode" value="mg"><span>Znam mg dawki</span></label>
          </div>
          <div id="profilerChemPercent" class="profiler-field-grid chem-pane">
            <label class="profiler-field"><span>Ilość produktu (g)</span><input type="number" name="amountG" min="0" max="20" step="0.01" placeholder="0.20" inputmode="decimal"></label>
            <label class="profiler-field"><span>THC aktywne % <small>jeśli podane osobno</small></span><input type="number" name="thcPct" min="0" max="100" step="0.01" placeholder="1.00" inputmode="decimal"></label>
            <label class="profiler-field"><span>THCA %</span><input type="number" name="thcaPct" min="0" max="100" step="0.01" placeholder="20.00" inputmode="decimal"></label>
            <label class="profiler-field"><span>CBD %</span><input type="number" name="cbdPct" min="0" max="100" step="0.01" placeholder="0.00" inputmode="decimal"></label>
            <label class="profiler-field"><span>CBDA %</span><input type="number" name="cbdaPct" min="0" max="100" step="0.01" placeholder="0.00" inputmode="decimal"></label>
            <label class="profiler-field"><span>CBG % <small>opcjonalnie</small></span><input type="number" name="cbgPct" min="0" max="100" step="0.01" placeholder="0.00" inputmode="decimal"></label>
            <label class="profiler-field"><span>CBN % <small>opcjonalnie</small></span><input type="number" name="cbnPct" min="0" max="100" step="0.01" placeholder="0.00" inputmode="decimal"></label>
          </div>
          <div id="profilerChemMg" class="profiler-field-grid chem-pane" hidden>
            <label class="profiler-field"><span>THC w użytej porcji (mg)</span><input type="number" name="thcMg" min="0" max="5000" step="0.1" placeholder="10" inputmode="decimal"></label>
            <label class="profiler-field"><span>CBD (mg)</span><input type="number" name="cbdMg" min="0" max="5000" step="0.1" placeholder="0" inputmode="decimal"></label>
            <label class="profiler-field"><span>CBG (mg)</span><input type="number" name="cbgMg" min="0" max="5000" step="0.1" placeholder="0" inputmode="decimal"></label>
            <label class="profiler-field"><span>CBN (mg)</span><input type="number" name="cbnMg" min="0" max="5000" step="0.1" placeholder="0" inputmode="decimal"></label>
          </div>
          <div id="profilerChemStatus" class="profiler-inline-status" aria-live="polite"></div>
          <div class="profiler-note">Puste pola oznaczają „nie wiem”, a nie 0. THCA → potencjalne THC liczymy z przelicznikiem 0,877. Ilość w materiale nie jest traktowana jak ilość wchłonięta.</div>
        </section>

        <section class="profiler-section" id="profilerStepTerps" data-profiler-step="3">
          <div class="kicker">3 • Terpeny</div><h2>Profil terpenowy <small>(opcjonalny)</small></h2>
          <p class="profiler-help">Brak wyniku laboratoryjnego nie jest tym samym co 0%. Wybierz „mam wyniki” tylko wtedy, gdy rzeczywiście znasz wartości.</p>
          <div id="profilerTerpMode" class="profiler-mode-switch terp-mode-switch" role="radiogroup" aria-label="Dostępność profilu terpenowego">
            <label><input type="radio" name="terpeneMode" value="unknown" checked><span>Nie znam profilu</span></label>
            <label><input type="radio" name="terpeneMode" value="known"><span>Mam wyniki</span></label>
          </div>
          <div id="profilerTerpPane" hidden>
            <div class="profiler-terp-grid">${PROFILER_TERPS.map(([k,l])=>`<label class="profiler-field"><span>${l} %</span><input type="number" name="terp_${k}" min="0" max="15" step="0.01" placeholder="brak danych" inputmode="decimal"></label>`).join('')}</div>
            <div id="profilerTerpStatus" class="profiler-inline-status" aria-live="polite"></div>
          </div>
          <div class="profiler-note">Wpływ terpenów na wynik pozostaje celowo mały. Puste pole = brak danych; wpisane 0 = rzeczywisty wynik 0% / poniżej progu raportowania, jeśli tak podaje COA.</div>
        </section>

        <section class="profiler-section" id="profilerStepContext" data-profiler-step="4">
          <div class="kicker">4 • Ty i kontekst</div><h2>Co może zmienić reakcję?</h2>
          <div class="profiler-field-grid">
            <label class="profiler-field"><span>Częstotliwość</span><select name="frequency" id="profilerFrequency"><option value="never">Pierwszy raz / praktycznie nigdy</option><option value="rare">Kilka razy w roku</option><option value="monthly">Kilka razy w miesiącu</option><option value="weekly" selected>Około raz w tygodniu</option><option value="multi">Kilka razy w tygodniu</option><option value="daily">Codziennie</option><option value="heavy">Wielokrotnie dziennie</option></select></label>
            <label class="profiler-field" id="profilerDaysField"><span>Dni od ostatniego użycia</span><input type="number" name="daysSince" min="0" max="365" step="0.5" value="2"></label>
            <label class="profiler-field wide"><span>Wrażliwość na THC <output id="sensitivityOut">1.00×</output></span><input id="sensitivityInput" type="range" name="sensitivity" min="0.65" max="1.40" step="0.05" value="1"></label>
            <label class="profiler-field wide"><span>Aktualny stres / napięcie <output id="stressOut">3/10</output></span><input id="stressInput" type="range" name="stress" min="0" max="10" step="1" value="3"></label>
            <label class="profiler-field wide"><span>Zmęczenie <output id="fatigueOut">3/10</output></span><input id="fatigueInput" type="range" name="fatigue" min="0" max="10" step="1" value="3"></label>
          </div>
          <div class="profiler-checks">
            <label><input type="checkbox" name="caffeine"> kofeina</label><label><input type="checkbox" name="nicotine"> nikotyna</label><label><input type="checkbox" name="alcohol"> alkohol</label>
          </div>
          <div class="profiler-note warning">Te trzy pozycje są zapisywane jako kontekst, ale nie zwiększają „mocy” w modelu. Alkohol może zwiększać ryzyko nieprzyjemnych efektów — Profiler nie służy do planowania mieszanek ani określania bezpiecznej dawki.</div>
        </section>
        <div id="profilerValidation" class="profiler-validation" role="status"></div>
        <div class="profiler-submit-bar"><div id="profilerReadyState" class="profiler-ready-state" aria-live="polite"><span class="ready-dot"></span><span>Sprawdzam dane…</span></div><div class="profiler-actions"><button class="button" id="profilerSubmit" type="submit">Policz predykcję</button><button class="button-secondary" type="button" id="profilerReset">Wyczyść formularz</button></div></div>
      </form>`;
  }

  function profilerEmptyResultHTML() {
    return `<div class="profiler-result-empty"><div class="profiler-orbit">✦</div><div class="kicker">Wynik</div><h2>Wypełnij dane produktu</h2><p>Profiler pokaże zakres przewidywanego działania, a nie fałszywie precyzyjną jedną liczbę. Po kilku zapisanych sesjach zacznie dodatkowo kalibrować wynik pod Twoją własną historię.</p><div class="profiler-empty-flow"><span>chemia</span><b>→</b><span>podanie</span><b>→</b><span>Ty</span><b>→</b><span>predykcja</span></div></div>`;
  }

  function profilerResultHTML(input, result, saved=false) {
    const trust=result.trust || profilerTrustAssessment(input,result);
    const pWeight=result.personal.weight;
    const time=result.timing.personalized;
    const why=profilerWhyFactors(input,result);
    const dominant = PROFILER_DIMS
      .filter(([k])=>!['intensity','memory'].includes(k))
      .map(([k,l])=>({k,l,v:result.dims[k]}))
      .sort((a,b)=>b.v-a.v)
      .slice(0,3);
    const intensityRange=scoreRangeForDimension('intensity',result.dims.intensity,result.confidence,result.personal);
    const weakest=[...trust.components].sort((a,b)=>a.score-b.score)[0];
    const trustBars=trust.components.map(c=>`<div class="profiler-trust-component"><div class="profiler-trust-component-top"><span>${esc(c.label)}</span><strong>${c.score}/100</strong></div><div class="profiler-trust-track"><span style="width:${clampN(c.score,0,100)}%"></span></div><p>${esc(c.reason)}</p></div>`).join('');
    const caveats=trust.caveats.length ? `<div class="profiler-caveats">${trust.caveats.map(x=>`<span>${esc(x)}</span>`).join('')}</div>` : '';
    const whyCards=why.map(f=>`<article class="profiler-driver ${f.strength}"><div class="profiler-driver-signal"><span class="profiler-driver-arrow">${esc(f.direction)}</span><div><small>${esc(f.signal)}</small><strong>${esc(f.title)}</strong></div></div>${f.targets?.length?`<div class="profiler-driver-targets">${f.targets.map(t=>`<span>${esc(t)}</span>`).join('')}</div>`:''}<p>${esc(f.detail)}</p><span class="profiler-driver-weight">${f.strength==='strong'?'mocny wpływ w modelu':f.strength==='medium'?'średni wpływ':f.strength==='low'?'mały wpływ':'większa niepewność'}</span></article>`).join('');
    const productSummary=`${profilerMethodLabel(input.method)} • ${fmt(result.chem.thcPotential)} mg potencjalnego THC`;
    return `<div class="profiler-result-card">
      <div class="profiler-result-head"><div><div class="kicker">Predykcja${input.label?' • '+esc(input.label):''}</div><h2>Profil działania</h2><p class="profiler-result-context">${esc(productSummary)}</p></div><div class="confidence-badge ${trust.tone}"><span>${trust.score}/100</span><small>zaufanie do wyniku</small></div></div>
      <div class="profiler-safety">Model edukacyjny, nie medyczny. Nie używaj wyniku do ustalania „bezpiecznej” dawki, prowadzenia pojazdu ani mieszania substancji.</div>

      <section class="profiler-result-overview" aria-label="Najważniejsze elementy predykcji">
        <div class="profiler-intensity-hero"><span>Przewidywana intensywność</span><strong>${fmt(result.dims.intensity)}<small>/10</small></strong><em>orientacyjny zakres ${fmt(intensityRange[0])}–${fmt(intensityRange[1])}</em></div>
        <div class="profiler-dominant-effects">${dominant.map(x=>`<div><span>${esc(x.l)}</span><strong>${fmt(x.v)}/10</strong></div>`).join('')}</div>
      </section>

      <div class="profiler-time-grid">
        <div><span>Początek</span><strong>${time?`~${fmt(time.onset)} min`:`${result.timing.onset[0]}–${result.timing.onset[1]} min`}</strong></div>
        <div><span>Peak</span><strong>${time?`~${fmt(time.peak)} min`:`${result.timing.peak[0]}–${result.timing.peak[1]} min`}</strong></div>
        <div><span>Dominujący efekt</span><strong>${time?`~${fmt(time.duration)} h`:`${result.timing.duration[0]}–${result.timing.duration[1]} h`}</strong></div>
      </div>

      <details class="profiler-disclosure profiler-full-profile">
        <summary><div><div class="kicker">Pełny profil</div><strong>9 dodatkowych wymiarów</strong></div><span class="profiler-disclosure-state"></span></summary>
        <div class="profiler-disclosure-body"><div class="profiler-section-head"><span>Każdy efekt ma własny zakres niepewności — nie wszystkie wymiary są równie przewidywalne.</span></div>
        <div class="profiler-score-list">${PROFILER_DIMS.filter(([k])=>k!=='intensity').map(([k,l])=>{const v=result.dims[k];const r=scoreRangeForDimension(k,v,result.confidence,result.personal);return `<div class="profiler-score"><div class="profiler-score-top"><span>${l}</span><strong>${fmt(v)} <small>/10</small></strong></div><div class="profiler-score-track"><span style="width:${clampN(v,0,10)*10}%"></span></div><div class="profiler-score-range">orientacyjny zakres ${fmt(r[0])}–${fmt(r[1])}</div></div>`}).join('')}</div></div>
      </details>

      <details class="profiler-disclosure profiler-model-why">
        <summary><div><div class="kicker">Dlaczego model tak uważa?</div><strong>${why.length} czynników wpływających na wynik</strong></div><span class="profiler-disclosure-state"></span></summary>
        <div class="profiler-disclosure-body"><div class="profiler-analysis-head"><div><h3>Najważniejsze sygnały i czego dotyczą</h3></div><span class="profiler-evidence-chip">heurystyka, nie pomiar</span></div>
        <div class="profiler-driver-list">${whyCards}</div></div>
      </details>

      <details class="profiler-disclosure profiler-trust-card">
        <summary><div><div class="kicker">Na ile ufać temu wynikowi?</div><strong>${trust.score}/100 • ${esc(trust.label)} zaufanie</strong></div><div class="profiler-trust-ring ${trust.tone}" style="--trust:${trust.score}%"><span>${trust.score}</span><small>/100</small></div><span class="profiler-disclosure-state"></span></summary>
        <div class="profiler-disclosure-body"><p class="profiler-trust-intro">To <strong>indeks jakości predykcji</strong>, a nie statystyczne prawdopodobieństwo poprawności. Największym ograniczeniem tej konkretnej predykcji jest teraz <strong>${esc(weakest?.label||'niepewność modelu')}</strong>.</p>
        <div class="profiler-trust-components">${trustBars}</div>
        ${caveats}</div>
      </details>

      <div class="profiler-personal-box ${result.personal.count?'active':''}"><div><div class="kicker">Personalizacja</div><strong>${result.personal.count ? `${result.personal.count} podobnych sesji użytych w kalibracji` : 'Jeszcze bez osobistej kalibracji'}</strong><p>${result.personal.count ? `Twoja historia wpływa na tę korektę w około ${Math.round(pWeight*100)}%. Efektywna liczba niezależnych dopasowań: ~${fmt(result.personal.effectiveN)}.${Number.isFinite(Number(result.personal.calibrationMae))?` Wcześniejszy średni błąd podobnych predykcji: ~${fmt(result.personal.calibrationMae)} pkt /10.`:''}` : 'Zapisz sesję, a po użyciu dodaj rzeczywiste odczucia. Kolejne predykcje będą porównywane z najbardziej podobnymi wpisami.'}</p></div></div>
      <div class="profiler-next-actions"><div><span>Co dalej?</span><strong>${saved?'Sesja zapisana — po fakcie uzupełnij rzeczywisty efekt.':'Jeśli chcesz później kalibrować model, zapisz tę predykcję.'}</strong></div><div class="profiler-actions">${saved?'<span class="pill"><strong>Zapisano</strong></span>':'<button type="button" class="button" id="saveProfilerSession">Zapisz tę sesję</button>'}<button type="button" class="button-secondary" data-prof-action="edit-current">Zmień dane i przelicz</button></div></div>
    </div>`;
  }

  function feedbackSummaryHTML(f={}) {
    const parts=[];
    for (const [k,l] of PROFILER_DIMS) {
      if (!Number.isFinite(Number(f[k]))) continue;
      parts.push(`<span>${esc(l)} <strong>${fmt(f[k])}/10</strong></span>`);
      if (parts.length>=3) break;
    }
    return parts.length ? `<div class="session-actual session-actual-flex">${parts.join('')}</div>` : '<div class="session-pending">Zapisano sesję, ale nie oceniono jeszcze żadnego wymiaru.</div>';
  }

  function profilerHistoryHTML(sessions) {
    if (!sessions.length) return `<section class="profiler-history panel"><div class="kicker">Historia</div><h2>Jeszcze pusto</h2><p>Po zapisaniu predykcji pojawi się tutaj sesja. Później uzupełnisz, jak było naprawdę — właśnie te dane pozwolą personalizować kolejne wyniki.</p></section>`;
    const withFeedback=sessions.filter(s=>feedbackHasData(s.feedback)).length;
    return `<section class="profiler-history panel"><div class="profiler-history-head"><div><div class="kicker">Historia i model osobisty</div><h2>${sessions.length} sesji • ${withFeedback} z odczuciami</h2></div><div class="profiler-actions"><button class="button-secondary" type="button" data-prof-action="export">Eksport JSON</button><button class="button-secondary danger" type="button" data-prof-action="clear">Wyczyść historię</button></div></div>
      <div class="profiler-history-list">${sessions.slice(0,30).map(s=>{const chem=chemistryFromInput(s.input);const p=s.prediction;return `<article class="profiler-session ${feedbackHasData(s.feedback)?'calibrated':''}"><div class="profiler-session-main"><div class="kicker">${new Date(s.createdAt).toLocaleString('pl-PL')}</div><h3>${esc(s.input.label||'Sesja bez nazwy')}</h3><p>${esc(s.input.route)} • THC w porcji: ${fmt(chem.thcPotential)} mg • przewidziana intensywność ${fmt(p?.dims?.intensity||0)}/10</p>${feedbackHasData(s.feedback)?feedbackSummaryHTML(s.feedback):'<div class="session-pending">Czeka na opis rzeczywistego efektu</div>'}</div><div class="profiler-session-actions"><button type="button" class="button" data-prof-action="feedback" data-id="${s.id}">${s.feedback?'Edytuj odczucia':'Jak było naprawdę?'}</button><button type="button" class="button-secondary" data-prof-action="reuse" data-id="${s.id}">Użyj jako szablonu</button><button type="button" class="icon-delete" aria-label="Usuń sesję" data-prof-action="delete" data-id="${s.id}">×</button></div></article>`}).join('')}</div></section>`;
  }

  function profilerFeedbackHTML(session) {
    const f=session.feedback||{};
    const sliders=PROFILER_DIMS.map(([k,l])=>{
      const rated=Number.isFinite(Number(f[k]));
      const value=rated?clampN(f[k],0,10):5;
      return `<div class="feedback-slider ${rated?'rated':'unrated'}" data-feedback-dim="${k}"><span>${l}<output id="fb_${k}_out">${rated?fmt(value)+'/10':'—'}</output></span><div class="feedback-control-row"><input type="range" name="${k}" min="0" max="10" step="0.5" value="${value}" ${rated?'':'disabled'}><label class="feedback-rate-toggle"><input type="checkbox" name="rated_${k}" ${rated?'checked':''}><span>${rated?'Uwzględnij':'Oceń'}</span></label></div></div>`;
    }).join('');
    return `<section class="profiler-feedback panel" id="profilerFeedbackEditor"><div class="profiler-feedback-head"><div><div class="kicker">Kalibracja osobista</div><h2>Jak było naprawdę?</h2><p>${esc(session.input.label||'Sesja bez nazwy')} • ${new Date(session.createdAt).toLocaleString('pl-PL')}</p></div><button type="button" class="icon-delete" data-prof-action="close-feedback" aria-label="Zamknij">×</button></div>
      <form id="profilerFeedbackForm" data-id="${session.id}"><div class="feedback-intro"><strong>Oceń tylko to, co pamiętasz.</strong><span>Nieporuszone suwaki nie trafiają do personalizacji i nie są sztucznie zapisywane jako 5/10.</span></div><div class="feedback-grid">${sliders}</div>
      <div class="profiler-field-grid"><label class="profiler-field"><span>Początek działania (min)</span><input type="number" name="onsetMin" min="0" max="1440" step="1" value="${f.onsetMin??''}" placeholder="opcjonalnie"></label><label class="profiler-field"><span>Peak po (min)</span><input type="number" name="peakMin" min="0" max="1440" step="1" value="${f.peakMin??''}" placeholder="opcjonalnie"></label><label class="profiler-field"><span>Dominujący efekt trwał (h)</span><input type="number" name="durationH" min="0" max="48" step="0.25" value="${f.durationH??''}" placeholder="opcjonalnie"></label><label class="profiler-field wide"><span>Notatka <small>opcjonalnie</small></span><textarea name="note" rows="3" maxlength="600" placeholder="Co było charakterystyczne?">${esc(f.note||'')}</textarea></label></div>
      <div class="profiler-note">Te oceny są Twoją obserwacją, nie „prawdą o odmianie”. Profiler wykorzystuje wyłącznie zaznaczone wymiary do kalibracji podobnych sesji.</div><div class="profiler-actions"><button class="button" type="submit">Zapisz rzeczywisty efekt</button><button class="button-secondary" type="button" data-prof-action="close-feedback">Anuluj</button></div></form></section>`;
  }

  function renderProfiler() {
    stickyMount.innerHTML='';
    let sessions=profilerSessions();
    let currentInput=null, currentResult=null, currentSaved=false;
    app.innerHTML=`<div class="stack profiler-page"><section class="page-cover card profiler-cover"><div class="card-bg"><img class="card-bg" src="${visual('profiler-v10','#d4ff6f','PROFILER')}" alt="" /></div><div class="card-shade"></div><div class="page-cover-main"><div class="kicker">Profiler osobisty</div><h1 class="section-title">Profiler działania cannabis</h1><p class="section-lead">Wprowadź skład produktu, sposób użycia i kontekst, aby zobaczyć orientacyjny profil działania oraz zakres niepewności. Jeśli zapisujesz własne odczucia, kolejne wyniki mogą uwzględniać podobne wcześniejsze sesje.</p><div class="pills"><span class="pill">zakres zamiast jednej liczby</span><span class="pill">ostrożna waga terpenów</span><span class="pill">personalizacja z historii</span></div></div><div class="page-cover-visual"><img src="${visual('profiler-model','#9580ff','CHEMIA → TY → EFEKT')}" alt="Schemat Profilera" /></div></section>
      <section class="profiler-disclaimer"><strong>Ważne:</strong> to edukacyjny model heurystyczny, nie test medyczny ani narzędzie do określania bezpiecznej dawki. Subiektywne działanie cannabis jest bardzo zmienne, a wpływu terpenów nie da się obecnie wiarygodnie przeliczać na konkretne odczucia u człowieka.</section>
      <nav id="profilerJourney" class="profiler-journey" aria-label="Etapy Profilera">
        <button type="button" data-prof-jump="profilerStepProduct"><b>1</b><span>Produkt</span><small>podanie</small></button>
        <button type="button" data-prof-jump="profilerStepChem"><b>2</b><span>Chemia</span><small>wymagane</small></button>
        <button type="button" data-prof-jump="profilerStepTerps" class="optional"><b>3</b><span>Terpeny</span><small>opcjonalne</small></button>
        <button type="button" data-prof-jump="profilerStepContext"><b>4</b><span>Ty</span><small>kontekst</small></button>
      </nav>
      <div class="profiler-layout"><div>${profilerFormHTML()}</div><aside id="profilerResult" class="profiler-result">${profilerEmptyResultHTML()}</aside></div>
      <div id="profilerFeedbackMount"></div><div id="profilerHistoryMount">${profilerHistoryHTML(sessions)}</div></div>`;

    const form=document.getElementById('profilerForm');
    const resultMount=document.getElementById('profilerResult');
    const historyMount=document.getElementById('profilerHistoryMount');
    const feedbackMount=document.getElementById('profilerFeedbackMount');
    const validation=document.getElementById('profilerValidation');
    const product=document.getElementById('profilerProduct');
    const route=document.getElementById('profilerRoute'), method=document.getElementById('profilerMethod');
    const frequency=document.getElementById('profilerFrequency');
    const routeField=document.getElementById('profilerRouteField'), methodField=document.getElementById('profilerMethodField');
    const vaporTempField=document.getElementById('profilerVaporTempField'), mealField=document.getElementById('profilerMealField');
    const daysField=document.getElementById('profilerDaysField'), modeSwitch=document.getElementById('profilerModeSwitch');
    const autoHint=document.getElementById('profilerAutoHint');
    const pctPane=document.getElementById('profilerChemPercent'), mgPane=document.getElementById('profilerChemMg');
    const chemStatus=document.getElementById('profilerChemStatus');
    const terpPane=document.getElementById('profilerTerpPane'), terpStatus=document.getElementById('profilerTerpStatus');
    const journey=document.getElementById('profilerJourney');
    const readyState=document.getElementById('profilerReadyState');
    const submitBtn=document.getElementById('profilerSubmit');

    function refreshHistory(){sessions=profilerSessions();historyMount.innerHTML=profilerHistoryHTML(sessions);}
    function setSourceMode(value){const radio=form.querySelector(`input[name="sourceMode"][value="${value}"]`);if(radio)radio.checked=true;syncMode();}
    function syncMode(){const m=form.querySelector('input[name="sourceMode"]:checked')?.value||'percent';pctPane.hidden=m!=='percent';mgPane.hidden=m!=='mg';}
    function syncOutputs(){const pairs=[['sensitivityInput','sensitivityOut',v=>Number(v).toFixed(2)+'×'],['stressInput','stressOut',v=>v+'/10'],['fatigueInput','fatigueOut',v=>v+'/10']];pairs.forEach(([i,o,f])=>{const input=document.getElementById(i),out=document.getElementById(o);if(input&&out)out.textContent=f(input.value);});}
    function syncFrequency(){
      const days=form.elements.namedItem('daysSince');
      const never=frequency.value==='never';
      daysField.hidden=never;
      if(never){if(days.value && days.value!=='365')days.dataset.previous=days.value;days.value='365';}
      else if(days.value==='365' && days.dataset.previous)days.value=days.dataset.previous;
    }
    function syncConditionalFields(){
      const type=product.value;
      const fixedRoute=['flower','hash','concentrate','vape','edible'].includes(type);
      routeField.hidden=fixedRoute;
      methodField.hidden=['vape','edible','oil'].includes(type);
      const temp=form.elements.namedItem('vaporTemp');
      const showTemp=route.value==='inhaled' && method.value==='vaporizer';
      vaporTempField.hidden=!showTemp;
      if(!showTemp)temp.value='';
      const meal=form.elements.namedItem('meal');
      mealField.hidden=route.value!=='oral';
      if(route.value!=='oral')meal.value='unknown';
      modeSwitch.hidden=type==='edible';
      if(type==='edible')setSourceMode('mg');
    }
    function syncRoute(preferredMethod=method.value){
      method.innerHTML=routeMethodOptions(route.value,preferredMethod,product.value);
      if(!method.value)method.selectedIndex=0;
      syncConditionalFields();
    }
    function applyProductRules(useDefaults=false){
      const type=product.value;
      const previousMethod=method.value;
      if(['flower','hash','concentrate','vape'].includes(type))route.value='inhaled';
      else if(type==='edible')route.value='oral';
      else if(type==='oil'){if(useDefaults||!['oral','sublingual'].includes(route.value))route.value='sublingual';}

      let preferred=previousMethod;
      if(type==='vape')preferred='cart';
      else if(type==='edible')preferred='edible';
      else if(type==='oil')preferred='oil';
      else if(type==='concentrate' && !['dab','vaporizer'].includes(preferred))preferred='dab';
      else if(type==='flower' && !['vaporizer','bong','joint','pipe'].includes(preferred))preferred='vaporizer';
      else if(type==='hash' && !['vaporizer','bong','joint','pipe'].includes(preferred))preferred='vaporizer';

      if(useDefaults){
        if(type==='edible'||type==='oil')setSourceMode('mg');
        else setSourceMode('percent');
      }
      syncRoute(preferred);
      const messages={
        flower:'Susz → inhalacja. Wybierz tylko sposób inhalacji.',
        hash:'Hash → inhalacja. Wybierz sposób inhalacji.',
        concentrate:'Koncentrat → inhalacja. Dostępne są tylko metody pasujące do koncentratu.',
        vape:'Vape → inhalacja + cartridge. Droga podania i metoda są ustawione automatycznie.',
        edible:'Edible → droga doustna + mg w porcji. Pokazane są tylko pola, które mają tu zastosowanie.',
        oil:'Olej → wybierz tylko: podjęzykowo albo doustnie; metoda jest ustawiana automatycznie.'
      };
      autoHint.textContent=messages[type]||'';
    }

    function syncTerpeneMode(){
      const mode=form.querySelector('input[name="terpeneMode"]:checked')?.value||'unknown';
      terpPane.hidden=mode!=='known';
    }
    function renderProfilerValidation(input){
      const issues=profilerValidationIssues(input);
      const chemMessages=[];
      if(input.sourceMode==='percent'){
        const known=input.chemistryKnown||{};
        const total=['thcPct','thcaPct','cbdPct','cbdaPct','cbgPct','cbnPct'].reduce((s,k)=>s+(known[k]?Number(input[k]||0):0),0);
        if(Object.values(known).some(Boolean)) chemMessages.push(`Rozpoznane pola składu: ${Object.values(known).filter(Boolean).length} • suma wpisanych kannabinoidów: ${total.toFixed(1)}%`);
      } else if(input.chemistryKnown?.thcMg) chemMessages.push(`THC w porcji: ${fmt(input.thcMg)} mg`);
      chemStatus.innerHTML=[...issues.errors.map(x=>`<span class="status-error">${esc(x)}</span>`),...chemMessages.map(x=>`<span class="status-ok">${esc(x)}</span>`)].join('');
      if(input.terpeneMode==='known'){
        const count=Object.values(input.terpenesKnown||{}).filter(Boolean).length;
        const total=PROFILER_TERPS.reduce((s,[k])=>s+(input.terpenesKnown?.[k]?Number(input.terpenes?.[k]||0):0),0);
        const warning=issues.warnings.filter(x=>/terpen|COA|jednostk/i.test(x));
        terpStatus.innerHTML=[`<span class="${count?'status-ok':'status-warn'}">${count?`${count} wpisanych wartości • suma ${total.toFixed(2)}%`:'Nie wpisano jeszcze żadnej wartości.'}</span>`,...warning.map(x=>`<span class="status-warn">${esc(x)}</span>`)].join('');
      } else terpStatus.innerHTML='';
      return issues;
    }
    function updateProfilerJourney(){
      const input=collectProfilerInput(form);
      const issues=renderProfilerValidation(input);
      const ready=profilerInputIsUsable(input) && !issues.errors.length;
      const terpFilled=input.terpeneMode==='known' && Object.values(input.terpenesKnown||{}).some(Boolean);
      const states={profilerStepProduct:true,profilerStepChem:ready,profilerStepTerps:terpFilled,profilerStepContext:true};
      journey?.querySelectorAll('[data-prof-jump]').forEach(btn=>{
        const id=btn.dataset.profJump;
        btn.classList.toggle('complete',!!states[id]);
        if(id==='profilerStepChem')btn.classList.toggle('needs-attention',!ready);
      });
      if(readyState){
        readyState.classList.toggle('ready',ready);
        readyState.classList.toggle('missing',!ready);
        readyState.querySelector('span:last-child').textContent=ready
          ? 'Dane wystarczą do predykcji'
          : (issues.errors[0] || (input.sourceMode==='mg'?'Podaj THC w mg w użytej porcji':'Podaj ilość produktu oraz THC lub THCA'));
      }
      if(submitBtn){submitBtn.disabled=!ready;submitBtn.title=ready?'Policz predykcję':'Uzupełnij wymagane dane chemiczne';}
    }
    function scrollProfilerNode(node){
      if(!node)return;
      const headerH=document.querySelector('.topbar')?.getBoundingClientRect().height||88;
      const top=Math.max(0,window.scrollY+node.getBoundingClientRect().top-headerH-12);
      window.scrollTo({top,behavior:'smooth'});
    }
    function jumpProfiler(id){scrollProfilerNode(document.getElementById(id));}
    journey?.addEventListener('click',e=>{const btn=e.target.closest?.('[data-prof-jump]');if(btn)jumpProfiler(btn.dataset.profJump);});

    form.addEventListener('input',e=>{if(e.target.name==='sourceMode')syncMode();if(e.target.name==='terpeneMode')syncTerpeneMode();syncOutputs();updateProfilerJourney();});
    form.addEventListener('change',e=>{if(e.target.name==='terpeneMode'){syncTerpeneMode();updateProfilerJourney();}});
    product.addEventListener('change',()=>{applyProductRules(true);updateProfilerJourney();});
    route.addEventListener('change',()=>{syncRoute(method.value);updateProfilerJourney();});
    method.addEventListener('change',()=>{syncConditionalFields();updateProfilerJourney();});
    frequency.addEventListener('change',()=>{syncFrequency();updateProfilerJourney();});
    syncMode();syncTerpeneMode();syncOutputs();syncFrequency();applyProductRules(false);updateProfilerJourney();

    form.addEventListener('submit',e=>{
      e.preventDefault();
      const input=collectProfilerInput(form);
      const issues=profilerValidationIssues(input);
      if(!profilerInputIsUsable(input)||issues.errors.length){validation.innerHTML=issues.errors.length?issues.errors.map(x=>`<span>${esc(x)}</span>`).join(''): (input.sourceMode==='mg'?'Podaj THC w mg dla użytej porcji.':'Podaj ilość produktu oraz THC lub THCA.');jumpProfiler('profilerStepChem');updateProfilerJourney();return;}
      validation.innerHTML=issues.warnings.length?issues.warnings.map(x=>`<span>${esc(x)}</span>`).join(''):'';currentInput=input;currentResult=personalizedProfilerPrediction(input,sessions);currentSaved=false;resultMount.innerHTML=profilerResultHTML(input,currentResult,false);
      requestAnimationFrame(()=>scrollProfilerNode(resultMount));
    });

    form.querySelector('#profilerReset').addEventListener('click',()=>{form.reset();syncMode();syncTerpeneMode();syncOutputs();syncFrequency();applyProductRules(false);validation.textContent='';currentInput=null;currentResult=null;currentSaved=false;resultMount.innerHTML=profilerEmptyResultHTML();updateProfilerJourney();jumpProfiler('profilerStepProduct');});

    resultMount.addEventListener('click',e=>{
      const target=e.target.closest?.('button');
      if(!target)return;
      if(target.dataset.profAction==='edit-current'){jumpProfiler('profilerStepProduct');return;}
      if(target.id!=='saveProfilerSession'||!currentInput||!currentResult||currentSaved)return;
      const item={id:profilerId(),createdAt:new Date().toISOString(),input:currentInput,prediction:currentResult,feedback:null};
      sessions.unshift(item);saveProfilerSessions(sessions);currentSaved=true;resultMount.innerHTML=profilerResultHTML(currentInput,currentResult,true);refreshHistory();
    });

    function fillForm(input){
      if(!input)return;
      Object.entries(input).forEach(([k,v])=>{
        if(['terpenes','terpenesKnown','chemistryKnown'].includes(k))return;
        const el=form.elements.namedItem(k);if(!el)return;
        if(el instanceof RadioNodeList){const radio=form.querySelector(`input[name="${k}"][value="${CSS.escape(String(v))}"]`);if(radio)radio.checked=true;}
        else if(el.type==='checkbox')el.checked=!!v;else el.value=v??'';
      });
      Object.entries(input.terpenes||{}).forEach(([k,v])=>{const el=form.elements.namedItem('terp_'+k);if(el)el.value=(input.terpenesKnown?.[k]||Number(v)>0)?v:'';});
      const terpMode=input.terpeneMode || (Object.values(input.terpenesKnown||{}).some(Boolean)||Object.values(input.terpenes||{}).some(v=>Number(v)>0)?'known':'unknown');
      const terpRadio=form.querySelector(`input[name="terpeneMode"][value="${terpMode}"]`);if(terpRadio)terpRadio.checked=true;
      syncMode();syncTerpeneMode();syncOutputs();syncFrequency();applyProductRules(false);updateProfilerJourney();jumpProfiler('profilerStepProduct');
    }

    app.addEventListener('click',e=>{
      const btn=e.target.closest?.('[data-prof-action]');if(!btn)return;const action=btn.dataset.profAction,id=btn.dataset.id;
      if(action==='feedback'){const s=sessions.find(x=>x.id===id);if(s){feedbackMount.innerHTML=profilerFeedbackHTML(s);feedbackMount.scrollIntoView({behavior:'smooth',block:'start'});}}
      if(action==='close-feedback'){feedbackMount.innerHTML='';}
      if(action==='reuse'){const s=sessions.find(x=>x.id===id);if(s)fillForm(s.input);}
      if(action==='delete'){const s=sessions.find(x=>x.id===id);if(s&&confirm('Usunąć tę sesję z historii?')){sessions=sessions.filter(x=>x.id!==id);saveProfilerSessions(sessions);feedbackMount.innerHTML='';refreshHistory();}}
      if(action==='clear'){if(confirm('Usunąć całą historię Profilera? Tej operacji nie da się cofnąć.')){sessions=[];saveProfilerSessions([]);feedbackMount.innerHTML='';refreshHistory();}}
      if(action==='export'){
        const blob=new Blob([JSON.stringify({version:1,exportedAt:new Date().toISOString(),sessions},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='neuroatlas-profiler-history.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
      }
    });

    app.addEventListener('input',e=>{
      if(e.target.closest?.('#profilerFeedbackForm')&&e.target.type==='range'){
        const out=document.getElementById('fb_'+e.target.name+'_out');if(out)out.textContent=Number(e.target.value).toFixed(1)+'/10';
      }
    });
    app.addEventListener('change',e=>{
      const fb=e.target.closest?.('#profilerFeedbackForm');
      if(!fb||e.target.type!=='checkbox'||!String(e.target.name).startsWith('rated_'))return;
      const key=e.target.name.slice(6), row=fb.querySelector(`[data-feedback-dim="${CSS.escape(key)}"]`), range=fb.elements.namedItem(key), out=document.getElementById('fb_'+key+'_out');
      if(range)range.disabled=!e.target.checked;
      row?.classList.toggle('rated',e.target.checked);row?.classList.toggle('unrated',!e.target.checked);
      const label=e.target.nextElementSibling;if(label)label.textContent=e.target.checked?'Uwzględnij':'Oceń';
      if(out)out.textContent=e.target.checked?Number(range?.value||5).toFixed(1)+'/10':'—';
    });
    app.addEventListener('submit',e=>{
      const fb=e.target.closest?.('#profilerFeedbackForm');if(!fb)return;e.preventDefault();
      const id=fb.dataset.id,s=sessions.find(x=>x.id===id);if(!s)return;const fd=new FormData(fb),feedback={};
      PROFILER_DIMS.forEach(([k])=>{if(fd.get('rated_'+k)==='on'&&fd.has(k))feedback[k]=clampN(Number(fd.get(k)),0,10);});
      feedback.onsetMin=clampN(Number(fd.get('onsetMin')||0),0,1440)||null;feedback.peakMin=clampN(Number(fd.get('peakMin')||0),0,1440)||null;feedback.durationH=clampN(Number(fd.get('durationH')||0),0,48)||null;feedback.note=String(fd.get('note')||'').trim().slice(0,600);
      s.feedback=feedback;saveProfilerSessions(sessions);feedbackMount.innerHTML='<section class="panel profiler-saved"><div class="kicker">Zapisano</div><h2>Odczucia dodane do Twojej historii.</h2><p>Przy kolejnych analizach Profiler będzie szukał najbardziej podobnych sesji pod względem sposobu użycia, ekspozycji THC, tolerancji i profilu chemicznego.</p></section>';refreshHistory();
    });
  }

  function renderGraph() {
    stickyMount.innerHTML = '';
    app.innerHTML = `
      <div class="stack graph-page-stack">
        <section class="page-cover card graph-intro-card">
          <div class="card-bg"><img class="card-bg" src="${visual('graph-v8-3', '#89f7ad', 'MAPA WIEDZY') }" alt="" /></div><div class="card-shade"></div>
          <div class="page-cover-main"><div class="kicker">Mapa wiedzy</div><h1 class="section-title">Zobacz, jak pojęcia łączą się ze sobą</h1><p class="section-lead">Przeglądaj zależności między kategoriami. Kliknij element, aby wyróżnić jego relacje, zobaczyć najważniejszy kontekst i przejść do pełnego opisu.</p></div>
          <div class="page-cover-visual"><img src="${visual('graph-v8-3-hero', '#86efff', 'RELACJE → KONTEKST') }" alt="Okładka strony mapa wiedzy" /></div>
        </section>

        <section id="graphExplorer" class="graph-explorer card">
          <div class="graph-toolbar">
            <label class="graph-control"><span>Kategoria</span><select id="graphCategory" class="filter"><option value="all">Wszystkie kategorie</option>${[...data.categories].sort((a,b)=>(a.order||0)-(b.order||0)).map(cat => `<option value="${esc(cat.id)}">${esc(cat.title)}</option>`).join('')}</select></label>
            <label class="graph-control"><span>Kurs</span><select id="graphPath" class="filter"><option value="all">Cała baza</option>${data.learning_paths.map(path => `<option value="${esc(path.id)}">${esc(path.title)}</option>`).join('')}</select></label>
            <div class="graph-toolbar-actions">
              <button id="graphFit" class="button-secondary graph-tool-btn" type="button">Dopasuj</button>
              <button id="graphReset" class="button-secondary graph-tool-btn" type="button">Reset</button>
              <button id="graphFullscreen" class="button graph-tool-btn" type="button">Pełny ekran</button>
            </div>
          </div>

          <div class="graph-workspace">
            <div id="graphViewport" class="graph-viewport" tabindex="0">
              <div class="graph-help">Przeciągnij tło, aby przesunąć mapę • kółko lub gest = zoom • stuknij / kliknij pojęcie, aby zobaczyć relacje • użyj „Otwórz temat”, aby przejść dalej</div>
              <button id="graphQuickOpen" class="graph-quick-open" type="button" hidden>Otwórz wybrany temat</button>
              <svg id="graphSvg" viewBox="0 0 2400 1600" preserveAspectRatio="xMidYMid meet" aria-label="Interaktywna mapa wiedzy">
                <defs>
                  <filter id="nodeGlow"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                  <marker id="arrowDep" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="rgba(137,247,173,.88)"/></marker>
                  <marker id="arrowPath" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="rgba(255,217,120,.92)"/></marker>
                </defs>
                <g id="graphCamera">
                  <g id="graphZones" class="graph-zone-layer"></g>
                  <g id="graphEdges" class="graph-edge-layer"></g>
                  <g id="graphNodes" class="graph-node-layer"></g>
                </g>
              </svg>
            </div>
            <aside id="graphInfo" class="graph-info-panel"></aside>
          </div>
        </section>
      </div>`;

    const explorer = document.getElementById('graphExplorer');
    const viewport = document.getElementById('graphViewport');
    const svg = document.getElementById('graphSvg');
    const camera = document.getElementById('graphCamera');
    const zoneLayer = document.getElementById('graphZones');
    const edgeLayer = document.getElementById('graphEdges');
    const nodeLayer = document.getElementById('graphNodes');
    const info = document.getElementById('graphInfo');
    const categorySelect = document.getElementById('graphCategory');
    const pathSelect = document.getElementById('graphPath');
    const fitBtn = document.getElementById('graphFit');
    const resetBtn = document.getElementById('graphReset');
    const fullscreenBtn = document.getElementById('graphFullscreen');
    const quickOpen = document.getElementById('graphQuickOpen');
    const NS = 'http://www.w3.org/2000/svg';

    let MAP_W = 2400, MAP_H = 1600;
    let model = {nodes:[], edges:[], concepts:[], zones:[]};
    let selectedId = null;
    let hoveredId = null;
    let transform = {x:0, y:0, scale:1};
    let dragging = false;
    let dragStart = {x:0,y:0,tx:0,ty:0};
    let dragDistance = 0;
    let resizeObserver = null;

    const cfg = {
      zoneW: 590,
      zoneHeaderH: 82,
      cellW: 170,
      cellH: 62,
      cols: 3,
      padX: 28,
      padBottom: 28,
      gapX: 72,
      gapY: 72,
      outer: 64
    };

    function currentConcepts() {
      let concepts = visibleConcepts();
      if (pathSelect.value !== 'all') {
        const allowed = new Set(pathById.get(pathSelect.value)?.steps || []);
        concepts = concepts.filter(c => allowed.has(c.id));
      }
      if (categorySelect.value !== 'all') concepts = concepts.filter(c => c.category === categorySelect.value);
      return concepts;
    }

    function zoneHeight(itemCount) {
      const rows = Math.max(1, Math.ceil(itemCount / cfg.cols));
      return cfg.zoneHeaderH + rows * cfg.cellH + cfg.padBottom + 20;
    }

    function buildModel() {
      const concepts = currentConcepts();
      const grouped = new Map();
      concepts.forEach(c => { if (!grouped.has(c.category)) grouped.set(c.category, []); grouped.get(c.category).push(c); });
      const cats = [...grouped.keys()].map(id => categoryById.get(id)).filter(Boolean).sort((a,b)=>(a.order||0)-(b.order||0));
      const zones=[]; const nodes=[]; const edges=[]; const visibleIds=new Set(concepts.map(c=>c.id));

      const viewportWide = viewport.clientWidth >= 1050;
      const columnCount = categorySelect.value !== 'all' ? 1 : (viewportWide ? 3 : 2);
      const colY = Array(columnCount).fill(cfg.outer);

      cats.forEach((cat, catIndex) => {
        const items = (grouped.get(cat.id) || []).slice().sort((a,b)=>a.difficulty-b.difficulty || a.title.localeCompare(b.title,'pl'));
        const h = zoneHeight(items.length);
        let col = 0;
        if (columnCount > 1) {
          col = colY.indexOf(Math.min(...colY));
        }
        const zx = cfg.outer + col * (cfg.zoneW + cfg.gapX);
        const zy = colY[col];
        colY[col] += h + cfg.gapY;
        zones.push({id:cat.id,x:zx,y:zy,w:cfg.zoneW,h,label:cat.title,count:items.length,data:cat});

        items.forEach((c,i)=>{
          const cc=i%cfg.cols, rr=Math.floor(i/cfg.cols);
          const x=zx+cfg.padX+cc*cfg.cellW+cfg.cellW/2;
          const y=zy+cfg.zoneHeaderH+rr*cfg.cellH+cfg.cellH/2;
          nodes.push({id:c.id,rawId:c.id,kind:'concept',label:c.title,category:c.category,x,y,data:c});
        });
      });

      concepts.forEach(c => {
        (c.dependencies||[]).forEach(dep=>{if(visibleIds.has(dep)) edges.push({from:dep,to:c.id,kind:'dependency'});});
        (c.related||[]).slice(0,2).forEach(rel=>{if(visibleIds.has(rel.id)) edges.push({from:c.id,to:rel.id,kind:'related'});});
      });
      if(pathSelect.value!=='all'){
        const steps=pathById.get(pathSelect.value)?.steps||[];
        for(let i=0;i<steps.length-1;i++) if(visibleIds.has(steps[i])&&visibleIds.has(steps[i+1])) edges.push({from:steps[i],to:steps[i+1],kind:'path'});
      }

      const maxX = zones.length ? Math.max(...zones.map(z=>z.x+z.w)) + cfg.outer : 1200;
      const maxY = zones.length ? Math.max(...zones.map(z=>z.y+z.h)) + cfg.outer : 800;
      MAP_W = Math.max(1200,maxX);
      MAP_H = Math.max(800,maxY);
      svg.setAttribute('viewBox',`0 0 ${MAP_W} ${MAP_H}`);
      return {nodes,edges,concepts,zones};
    }

    function createSvg(tag,attrs={}){const el=document.createElementNS(NS,tag);Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,String(v)));return el;}
    function clippedLabel(title){return title.length>19?title.slice(0,18)+'…':title;}

    function renderEmptyInfo(){
      info.classList.remove('has-active');
      if(quickOpen){quickOpen.hidden=true;quickOpen.dataset.concept='';quickOpen.textContent='Otwórz wybrany temat';}
      info.innerHTML=`<div class="graph-info-empty"><div class="kicker">Szczegóły</div><h3>Wybierz pojęcie na mapie</h3><p>Stuknij lub kliknij element, aby zobaczyć jego relacje i szczegóły. Potem użyj przycisku „Otwórz temat”.</p>${graphLegendHTML()}</div>`;
    }

    function renderModel(){
      model=buildModel();
      zoneLayer.innerHTML=''; edgeLayer.innerHTML=''; nodeLayer.innerHTML='';
      selectedId=null; hoveredId=null; renderEmptyInfo();
      const byId=new Map(model.nodes.map(n=>[n.id,n]));
      if(!model.nodes.length){info.innerHTML='<div class="kicker">Mapa</div><h3>Brak wyników</h3><p>Zmień filtry.</p>';return;}

      model.zones.forEach(zone=>{
        const g=createSvg('g',{class:'graph-zone'});
        const rect=createSvg('rect',{x:zone.x,y:zone.y,width:zone.w,height:zone.h,rx:30,class:'graph-zone-bg',stroke:catAccent(zone.id)});
        const accent=createSvg('rect',{x:zone.x+1,y:zone.y+1,width:8,height:zone.h-2,rx:4,class:'graph-zone-accent',fill:catAccent(zone.id)});
        const title=createSvg('text',{x:zone.x+26,y:zone.y+34,class:'graph-zone-title'});title.textContent=zone.label;
        const count=createSvg('text',{x:zone.x+zone.w-26,y:zone.y+34,'text-anchor':'end',class:'graph-zone-count'});count.textContent=zone.count+' pojęć';
        const rule=createSvg('line',{x1:zone.x+26,y1:zone.y+58,x2:zone.x+zone.w-26,y2:zone.y+58,class:'graph-zone-rule'});
        g.append(rect,accent,title,count,rule);zoneLayer.appendChild(g);
      });

      model.edges.forEach(edge=>{
        const a=byId.get(edge.from),b=byId.get(edge.to);if(!a||!b)return;
        const line=createSvg('line',{x1:a.x,y1:a.y,x2:b.x,y2:b.y,class:'graph-edge '+edge.kind});
        if(edge.kind==='dependency')line.setAttribute('marker-end','url(#arrowDep)');
        if(edge.kind==='path')line.setAttribute('marker-end','url(#arrowPath)');
        line.dataset.from=edge.from;line.dataset.to=edge.to;edgeLayer.appendChild(line);
      });

      model.nodes.forEach(node=>{
        const g=createSvg('g',{class:'graph-node type-concept',transform:`translate(${node.x},${node.y})`,tabindex:'0'});g.dataset.id=node.id;
        const rect=createSvg('rect',{x:-74,y:-22,width:148,height:44,rx:13,fill:'#101716',stroke:catAccent(node.category),'stroke-width':2,class:'graph-node-shape'});
        const textEl=createSvg('text',{'text-anchor':'middle',y:5,class:'graph-node-label concept-label'});textEl.textContent=clippedLabel(node.label);
        const title=createSvg('title');title.textContent=node.label;
        g.append(rect,textEl,title);
        g.addEventListener('mouseenter',()=>{hoveredId=node.id;updateHighlight();});
        g.addEventListener('mouseleave',()=>{hoveredId=null;updateHighlight();});
        g.addEventListener('focus',()=>{hoveredId=node.id;updateHighlight();});
        g.addEventListener('blur',()=>{hoveredId=null;updateHighlight();});
        g.addEventListener('click',e=>{e.stopPropagation();selectedId=node.id;updateHighlight();updateInfo(node);if(quickOpen){quickOpen.hidden=false;quickOpen.dataset.concept=node.rawId;quickOpen.textContent='Otwórz: '+node.label;}});
        g.addEventListener('dblclick',e=>{e.stopPropagation();navigateToHash('#/concept/'+encodeURIComponent(node.rawId));});
        g.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();navigateToHash('#/concept/'+encodeURIComponent(node.rawId));}else if(e.key===' '){e.preventDefault();selectedId=node.id;updateHighlight();updateInfo(node);if(quickOpen){quickOpen.hidden=false;quickOpen.dataset.concept=node.rawId;quickOpen.textContent='Otwórz: '+node.label;}}});
        nodeLayer.appendChild(g);
      });
      updateHighlight();requestAnimationFrame(fitToContent);
    }

    function updateHighlight(){
      const connected=new Set();
      if(selectedId) connected.add(selectedId);
      edgeLayer.querySelectorAll('.graph-edge').forEach(line=>{
        const active=!!selectedId&&(line.dataset.from===selectedId||line.dataset.to===selectedId);
        const pathVisible=line.classList.contains('path')&&pathSelect.value!=='all';
        line.classList.toggle('active',active);
        line.classList.toggle('path-visible',pathVisible&&!selectedId);
        if(active){connected.add(line.dataset.from);connected.add(line.dataset.to);}
      });
      nodeLayer.querySelectorAll('.graph-node').forEach(g=>{
        const id=g.dataset.id;
        const isSelected=!!selectedId&&id===selectedId;
        const isHovered=!!hoveredId&&id===hoveredId;
        const isConnected=!!selectedId&&connected.has(id)&&!isSelected;
        g.classList.toggle('active',isSelected);
        g.classList.toggle('hovered',isHovered&&!selectedId);
        g.classList.toggle('connected',isConnected);
        g.classList.toggle('dimmed',!!selectedId&&!connected.has(id));
      });
    }

    function updateInfo(node){
      info.classList.add('has-active');
      const c=node.data;
      const deps=(c.dependencies||[]).map(id=>conceptById.get(id)).filter(Boolean).slice(0,6);
      const related=(c.related||[]).map(r=>conceptById.get(r.id)).filter(Boolean).slice(0,6);
      info.innerHTML=`<div class="graph-active-tab"><span class="graph-active-dot" style="background:${catAccent(c.category)}"></span><span>Aktywny element</span><button id="graphClearActive" type="button" aria-label="Wyczyść aktywny element">×</button></div><div class="kicker">${esc(catTitle(c.category))}</div><h3>${esc(c.title)}</h3><p>${esc(textBlock(c))}</p><div class="graph-stat-grid"><div class="graph-stat"><strong>${c.difficulty}</strong><span>poziom</span></div><div class="graph-stat"><strong>${esc(cannabisLabel(c.cannabis_relevance))}</strong><span>cannabis</span></div><div class="graph-stat"><strong>${deps.length}</strong><span>zależności</span></div></div><div class="graph-actions-row"><a class="button" href="#/concept/${encodeURIComponent(c.id)}">Otwórz temat</a></div>${deps.length?`<div class="graph-subtitle">Najpierw poznaj</div><div class="graph-chip-list">${deps.map(d=>`<a class="graph-chip" href="#/concept/${encodeURIComponent(d.id)}">${esc(d.title)}</a>`).join('')}</div>`:''}${related.length?`<div class="graph-subtitle">Powiązane</div><div class="graph-chip-list">${related.map(d=>`<a class="graph-chip" href="#/concept/${encodeURIComponent(d.id)}">${esc(d.title)}</a>`).join('')}</div>`:''}${graphLegendHTML()}`;
      info.querySelector('#graphClearActive')?.addEventListener('click',()=>{selectedId=null;hoveredId=null;updateHighlight();renderEmptyInfo();});
    }

    function applyTransform(){camera.setAttribute('transform',`translate(${transform.x} ${transform.y}) scale(${transform.scale})`);}
    function resetView(){transform={x:0,y:0,scale:1};applyTransform();}
    function fitToContent(){
      if(!model.zones.length)return;
      const rect=svg.getBoundingClientRect();
      const viewAspect=rect.width/Math.max(1,rect.height);
      const contentW=Math.max(...model.zones.map(z=>z.x+z.w))-Math.min(...model.zones.map(z=>z.x));
      const contentH=Math.max(...model.zones.map(z=>z.y+z.h))-Math.min(...model.zones.map(z=>z.y));
      const minX=Math.min(...model.zones.map(z=>z.x))-32,minY=Math.min(...model.zones.map(z=>z.y))-32;
      const w=contentW+64,h=contentH+64;
      const sx=MAP_W/w,sy=MAP_H/h;
      const s=Math.max(.42,Math.min(2.2,Math.min(sx,sy)*.96));
      const cx=minX+w/2,cy=minY+h/2;
      transform={x:MAP_W/2-cx*s,y:MAP_H/2-cy*s,scale:s};applyTransform();
    }

    viewport.addEventListener('wheel',e=>{
      e.preventDefault();const rect=svg.getBoundingClientRect();const mx=(e.clientX-rect.left)/rect.width*MAP_W,my=(e.clientY-rect.top)/rect.height*MAP_H;
      const old=transform.scale,next=Math.max(.28,Math.min(3.4,old*(e.deltaY<0?1.12:.89)));
      transform.x=mx-(mx-transform.x)*(next/old);transform.y=my-(my-transform.y)*(next/old);transform.scale=next;applyTransform();
    },{passive:false});

    viewport.addEventListener('pointerdown',e=>{
      if(e.button!==0)return;
      if(e.target.closest?.('.graph-node,button,select,a,input,label')) return;
      dragging=true;dragDistance=0;viewport.setPointerCapture(e.pointerId);dragStart={x:e.clientX,y:e.clientY,tx:transform.x,ty:transform.y};viewport.classList.add('dragging');
    });
    viewport.addEventListener('pointermove',e=>{
      if(!dragging)return;const rect=svg.getBoundingClientRect();const dx=(e.clientX-dragStart.x)/rect.width*MAP_W,dy=(e.clientY-dragStart.y)/rect.height*MAP_H;
      dragDistance=Math.max(dragDistance,Math.hypot(e.clientX-dragStart.x,e.clientY-dragStart.y));transform.x=dragStart.tx+dx;transform.y=dragStart.ty+dy;applyTransform();
    });
    const endDrag=e=>{if(!dragging)return;dragging=false;viewport.classList.remove('dragging');try{viewport.releasePointerCapture(e.pointerId)}catch(_){} };
    viewport.addEventListener('pointerup',endDrag);viewport.addEventListener('pointercancel',endDrag);
    svg.addEventListener('click',e=>{
      if(dragDistance>5)return;
      if(e.target.closest?.('.graph-node'))return;
      selectedId=null;hoveredId=null;updateHighlight();renderEmptyInfo();
    });

    categorySelect.addEventListener('change',renderModel);pathSelect.addEventListener('change',renderModel);
    fitBtn.addEventListener('click',fitToContent);resetBtn.addEventListener('click',resetView);
    quickOpen?.addEventListener('pointerdown',e=>e.stopPropagation());
    quickOpen?.addEventListener('click',e=>{e.stopPropagation();const id=quickOpen.dataset.concept;if(id)navigateToHash('#/concept/'+encodeURIComponent(id));});
    fullscreenBtn.addEventListener('click',async()=>{
      try{if(!document.fullscreenElement)await explorer.requestFullscreen?.();else await document.exitFullscreen?.();}
      catch(_){explorer.classList.toggle('pseudo-fullscreen');}
      requestAnimationFrame(()=>requestAnimationFrame(()=>{renderModel();fitToContent();}));
    });
    const onFs=()=>{fullscreenBtn.textContent=document.fullscreenElement?'Wyjdź z pełnego':'Pełny ekran';requestAnimationFrame(()=>requestAnimationFrame(()=>{renderModel();fitToContent();}));};
    document.addEventListener('fullscreenchange',onFs);
    if('ResizeObserver' in window){let lastW=viewport.clientWidth;resizeObserver=new ResizeObserver(()=>{const w=viewport.clientWidth;if(Math.abs(w-lastW)>120){lastW=w;renderModel();}else requestAnimationFrame(fitToContent);});resizeObserver.observe(viewport);}

    renderModel();
    pageCleanup=()=>{document.removeEventListener('fullscreenchange',onFs);resizeObserver?.disconnect();if(document.fullscreenElement===explorer){try{document.exitFullscreen()}catch(_){}}};
  }

  function renderNotFound() { stickyMount.innerHTML=''; app.innerHTML = '<section class="panel empty"><h2>Nie znalazłem tej strony</h2><p>Sprawdź adres albo wróć na start.</p></section>'; }

  function router() {
    runPageCleanup();
    markActiveNav();
    const [a,b] = routeParts();
    if (!a) return renderHome();
    if (a === 'topics' || a === 'encyclopedia') return renderTopics();
    if (a === 'category') return renderCategory(decodeURIComponent(b || ''));
    if (a === 'concept') return renderConcept(decodeURIComponent(b || ''));
    if (a === 'paths') return renderPaths();
    if (a === 'path') return renderPath(decodeURIComponent(b || ''));
    if (a === 'graph') return renderGraph();
    if (a === 'profiler') return renderProfiler();
    renderNotFound();
  }

  function levenshteinLimited(a,b,limit=2){
    a=normalize(a);b=normalize(b);
    if(Math.abs(a.length-b.length)>limit)return limit+1;
    const prev=Array.from({length:b.length+1},(_,i)=>i),cur=new Array(b.length+1);
    for(let i=1;i<=a.length;i++){
      cur[0]=i;let rowMin=cur[0];
      for(let j=1;j<=b.length;j++){
        cur[j]=Math.min(cur[j-1]+1,prev[j]+1,prev[j-1]+(a[i-1]===b[j-1]?0:1));
        rowMin=Math.min(rowMin,cur[j]);
      }
      if(rowMin>limit)return limit+1;
      for(let j=0;j<=b.length;j++)prev[j]=cur[j];
    }
    return prev[b.length];
  }
  function highlightSearch(text,raw){
    let html=esc(text||'');
    const terms=String(raw||'').trim().split(/\s+/).filter(t=>t.length>1).slice(0,5);
    for(const term of terms){const safe=term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');try{html=html.replace(new RegExp(`(${safe})`,'ig'),'<mark>$1</mark>');}catch(_){}}
    return html;
  }
  function rankedSearch(raw){
    const q=normalize(raw.trim());if(!q)return[];
    const terms=q.split(/\s+/).filter(Boolean);
    return visibleConcepts().map(c=>{
      const title=normalize(c.title), id=normalize(c.id), tags=normalize((c.tags||[]).join(' ')), short=normalize(c.short||''), explanation=normalize(c.explanation||'');
      const titleTokens=title.split(/[^a-z0-9]+/i).filter(Boolean);
      let score=0,matched=0,reason='treść';
      if(title===q){score+=140;reason='dokładny tytuł';}
      else if(title.startsWith(q)){score+=105;reason='początek tytułu';}
      else if(title.includes(q)){score+=85;reason='tytuł';}
      if(id===q||id.endsWith('.'+q)){score+=70;reason='ID';}
      for(const term of terms){
        let best=0;
        if(titleTokens.some(t=>t===term))best=Math.max(best,44);
        if(titleTokens.some(t=>t.startsWith(term)))best=Math.max(best,36);
        if(title.includes(term))best=Math.max(best,28);
        if(tags.includes(term))best=Math.max(best,24);
        if(short.includes(term))best=Math.max(best,16);
        if(explanation.includes(term))best=Math.max(best,7);
        if(term.length>=4){const dist=Math.min(...titleTokens.map(t=>levenshteinLimited(term,t,2)),3);if(dist===1){best=Math.max(best,22);if(reason==='treść')reason='podobna pisownia';}else if(dist===2&&term.length>=6){best=Math.max(best,12);if(reason==='treść')reason='podobna pisownia';}}
        if(best>0){matched++;score+=best;}
      }
      if(matched<terms.length)score-=40*(terms.length-matched);
      score+=Math.max(0,6-Number(c.difficulty||3));
      return {c,score,reason};
    }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score||String(a.c.title).localeCompare(String(b.c.title),'pl')).slice(0,10);
  }
  let searchSelectedIndex=-1;
  function renderSearchResults(raw){
    const hits=rankedSearch(raw);searchSelectedIndex=-1;
    searchResults.innerHTML=hits.length?hits.map(({c,reason})=>`<a class="search-hit" href="#/concept/${encodeURIComponent(c.id)}"><div class="search-hit-top"><div class="search-hit-title">${highlightSearch(c.title,raw)}</div><span>${esc(reason)}</span></div><div class="search-hit-snippet">${highlightSearch(c.short||c.explanation||'',raw)}</div><div class="search-hit-meta">${esc(catTitle(c.category))} • ${esc(difficultyLabel(c.difficulty))}</div></a>`).join(''):'<div class="search-hit search-empty-result"><strong>Brak dobrego dopasowania</strong><span>Spróbuj krótszego hasła albo innej pisowni.</span></div>';
    searchResults.hidden=false;
  }
  function selectSearchResult(index){
    const hits=[...searchResults.querySelectorAll('a.search-hit')];if(!hits.length)return;
    searchSelectedIndex=(index+hits.length)%hits.length;hits.forEach((x,i)=>x.classList.toggle('selected',i===searchSelectedIndex));hits[searchSelectedIndex].scrollIntoView({block:'nearest'});
  }
  searchInput.addEventListener('input',()=>{const raw=searchInput.value.trim();if(!raw){searchResults.hidden=true;searchResults.innerHTML='';searchSelectedIndex=-1;return;}renderSearchResults(raw);});
  searchInput.addEventListener('keydown',e=>{
    if(e.key==='ArrowDown'){e.preventDefault();selectSearchResult(searchSelectedIndex+1);}
    else if(e.key==='ArrowUp'){e.preventDefault();selectSearchResult(searchSelectedIndex-1);}
    else if(e.key==='Enter'&&!searchResults.hidden){const hits=[...searchResults.querySelectorAll('a.search-hit')];const hit=hits[searchSelectedIndex>=0?searchSelectedIndex:0];if(hit){e.preventDefault();navigateToHash(hit.getAttribute('href'));searchResults.hidden=true;}}
    else if(e.key==='Escape'){searchResults.hidden=true;searchSelectedIndex=-1;}
  });
  function navigateToHash(hash) {
    if (!hash || !hash.startsWith('#/')) return;
    routeOverride = hash;
    try { if (location.hash !== hash) location.hash = hash; } catch (_) {}
    router();
    routeOverride = '';
  }

  // Do not rely only on native hash-link handling. Some attachment/iOS preview
  // environments render the HTML but do not reliably dispatch hashchange after a tap.
  // Route explicitly on every internal navigation click; hashchange remains useful
  // for browser Back/Forward and normal standalone use.
  document.addEventListener('click', e => {
    const target = e.target instanceof Element ? e.target : e.target?.parentElement;
    const link = target?.closest?.('a[href^="#/"]');
    if (link) {
      e.preventDefault();
      navigateToHash(link.getAttribute('href'));
      searchResults.hidden = true;
      return;
    }
    if (!searchResults.contains(e.target) && e.target !== searchInput) searchResults.hidden = true;
  });
  window.addEventListener('keydown', e => { if (e.key === '/' && document.activeElement !== searchInput) { e.preventDefault(); searchInput.focus(); } });
  window.addEventListener('hashchange', router);
  router();
})();
