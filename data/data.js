window.NEUROPHARM_DATA = {
  "meta": {
    "title": "Neurofarmakologia i chemia działania — baza wiedzy",
    "version": "0.1.0",
    "language": "pl",
    "generated": "2026-09-14",
    "purpose": "Dane do strony edukacyjnej/encyklopedii z grafem zależności i ścieżkami nauki.",
    "disclaimer": "Materiał edukacyjny, nie porada medyczna. Mechanizmy in vitro i przedkliniczne nie powinny być przedstawiane jako potwierdzony efekt u człowieka bez odpowiednich danych.",
    "design_principles": [
      "mechanizm > marketingowa etykieta efektu",
      "stężenie i ekspozycja są częścią mechanizmu",
      "oddzielaj in vitro / in vivo / klinikę",
      "każdy wpis ma stabilne ID do linkowania"
    ],
    "counts": {
      "categories": 10,
      "concepts": 112,
      "learning_paths": 6,
      "sources": 16
    }
  },
  "schema": {
    "concept.required_fields": [
      "id",
      "title",
      "category",
      "difficulty",
      "short",
      "explanation",
      "dependencies",
      "related",
      "sources"
    ],
    "difficulty": "1 = podstawy, 5 = zaawansowane",
    "dependencies": "ID pojęć, które warto znać przed tym wpisem",
    "related": "powiązania grafowe {id, relation, why}",
    "evidence_status": "skrót poziomu/charakteru dowodów; nie jest formalnym systemem GRADE",
    "cannabis_relevance": "none | low | medium | high",
    "safe_rendering": "Renderuj źródła jako linki. Nie zamieniaj evidence_status na twierdzenie kliniczne bez sprawdzenia wpisu i źródeł."
  },
  "relation_types": {
    "binds_to": "wiąże się z",
    "target": "cel",
    "degraded_by": "degradowane przez",
    "metabolized_by": "metabolizowane przez",
    "cleared_by": "usuwane przez",
    "contrast": "porównaj z",
    "type": "typ",
    "example": "przykład",
    "component": "element systemu",
    "receptor": "receptor",
    "works_with": "współdziała z",
    "part": "część",
    "mechanism": "mechanizm",
    "family": "ta sama rodzina",
    "parallel": "równoległy mechanizm",
    "input": "wejście modelu",
    "context": "kontekst",
    "method": "metoda",
    "complement": "uzupełnia",
    "hybrid": "łączy się z",
    "importance": "ważne dla",
    "requires": "wymaga",
    "enables": "umożliwia",
    "explains": "wyjaśnia",
    "interacts": "współzależne",
    "contributes": "przyczynia się",
    "supports": "wspiera",
    "signals_via": "sygnalizuje przez",
    "downstream": "niżej w szlaku",
    "regulated_by": "regulowane przez",
    "binds": "wiąże",
    "blocked_by": "blokowane przez",
    "nearby": "pokrewny model",
    "generalizes": "uogólnia",
    "relative": "pokrewny",
    "same_system": "ten sam system",
    "uses": "wykorzystuje",
    "terminates": "kończy",
    "loads": "ładuje",
    "sibling": "izoenzym pokrewny",
    "stores": "magazynuje",
    "part_of": "część systemu",
    "activates": "aktywuje",
    "major_system": "główny system",
    "interaction": "interakcja",
    "can_contribute": "może przyczyniać się",
    "reduces": "zmniejsza",
    "describes": "opisuje",
    "limits": "ogranicza",
    "affects": "wpływa na",
    "determines": "wpływa na",
    "derived_from": "wynika z",
    "contains": "zawiera parametr",
    "property": "właściwość",
    "one_mechanism": "jeden z mechanizmów",
    "depends_on": "zależy od",
    "must_evaluate": "wymaga oceny",
    "research_target": "badany cel",
    "translates": "warunkuje translację",
    "important_for": "ważne dla",
    "data_source": "źródło danych",
    "direct": "bezpośrednie powiązanie",
    "indirect": "pośrednie powiązanie"
  },
  "categories": [
    {
      "id": "foundations",
      "title": "Podstawy farmakologii",
      "order": 10,
      "description": "Język potrzebny do rozumienia całej reszty: ligand, receptor, powinowactwo, skuteczność i dawka."
    },
    {
      "id": "receptors",
      "title": "Receptory i sygnalizacja",
      "order": 20,
      "description": "Jak cząsteczki włączają, wyłączają i modulują receptory oraz ich szlaki."
    },
    {
      "id": "enzymes",
      "title": "Enzymy",
      "order": 30,
      "description": "Białka katalityczne: synteza, rozkład, inhibicja i znaczenie kinetyki."
    },
    {
      "id": "transporters",
      "title": "Transportery",
      "order": 40,
      "description": "Białka przenoszące neuroprzekaźniki i inne cząsteczki przez błony."
    },
    {
      "id": "neurotransmission",
      "title": "Neurotransmisja",
      "order": 50,
      "description": "Synapsa, neuroprzekaźniki, pobudzenie, hamowanie i plastyczność."
    },
    {
      "id": "pharmacokinetics",
      "title": "Farmakokinetyka (ADME)",
      "order": 60,
      "description": "Co organizm robi z substancją: wchłanianie, dystrybucja, metabolizm i eliminacja."
    },
    {
      "id": "interactions",
      "title": "Interakcje i kombinacje",
      "order": 70,
      "description": "Addycja, synergia, antagonizm oraz interakcje farmakodynamiczne i farmakokinetyczne."
    },
    {
      "id": "endocannabinoid",
      "title": "Układ endokannabinoidowy",
      "order": 80,
      "description": "CB1, CB2, endokannabinoidy, THC/CBD i enzymy regulujące sygnał."
    },
    {
      "id": "terpenes",
      "title": "Terpeny i cannabis",
      "order": 90,
      "description": "Jak opisywać terpeny mechanistycznie bez upraszczania ich do jednego efektu."
    },
    {
      "id": "evidence",
      "title": "Jak czytać dowody",
      "order": 100,
      "description": "In vitro, in vivo, klinika, stężenie, korelacja i niepewność."
    }
  ],
  "learning_paths": [
    {
      "id": "path.zero_to_pharmacology",
      "title": "Od zera do farmakologii",
      "description": "Najpierw język receptorów, potem enzymy, synapsa i interakcje.",
      "steps": [
        "foundation.ligand",
        "foundation.receptor",
        "foundation.affinity",
        "foundation.efficacy",
        "foundation.potency",
        "foundation.dose_response",
        "foundation.orthosteric_site",
        "foundation.allosteric_site",
        "receptor.full_agonist",
        "receptor.partial_agonist",
        "receptor.antagonist",
        "receptor.inverse_agonist",
        "receptor.pam",
        "receptor.nam"
      ]
    },
    {
      "id": "path.ache",
      "title": "AChE od podstaw",
      "description": "Pełna ścieżka od ACh do typów inhibicji.",
      "steps": [
        "neuro.synapse",
        "neuro.neurotransmitter",
        "neuro.acetylcholine",
        "neuro.nachr",
        "neuro.machr",
        "neuro.cholinergic_system",
        "enzyme.enzyme",
        "enzyme.substrate",
        "enzyme.active_site",
        "enzyme.ache",
        "enzyme.inhibition",
        "enzyme.competitive_inhibition",
        "enzyme.noncompetitive_inhibition",
        "enzyme.mixed_inhibition",
        "enzyme.irreversible_inhibition"
      ]
    },
    {
      "id": "path.monoamines",
      "title": "Dopamina, serotonina i noradrenalina",
      "description": "Transportery, enzymy i zakończenie sygnału monoamin.",
      "steps": [
        "neuro.monoamine",
        "neuro.dopamine",
        "neuro.serotonin",
        "neuro.norepinephrine",
        "transporter.reuptake",
        "transporter.dat",
        "transporter.sert",
        "transporter.net",
        "transporter.vmat2",
        "enzyme.maoa",
        "enzyme.maob",
        "enzyme.comt"
      ]
    },
    {
      "id": "path.brain_signaling",
      "title": "Hamowanie, pobudzenie i plastyczność",
      "description": "GABA, glutaminian i mechanizmy szybkiej transmisji.",
      "steps": [
        "receptor.ionotropic",
        "receptor.metabotropic",
        "neuro.gaba",
        "neuro.gabaa",
        "neuro.gabab",
        "neuro.glutamate",
        "neuro.ampar",
        "neuro.nmdar",
        "neuro.plasticity",
        "neuro.memory"
      ]
    },
    {
      "id": "path.pk",
      "title": "Dlaczego wynik z probówki może nie działać u człowieka",
      "description": "ADME i translacja stężenia na realny efekt.",
      "steps": [
        "pk.adme",
        "pk.bioavailability",
        "pk.distribution",
        "pk.bbb",
        "pk.vd",
        "pk.clearance",
        "pk.half_life",
        "pk.metabolism",
        "pk.metabolite",
        "pk.cyp450",
        "pk.first_pass",
        "evidence.exposure"
      ]
    },
    {
      "id": "path.cannabis_model",
      "title": "Jak budować model działania cannabis bez mitów",
      "description": "ECS + terpeny + interakcje + poziomy dowodów.",
      "steps": [
        "ecs.system",
        "ecs.cb1",
        "ecs.cb2",
        "ecs.anandamide",
        "ecs.2ag",
        "ecs.faah",
        "ecs.magl",
        "ecs.thc",
        "ecs.cbd",
        "terpene.terpene",
        "interaction.additivity",
        "interaction.synergy",
        "interaction.antagonism",
        "interaction.pd_interaction",
        "interaction.pk_interaction",
        "terpene.entourage",
        "evidence.levels",
        "evidence.exposure",
        "evidence.correlation",
        "terpene.combination_model",
        "evidence.mechanistic_model",
        "evidence.machine_learning"
      ]
    }
  ],
  "concepts": [
    {
      "id": "foundation.ligand",
      "slug": "foundation-ligand",
      "title": "Ligand",
      "category": "foundations",
      "kind": "concept",
      "difficulty": 1,
      "short": "Cząsteczka, która wiąże się z określonym białkiem lub miejscem wiążącym.",
      "explanation": "Ligandem może być neuroprzekaźnik, hormon, lek, metabolit albo inna cząsteczka. Sam fakt związania nie mówi jeszcze, czy ligand aktywuje, blokuje czy moduluje cel.",
      "analogy": "Klucz, który pasuje do zamka; może go otworzyć, zablokować albo zmienić jego zachowanie.",
      "key_points": [
        "wiązanie ≠ aktywacja",
        "ligand może mieć wiele celów",
        "znaczenie zależy od stężenia i miejsca"
      ],
      "examples": [],
      "dependencies": [],
      "related": [
        {
          "id": "foundation.receptor",
          "relation": "binds_to",
          "why": "Receptory są częstymi celami ligandów."
        },
        {
          "id": "foundation.affinity",
          "relation": "property",
          "why": "Powinowactwo opisuje skłonność ligandu do wiązania."
        }
      ],
      "misconceptions": [
        "„Jeśli coś wiąże receptor, to na pewno go aktywuje.”"
      ],
      "check_yourself": [
        "Czy antagonista jest ligandem? Dlaczego?"
      ],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "foundation.receptor",
      "slug": "foundation-receptor",
      "title": "Receptor",
      "category": "foundations",
      "kind": "concept",
      "difficulty": 1,
      "short": "Białko odbierające sygnał chemiczny i przekształcające go w odpowiedź komórki.",
      "explanation": "Receptor posiada miejsca wiążące ligandy. Po związaniu może zmienić konformację, otworzyć kanał jonowy albo uruchomić kaskadę sygnałową.",
      "analogy": "Czujnik w urządzeniu: rozpoznaje sygnał i uruchamia odpowiednią reakcję.",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "foundation.ligand"
      ],
      "related": [
        {
          "id": "receptor.gpcr",
          "relation": "type",
          "why": "GPCR to ważna rodzina receptorów."
        },
        {
          "id": "receptor.ionotropic",
          "relation": "type",
          "why": "Receptory jonotropowe są kanałami aktywowanymi ligandem."
        }
      ],
      "misconceptions": [],
      "check_yourself": [
        "Czym receptor różni się od enzymu?"
      ],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "foundation.orthosteric_site",
      "slug": "foundation-orthosteric_site",
      "title": "Miejsce ortosteryczne",
      "category": "foundations",
      "kind": "concept",
      "difficulty": 2,
      "short": "Główne miejsce receptora, do którego zwykle wiąże się naturalny ligand.",
      "explanation": "Ligandy konkurujące o to samo miejsce mogą wzajemnie ograniczać swoje wiązanie. Antagonizm kompetycyjny często zachodzi właśnie tutaj.",
      "analogy": "Główna dziurka od klucza.",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "foundation.receptor",
        "foundation.ligand"
      ],
      "related": [
        {
          "id": "foundation.allosteric_site",
          "relation": "contrast",
          "why": "Allosteryczne miejsce jest odrębne od głównego miejsca."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "foundation.allosteric_site",
      "slug": "foundation-allosteric_site",
      "title": "Miejsce allosteryczne",
      "category": "foundations",
      "kind": "concept",
      "difficulty": 2,
      "short": "Inne miejsce na receptorze niż główne miejsce naturalnego ligandu.",
      "explanation": "Ligand allosteryczny może zmienić powinowactwo lub skuteczność ligandu ortosterycznego przez zmianę konformacji receptora.",
      "analogy": "Pokrętło regulujące czułość urządzenia, umieszczone obok głównego przycisku.",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "foundation.receptor",
        "foundation.orthosteric_site"
      ],
      "related": [
        {
          "id": "receptor.pam",
          "relation": "enables",
          "why": "PAM może wiązać się allosterycznie."
        },
        {
          "id": "receptor.nam",
          "relation": "enables",
          "why": "NAM może wiązać się allosterycznie."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "foundation.affinity",
      "slug": "foundation-affinity",
      "title": "Powinowactwo (affinity)",
      "category": "foundations",
      "kind": "concept",
      "difficulty": 2,
      "short": "Jak chętnie ligand wiąże się z celem molekularnym.",
      "explanation": "Wysokie powinowactwo zwykle oznacza, że niższe stężenie wystarcza do znacznego zajęcia celu. Nie mówi jednak automatycznie, jak duży efekt wywoła ligand.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "foundation.ligand",
        "foundation.receptor"
      ],
      "related": [
        {
          "id": "foundation.efficacy",
          "relation": "contrast",
          "why": "Skuteczność mówi, co dzieje się po związaniu."
        },
        {
          "id": "foundation.occupancy",
          "relation": "determines",
          "why": "Powinowactwo wpływa na zajęcie receptorów."
        }
      ],
      "misconceptions": [
        "wysokie powinowactwo = silny efekt kliniczny"
      ],
      "check_yourself": [
        "Czy ligand o wysokim affinity może być antagonistą?"
      ],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "foundation.efficacy",
      "slug": "foundation-efficacy",
      "title": "Skuteczność wewnętrzna (efficacy)",
      "category": "foundations",
      "kind": "concept",
      "difficulty": 2,
      "short": "Zdolność ligandu do wywołania odpowiedzi po związaniu z receptorem.",
      "explanation": "Dwa ligandy mogą mieć podobne powinowactwo, ale różną skuteczność: jeden może być pełnym agonistą, drugi częściowym.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "foundation.affinity"
      ],
      "related": [
        {
          "id": "receptor.full_agonist",
          "relation": "example",
          "why": "Pełny agonista ma wysoką skuteczność w danym układzie."
        },
        {
          "id": "receptor.partial_agonist",
          "relation": "example",
          "why": "Częściowy agonista ma niższą maksymalną odpowiedź."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "foundation.potency",
      "slug": "foundation-potency",
      "title": "Potencja (potency)",
      "category": "foundations",
      "kind": "concept",
      "difficulty": 2,
      "short": "Ile substancji potrzeba, aby uzyskać określony efekt.",
      "explanation": "Potencja zależy m.in. od powinowactwa, skuteczności, liczby receptorów i badanego układu. Nie jest synonimem maksymalnej skuteczności.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "foundation.affinity",
        "foundation.efficacy"
      ],
      "related": [
        {
          "id": "foundation.ec50",
          "relation": "measure",
          "why": "EC50 często opisuje potencję agonisty."
        }
      ],
      "misconceptions": [
        "bardziej potent = zawsze lepszy lub „mocniejszy” w każdym sensie"
      ],
      "check_yourself": [],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "foundation.ec50",
      "slug": "foundation-ec50",
      "title": "EC50",
      "category": "foundations",
      "kind": "concept",
      "difficulty": 3,
      "short": "Stężenie dające 50% maksymalnej odpowiedzi w danym teście.",
      "explanation": "Niższe EC50 zwykle oznacza wyższą potencję w konkretnym układzie eksperymentalnym. EC50 nie jest stałą uniwersalną i zależy od testu.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "foundation.potency",
        "foundation.efficacy"
      ],
      "related": [
        {
          "id": "foundation.ic50",
          "relation": "contrast",
          "why": "IC50 dotyczy hamowania."
        },
        {
          "id": "foundation.dose_response",
          "relation": "derived_from",
          "why": "EC50 odczytuje się z krzywej odpowiedzi."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "foundation.ic50",
      "slug": "foundation-ic50",
      "title": "IC50",
      "category": "foundations",
      "kind": "concept",
      "difficulty": 3,
      "short": "Stężenie inhibitora powodujące 50% zahamowania mierzonego procesu.",
      "explanation": "IC50 zależy od warunków testu i nie jest tym samym co stała wiązania Ki. Przy porównywaniu badań trzeba sprawdzać metodę i stężenie substratu.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "foundation.potency"
      ],
      "related": [
        {
          "id": "foundation.ec50",
          "relation": "contrast",
          "why": "EC50 mierzy aktywację/odpowiedź."
        },
        {
          "id": "enzyme.inhibition",
          "relation": "measure",
          "why": "IC50 często raportuje siłę inhibitora."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "foundation.occupancy",
      "slug": "foundation-occupancy",
      "title": "Zajęcie receptorów (occupancy)",
      "category": "foundations",
      "kind": "concept",
      "difficulty": 3,
      "short": "Odsetek dostępnych receptorów związanych przez ligand.",
      "explanation": "Zajęcie rośnie wraz ze stężeniem wolnego ligandu i jego powinowactwem. 100% zajęcia nie zawsze oznacza 100% efektu, m.in. przez częściową agonistykę lub receptor reserve.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "foundation.affinity"
      ],
      "related": [
        {
          "id": "foundation.efficacy",
          "relation": "interacts",
          "why": "Zajęcie i skuteczność razem wpływają na odpowiedź."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "foundation.dose_response",
      "slug": "foundation-dose_response",
      "title": "Krzywa dawka–odpowiedź",
      "category": "foundations",
      "kind": "concept",
      "difficulty": 2,
      "short": "Wykres pokazujący, jak efekt zmienia się wraz z dawką lub stężeniem.",
      "explanation": "Pozwala porównywać potencję, maksymalną odpowiedź i kształt reakcji. Jest podstawowym narzędziem do analizy agonistów, antagonistów i inhibitorów.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "foundation.potency",
        "foundation.efficacy"
      ],
      "related": [
        {
          "id": "foundation.ec50",
          "relation": "contains",
          "why": "EC50 to jeden z parametrów krzywej."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "foundation.selectivity",
      "slug": "foundation-selectivity",
      "title": "Selektywność",
      "category": "foundations",
      "kind": "concept",
      "difficulty": 2,
      "short": "Preferencja substancji wobec jednego celu względem innych.",
      "explanation": "Selektywność jest zależna od stężenia: przy małej dawce związek może działać głównie na jeden cel, a przy większej angażować kolejne.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "foundation.affinity"
      ],
      "related": [
        {
          "id": "interaction.off_target",
          "relation": "contrast",
          "why": "Działania off-target pojawiają się przy innych celach."
        }
      ],
      "misconceptions": [
        "selektywny = działa wyłącznie na jeden cel"
      ],
      "check_yourself": [],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "receptor.full_agonist",
      "slug": "receptor-full_agonist",
      "title": "Pełny agonista",
      "category": "receptors",
      "kind": "concept",
      "difficulty": 2,
      "short": "Ligand zdolny do wywołania maksymalnej odpowiedzi danego układu receptorowego.",
      "explanation": "Pełny agonista stabilizuje aktywne stany receptora w sposób pozwalający osiągnąć maksymalną mierzoną odpowiedź w danym systemie.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "foundation.ligand",
        "foundation.receptor",
        "foundation.efficacy"
      ],
      "related": [
        {
          "id": "receptor.partial_agonist",
          "relation": "contrast",
          "why": "Częściowy agonista ma niższy efekt maksymalny."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "receptor.partial_agonist",
      "slug": "receptor-partial_agonist",
      "title": "Częściowy agonista",
      "category": "receptors",
      "kind": "concept",
      "difficulty": 2,
      "short": "Aktywuje receptor, ale daje niższą odpowiedź maksymalną niż pełny agonista.",
      "explanation": "Nawet przy wysokim zajęciu receptorów częściowy agonista może nie osiągać odpowiedzi pełnego agonisty. W obecności pełnego agonisty może funkcjonalnie ograniczać całkowitą odpowiedź, konkurując o receptor.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "receptor.full_agonist"
      ],
      "related": [
        {
          "id": "receptor.antagonist",
          "relation": "compare",
          "why": "Oba mogą zmniejszać odpowiedź pełnego agonisty, ale częściowy agonista sam aktywuje receptor."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "high",
      "evidence_status": "established"
    },
    {
      "id": "receptor.antagonist",
      "slug": "receptor-antagonist",
      "title": "Antagonista",
      "category": "receptors",
      "kind": "concept",
      "difficulty": 2,
      "short": "Ligand zmniejszający działanie agonisty bez typowej aktywacji receptora przez siebie.",
      "explanation": "Antagonista może konkurować o miejsce ortosteryczne lub działać innymi mechanizmami. Klasyczny neutralny antagonista nie obniża konstytutywnej aktywności receptora.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "foundation.orthosteric_site",
        "receptor.full_agonist"
      ],
      "related": [
        {
          "id": "receptor.inverse_agonist",
          "relation": "contrast",
          "why": "Odwrotny agonista obniża aktywność podstawową."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "receptor.inverse_agonist",
      "slug": "receptor-inverse_agonist",
      "title": "Odwrotny agonista",
      "category": "receptors",
      "kind": "concept",
      "difficulty": 3,
      "short": "Ligand zmniejszający aktywność receptora poniżej jego poziomu podstawowego.",
      "explanation": "Ma znaczenie przy receptorach wykazujących aktywność konstytutywną. To nie to samo co neutralny antagonista, który głównie blokuje działanie innych ligandów.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "receptor.antagonist"
      ],
      "related": [
        {
          "id": "receptor.constitutive_activity",
          "relation": "requires",
          "why": "Odwrotna agonistyka wymaga aktywności podstawowej do obniżenia."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "receptor.constitutive_activity",
      "slug": "receptor-constitutive_activity",
      "title": "Aktywność konstytutywna",
      "category": "receptors",
      "kind": "concept",
      "difficulty": 3,
      "short": "Aktywność receptora występująca nawet bez związanego agonisty.",
      "explanation": "Niektóre receptory spontanicznie przechodzą między stanami aktywnymi i nieaktywnymi. Odwrotny agonista może przesuwać równowagę w stronę nieaktywną.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "foundation.receptor"
      ],
      "related": [
        {
          "id": "receptor.inverse_agonist",
          "relation": "explains",
          "why": "Wyjaśnia różnicę między antagonistą i odwrotnym agonistą."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "receptor.pam",
      "slug": "receptor-pam",
      "title": "PAM — pozytywny modulator allosteryczny",
      "category": "receptors",
      "kind": "concept",
      "difficulty": 3,
      "short": "Ligand, który nasila działanie agonisty, wiążąc się w innym miejscu receptora.",
      "explanation": "PAM może zwiększać powinowactwo agonisty, jego skuteczność albo oba parametry. Niektóre PAM-y mają małą lub żadną aktywność bez agonisty.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "foundation.allosteric_site",
        "receptor.full_agonist"
      ],
      "related": [
        {
          "id": "receptor.nam",
          "relation": "contrast",
          "why": "NAM osłabia działanie agonisty."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "receptor.nam",
      "slug": "receptor-nam",
      "title": "NAM — negatywny modulator allosteryczny",
      "category": "receptors",
      "kind": "concept",
      "difficulty": 3,
      "short": "Ligand allosteryczny osłabiający działanie agonisty.",
      "explanation": "Może obniżać powinowactwo agonisty, jego skuteczność albo oba parametry, bez bezpośredniego konkurowania o główne miejsce wiążące.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "foundation.allosteric_site",
        "receptor.full_agonist"
      ],
      "related": [
        {
          "id": "receptor.pam",
          "relation": "contrast",
          "why": "PAM działa w przeciwnym kierunku."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "receptor.gpcr",
      "slug": "receptor-gpcr",
      "title": "GPCR — receptor sprzężony z białkiem G",
      "category": "receptors",
      "kind": "concept",
      "difficulty": 2,
      "short": "Duża rodzina receptorów błonowych uruchamiających wewnątrzkomórkowe szlaki sygnałowe.",
      "explanation": "Po aktywacji GPCR zmienia konformację i może regulować białka G, a pośrednio m.in. cAMP, fosfolipazy, kanały jonowe i kinazy. CB1, CB2 i receptory muskarynowe należą do GPCR.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "foundation.receptor"
      ],
      "related": [
        {
          "id": "receptor.second_messenger",
          "relation": "signals_via",
          "why": "GPCR często zmieniają poziomy wtórnych przekaźników."
        },
        {
          "id": "receptor.biased_agonism",
          "relation": "supports",
          "why": "Jeden GPCR może aktywować wiele szlaków."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_biased"
      ],
      "tags": [],
      "cannabis_relevance": "high",
      "evidence_status": "established"
    },
    {
      "id": "receptor.ionotropic",
      "slug": "receptor-ionotropic",
      "title": "Receptor jonotropowy",
      "category": "receptors",
      "kind": "concept",
      "difficulty": 2,
      "short": "Receptor będący jednocześnie kanałem jonowym otwieranym przez ligand.",
      "explanation": "Działa zwykle szybko: związanie neuroprzekaźnika bezpośrednio zmienia przepływ jonów i potencjał błonowy. Przykłady: GABA-A, AMPA, NMDA, nikotynowy receptor ACh.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "foundation.receptor"
      ],
      "related": [
        {
          "id": "neuro.gabaa",
          "relation": "example",
          "why": "GABA-A jest kanałem chlorkowym."
        },
        {
          "id": "neuro.ampar",
          "relation": "example",
          "why": "AMPA przepuszcza kationy."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ncbi_gaba",
        "src_ncbi_glutamate"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "receptor.metabotropic",
      "slug": "receptor-metabotropic",
      "title": "Receptor metabotropowy",
      "category": "receptors",
      "kind": "concept",
      "difficulty": 2,
      "short": "Receptor wpływający na komórkę przez pośrednie szlaki sygnałowe zamiast bezpośredniego kanału.",
      "explanation": "Działa zwykle wolniej niż receptor jonotropowy, ale odpowiedź może być bardziej złożona i długotrwała. Wiele receptorów metabotropowych to GPCR.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "foundation.receptor"
      ],
      "related": [
        {
          "id": "receptor.gpcr",
          "relation": "often_is",
          "why": "Wiele receptorów metabotropowych to GPCR."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ncbi_gaba"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "receptor.second_messenger",
      "slug": "receptor-second_messenger",
      "title": "Wtórny przekaźnik",
      "category": "receptors",
      "kind": "concept",
      "difficulty": 3,
      "short": "Cząsteczka wewnątrz komórki przekazująca sygnał dalej po aktywacji receptora.",
      "explanation": "Do klasycznych wtórnych przekaźników należą cAMP, IP3, DAG i Ca2+. Pozwalają wzmacniać i rozgałęziać sygnał.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "receptor.metabotropic"
      ],
      "related": [
        {
          "id": "receptor.gpcr",
          "relation": "downstream",
          "why": "GPCR często reguluje wtórne przekaźniki."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_biased"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "receptor.biased_agonism",
      "slug": "receptor-biased_agonism",
      "title": "Biased agonism / selektywność funkcjonalna",
      "category": "receptors",
      "kind": "concept",
      "difficulty": 4,
      "short": "Ten sam receptor może uruchamiać różne szlaki zależnie od ligandu.",
      "explanation": "Różne ligandy mogą stabilizować odmienne konformacje receptora, przez co preferencyjnie angażują np. białka G albo β-arrestyny. Oznacza to, że „oba są agonistami tego samego receptora” nie gwarantuje identycznego profilu efektów.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "receptor.gpcr",
        "foundation.efficacy"
      ],
      "related": [
        {
          "id": "receptor.desensitization",
          "relation": "interacts",
          "why": "β-arrestyny uczestniczą też w desensytyzacji GPCR."
        }
      ],
      "misconceptions": [],
      "check_yourself": [
        "Dlaczego dwa agonisty tego samego receptora mogą dawać różne efekty?"
      ],
      "sources": [
        "src_biased"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "receptor.desensitization",
      "slug": "receptor-desensitization",
      "title": "Desensytyzacja receptora",
      "category": "receptors",
      "kind": "concept",
      "difficulty": 3,
      "short": "Spadek odpowiedzi receptora mimo dalszej obecności agonisty.",
      "explanation": "Może wynikać z fosforylacji receptora, wiązania arrestyn, internalizacji lub zmian dalszych elementów szlaku. Jest jednym z mechanizmów szybkiej tolerancji.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "foundation.receptor"
      ],
      "related": [
        {
          "id": "receptor.tolerance",
          "relation": "contributes",
          "why": "Desensytyzacja może przyczyniać się do tolerancji."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_biased"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "receptor.tolerance",
      "slug": "receptor-tolerance",
      "title": "Tolerancja",
      "category": "receptors",
      "kind": "concept",
      "difficulty": 3,
      "short": "Zmniejszenie odpowiedzi na tę samą ekspozycję po powtarzanym lub długotrwałym działaniu.",
      "explanation": "Może być farmakodynamiczna (np. receptory i szlaki) lub farmakokinetyczna (np. szybszy metabolizm). Nie jest jednym procesem molekularnym.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "receptor.desensitization",
        "pk.metabolism"
      ],
      "related": [
        {
          "id": "pk.enzyme_induction",
          "relation": "mechanism",
          "why": "Indukcja enzymów może zwiększać tolerancję farmakokinetyczną."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "enzyme.enzyme",
      "slug": "enzyme-enzyme",
      "title": "Enzym",
      "category": "enzymes",
      "kind": "concept",
      "difficulty": 1,
      "short": "Białko lub RNA przyspieszające reakcję chemiczną bez zużywania się w każdym cyklu.",
      "explanation": "Enzym wiąże substrat, stabilizuje stan przejściowy i przyspiesza reakcję. Aktywność enzymu można zmieniać inhibitorami, aktywatorami, stężeniem substratu i warunkami środowiska.",
      "analogy": "Maszyna na linii produkcyjnej, która przetwarza kolejne sztuki substratu.",
      "key_points": [],
      "examples": [],
      "dependencies": [],
      "related": [
        {
          "id": "enzyme.inhibition",
          "relation": "regulated_by",
          "why": "Inhibitory zmniejszają aktywność enzymu."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ncbi_ache"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "enzyme.substrate",
      "slug": "enzyme-substrate",
      "title": "Substrat enzymu",
      "category": "enzymes",
      "kind": "concept",
      "difficulty": 1,
      "short": "Cząsteczka przetwarzana przez enzym w produkt.",
      "explanation": "Dla AChE substratem jest acetylocholina. Substrat wiąże się w miejscu aktywnym, przechodzi reakcję i opuszcza enzym jako produkt lub produkty.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "enzyme.enzyme"
      ],
      "related": [
        {
          "id": "enzyme.active_site",
          "relation": "binds",
          "why": "Substrat trafia do miejsca aktywnego."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ncbi_ache"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "enzyme.active_site",
      "slug": "enzyme-active_site",
      "title": "Miejsce aktywne enzymu",
      "category": "enzymes",
      "kind": "concept",
      "difficulty": 2,
      "short": "Obszar enzymu, w którym wiąże się substrat i zachodzi reakcja.",
      "explanation": "Geometria, ładunki i ruchliwość aminokwasów w miejscu aktywnym determinują selektywność i szybkość reakcji.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "enzyme.enzyme",
        "enzyme.substrate"
      ],
      "related": [
        {
          "id": "enzyme.competitive_inhibition",
          "relation": "blocked_by",
          "why": "Inhibitor kompetycyjny konkuruje o miejsce aktywne."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ncbi_ache"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "enzyme.inhibition",
      "slug": "enzyme-inhibition",
      "title": "Hamowanie enzymu",
      "category": "enzymes",
      "kind": "concept",
      "difficulty": 2,
      "short": "Zmniejszenie szybkości reakcji katalizowanej przez enzym.",
      "explanation": "Może wynikać z bezpośredniego zajęcia miejsca aktywnego, wiązania allosterycznego, stabilizacji nieaktywnej konformacji albo trwałej modyfikacji enzymu.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "enzyme.enzyme"
      ],
      "related": [
        {
          "id": "enzyme.competitive_inhibition",
          "relation": "type",
          "why": "Jeden z klasycznych typów inhibicji."
        },
        {
          "id": "enzyme.irreversible_inhibition",
          "relation": "type",
          "why": "Może być trwałe dla danej cząsteczki enzymu."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_iuphar_terms",
        "src_ncbi_ache"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "enzyme.competitive_inhibition",
      "slug": "enzyme-competitive_inhibition",
      "title": "Inhibicja kompetycyjna",
      "category": "enzymes",
      "kind": "concept",
      "difficulty": 3,
      "short": "Inhibitor konkuruje z substratem o to samo lub nakładające się miejsce.",
      "explanation": "W klasycznym modelu zwiększenie stężenia substratu może przezwyciężyć hamowanie. Vmax pozostaje, a pozorne Km rośnie.",
      "analogy": "Dwa samochody chcą wjechać do tej samej bramki.",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "enzyme.active_site",
        "enzyme.inhibition"
      ],
      "related": [
        {
          "id": "enzyme.noncompetitive_inhibition",
          "relation": "contrast",
          "why": "Niekompetycyjna nie polega na prostej walce o to samo miejsce."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "enzyme.noncompetitive_inhibition",
      "slug": "enzyme-noncompetitive_inhibition",
      "title": "Inhibicja niekompetycyjna",
      "category": "enzymes",
      "kind": "concept",
      "difficulty": 3,
      "short": "Idealizowany typ inhibicji, w którym inhibitor wiąże enzym i kompleks enzym–substrat z podobnym powinowactwem.",
      "explanation": "W czystym modelu zmniejsza Vmax bez zmiany Km. W realnych układach częściej spotyka się zachowanie mieszane niż perfekcyjnie niekompetycyjne.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "enzyme.inhibition"
      ],
      "related": [
        {
          "id": "enzyme.mixed_inhibition",
          "relation": "nearby",
          "why": "Inhibicja mieszana jest bardziej ogólnym przypadkiem."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "enzyme.mixed_inhibition",
      "slug": "enzyme-mixed_inhibition",
      "title": "Inhibicja mieszana",
      "category": "enzymes",
      "kind": "concept",
      "difficulty": 3,
      "short": "Inhibitor może wiązać wolny enzym i kompleks enzym–substrat, ale z różnym powinowactwem.",
      "explanation": "Zmienia zarówno Vmax, jak i pozorne Km. To wygodny model dla inhibitorów, które nie zachowują się idealnie kompetycyjnie ani niekompetycyjnie.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "enzyme.inhibition"
      ],
      "related": [
        {
          "id": "enzyme.noncompetitive_inhibition",
          "relation": "generalizes",
          "why": "Czysta inhibicja niekompetycyjna jest szczególnym przypadkiem mieszanej."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "enzyme.irreversible_inhibition",
      "slug": "enzyme-irreversible_inhibition",
      "title": "Inhibicja nieodwracalna",
      "category": "enzymes",
      "kind": "concept",
      "difficulty": 3,
      "short": "Trwała funkcjonalna inaktywacja konkretnej cząsteczki enzymu.",
      "explanation": "Często wynika z kowalencyjnej modyfikacji enzymu. Usunięcie wolnego inhibitora nie przywraca aktywności już zmodyfikowanej cząsteczki; aktywność układu wraca przez reaktywację w szczególnych przypadkach lub syntezę nowych cząsteczek enzymu.",
      "analogy": "Nie zaparkowałeś przed bramką — zalałeś mechanizm bramki klejem.",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "enzyme.inhibition"
      ],
      "related": [],
      "misconceptions": [
        "„nieodwracalny” = efekt w organizmie trwa wiecznie"
      ],
      "check_yourself": [],
      "sources": [
        "src_ncbi_ache"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "enzyme.ache",
      "slug": "enzyme-ache",
      "title": "AChE — acetylocholinesteraza",
      "category": "enzymes",
      "kind": "concept",
      "difficulty": 2,
      "short": "Enzym szybko kończący sygnał acetylocholiny przez jej hydrolizę.",
      "explanation": "AChE rozkłada acetylocholinę do choliny i octanu, co ogranicza czas działania ACh w synapsach i złączu nerwowo-mięśniowym. Silne zahamowanie AChE może prowadzić do nadmiernej stymulacji cholinergicznej.",
      "analogy": "Bardzo szybka ekipa sprzątająca usuwa wiadomość ACh zaraz po jej dostarczeniu.",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "enzyme.enzyme",
        "neuro.acetylcholine"
      ],
      "related": [
        {
          "id": "neuro.cholinergic_system",
          "relation": "part_of",
          "why": "AChE jest kluczowym elementem transmisji cholinergicznej."
        },
        {
          "id": "enzyme.bche",
          "relation": "relative",
          "why": "BChE jest pokrewną cholinoesterazą."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ncbi_ache",
        "src_ncbi_ach"
      ],
      "tags": [],
      "cannabis_relevance": "medium",
      "evidence_status": "established"
    },
    {
      "id": "enzyme.bche",
      "slug": "enzyme-bche",
      "title": "BChE — butyrylocholinoesteraza",
      "category": "enzymes",
      "kind": "concept",
      "difficulty": 3,
      "short": "Pokrewna cholinoesteraza o szerszej specyficzności substratowej niż AChE.",
      "explanation": "BChE występuje m.in. w osoczu i tkankach. Może hydrolizować różne estry i wpływać na los niektórych leków i toksyn.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "enzyme.enzyme"
      ],
      "related": [
        {
          "id": "enzyme.ache",
          "relation": "relative",
          "why": "Obie są cholinoesterazami, ale różnią się lokalizacją i preferencjami substratowymi."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ncbi_cholinergic"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "enzyme.maoa",
      "slug": "enzyme-maoa",
      "title": "MAO-A",
      "category": "enzymes",
      "kind": "concept",
      "difficulty": 3,
      "short": "Izoenzym monoaminooksydazy rozkładający monoaminy, szczególnie ważny m.in. dla serotoniny i noradrenaliny.",
      "explanation": "MAO znajduje się na zewnętrznej błonie mitochondriów. Hamowanie MAO-A może zwiększać ekspozycję na jego substraty i tworzyć ważne interakcje.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "neuro.serotonin",
        "neuro.norepinephrine"
      ],
      "related": [
        {
          "id": "enzyme.maob",
          "relation": "sibling",
          "why": "MAO-B jest drugim głównym izoenzymem."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_mao_comt"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "enzyme.maob",
      "slug": "enzyme-maob",
      "title": "MAO-B",
      "category": "enzymes",
      "kind": "concept",
      "difficulty": 3,
      "short": "Drugi główny izoenzym monoaminooksydazy, o innym profilu substratów i rozmieszczenia.",
      "explanation": "MAO-B uczestniczy m.in. w metabolizmie części amin biogennych. Różnice MAO-A/MAO-B mają znaczenie farmakologiczne i kliniczne.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "enzyme.maoa"
      ],
      "related": [
        {
          "id": "enzyme.maoa",
          "relation": "sibling",
          "why": "Obie katalizują oksydacyjne deaminowanie monoamin."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_mao_comt"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "enzyme.comt",
      "slug": "enzyme-comt",
      "title": "COMT — katecholo-O-metylotransferaza",
      "category": "enzymes",
      "kind": "concept",
      "difficulty": 3,
      "short": "Enzym metylujący katechole, uczestniczący w metabolizmie katecholamin.",
      "explanation": "COMT wykorzystuje S-adenozylometioninę jako donor grupy metylowej. Wraz z MAO uczestniczy w unieczynnianiu dopaminy, noradrenaliny i adrenaliny.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "neuro.dopamine",
        "neuro.norepinephrine"
      ],
      "related": [
        {
          "id": "enzyme.maoa",
          "relation": "parallel",
          "why": "MAO i COMT tworzą uzupełniające szlaki metabolizmu katecholamin."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_mao_comt"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "transporter.transporter",
      "slug": "transporter-transporter",
      "title": "Transporter błonowy",
      "category": "transporters",
      "kind": "concept",
      "difficulty": 1,
      "short": "Białko przenoszące określone cząsteczki przez błonę komórkową.",
      "explanation": "Transporter może wykorzystywać gradient jonów albo energię pośrednią. W neurobiologii transportery regulują usuwanie neuroprzekaźników z przestrzeni zewnątrzkomórkowej i ich magazynowanie.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [],
      "related": [
        {
          "id": "transporter.reuptake",
          "relation": "process",
          "why": "Reuptake wykorzystuje transportery błonowe."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_monoamine_transporters"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "transporter.reuptake",
      "slug": "transporter-reuptake",
      "title": "Wychwyt zwrotny (reuptake)",
      "category": "transporters",
      "kind": "concept",
      "difficulty": 2,
      "short": "Usuwanie uwolnionego neuroprzekaźnika z przestrzeni synaptycznej przez transporter.",
      "explanation": "SERT, DAT i NET przenoszą odpowiednio serotoninę, dopaminę i noradrenalinę z powrotem do komórek. Hamowanie wychwytu może wydłużać obecność transmitera poza komórką.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "transporter.transporter",
        "neuro.synapse"
      ],
      "related": [
        {
          "id": "transporter.sert",
          "relation": "example",
          "why": "SERT odpowiada za wychwyt serotoniny."
        },
        {
          "id": "transporter.dat",
          "relation": "example",
          "why": "DAT odpowiada za wychwyt dopaminy."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_monoamine_transporters"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "transporter.dat",
      "slug": "transporter-dat",
      "title": "DAT — transporter dopaminy",
      "category": "transporters",
      "kind": "concept",
      "difficulty": 2,
      "short": "Transporter SLC6A3 uczestniczący w wychwycie zwrotnym dopaminy.",
      "explanation": "DAT ogranicza czas i przestrzenny zasięg sygnału dopaminowego oraz pomaga odzyskiwać dopaminę do neuronu presynaptycznego.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "transporter.reuptake",
        "neuro.dopamine"
      ],
      "related": [
        {
          "id": "transporter.net",
          "relation": "family",
          "why": "DAT i NET należą do rodziny transporterów monoamin SLC6."
        },
        {
          "id": "transporter.sert",
          "relation": "family",
          "why": "SERT również należy do SLC6."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_monoamine_transporters"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "transporter.sert",
      "slug": "transporter-sert",
      "title": "SERT — transporter serotoniny",
      "category": "transporters",
      "kind": "concept",
      "difficulty": 2,
      "short": "Transporter SLC6A4 usuwający serotoninę z przestrzeni zewnątrzkomórkowej.",
      "explanation": "Blokada SERT zmniejsza wychwyt serotoniny i zmienia jej sygnalizację. SERT jest głównym celem leków z grupy SSRI.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "transporter.reuptake",
        "neuro.serotonin"
      ],
      "related": [
        {
          "id": "transporter.dat",
          "relation": "family",
          "why": "Oba są transporterami monoamin SLC6."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_monoamine_transporters"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "transporter.net",
      "slug": "transporter-net",
      "title": "NET — transporter noradrenaliny",
      "category": "transporters",
      "kind": "concept",
      "difficulty": 2,
      "short": "Transporter SLC6A2 uczestniczący w wychwycie zwrotnym noradrenaliny.",
      "explanation": "NET pomaga kończyć sygnał noradrenergiczny i odzyskiwać noradrenalinę do neuronu presynaptycznego.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "transporter.reuptake",
        "neuro.norepinephrine"
      ],
      "related": [
        {
          "id": "transporter.dat",
          "relation": "family",
          "why": "DAT i NET mają pokrewną architekturę i mechanizm."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_monoamine_transporters"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "transporter.vmat2",
      "slug": "transporter-vmat2",
      "title": "VMAT2 — pęcherzykowy transporter monoamin",
      "category": "transporters",
      "kind": "concept",
      "difficulty": 3,
      "short": "Transporter przenoszący monoaminy z cytoplazmy do pęcherzyków synaptycznych.",
      "explanation": "VMAT2 pomaga magazynować dopaminę, serotoninę, noradrenalinę i inne monoaminy przed ich uwolnieniem. To inna funkcja niż DAT/SERT/NET, które transportują przez błonę komórkową.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "neuro.vesicle",
        "neuro.monoamine"
      ],
      "related": [
        {
          "id": "transporter.dat",
          "relation": "contrast",
          "why": "DAT działa na błonie komórkowej, VMAT2 na błonie pęcherzyka."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_monoamine_transporters"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "transporter.vacht",
      "slug": "transporter-vacht",
      "title": "VAChT — pęcherzykowy transporter acetylocholiny",
      "category": "transporters",
      "kind": "concept",
      "difficulty": 3,
      "short": "Ładuje acetylocholinę do pęcherzyków synaptycznych.",
      "explanation": "VAChT wykorzystuje gradient protonowy pęcherzyka, dzięki czemu ACh może zostać zgromadzona i później uwolniona egzocytozą.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "neuro.acetylcholine",
        "neuro.vesicle"
      ],
      "related": [
        {
          "id": "enzyme.ache",
          "relation": "same_system",
          "why": "VAChT magazynuje ACh, AChE kończy jej sygnał."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ncbi_cholinergic"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "neuro.synapse",
      "slug": "neuro-synapse",
      "title": "Synapsa",
      "category": "neurotransmission",
      "kind": "concept",
      "difficulty": 1,
      "short": "Miejsce przekazywania informacji między neuronami lub neuronem i inną komórką.",
      "explanation": "W synapsie chemicznej neuron presynaptyczny uwalnia neuroprzekaźnik, który dyfunduje przez szczelinę i oddziałuje z receptorami komórki postsynaptycznej lub receptorami presynaptycznymi.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [],
      "related": [
        {
          "id": "neuro.neurotransmitter",
          "relation": "uses",
          "why": "Neuroprzekaźniki przenoszą sygnał w synapsie."
        },
        {
          "id": "transporter.reuptake",
          "relation": "terminates",
          "why": "Wychwyt zwrotny pomaga kończyć sygnał."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ncbi_ach"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "neuro.neurotransmitter",
      "slug": "neuro-neurotransmitter",
      "title": "Neuroprzekaźnik",
      "category": "neurotransmission",
      "kind": "concept",
      "difficulty": 1,
      "short": "Cząsteczka używana przez neurony do przekazywania sygnałów.",
      "explanation": "Po uwolnieniu neuroprzekaźnik może aktywować różne typy receptorów. Ten sam neuroprzekaźnik nie ma jednego uniwersalnego efektu — zależy od receptorów, komórki i obwodu.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "neuro.synapse"
      ],
      "related": [
        {
          "id": "neuro.acetylcholine",
          "relation": "example",
          "why": "ACh jest neuroprzekaźnikiem."
        },
        {
          "id": "neuro.gaba",
          "relation": "example",
          "why": "GABA jest głównym hamującym neuroprzekaźnikiem CNS."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ncbi_ach",
        "src_ncbi_gaba"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "neuro.vesicle",
      "slug": "neuro-vesicle",
      "title": "Pęcherzyk synaptyczny",
      "category": "neurotransmission",
      "kind": "concept",
      "difficulty": 2,
      "short": "Mały pęcherzyk błonowy magazynujący neuroprzekaźnik przed uwolnieniem.",
      "explanation": "Po napływie Ca2+ pęcherzyki mogą łączyć się z błoną presynaptyczną i uwalniać zawartość do szczeliny synaptycznej.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "neuro.synapse"
      ],
      "related": [
        {
          "id": "transporter.vmat2",
          "relation": "loads",
          "why": "VMAT2 ładuje monoaminy do pęcherzyków."
        },
        {
          "id": "transporter.vacht",
          "relation": "loads",
          "why": "VAChT ładuje ACh."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ncbi_cholinergic"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "neuro.acetylcholine",
      "slug": "neuro-acetylcholine",
      "title": "Acetylocholina (ACh)",
      "category": "neurotransmission",
      "kind": "concept",
      "difficulty": 1,
      "short": "Neuroprzekaźnik działający na receptory nikotynowe i muskarynowe.",
      "explanation": "ACh uczestniczy m.in. w transmisji nerwowo-mięśniowej, autonomicznej oraz funkcjach ośrodkowego układu nerwowego. Jej sygnał jest szybko kończony przez AChE.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "neuro.neurotransmitter"
      ],
      "related": [
        {
          "id": "enzyme.ache",
          "relation": "degraded_by",
          "why": "AChE hydrolizuje ACh."
        },
        {
          "id": "neuro.nachr",
          "relation": "receptor",
          "why": "Receptory nikotynowe są jedną rodziną receptorów ACh."
        },
        {
          "id": "neuro.machr",
          "relation": "receptor",
          "why": "Muskarynowe receptory ACh są GPCR."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ncbi_ach"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "neuro.nachr",
      "slug": "neuro-nachr",
      "title": "Nikotynowy receptor acetylocholiny (nAChR)",
      "category": "neurotransmission",
      "kind": "concept",
      "difficulty": 2,
      "short": "Jonotropowy receptor ACh przepuszczający kationy.",
      "explanation": "Nazwa pochodzi od nikotyny, która może aktywować tę rodzinę receptorów. Podtypy różnią się składem podjednostek, rozmieszczeniem i farmakologią.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "neuro.acetylcholine",
        "receptor.ionotropic"
      ],
      "related": [
        {
          "id": "neuro.machr",
          "relation": "contrast",
          "why": "Muskarynowe receptory ACh są metabotropowe."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ncbi_cholinergic"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "neuro.machr",
      "slug": "neuro-machr",
      "title": "Muskarynowy receptor acetylocholiny (mAChR)",
      "category": "neurotransmission",
      "kind": "concept",
      "difficulty": 2,
      "short": "Rodzina metabotropowych receptorów ACh sprzężonych z białkiem G.",
      "explanation": "Podtypy M1–M5 uruchamiają różne szlaki sygnałowe. Efekt ACh zależy więc od tego, który receptor i w jakiej tkance zostanie aktywowany.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "neuro.acetylcholine",
        "receptor.gpcr"
      ],
      "related": [
        {
          "id": "neuro.nachr",
          "relation": "contrast",
          "why": "nAChR to kanały jonowe."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ncbi_cholinergic"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "neuro.cholinergic_system",
      "slug": "neuro-cholinergic_system",
      "title": "Układ cholinergiczny",
      "category": "neurotransmission",
      "kind": "concept",
      "difficulty": 2,
      "short": "Sieć procesów związanych z syntezą, uwalnianiem, receptorami i rozkładem acetylocholiny.",
      "explanation": "Obejmuje m.in. ChAT, VAChT, ACh, receptory nikotynowe i muskarynowe oraz AChE. To cały cykl sygnału, a nie jeden receptor.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "neuro.acetylcholine",
        "enzyme.ache",
        "transporter.vacht"
      ],
      "related": [
        {
          "id": "enzyme.ache",
          "relation": "component",
          "why": "AChE kończy sygnał ACh."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ncbi_cholinergic"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "neuro.dopamine",
      "slug": "neuro-dopamine",
      "title": "Dopamina",
      "category": "neurotransmission",
      "kind": "concept",
      "difficulty": 1,
      "short": "Monoaminowy neuroprzekaźnik modulujący m.in. ruch, uczenie, motywację i przetwarzanie nagrody.",
      "explanation": "Dopamina działa przez kilka receptorów GPCR. Jej sygnał reguluje m.in. DAT, MAO i COMT. Nie jest prostą „cząsteczką przyjemności”.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "neuro.neurotransmitter"
      ],
      "related": [
        {
          "id": "transporter.dat",
          "relation": "cleared_by",
          "why": "DAT uczestniczy w wychwycie dopaminy."
        },
        {
          "id": "enzyme.comt",
          "relation": "metabolized_by",
          "why": "COMT uczestniczy w metabolizmie katecholamin."
        }
      ],
      "misconceptions": [
        "dopamina = wyłącznie przyjemność"
      ],
      "check_yourself": [],
      "sources": [
        "src_mao_comt",
        "src_monoamine_transporters"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "neuro.serotonin",
      "slug": "neuro-serotonin",
      "title": "Serotonina (5-HT)",
      "category": "neurotransmission",
      "kind": "concept",
      "difficulty": 1,
      "short": "Monoaminowy neuroprzekaźnik działający przez wiele rodzin receptorów.",
      "explanation": "Serotonina reguluje liczne funkcje fizjologiczne i behawioralne. SERT uczestniczy w jej wychwycie, a MAO-A w metabolizmie.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "neuro.neurotransmitter"
      ],
      "related": [
        {
          "id": "transporter.sert",
          "relation": "cleared_by",
          "why": "SERT reguluje wychwyt serotoniny."
        },
        {
          "id": "enzyme.maoa",
          "relation": "metabolized_by",
          "why": "MAO-A jest ważny w jej metabolizmie."
        }
      ],
      "misconceptions": [
        "serotonina = po prostu „hormon szczęścia”"
      ],
      "check_yourself": [],
      "sources": [
        "src_monoamine_transporters",
        "src_mao_comt"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "neuro.norepinephrine",
      "slug": "neuro-norepinephrine",
      "title": "Noradrenalina / norepinefryna",
      "category": "neurotransmission",
      "kind": "concept",
      "difficulty": 1,
      "short": "Katecholaminowy neuroprzekaźnik i hormon związany m.in. z czuwaniem i reakcjami autonomicznymi.",
      "explanation": "NET odpowiada za dużą część jej wychwytu zwrotnego, a MAO i COMT uczestniczą w metabolizmie.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "neuro.neurotransmitter"
      ],
      "related": [
        {
          "id": "transporter.net",
          "relation": "cleared_by",
          "why": "NET transportuje noradrenalinę."
        },
        {
          "id": "enzyme.comt",
          "relation": "metabolized_by",
          "why": "COMT uczestniczy w metabolizmie katecholamin."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_mao_comt",
        "src_monoamine_transporters"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "neuro.monoamine",
      "slug": "neuro-monoamine",
      "title": "Monoaminy",
      "category": "neurotransmission",
      "kind": "concept",
      "difficulty": 2,
      "short": "Klasa cząsteczek obejmująca m.in. dopaminę, noradrenalinę i serotoninę.",
      "explanation": "Monoaminy mają wspólne elementy biologii: syntezę enzymatyczną, magazynowanie pęcherzykowe, transportery wychwytu oraz metabolizm m.in. przez MAO.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "neuro.neurotransmitter"
      ],
      "related": [
        {
          "id": "transporter.vmat2",
          "relation": "stores",
          "why": "VMAT2 magazynuje wiele monoamin."
        },
        {
          "id": "enzyme.maoa",
          "relation": "metabolizes",
          "why": "MAO rozkłada monoaminy."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_mao_comt"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "neuro.gaba",
      "slug": "neuro-gaba",
      "title": "GABA",
      "category": "neurotransmission",
      "kind": "concept",
      "difficulty": 1,
      "short": "Główny hamujący neuroprzekaźnik w dojrzałym ośrodkowym układzie nerwowym.",
      "explanation": "GABA działa m.in. przez szybkie receptory GABA-A i wolniejsze GABA-B. „Hamujący” oznacza wpływ zmniejszający prawdopodobieństwo pobudzenia w określonych warunkach, nie jeden subiektywny efekt.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "neuro.neurotransmitter"
      ],
      "related": [
        {
          "id": "neuro.gabaa",
          "relation": "receptor",
          "why": "GABA-A jest receptorem jonotropowym."
        },
        {
          "id": "neuro.gabab",
          "relation": "receptor",
          "why": "GABA-B jest GPCR."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ncbi_gaba"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "neuro.gabaa",
      "slug": "neuro-gabaa",
      "title": "Receptor GABA-A",
      "category": "neurotransmission",
      "kind": "concept",
      "difficulty": 2,
      "short": "Pentameryczny receptor jonotropowy, zwykle przewodzący Cl− i pośredniczący w szybkim hamowaniu.",
      "explanation": "Różne kombinacje podjednostek dają receptory o odmiennej lokalizacji i farmakologii. GABA-A posiada wiele miejsc modulacyjnych.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "neuro.gaba",
        "receptor.ionotropic"
      ],
      "related": [
        {
          "id": "receptor.pam",
          "relation": "mechanism",
          "why": "Niektóre ligandy mogą dodatnio modulować GABA-A w miejscach allosterycznych."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ncbi_gaba"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "neuro.gabab",
      "slug": "neuro-gabab",
      "title": "Receptor GABA-B",
      "category": "neurotransmission",
      "kind": "concept",
      "difficulty": 2,
      "short": "Metabotropowy receptor GABA sprzężony z białkiem G.",
      "explanation": "Może zmniejszać napływ Ca2+, zwiększać przewodnictwo K+ i ograniczać uwalnianie neuroprzekaźników. Działa wolniej niż GABA-A.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "neuro.gaba",
        "receptor.gpcr"
      ],
      "related": [
        {
          "id": "neuro.gabaa",
          "relation": "contrast",
          "why": "GABA-A jest kanałem jonowym."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ncbi_gaba"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "neuro.glutamate",
      "slug": "neuro-glutamate",
      "title": "Glutaminian",
      "category": "neurotransmission",
      "kind": "concept",
      "difficulty": 1,
      "short": "Główny pobudzający neuroprzekaźnik w ośrodkowym układzie nerwowym.",
      "explanation": "Aktywuje receptory jonotropowe AMPA, NMDA i kainianowe oraz receptory metabotropowe. Jest kluczowy dla transmisji pobudzającej i plastyczności.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "neuro.neurotransmitter"
      ],
      "related": [
        {
          "id": "neuro.ampar",
          "relation": "receptor",
          "why": "AMPA pośredniczy w szybkiej transmisji pobudzającej."
        },
        {
          "id": "neuro.nmdar",
          "relation": "receptor",
          "why": "NMDA pełni szczególną rolę w plastyczności."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ncbi_glutamate"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "neuro.ampar",
      "slug": "neuro-ampar",
      "title": "Receptor AMPA",
      "category": "neurotransmission",
      "kind": "concept",
      "difficulty": 2,
      "short": "Jonotropowy receptor glutaminianu pośredniczący w szybkiej transmisji pobudzającej.",
      "explanation": "Po związaniu glutaminianu otwiera kanał kationowy, zwykle powodując depolaryzację. AMPA często zapewnia szybki początek sygnału pobudzającego.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "neuro.glutamate",
        "receptor.ionotropic"
      ],
      "related": [
        {
          "id": "neuro.nmdar",
          "relation": "works_with",
          "why": "AMPA i NMDA często współdziałają w plastyczności synaptycznej."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ncbi_glutamate"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "neuro.nmdar",
      "slug": "neuro-nmdar",
      "title": "Receptor NMDA",
      "category": "neurotransmission",
      "kind": "concept",
      "difficulty": 3,
      "short": "Jonotropowy receptor glutaminianu o szczególnych właściwościach zależnych od ligandu i napięcia.",
      "explanation": "Kanał NMDA przewodzi m.in. Ca2+ i przy spoczynkowym potencjale jest blokowany przez Mg2+. Do silnej aktywacji potrzebne są odpowiednie ligandy oraz depolaryzacja, dlatego receptor działa jak detektor koincydencji.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "neuro.glutamate",
        "receptor.ionotropic"
      ],
      "related": [
        {
          "id": "neuro.plasticity",
          "relation": "supports",
          "why": "Napływ Ca2+ przez NMDA uczestniczy w zmianach plastyczności."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ncbi_nmda",
        "src_ncbi_glutamate"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "neuro.plasticity",
      "slug": "neuro-plasticity",
      "title": "Plastyczność synaptyczna",
      "category": "neurotransmission",
      "kind": "concept",
      "difficulty": 3,
      "short": "Zdolność synaps do długotrwałej zmiany siły działania.",
      "explanation": "Plastyczność obejmuje wiele mechanizmów presynaptycznych i postsynaptycznych. Receptory NMDA i AMPA są ważnymi elementami wielu modeli uczenia i pamięci.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "neuro.synapse",
        "neuro.nmdar",
        "neuro.ampar"
      ],
      "related": [
        {
          "id": "neuro.memory",
          "relation": "supports",
          "why": "Plastyczność jest jednym z mechanizmów biologicznych związanych z uczeniem."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ncbi_nmda"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "neuro.memory",
      "slug": "neuro-memory",
      "title": "Pamięć — poziom systemowy",
      "category": "neurotransmission",
      "kind": "concept",
      "difficulty": 3,
      "short": "Funkcja całych sieci neuronalnych, a nie pojedynczego neuroprzekaźnika czy receptora.",
      "explanation": "Pamięć wymaga współpracy wielu obwodów, receptorów i procesów plastyczności. Zwiększenie jednego neuroprzekaźnika nie przekłada się liniowo na „więcej pamięci”.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "neuro.plasticity"
      ],
      "related": [
        {
          "id": "enzyme.ache",
          "relation": "indirect",
          "why": "Zmiana transmisji cholinergicznej może wpływać na funkcje poznawcze, ale nie jest prostym suwakiem pamięci."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ncbi_nmda",
        "src_ncbi_ach"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "pk.adme",
      "slug": "pk-adme",
      "title": "ADME",
      "category": "pharmacokinetics",
      "kind": "concept",
      "difficulty": 1,
      "short": "Absorption, Distribution, Metabolism, Excretion — cztery główne etapy losu substancji w organizmie.",
      "explanation": "ADME odpowiada na pytanie „co organizm robi z substancją?”. Od tego zależy, czy i jak długo związek osiąga stężenie wystarczające do działania na dany cel.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [],
      "related": [
        {
          "id": "pk.bioavailability",
          "relation": "part",
          "why": "Bioavailability opisuje część etapu wchłaniania."
        },
        {
          "id": "pk.metabolism",
          "relation": "part",
          "why": "Metabolizm zmienia związek chemicznie."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_pk"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "pk.bioavailability",
      "slug": "pk-bioavailability",
      "title": "Biodostępność",
      "category": "pharmacokinetics",
      "kind": "concept",
      "difficulty": 2,
      "short": "Część podanej dawki, która dociera do krążenia ogólnego w dostępnej postaci.",
      "explanation": "Dla podania dożylnego przyjmuje się 100%. Droga podania, wchłanianie i metabolizm pierwszego przejścia mogą znacznie zmieniać biodostępność.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "pk.adme"
      ],
      "related": [
        {
          "id": "pk.first_pass",
          "relation": "reduces",
          "why": "Metabolizm pierwszego przejścia może obniżyć biodostępność doustną."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_pk"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "pk.distribution",
      "slug": "pk-distribution",
      "title": "Dystrybucja",
      "category": "pharmacokinetics",
      "kind": "concept",
      "difficulty": 2,
      "short": "Rozmieszczenie substancji między krwią i tkankami.",
      "explanation": "Zależy m.in. od lipofilności, wielkości, ładunku, przepływu krwi, wiązania z białkami i właściwości barier biologicznych.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "pk.adme"
      ],
      "related": [
        {
          "id": "pk.vd",
          "relation": "describes",
          "why": "Vd jest parametrem opisującym dystrybucję."
        },
        {
          "id": "pk.bbb",
          "relation": "limits",
          "why": "BBB ogranicza dostęp części związków do CNS."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_pk"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "pk.vd",
      "slug": "pk-vd",
      "title": "Objętość dystrybucji (Vd)",
      "category": "pharmacokinetics",
      "kind": "concept",
      "difficulty": 3,
      "short": "Pozorna objętość opisująca relację między ilością substancji w organizmie a jej stężeniem w osoczu.",
      "explanation": "Duże Vd często oznacza rozległą dystrybucję poza osocze. To parametr modelowy, a nie dosłowna objętość anatomiczna.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "pk.distribution"
      ],
      "related": [
        {
          "id": "pk.half_life",
          "relation": "affects",
          "why": "Vd wraz z klirensem wpływa na okres półtrwania."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_pk",
        "src_vd"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "pk.clearance",
      "slug": "pk-clearance",
      "title": "Klirens",
      "category": "pharmacokinetics",
      "kind": "concept",
      "difficulty": 3,
      "short": "Miara zdolności organizmu do usuwania substancji z krążenia w jednostce czasu.",
      "explanation": "Klirens wynika m.in. z metabolizmu i wydalania. W połączeniu z Vd wpływa na okres półtrwania.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "pk.adme"
      ],
      "related": [
        {
          "id": "pk.half_life",
          "relation": "determines",
          "why": "W uproszczonym modelu t1/2 zależy od Vd i CL."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_vd"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "pk.half_life",
      "slug": "pk-half_life",
      "title": "Okres półtrwania (t½)",
      "category": "pharmacokinetics",
      "kind": "concept",
      "difficulty": 2,
      "short": "Czas potrzebny, aby stężenie substancji w danej fazie spadło o połowę.",
      "explanation": "W prostym modelu t½ ≈ 0,693 × Vd / CL. Nie zawsze oznacza czas trwania subiektywnego efektu, bo efekt może zależeć od aktywnych metabolitów, dystrybucji i dynamiki receptora.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "pk.vd",
        "pk.clearance"
      ],
      "related": [],
      "misconceptions": [
        "half-life = dokładny czas działania"
      ],
      "check_yourself": [],
      "sources": [
        "src_vd"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "pk.bbb",
      "slug": "pk-bbb",
      "title": "Bariera krew–mózg (BBB)",
      "category": "pharmacokinetics",
      "kind": "concept",
      "difficulty": 2,
      "short": "Selektywna bariera ograniczająca przechodzenie wielu substancji z krwi do mózgu.",
      "explanation": "Przenikanie zależy od właściwości cząsteczki oraz transporterów i mechanizmów barierowych. Wynik in vitro na białku nie gwarantuje działania w mózgu, jeśli substancja nie osiąga tam odpowiedniego stężenia.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "pk.distribution"
      ],
      "related": [
        {
          "id": "evidence.exposure",
          "relation": "importance",
          "why": "Liczy się realne stężenie w miejscu działania."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_pk"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "pk.protein_binding",
      "slug": "pk-protein_binding",
      "title": "Wiązanie z białkami osocza",
      "category": "pharmacokinetics",
      "kind": "concept",
      "difficulty": 3,
      "short": "Odwracalne wiązanie substancji z białkami krwi, np. albuminą.",
      "explanation": "Frakcja wolna jest bezpośrednio dostępna do dystrybucji i wielu interakcji. Silne wiązanie może zmieniać dystrybucję i klirens.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "pk.distribution"
      ],
      "related": [],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_pk"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "pk.metabolism",
      "slug": "pk-metabolism",
      "title": "Metabolizm substancji",
      "category": "pharmacokinetics",
      "kind": "concept",
      "difficulty": 2,
      "short": "Enzymatyczne przekształcanie związku w metabolity.",
      "explanation": "Metabolizm może dezaktywować związek, tworzyć aktywny metabolit albo czasem metabolit bardziej toksyczny. Zachodzi szczególnie intensywnie w wątrobie, ale nie tylko tam.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "pk.adme"
      ],
      "related": [
        {
          "id": "pk.cyp450",
          "relation": "major_system",
          "why": "CYP450 jest ważnym systemem metabolizującym ksenobiotyki."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_cyp450"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "pk.metabolite",
      "slug": "pk-metabolite",
      "title": "Metabolit",
      "category": "pharmacokinetics",
      "kind": "concept",
      "difficulty": 2,
      "short": "Produkt chemicznego przekształcenia substancji w organizmie.",
      "explanation": "Metabolit może być nieaktywny, aktywny lub mieć profil odmienny od związku macierzystego. Dlatego modelowanie efektu wymaga czasem śledzenia całej sieci metabolitów.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "pk.metabolism"
      ],
      "related": [
        {
          "id": "interaction.pk_interaction",
          "relation": "affected_by",
          "why": "Interakcje metaboliczne mogą zmieniać poziomy metabolitów."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_cyp450"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "pk.cyp450",
      "slug": "pk-cyp450",
      "title": "Cytochrom P450 (CYP)",
      "category": "pharmacokinetics",
      "kind": "concept",
      "difficulty": 2,
      "short": "Duża rodzina enzymów, z których wiele uczestniczy w metabolizmie leków i innych ksenobiotyków.",
      "explanation": "Różne izoenzymy mają odmienne substraty i podatność na hamowanie lub indukcję. To jeden z głównych mechanizmów interakcji farmakokinetycznych.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "pk.metabolism"
      ],
      "related": [
        {
          "id": "pk.enzyme_inhibition",
          "relation": "interaction",
          "why": "Hamowanie CYP może zwiększać ekspozycję na jego substrat."
        },
        {
          "id": "pk.enzyme_induction",
          "relation": "interaction",
          "why": "Indukcja może przyspieszać metabolizm."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_cyp450"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "pk.enzyme_inhibition",
      "slug": "pk-enzyme_inhibition",
      "title": "Hamowanie enzymu metabolicznego",
      "category": "pharmacokinetics",
      "kind": "concept",
      "difficulty": 3,
      "short": "Zmniejszenie aktywności enzymu metabolizującego inną substancję.",
      "explanation": "Jeśli A hamuje enzym metabolizujący B, ekspozycja na B może wzrosnąć. Siła efektu zależy od udziału danego enzymu w całkowitym klirensie B i osiąganych stężeń inhibitora.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "pk.cyp450",
        "enzyme.inhibition"
      ],
      "related": [
        {
          "id": "interaction.pk_interaction",
          "relation": "mechanism",
          "why": "To klasyczna interakcja farmakokinetyczna."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_cyp450"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "pk.enzyme_induction",
      "slug": "pk-enzyme_induction",
      "title": "Indukcja enzymu metabolicznego",
      "category": "pharmacokinetics",
      "kind": "concept",
      "difficulty": 3,
      "short": "Zwiększenie ilości lub aktywności enzymu metabolicznego.",
      "explanation": "Może przyspieszyć metabolizm substratu i obniżyć jego ekspozycję. Zwykle rozwija się wolniej niż bezpośrednie hamowanie enzymu.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "pk.cyp450"
      ],
      "related": [
        {
          "id": "receptor.tolerance",
          "relation": "can_contribute",
          "why": "Indukcja metabolizmu może zmniejszać efekt tej samej dawki."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_cyp450"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "pk.first_pass",
      "slug": "pk-first_pass",
      "title": "Efekt pierwszego przejścia",
      "category": "pharmacokinetics",
      "kind": "concept",
      "difficulty": 2,
      "short": "Metabolizm zachodzący przed dotarciem doustnie podanej substancji do krążenia ogólnego.",
      "explanation": "Jelito i wątroba mogą znacząco zmniejszyć ilość związku macierzystego docierającą do krwi oraz zwiększyć udział metabolitów.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "pk.bioavailability",
        "pk.metabolism"
      ],
      "related": [],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_pk"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "interaction.additivity",
      "slug": "interaction-additivity",
      "title": "Addycja",
      "category": "interactions",
      "kind": "concept",
      "difficulty": 2,
      "short": "Łączny efekt zgodny z oczekiwaniem wynikającym z efektów składników osobno.",
      "explanation": "To punkt odniesienia dla oceny synergii i antagonizmu. „Więcej niż każdy osobno” nie musi jeszcze oznaczać synergii — trzeba porównać z odpowiednim modelem addytywności.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "foundation.dose_response"
      ],
      "related": [
        {
          "id": "interaction.synergy",
          "relation": "contrast",
          "why": "Synergia przekracza oczekiwanie addytywne."
        },
        {
          "id": "interaction.antagonism",
          "relation": "contrast",
          "why": "Antagonizm daje mniej niż oczekiwano."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "interaction.synergy",
      "slug": "interaction-synergy",
      "title": "Synergia",
      "category": "interactions",
      "kind": "concept",
      "difficulty": 2,
      "short": "Łączny efekt większy niż przewiduje zdefiniowany model addytywności.",
      "explanation": "Synergia wymaga formalnego punktu odniesienia i zależy od dawki, proporcji, endpointu i modelu. Nie wystarczy stwierdzić, że mieszanina działa mocniej od pojedynczego składnika.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "interaction.additivity"
      ],
      "related": [
        {
          "id": "interaction.antagonism",
          "relation": "contrast",
          "why": "Antagonizm jest odwrotnym odchyleniem od oczekiwania."
        }
      ],
      "misconceptions": [
        "A+B działa mocniej niż A, więc jest synergia"
      ],
      "check_yourself": [],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "high",
      "evidence_status": "established"
    },
    {
      "id": "interaction.antagonism",
      "slug": "interaction-antagonism",
      "title": "Antagonizm interakcji",
      "category": "interactions",
      "kind": "concept",
      "difficulty": 2,
      "short": "Łączny efekt mniejszy niż oczekiwany na podstawie składników.",
      "explanation": "Antagonizm może wynikać z konkurencji o receptor, przeciwstawnych szlaków fizjologicznych, zmiany metabolizmu albo innych mechanizmów.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "interaction.additivity"
      ],
      "related": [
        {
          "id": "receptor.antagonist",
          "relation": "one_mechanism",
          "why": "Antagonista receptorowy to tylko jeden z mechanizmów antagonizmu."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "interaction.pd_interaction",
      "slug": "interaction-pd_interaction",
      "title": "Interakcja farmakodynamiczna",
      "category": "interactions",
      "kind": "concept",
      "difficulty": 3,
      "short": "Jedna substancja zmienia efekt drugiej na poziomie celów, szlaków lub fizjologii, bez koniecznej zmiany jej stężenia.",
      "explanation": "Może obejmować wspólny receptor, różne receptory prowadzące do tego samego efektu, synergię funkcjonalną lub antagonizm fizjologiczny.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "foundation.receptor",
        "interaction.additivity"
      ],
      "related": [
        {
          "id": "interaction.pk_interaction",
          "relation": "contrast",
          "why": "PK zmienia ekspozycję, PD zmienia odpowiedź przy danej ekspozycji."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "interaction.pk_interaction",
      "slug": "interaction-pk_interaction",
      "title": "Interakcja farmakokinetyczna",
      "category": "interactions",
      "kind": "concept",
      "difficulty": 3,
      "short": "Jedna substancja zmienia stężenie lub czas obecności drugiej przez wpływ na ADME.",
      "explanation": "Typowe mechanizmy to hamowanie/indukcja enzymów, zmiana wchłaniania, transportu lub wydalania.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "pk.adme",
        "pk.enzyme_inhibition"
      ],
      "related": [
        {
          "id": "interaction.pd_interaction",
          "relation": "contrast",
          "why": "PD dotyczy odpowiedzi, PK dotyczy ekspozycji."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_cyp450"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "interaction.off_target",
      "slug": "interaction-off_target",
      "title": "Działanie off-target",
      "category": "interactions",
      "kind": "concept",
      "difficulty": 3,
      "short": "Oddziaływanie substancji z celem innym niż główny zamierzony lub badany cel.",
      "explanation": "Przy wyższych stężeniach wiele związków traci selektywność. Off-target może odpowiadać za dodatkowy efekt, działanie niepożądane albo pozorną „synergię”.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "foundation.selectivity"
      ],
      "related": [
        {
          "id": "evidence.exposure",
          "relation": "depends_on",
          "why": "Znaczenie off-target zależy od osiąganego stężenia."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_iuphar_terms"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "ecs.system",
      "slug": "ecs-system",
      "title": "Układ endokannabinoidowy (ECS)",
      "category": "endocannabinoid",
      "kind": "concept",
      "difficulty": 2,
      "short": "Sieć receptorów, endogennych ligandów oraz enzymów syntezy i degradacji lipidowych sygnałów.",
      "explanation": "Kluczowe elementy obejmują CB1, CB2, anandamid (AEA), 2-AG, FAAH i MAGL. ECS reguluje uwalnianie neuroprzekaźników i liczne procesy obwodowe.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "foundation.receptor",
        "enzyme.enzyme"
      ],
      "related": [
        {
          "id": "ecs.cb1",
          "relation": "component",
          "why": "CB1 jest głównym receptorem ECS w CNS."
        },
        {
          "id": "ecs.cb2",
          "relation": "component",
          "why": "CB2 ma ważne funkcje obwodowe i immunologiczne."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ecs"
      ],
      "tags": [],
      "cannabis_relevance": "high",
      "evidence_status": "established"
    },
    {
      "id": "ecs.cb1",
      "slug": "ecs-cb1",
      "title": "Receptor CB1",
      "category": "endocannabinoid",
      "kind": "concept",
      "difficulty": 2,
      "short": "Receptor kannabinoidowy GPCR szeroko obecny w ośrodkowym układzie nerwowym i także poza nim.",
      "explanation": "CB1 często znajduje się presynaptycznie i może zmniejszać uwalnianie neuroprzekaźników przez szlaki Gi/o. THC oddziałuje z CB1 i to jest kluczowe dla jego psychoaktywnych efektów.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "ecs.system",
        "receptor.gpcr"
      ],
      "related": [
        {
          "id": "ecs.thc",
          "relation": "target",
          "why": "THC aktywuje CB1 jako agonista o częściowej skuteczności w wielu układach."
        },
        {
          "id": "ecs.anandamide",
          "relation": "endogenous_ligand",
          "why": "AEA jest endogennym ligandem CB1."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ecs"
      ],
      "tags": [],
      "cannabis_relevance": "high",
      "evidence_status": "established"
    },
    {
      "id": "ecs.cb2",
      "slug": "ecs-cb2",
      "title": "Receptor CB2",
      "category": "endocannabinoid",
      "kind": "concept",
      "difficulty": 2,
      "short": "Drugi klasyczny receptor kannabinoidowy GPCR, silnie związany z komórkami układu odpornościowego i tkankami obwodowymi.",
      "explanation": "CB2 występuje również w niektórych komórkach układu nerwowego. Jego aktywacja ma inny profil fizjologiczny niż dominująca aktywacja CB1 w CNS.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "ecs.system",
        "receptor.gpcr"
      ],
      "related": [
        {
          "id": "terpene.beta_caryophyllene",
          "relation": "target",
          "why": "β-kariofilen jest znanym ligandem CB2 w badaniach przedklinicznych."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ecs"
      ],
      "tags": [],
      "cannabis_relevance": "high",
      "evidence_status": "established"
    },
    {
      "id": "ecs.anandamide",
      "slug": "ecs-anandamide",
      "title": "Anandamid (AEA)",
      "category": "endocannabinoid",
      "kind": "concept",
      "difficulty": 2,
      "short": "Endogenny lipidowy ligand układu endokannabinoidowego.",
      "explanation": "AEA jest syntetyzowany „na żądanie” z prekursorów błonowych i degradowany głównie przez FAAH. Może oddziaływać z CB1 i innymi celami, m.in. TRPV1.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "ecs.system"
      ],
      "related": [
        {
          "id": "ecs.faah",
          "relation": "degraded_by",
          "why": "FAAH hydrolizuje AEA."
        },
        {
          "id": "ecs.cb1",
          "relation": "activates",
          "why": "AEA jest endogennym agonistą CB1."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ecs"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "ecs.2ag",
      "slug": "ecs-2ag",
      "title": "2-AG — 2-arachidonoiloglicerol",
      "category": "endocannabinoid",
      "kind": "concept",
      "difficulty": 2,
      "short": "Jeden z głównych endokannabinoidów, często występujący w wyższych stężeniach niż AEA.",
      "explanation": "2-AG powstaje z lipidów błonowych i działa na CB1/CB2. Jego hydroliza zachodzi głównie przez MAGL, z udziałem innych hydrolaz.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "ecs.system"
      ],
      "related": [
        {
          "id": "ecs.magl",
          "relation": "degraded_by",
          "why": "MAGL odpowiada za znaczną część hydrolizy 2-AG."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ecs"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "ecs.faah",
      "slug": "ecs-faah",
      "title": "FAAH",
      "category": "endocannabinoid",
      "kind": "concept",
      "difficulty": 3,
      "short": "Hydrolaza amidów kwasów tłuszczowych, ważna dla degradacji anandamidu.",
      "explanation": "Hamowanie FAAH może zwiększać stężenie AEA, ale wpływ systemowy zależy od miejsca, dawki i innych szlaków lipidowych.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "ecs.anandamide",
        "enzyme.enzyme"
      ],
      "related": [
        {
          "id": "ecs.magl",
          "relation": "parallel",
          "why": "MAGL pełni analogiczną główną rolę dla 2-AG."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ecs"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "ecs.magl",
      "slug": "ecs-magl",
      "title": "MAGL / MGL",
      "category": "endocannabinoid",
      "kind": "concept",
      "difficulty": 3,
      "short": "Monoacyloglicerol lipaza — główny enzym hydrolizujący 2-AG.",
      "explanation": "MAGL przekształca 2-AG w glicerol i kwas arachidonowy, regulując czas i zasięg sygnału endokannabinoidowego.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "ecs.2ag",
        "enzyme.enzyme"
      ],
      "related": [
        {
          "id": "ecs.faah",
          "relation": "parallel",
          "why": "FAAH reguluje głównie AEA, MAGL głównie 2-AG."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ecs"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "ecs.thc",
      "slug": "ecs-thc",
      "title": "Δ9-THC",
      "category": "endocannabinoid",
      "kind": "concept",
      "difficulty": 2,
      "short": "Główny psychoaktywny fitokannabinoid konopi.",
      "explanation": "THC oddziałuje z receptorami kannabinoidowymi, szczególnie CB1 w kontekście efektów psychoaktywnych. Jego działanie zależy również od farmakokinetyki, metabolitów, dawki, drogi podania i indywidualnej biologii.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "ecs.cb1",
        "foundation.efficacy",
        "pk.adme"
      ],
      "related": [
        {
          "id": "ecs.cbd",
          "relation": "contrast",
          "why": "CBD ma odmienny profil farmakologiczny."
        },
        {
          "id": "interaction.pd_interaction",
          "relation": "context",
          "why": "Inne składniki mogą potencjalnie modyfikować odpowiedź, ale wymaga to dowodu dla konkretnej kombinacji."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ecs",
        "src_entourage_scope"
      ],
      "tags": [],
      "cannabis_relevance": "high",
      "evidence_status": "established"
    },
    {
      "id": "ecs.cbd",
      "slug": "ecs-cbd",
      "title": "CBD",
      "category": "endocannabinoid",
      "kind": "concept",
      "difficulty": 2,
      "short": "Fitokannabinoid o złożonym profilu farmakologicznym, innym niż klasyczna agonistyka CB1 przez THC.",
      "explanation": "CBD oddziałuje z wieloma potencjalnymi celami i szlakami, a jego efekty zależą od stężenia i kontekstu. Upraszczanie go do jednego mechanizmu jest błędem.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "ecs.system",
        "foundation.selectivity"
      ],
      "related": [
        {
          "id": "ecs.thc",
          "relation": "contrast",
          "why": "THC i CBD mają różne profile farmakologiczne."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_entourage_scope"
      ],
      "tags": [],
      "cannabis_relevance": "high",
      "evidence_status": "mixed_by_endpoint"
    },
    {
      "id": "terpene.terpene",
      "slug": "terpene-terpene",
      "title": "Terpen / terpenoid",
      "category": "terpenes",
      "kind": "concept",
      "difficulty": 1,
      "short": "Klasa lotnych lub półlotnych związków roślinnych; wiele odpowiada za zapach i aromat.",
      "explanation": "Terpeny mogą mieć aktywność biologiczną, ale wynik in vitro nie oznacza automatycznie istotnego działania u człowieka. Kluczowe są dawka, biodostępność, metabolizm i realne stężenie w tkance.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "evidence.exposure"
      ],
      "related": [
        {
          "id": "terpene.entourage",
          "relation": "context",
          "why": "Terpeny są często omawiane w hipotezie entourage effect."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_entourage"
      ],
      "tags": [],
      "cannabis_relevance": "high",
      "evidence_status": "established"
    },
    {
      "id": "terpene.entourage",
      "slug": "terpene-entourage",
      "title": "Entourage effect — hipoteza",
      "category": "terpenes",
      "kind": "concept",
      "difficulty": 3,
      "short": "Hipoteza, że składniki cannabis mogą wzajemnie modyfikować swoje efekty w sposób addytywny, synergistyczny lub inny.",
      "explanation": "Mechanistycznie taka interakcja jest możliwa, ale dla wielu popularnych twierdzeń o konkretnych terpene profiles brakuje dobrych danych klinicznych. Termin bywa używany marketingowo szerzej niż pozwalają dowody.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "interaction.synergy",
        "interaction.pd_interaction",
        "interaction.pk_interaction"
      ],
      "related": [
        {
          "id": "evidence.levels",
          "relation": "must_evaluate",
          "why": "Każda konkretna kombinacja wymaga własnej oceny dowodów."
        }
      ],
      "misconceptions": [
        "„entourage effect” jest jednym potwierdzonym mechanizmem",
        "profil terpenowy pozwala niezawodnie przewidzieć subiektywny efekt"
      ],
      "check_yourself": [],
      "sources": [
        "src_entourage",
        "src_entourage_scope"
      ],
      "tags": [],
      "cannabis_relevance": "high",
      "evidence_status": "hypothesis_with_mixed_preclinical_evidence"
    },
    {
      "id": "terpene.limonene",
      "slug": "terpene-limonene",
      "title": "Limonen",
      "category": "terpenes",
      "kind": "concept",
      "difficulty": 2,
      "short": "Monoterpen występujący m.in. w cytrusach i części odmian cannabis.",
      "explanation": "Limonen ma liczne opisane aktywności w modelach eksperymentalnych, ale konkretnego subiektywnego profilu cannabis nie można wyprowadzić wyłącznie z jego obecności. Analizuj stężenie, drogę podania i dane dla konkretnego mechanizmu.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "terpene.terpene",
        "evidence.exposure"
      ],
      "related": [
        {
          "id": "terpene.combination_model",
          "relation": "input",
          "why": "Może być jednym z wejść modelu mieszaniny."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_entourage"
      ],
      "tags": [],
      "cannabis_relevance": "high",
      "evidence_status": "preclinical_mixed"
    },
    {
      "id": "terpene.beta_caryophyllene",
      "slug": "terpene-beta_caryophyllene",
      "title": "β-kariofilen",
      "category": "terpenes",
      "kind": "concept",
      "difficulty": 2,
      "short": "Seskwiterpen występujący w wielu roślinach i cannabis.",
      "explanation": "β-kariofilen jest szczególnie interesujący farmakologicznie z powodu aktywności związanej z CB2 w badaniach przedklinicznych. Nie oznacza to jednak prostego, przewidywalnego efektu psychicznego u człowieka.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "terpene.terpene",
        "ecs.cb2"
      ],
      "related": [
        {
          "id": "terpene.combination_model",
          "relation": "input",
          "why": "Jego udział można traktować jako cechę modelu, nie gotową etykietę efektu."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_ecs",
        "src_entourage"
      ],
      "tags": [],
      "cannabis_relevance": "high",
      "evidence_status": "preclinical"
    },
    {
      "id": "terpene.linalool",
      "slug": "terpene-linalool",
      "title": "Linalol",
      "category": "terpenes",
      "kind": "concept",
      "difficulty": 2,
      "short": "Monoterpenowy alkohol obecny m.in. w lawendzie i części profili cannabis.",
      "explanation": "Badania przedkliniczne opisują różne działania biologiczne linalolu, lecz translacja na konkretne efekty mieszaniny cannabis u ludzi jest niepewna.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "terpene.terpene"
      ],
      "related": [
        {
          "id": "terpene.combination_model",
          "relation": "input",
          "why": "W modelu powinien być reprezentowany liczbowo wraz z dawką i ekspozycją."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_entourage"
      ],
      "tags": [],
      "cannabis_relevance": "high",
      "evidence_status": "preclinical_mixed"
    },
    {
      "id": "terpene.alpha_pinene",
      "slug": "terpene-alpha_pinene",
      "title": "α-pinen",
      "category": "terpenes",
      "kind": "concept",
      "difficulty": 2,
      "short": "Monoterpen o charakterystycznym sosnowym aromacie.",
      "explanation": "Ma wiele badanych aktywności biologicznych, ale popularne internetowe przypisania typu „pinen = pamięć/koncentracja” nie powinny być traktowane jako pewny efekt kliniczny mieszaniny.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "terpene.terpene"
      ],
      "related": [
        {
          "id": "enzyme.ache",
          "relation": "research_target",
          "why": "Niektóre badania terpenów analizują aktywność wobec AChE, zwykle in vitro."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_entourage"
      ],
      "tags": [],
      "cannabis_relevance": "high",
      "evidence_status": "preclinical_mixed"
    },
    {
      "id": "terpene.myrcene",
      "slug": "terpene-myrcene",
      "title": "Mircen",
      "category": "terpenes",
      "kind": "concept",
      "difficulty": 2,
      "short": "Monoterpen występujący w licznych roślinach i cannabis.",
      "explanation": "Często przypisuje mu się sedację, ale jako reguła przewidująca odczuwalny efekt chemovaru jest to słabo ugruntowane. Dane trzeba rozdzielać na model, dawkę i drogę podania.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "terpene.terpene"
      ],
      "related": [],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_entourage"
      ],
      "tags": [],
      "cannabis_relevance": "high",
      "evidence_status": "preclinical_mixed"
    },
    {
      "id": "terpene.terpinolene",
      "slug": "terpene-terpinolene",
      "title": "Terpinolen",
      "category": "terpenes",
      "kind": "concept",
      "difficulty": 2,
      "short": "Monoterpen występujący w części roślin i chemovarów cannabis.",
      "explanation": "Jest badany m.in. w kontekście aktywności biologicznych i mieszanin terpenowych. Samo jego wykrycie nie pozwala wiarygodnie przewidzieć efektu psychicznego.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "terpene.terpene"
      ],
      "related": [],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_entourage"
      ],
      "tags": [],
      "cannabis_relevance": "high",
      "evidence_status": "preclinical_mixed"
    },
    {
      "id": "terpene.combination_model",
      "slug": "terpene-combination_model",
      "title": "Model kombinacji terpenów i kannabinoidów",
      "category": "terpenes",
      "kind": "concept",
      "difficulty": 4,
      "short": "Formalny model traktujący profil chemiczny jako zestaw ilościowych cech i potencjalnych interakcji.",
      "explanation": "Lepszy model nie używa reguł „terpen X = efekt Y”, lecz uwzględnia stężenia, proporcje, THC/CBD, PK, potencjalne cele, interakcje parami i wyższego rzędu oraz dane empiryczne. Wynik powinien być probabilistyczny i zawierać niepewność.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "interaction.synergy",
        "pk.adme",
        "evidence.exposure",
        "terpene.entourage"
      ],
      "related": [
        {
          "id": "evidence.mechanistic_model",
          "relation": "method",
          "why": "Można połączyć model mechanistyczny z danymi obserwacyjnymi."
        },
        {
          "id": "evidence.machine_learning",
          "relation": "method",
          "why": "ML może wykrywać zależności bez narzucania prostych reguł."
        }
      ],
      "misconceptions": [],
      "check_yourself": [
        "Jak odróżnisz korelację chemovaru z efektem od przyczynowego działania pojedynczego terpenu?"
      ],
      "sources": [
        "src_entourage",
        "src_entourage_scope"
      ],
      "tags": [],
      "cannabis_relevance": "high",
      "evidence_status": "research_direction"
    },
    {
      "id": "evidence.levels",
      "slug": "evidence-levels",
      "title": "Poziomy dowodów",
      "category": "evidence",
      "kind": "concept",
      "difficulty": 1,
      "short": "Różne typy badań odpowiadają na różne pytania i mają różną siłę wnioskowania.",
      "explanation": "Wynik biochemiczny in vitro może pokazać mechanizm, badanie zwierzęce — efekt w organizmie modelowym, a dobre badanie kliniczne — wpływ u ludzi. Nie należy przeskakiwać między poziomami bez dodatkowych danych.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [],
      "related": [
        {
          "id": "evidence.in_vitro",
          "relation": "level",
          "why": "In vitro to jeden z najwcześniejszych poziomów."
        },
        {
          "id": "evidence.clinical",
          "relation": "level",
          "why": "Badania kliniczne dotyczą ludzi."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_entourage"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "evidence.in_vitro",
      "slug": "evidence-in_vitro",
      "title": "In vitro",
      "category": "evidence",
      "kind": "concept",
      "difficulty": 1,
      "short": "Badanie wykonywane poza żywym organizmem, np. na enzymie, receptorze lub komórkach.",
      "explanation": "Świetnie nadaje się do odkrywania mechanizmów i pomiaru powinowactwa lub inhibicji. Nie mówi automatycznie, czy podobny efekt wystąpi przy realnej ekspozycji u człowieka.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "evidence.levels"
      ],
      "related": [
        {
          "id": "evidence.exposure",
          "relation": "limitation",
          "why": "Stężenia in vitro trzeba porównać z osiągalnymi in vivo."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_entourage"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "evidence.in_vivo",
      "slug": "evidence-in_vivo",
      "title": "In vivo",
      "category": "evidence",
      "kind": "concept",
      "difficulty": 1,
      "short": "Badanie w żywym organizmie.",
      "explanation": "Uwzględnia PK, metabolizm i interakcje tkanek, ale wyniki ze zwierząt nie zawsze przenoszą się ilościowo lub jakościowo na ludzi.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "evidence.levels"
      ],
      "related": [
        {
          "id": "evidence.clinical",
          "relation": "contrast",
          "why": "Badanie kliniczne dotyczy bezpośrednio ludzi."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_entourage"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "evidence.clinical",
      "slug": "evidence-clinical",
      "title": "Badanie kliniczne",
      "category": "evidence",
      "kind": "concept",
      "difficulty": 2,
      "short": "Badanie działania interwencji u ludzi.",
      "explanation": "Najlepsze projekty kontrolują dawkę, randomizację, zaślepienie i punkt końcowy. Nawet badanie kliniczne odpowiada tylko na pytanie, które rzeczywiście testowało.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "evidence.levels"
      ],
      "related": [
        {
          "id": "evidence.real_world",
          "relation": "complements",
          "why": "Dane real-world mogą uzupełniać badania kontrolowane."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_entourage"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "evidence.real_world",
      "slug": "evidence-real_world",
      "title": "Dane real-world / raporty użytkowników",
      "category": "evidence",
      "kind": "concept",
      "difficulty": 2,
      "short": "Dane zbierane poza ściśle kontrolowanym eksperymentem.",
      "explanation": "Mogą ujawniać wzorce i generować hipotezy, ale są podatne na selekcję, oczekiwania, różnice dawek, etykietowanie produktu i wiele czynników zakłócających.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "evidence.levels"
      ],
      "related": [
        {
          "id": "evidence.machine_learning",
          "relation": "data_source",
          "why": "Mogą zasilać ML, jeśli model uwzględnia bias i jakość danych."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_entourage_scope"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "evidence.exposure",
      "slug": "evidence-exposure",
      "title": "Ekspozycja: czy stężenie jest biologicznie osiągalne?",
      "category": "evidence",
      "kind": "concept",
      "difficulty": 2,
      "short": "Kluczowe pytanie łączące wynik laboratoryjny z realnym działaniem organizmu.",
      "explanation": "Jeżeli związek hamuje enzym przy 100 µM, ale po typowej ekspozycji osiąga w mózgu 0,1 µM, mechanizm może nie mieć znaczenia in vivo. Zawsze zestawiaj IC50/EC50/Ki z PK i stężeniem w miejscu działania.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "foundation.ic50",
        "foundation.ec50",
        "pk.adme"
      ],
      "related": [
        {
          "id": "pk.bbb",
          "relation": "controls",
          "why": "BBB może ograniczać ekspozycję mózgu."
        },
        {
          "id": "evidence.in_vitro",
          "relation": "translates",
          "why": "Warunkuje translację wyników in vitro."
        }
      ],
      "misconceptions": [],
      "check_yourself": [
        "Jakie dane są potrzebne, by stwierdzić, że hamowanie AChE przez terpen ma znaczenie w mózgu?"
      ],
      "sources": [
        "src_pk",
        "src_entourage"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "evidence.correlation",
      "slug": "evidence-correlation",
      "title": "Korelacja ≠ przyczynowość",
      "category": "evidence",
      "kind": "concept",
      "difficulty": 2,
      "short": "Współwystępowanie dwóch cech nie dowodzi, że jedna powoduje drugą.",
      "explanation": "Jeśli chemovary o wysokim limonenie częściej dostają raport „euforia”, przyczyną może być limonen, inny współwystępujący związek, THC, kontekst albo bias użytkowników. Do rozdzielenia potrzebne są odpowiednie modele lub eksperymenty.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [],
      "related": [
        {
          "id": "terpene.combination_model",
          "relation": "important_for",
          "why": "Model musi radzić sobie z cechami silnie skorelowanymi."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_entourage_scope"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "evidence.mechanistic_model",
      "slug": "evidence-mechanistic_model",
      "title": "Model mechanistyczny",
      "category": "evidence",
      "kind": "concept",
      "difficulty": 4,
      "short": "Model oparty na znanych mechanizmach: wiązaniu, kinetyce, szlakach, metabolizmie i fizjologii.",
      "explanation": "Jest interpretowalny i może ekstrapolować poza dane, ale łatwo pominąć nieznane mechanizmy. W złożonych mieszaninach zwykle najlepiej łączyć go z danymi empirycznymi.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "foundation.affinity",
        "pk.adme",
        "interaction.pd_interaction"
      ],
      "related": [
        {
          "id": "evidence.machine_learning",
          "relation": "complement",
          "why": "ML może uzupełniać brakujące zależności."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_iuphar_terms",
        "src_pk"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "established"
    },
    {
      "id": "evidence.machine_learning",
      "slug": "evidence-machine_learning",
      "title": "Uczenie maszynowe w farmakologii",
      "category": "evidence",
      "kind": "concept",
      "difficulty": 4,
      "short": "Model statystyczny uczący się zależności z danych zamiast otrzymywać wszystkie reguły ręcznie.",
      "explanation": "Może analizować profile wielowymiarowe, ale nauczy się również biasu, błędów pomiaru i korelacji pozornych. Potrzebuje walidacji na niezależnych danych i dobrze zdefiniowanych punktów końcowych.",
      "analogy": "",
      "key_points": [],
      "examples": [],
      "dependencies": [
        "evidence.correlation",
        "terpene.combination_model"
      ],
      "related": [
        {
          "id": "evidence.mechanistic_model",
          "relation": "hybrid",
          "why": "Podejście hybrydowe łączy mechanizmy i ML."
        }
      ],
      "misconceptions": [],
      "check_yourself": [],
      "sources": [
        "src_entourage_scope"
      ],
      "tags": [],
      "cannabis_relevance": "none",
      "evidence_status": "methodology"
    }
  ],
  "sources": [
    {
      "id": "src_iuphar_terms",
      "title": "NC-IUPHAR: Terms and Symbols in Quantitative Pharmacology",
      "organization": "IUPHAR/BPS",
      "type": "terminology",
      "url": "https://www.guidetopharmacology.org/pdfs/termsAndSymbols.pdf"
    },
    {
      "id": "src_ncbi_ache",
      "title": "Physiology, Acetylcholinesterase",
      "organization": "NCBI Bookshelf / StatPearls",
      "type": "reference",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK539735/"
    },
    {
      "id": "src_ncbi_ach",
      "title": "Physiology, Acetylcholine",
      "organization": "NCBI Bookshelf / StatPearls",
      "type": "reference",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK557825/"
    },
    {
      "id": "src_ncbi_cholinergic",
      "title": "Acetylcholine — Basic Neurochemistry",
      "organization": "NCBI Bookshelf",
      "type": "textbook",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK20374/"
    },
    {
      "id": "src_ncbi_gaba",
      "title": "GABA and Glycine Receptors — Neuroscience",
      "organization": "NCBI Bookshelf",
      "type": "textbook",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK10977/"
    },
    {
      "id": "src_ncbi_glutamate",
      "title": "Glutamate Receptors — Neuroscience",
      "organization": "NCBI Bookshelf",
      "type": "textbook",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK10802/"
    },
    {
      "id": "src_ncbi_nmda",
      "title": "Physiology, NMDA Receptor",
      "organization": "NCBI Bookshelf / StatPearls",
      "type": "reference",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK519495/"
    },
    {
      "id": "src_monoamine_transporters",
      "title": "Overview of Monoamine Transporters",
      "organization": "NIH / PMC",
      "type": "review",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5841473/"
    },
    {
      "id": "src_mao_comt",
      "title": "Storage and Release of Catecholamines — Basic Neurochemistry",
      "organization": "NCBI Bookshelf",
      "type": "textbook",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK28060/"
    },
    {
      "id": "src_cyp450",
      "title": "Biochemistry, Cytochrome P450",
      "organization": "NCBI Bookshelf / StatPearls",
      "type": "reference",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK557698/"
    },
    {
      "id": "src_pk",
      "title": "Pharmacokinetics",
      "organization": "NCBI Bookshelf / StatPearls",
      "type": "reference",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK557744/"
    },
    {
      "id": "src_vd",
      "title": "Clinical Significance of Volume of Distribution in Pharmacotherapy",
      "organization": "NCBI Bookshelf / StatPearls",
      "type": "reference",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK545280/"
    },
    {
      "id": "src_ecs",
      "title": "The endocannabinoid system: an overview",
      "organization": "NIH / PMC",
      "type": "review",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3303140/"
    },
    {
      "id": "src_entourage",
      "title": "The Entourage Effect in Cannabis Medicinal Products: A Comprehensive Review",
      "organization": "NIH / PMC",
      "type": "systematic review",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11870048/"
    },
    {
      "id": "src_entourage_scope",
      "title": "Decoding the Postulated Entourage Effect of Medicinal Cannabis",
      "organization": "NIH / PMC",
      "type": "scoping review",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10452568/"
    },
    {
      "id": "src_biased",
      "title": "Biased agonism: An emerging paradigm in GPCR drug discovery",
      "organization": "NIH / PMC",
      "type": "review",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5595354/"
    }
  ]
};
