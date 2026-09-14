
(() => {
  const data = window.NEUROPHARM_DATA;
  const app = document.getElementById('app');
  const stickyMount = document.getElementById('stickyProgressMount');
  const searchInput = document.getElementById('globalSearch');
  const searchResults = document.getElementById('searchResults');
  const cannabisToggle = document.getElementById('cannabisToggle');
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

  const STATE = { cannabisOnly: false };
  const CAT_ACCENT = {
    foundations: '#9ff4be', receptors: '#9c89ff', enzymes: '#77efab', transporters: '#ffd977',
    neurotransmission: '#86efff', pharmacokinetics: '#ff9e72', interactions: '#ff88a8',
    endocannabinoid: '#d4ff6f', terpenes: '#b8ff91', evidence: '#9db2aa'
  };

  const esc = s => String(s ?? '').replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
  const normalize = s => String(s || '').toLocaleLowerCase('pl').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const routeParts = () => location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  const catTitle = id => categoryById.get(id)?.title || id;
  const catAccent = id => CAT_ACCENT[id] || '#9ff4be';
  const evidenceLabel = x => ({established:'dobrze ustalone', preclinical:'przedkliniczne', mixed:'mieszane', emerging:'rozwijające się', 'context-dependent':'zależne od kontekstu', hypothesis:'hipoteza'}[x] || x || 'brak danych');
  const cannabisLabel = x => ({none:'brak', low:'niska', medium:'średnia', high:'wysoka'}[x] || x);
  const difficultyLabel = n => ['','start','łatwe','średnie','trudniejsze','zaawansowane'][n] || `poziom ${n}`;
  const relationText = rel => data.relation_types?.[rel] || rel;
  const visibleConcepts = () => STATE.cannabisOnly ? data.concepts.filter(c => ['medium','high'].includes(c.cannabis_relevance)) : data.concepts;

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
    const done = new Set(JSON.parse(localStorage.getItem('neuroatlas-progress:'+path.id) || '[]'));
    return { done, count: done.size, pct: Math.round((done.size / path.steps.length) * 100) || 0 };
  }

  function setStepDone(pathId, stepId, done) {
    const key = 'neuroatlas-progress:'+pathId;
    const set = new Set(JSON.parse(localStorage.getItem(key) || '[]'));
    if (done) set.add(stepId); else set.delete(stepId);
    localStorage.setItem(key, JSON.stringify([...set]));
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
    const rel = c.related?.length ? `Potem naturalnie prowadzi do takich tematów jak ${c.related.slice(0,3).map(r => conceptById.get(r.id)?.title || r.id).join(', ')}.` : 'Ten temat jest raczej samodzielnym blokiem w obecnej wersji bazy.';
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
            <div class="kicker">V7.1 • runtime repaired</div>
            <h1 class="section-title">V7.1 — naprawione renderowanie + różne ilustracje.</h1>
            <p class="section-lead">Ta wersja ma widoczne ilustracje, bardziej wyróżnione treści i prostszy układ. Każda strona tematu i kursu ma własną okładkę, a miniatury tematów są teraz uproszczone i bardziej pamiętne, a kursy dostały osobne, wyraźnie różne okładki zamiast tych samych kompozycji.</p>
            <div class="pills"><span class="pill">Pojęcia <strong>${data.concepts.length}</strong></span><span class="pill">Kategorie <strong>${data.categories.length}</strong></span><span class="pill">Kursy <strong>${data.learning_paths.length}</strong></span></div>
            <div class="cta-row"><a class="button" href="#/topics">Przeglądaj tematy</a><a class="button-secondary" href="#/paths">Przejdź do kursów</a></div>
          </div>
          <div class="hero-visual"><img src="${homeCannabisVisual()}" alt="Okładka z motywami cannabis: śmiech, głód, relaks, medyczne zastosowania i skupienie" /></div>
        </section>

        <section class="stack">
          <div><div class="kicker">Kategorie</div><h2 class="section-title">Wejdź przez temat</h2><p class="section-lead">Kategorie są teraz bardziej wizualne i każda ma własną okładkę.</p></div>
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
            <p class="section-lead">Dłuższe zajawki, miniatury i prostsze filtrowanie — żeby łatwiej było wyłapać, co Cię interesuje.</p>
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
            <section class="panel">
              <div class="kicker">W skrócie</div>
              <h2>Co to jest?</h2>
              <p class="strong-lead">${esc(textBlock(c))}</p>
              <p>${esc(whyItMatters(c))}</p>
              <div class="highlight-line">${(c.key_points?.length ? c.key_points : ['Najpierw rozumiej mechanizm', 'Potem patrz na dowody', 'Nie myl wiązania z efektem']).slice(0,4).map(x => `<div class="highlight">${esc(x)}</div>`).join('')}</div>
            </section>

            <section class="split-card">
              <div>
                <div class="kicker">Rozumienie</div>
                <h2>Jak to sobie poukładać?</h2>
                <p>${esc(practicalUse(c))}</p>
                <p>${esc(c.analogy || 'To pojęcie warto traktować jak klocek budujący większy model działania substancji w organizmie. W praktyce najlepiej patrzeć nie tylko na definicję, ale też na to, z czym to pojęcie się łączy.')}</p>
              </div>
              <div><img class="inline-thumb" src="${mapVisual(c)}" alt="Schemat powiązań pojęcia ${esc(c.title)}" /></div>
            </section>

            <section class="quote-card">
              <div class="kicker">Zapamiętaj</div>
              <h3>Najkrótsza intuicja</h3>
              <p>${esc(c.analogy || c.short)}</p>
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
            <p class="section-lead">Każdy kurs ma teraz własną okładkę, bardziej widoczny postęp i większe karty kroków.</p>
          </div>
          <div class="page-cover-visual"><img src="${visual('paths-visual', '#9580ff', 'PROGRESS')}" alt="Okładka strony kursy" /></div>
        </section>
        <div class="path-grid">
          ${data.learning_paths.map(path => {
            const p = pathProgress(path);
            return `<a class="cover-card" href="#/path/${encodeURIComponent(path.id)}">
              <img class="course-cover-thumb" src="${courseCover(path)}" alt="Okładka kursu ${esc(path.title)}" />
              <div class="kicker">${p.count}/${path.steps.length} kroków</div>
              <h3>${esc(path.title)}</h3>
              <p>${esc(path.description)}</p>
              <div class="meta-line"><span class="pill"><strong>${p.pct}%</strong> ukończone</span></div>
            </a>`;
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
                <div class="step-top"><div style="display:flex;gap:12px;align-items:center"><div class="step-index">${idx+1}</div><div class="kicker">${esc(catTitle(c.category))}</div></div><button class="toggle-done ${done ? 'done' : ''}" data-path="${esc(path.id)}" data-step="${esc(stepId)}">${done ? 'Ukończone' : 'Oznacz jako zrobione'}</button></div>
                <h3><a href="#/concept/${encodeURIComponent(c.id)}">${esc(c.title)}</a></h3>
                <p>${esc(textBlock(c))}</p>
                <div class="meta-line"><span class="pill">Poziom <strong>${c.difficulty}</strong></span><span class="pill">Cannabis <strong>${esc(cannabisLabel(c.cannabis_relevance))}</strong></span></div>
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

  function renderGraph() {
    stickyMount.innerHTML = '';
    const rootId = 'enzyme.ache';
    const root = conceptById.get(rootId);
    const deps = root.dependencies.map(id => conceptById.get(id)).filter(Boolean);
    const rels = root.related.slice(0,10).map(r => ({...r, concept: conceptById.get(r.id)})).filter(x=>x.concept);
    const center = {x: 380, y: 320};
    const ring1 = deps.map((c, i) => ({c, x:center.x + Math.cos((Math.PI*2*i)/Math.max(deps.length,1)-1.2)*190, y:center.y + Math.sin((Math.PI*2*i)/Math.max(deps.length,1)-1.2)*190, dep:true}));
    const ring2 = rels.map((r, i) => ({c:r.concept, x:center.x + Math.cos((Math.PI*2*i)/Math.max(rels.length,1)+.2)*285, y:center.y + Math.sin((Math.PI*2*i)/Math.max(rels.length,1)+.2)*285, dep:false}));
    const edges = [];
    const nodes = [];
    edges.push(...ring1.map(n => `<line class="graph-edge dep" x1="${center.x}" y1="${center.y}" x2="${n.x}" y2="${n.y}" />`));
    edges.push(...ring2.map(n => `<line class="graph-edge" x1="${center.x}" y1="${center.y}" x2="${n.x}" y2="${n.y}" />`));
    nodes.push(`<g class="graph-node" data-id="${root.id}" transform="translate(${center.x},${center.y})"><circle r="58" fill="#102019" stroke="#89f7ad"/><text text-anchor="middle" y="4">AChE</text></g>`);
    ring1.forEach(n => nodes.push(`<g class="graph-node" data-id="${n.c.id}" transform="translate(${n.x},${n.y})"><circle r="34" fill="#18251e" stroke="#d4ff6f"/><text text-anchor="middle" y="4">${esc(abbrev(n.c.title))}</text></g>`));
    ring2.forEach(n => nodes.push(`<g class="graph-node" data-id="${n.c.id}" transform="translate(${n.x},${n.y})"><circle r="30" fill="#181927" stroke="#9580ff"/><text text-anchor="middle" y="4">${esc(abbrev(n.c.title))}</text></g>`));
    app.innerHTML = `
      <div class="stack">
        <section class="page-cover card">
          <div class="card-bg"><img class="card-bg" src="${visual('graph-page', '#89f7ad', 'MAPA')}" alt="" /></div><div class="card-shade"></div>
          <div class="page-cover-main"><div class="kicker">Mapa wiedzy</div><h1 class="section-title">Klikalna mapa powiązań</h1><p class="section-lead">Teraz również mapa ma bardziej wyraźny, ilustrowany charakter. Zielone węzły to zależności, a fioletowe to pojęcia powiązane.</p></div>
          <div class="page-cover-visual"><img src="${mapVisual(root)}" alt="Wizualizacja pojęcia AChE" /></div>
        </section>
        <section class="graph-shell">
          <div class="graph-canvas"><svg viewBox="0 0 860 640" preserveAspectRatio="xMidYMid meet">${edges.join('')}${nodes.join('')}</svg></div>
          <aside class="graph-side"><div class="kicker">Fokus</div><h3>${esc(root.title)}</h3><p>${esc(textBlock(root))}</p><p>${esc(whyItMatters(root))}</p></aside>
        </section>
      </div>`;
    app.querySelectorAll('.graph-node').forEach(n => n.addEventListener('click', () => location.hash = '#/concept/' + encodeURIComponent(n.dataset.id)));
  }

  function renderNotFound() { stickyMount.innerHTML=''; app.innerHTML = '<section class="panel empty"><h2>Nie znalazłem tej strony</h2><p>Sprawdź adres albo wróć na start.</p></section>'; }

  function router() {
    markActiveNav();
    const [a,b] = routeParts();
    if (!a) return renderHome();
    if (a === 'topics' || a === 'encyclopedia') return renderTopics();
    if (a === 'category') return renderCategory(decodeURIComponent(b || ''));
    if (a === 'concept') return renderConcept(decodeURIComponent(b || ''));
    if (a === 'paths') return renderPaths();
    if (a === 'path') return renderPath(decodeURIComponent(b || ''));
    if (a === 'graph') return renderGraph();
    renderNotFound();
  }

  searchInput.addEventListener('input', () => {
    const q = normalize(searchInput.value.trim());
    if (!q) { searchResults.hidden = true; searchResults.innerHTML = ''; return; }
    const hits = visibleConcepts().filter(c => normalize(`${c.title} ${c.short} ${c.explanation} ${c.id}`).includes(q)).slice(0, 8);
    searchResults.innerHTML = hits.length ? hits.map(c => `<a class="search-hit" href="#/concept/${encodeURIComponent(c.id)}"><div class="search-hit-title">${esc(c.title)}</div><div class="search-hit-meta">${esc(catTitle(c.category))} • poziom ${c.difficulty}</div></a>`).join('') : '<div class="search-hit">Brak wyników</div>';
    searchResults.hidden = false;
  });
  document.addEventListener('click', e => { if (!searchResults.contains(e.target) && e.target !== searchInput) searchResults.hidden = true; });
  window.addEventListener('keydown', e => { if (e.key === '/' && document.activeElement !== searchInput) { e.preventDefault(); searchInput.focus(); } });
  cannabisToggle.addEventListener('click', () => { STATE.cannabisOnly = !STATE.cannabisOnly; cannabisToggle.setAttribute('aria-pressed', String(STATE.cannabisOnly)); router(); });
  window.addEventListener('hashchange', router);
  router();
})();
