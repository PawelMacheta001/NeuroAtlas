window.NEUROPHARM_DATA = {
  "meta": {
    "title": "Neurofarmakologia i chemia działania — baza wiedzy",
    "version": "0.2-expanded",
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Ligandem może być neuroprzekaźnik, hormon, lek, metabolit albo inna cząsteczka. Sam fakt związania nie mówi jeszcze, czy ligand aktywuje, blokuje czy moduluje cel.",
          "To podstawowe pojęcie języka farmakologii. Jeśli rozumiesz je precyzyjnie, łatwiej później oddzielić trzy rzeczy, które często są mieszane: wiązanie do celu, aktywację celu i końcowy efekt w organizmie."
        ],
        "mechanism_steps": [
          "Ligand dociera do białka docelowego — np. receptora, enzymu albo transportera.",
          "Jeżeli jego kształt i właściwości chemiczne pasują do miejsca wiążącego, może powstać kompleks ligand–cel.",
          "Samo związanie nie przesądza o skutku: ligand może aktywować receptor, blokować go albo zmieniać zachowanie celu w inny sposób.",
          "Końcowy efekt zależy więc osobno od wiązania, skuteczności funkcjonalnej i ekspozycji organizmu na ligand."
        ],
        "why_it_matters": "To pojęcie porządkuje podstawowe parametry, dzięki którym później można czytać wykresy i badania bez mieszania wiązania, potencji oraz skuteczności.",
        "compare_note": "Receptor: Receptory są częstymi celami ligandów. Powinowactwo (affinity): Powinowactwo opisuje skłonność ligandu do wiązania.",
        "study_note": "Przy porównywaniu dwóch ligandów sprawdź, jaki parametr naprawdę mierzono: Kd/Ki, EC50, IC50, Emax czy occupancy. Te liczby odpowiadają na różne pytania.",
        "memory_hook": "Klucz, który pasuje do zamka; może go otworzyć, zablokować albo zmienić jego zachowanie."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Receptor posiada miejsca wiążące ligandy. Po związaniu może zmienić konformację, otworzyć kanał jonowy albo uruchomić kaskadę sygnałową.",
          "To podstawowe pojęcie języka farmakologii. Jeśli rozumiesz je precyzyjnie, łatwiej później oddzielić trzy rzeczy, które często są mieszane: wiązanie do celu, aktywację celu i końcowy efekt w organizmie."
        ],
        "mechanism_steps": [
          "Ligand wiąże się z określonym miejscem receptora.",
          "Receptor zmienia konformację lub stan funkcjonalny.",
          "Ta zmiana uruchamia odpowiedź: np. otwarcie kanału, aktywację białka G albo zmianę aktywności enzymu.",
          "Sygnał jest później wygaszany przez odłączenie ligandu, degradację przekaźnika, internalizację receptora albo inne mechanizmy regulacyjne."
        ],
        "why_it_matters": "To pojęcie porządkuje podstawowe parametry, dzięki którym później można czytać wykresy i badania bez mieszania wiązania, potencji oraz skuteczności.",
        "compare_note": "GPCR — receptor sprzężony z białkiem G: GPCR to ważna rodzina receptorów. Receptor jonotropowy: Receptory jonotropowe są kanałami aktywowanymi ligandem.",
        "study_note": "Przy porównywaniu dwóch ligandów sprawdź, jaki parametr naprawdę mierzono: Kd/Ki, EC50, IC50, Emax czy occupancy. Te liczby odpowiadają na różne pytania.",
        "memory_hook": "Czujnik w urządzeniu: rozpoznaje sygnał i uruchamia odpowiednią reakcję."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Ligandy konkurujące o to samo miejsce mogą wzajemnie ograniczać swoje wiązanie. Antagonizm kompetycyjny często zachodzi właśnie tutaj.",
          "To podstawowe pojęcie języka farmakologii. Jeśli rozumiesz je precyzyjnie, łatwiej później oddzielić trzy rzeczy, które często są mieszane: wiązanie do celu, aktywację celu i końcowy efekt w organizmie."
        ],
        "mechanism_steps": [
          "Naturalny ligand rozpoznaje główne miejsce wiążące receptora.",
          "Dwa ligandy walczące o to samo miejsce mogą wzajemnie ograniczać swoje wiązanie.",
          "Zwiększenie stężenia jednego z nich może częściowo lub całkowicie przesunąć równowagę konkurencji.",
          "Dlatego lokalizacja wiązania pomaga przewidzieć typ antagonizmu i kształt krzywej dawka–odpowiedź."
        ],
        "why_it_matters": "To pojęcie porządkuje podstawowe parametry, dzięki którym później można czytać wykresy i badania bez mieszania wiązania, potencji oraz skuteczności.",
        "compare_note": "Miejsce allosteryczne: Allosteryczne miejsce jest odrębne od głównego miejsca.",
        "study_note": "Przy porównywaniu dwóch ligandów sprawdź, jaki parametr naprawdę mierzono: Kd/Ki, EC50, IC50, Emax czy occupancy. Te liczby odpowiadają na różne pytania.",
        "memory_hook": "Główna dziurka od klucza."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Ligand allosteryczny może zmienić powinowactwo lub skuteczność ligandu ortosterycznego przez zmianę konformacji receptora.",
          "To podstawowe pojęcie języka farmakologii. Jeśli rozumiesz je precyzyjnie, łatwiej później oddzielić trzy rzeczy, które często są mieszane: wiązanie do celu, aktywację celu i końcowy efekt w organizmie."
        ],
        "mechanism_steps": [
          "Ligand allosteryczny wiąże się poza głównym miejscem dla naturalnego agonisty.",
          "Zmienia konformację receptora, a przez to może zmienić powinowactwo lub skuteczność ligandu ortosterycznego.",
          "PAM wzmacnia odpowiedź, NAM ją osłabia; efekt może zależeć od konkretnego agonisty i badanego szlaku.",
          "Modulacja allosteryczna nie musi sama uruchamiać receptora — często zmienia tylko sposób, w jaki receptor reaguje na inny ligand."
        ],
        "why_it_matters": "To pojęcie porządkuje podstawowe parametry, dzięki którym później można czytać wykresy i badania bez mieszania wiązania, potencji oraz skuteczności.",
        "compare_note": "PAM — pozytywny modulator allosteryczny: PAM może wiązać się allosterycznie. NAM — negatywny modulator allosteryczny: NAM może wiązać się allosterycznie.",
        "study_note": "Przy porównywaniu dwóch ligandów sprawdź, jaki parametr naprawdę mierzono: Kd/Ki, EC50, IC50, Emax czy occupancy. Te liczby odpowiadają na różne pytania.",
        "memory_hook": "Pokrętło regulujące czułość urządzenia, umieszczone obok głównego przycisku."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Wysokie powinowactwo zwykle oznacza, że niższe stężenie wystarcza do znacznego zajęcia celu. Nie mówi jednak automatycznie, jak duży efekt wywoła ligand.",
          "W praktyce affinity często opisuje się stałą dysocjacji Kd lub pokrewnymi parametrami. Niższe Kd zwykle oznacza wyższe powinowactwo, ale porównania mają sens tylko wtedy, gdy odnoszą się do zgodnych warunków pomiaru. Najważniejsze: affinity mówi „jak chętnie się wiąże”, a efficacy mówi „co robi po związaniu”.",
          "To podstawowe pojęcie języka farmakologii. Jeśli rozumiesz je precyzyjnie, łatwiej później oddzielić trzy rzeczy, które często są mieszane: wiązanie do celu, aktywację celu i końcowy efekt w organizmie."
        ],
        "mechanism_steps": [
          "Ligand zbliża się do celu i wielokrotnie wiąże oraz odłącza od miejsca wiążącego.",
          "Im większe powinowactwo, tym przy danym stężeniu łatwiej utrzymać znaczną część celów w stanie związanym.",
          "Powinowactwo opisuje wiązanie, a nie wielkość odpowiedzi biologicznej.",
          "Dlatego ligand o wysokim powinowactwie może być silnym agonistą, słabym agonistą albo antagonistą."
        ],
        "why_it_matters": "To pojęcie porządkuje podstawowe parametry, dzięki którym później można czytać wykresy i badania bez mieszania wiązania, potencji oraz skuteczności.",
        "compare_note": "Skuteczność wewnętrzna (efficacy): Skuteczność mówi, co dzieje się po związaniu. Zajęcie receptorów (occupancy): Powinowactwo wpływa na zajęcie receptorów.",
        "study_note": "Przy porównywaniu dwóch ligandów sprawdź, jaki parametr naprawdę mierzono: Kd/Ki, EC50, IC50, Emax czy occupancy. Te liczby odpowiadają na różne pytania.",
        "memory_hook": "Affinity = jak mocno „trzyma” cel; efficacy = co robi, kiedy już go trzyma."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Dwa ligandy mogą mieć podobne powinowactwo, ale różną skuteczność: jeden może być pełnym agonistą, drugi częściowym.",
          "Efficacy jest szczególnie przydatna przy porównywaniu pełnych i częściowych agonistów. Układ pomiarowy ma znaczenie: liczba receptorów i sposób sprzężenia z dalszą sygnalizacją mogą sprawić, że ten sam ligand wygląda na „silniejszy” w jednym teście niż w innym.",
          "To podstawowe pojęcie języka farmakologii. Jeśli rozumiesz je precyzyjnie, łatwiej później oddzielić trzy rzeczy, które często są mieszane: wiązanie do celu, aktywację celu i końcowy efekt w organizmie."
        ],
        "mechanism_steps": [
          "Najpierw ligand musi zająć receptor.",
          "Po związaniu stabilizuje określony stan funkcjonalny receptora.",
          "To, jak mocno ten stan uruchamia dalszą sygnalizację, opisuje skuteczność wewnętrzna.",
          "Dwa ligandy przy podobnym zajęciu receptorów mogą więc dawać różne Emax."
        ],
        "why_it_matters": "To pojęcie porządkuje podstawowe parametry, dzięki którym później można czytać wykresy i badania bez mieszania wiązania, potencji oraz skuteczności.",
        "compare_note": "Pełny agonista: Pełny agonista ma wysoką skuteczność w danym układzie. Częściowy agonista: Częściowy agonista ma niższą maksymalną odpowiedź.",
        "study_note": "Przy porównywaniu dwóch ligandów sprawdź, jaki parametr naprawdę mierzono: Kd/Ki, EC50, IC50, Emax czy occupancy. Te liczby odpowiadają na różne pytania.",
        "memory_hook": "Efficacy mówi o wysokości sufitu odpowiedzi, nie o dawce potrzebnej do jego osiągnięcia."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Potencja zależy m.in. od powinowactwa, skuteczności, liczby receptorów i badanego układu. Nie jest synonimem maksymalnej skuteczności.",
          "W farmakologii potencję zwykle ocenia się przez EC50 lub ED50. To parametr wygodny do porównania, ale bardzo łatwo go przecenić: substancja wymagająca mniejszej dawki nie musi mieć większego Emax ani lepszego profilu klinicznego.",
          "To podstawowe pojęcie języka farmakologii. Jeśli rozumiesz je precyzyjnie, łatwiej później oddzielić trzy rzeczy, które często są mieszane: wiązanie do celu, aktywację celu i końcowy efekt w organizmie."
        ],
        "mechanism_steps": [
          "Podaje się kolejne dawki lub stężenia substancji i mierzy odpowiedź.",
          "Sprawdza się, jaka ekspozycja wystarcza do uzyskania ustalonego efektu, często 50% maksimum.",
          "Na potencję wpływa nie tylko powinowactwo, ale też skuteczność, liczba receptorów, farmakokinetyka i konstrukcja testu.",
          "Dlatego „bardziej potentny” nie oznacza automatycznie „lepszy”, „silniejszy klinicznie” ani „bardziej toksyczny”."
        ],
        "why_it_matters": "To pojęcie porządkuje podstawowe parametry, dzięki którym później można czytać wykresy i badania bez mieszania wiązania, potencji oraz skuteczności.",
        "compare_note": "EC50: EC50 często opisuje potencję agonisty.",
        "study_note": "Przy porównywaniu dwóch ligandów sprawdź, jaki parametr naprawdę mierzono: Kd/Ki, EC50, IC50, Emax czy occupancy. Te liczby odpowiadają na różne pytania.",
        "memory_hook": "Potency = ile trzeba; efficacy = ile maksymalnie można uzyskać."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Niższe EC50 zwykle oznacza wyższą potencję w konkretnym układzie eksperymentalnym. EC50 nie jest stałą uniwersalną i zależy od testu.",
          "EC50 dotyczy odpowiedzi, nie samego wiązania. Może więc różnić się od Kd, zwłaszcza gdy komórka ma zapas receptorów lub sygnał jest wzmacniany wewnątrzkomórkowo.",
          "To podstawowe pojęcie języka farmakologii. Jeśli rozumiesz je precyzyjnie, łatwiej później oddzielić trzy rzeczy, które często są mieszane: wiązanie do celu, aktywację celu i końcowy efekt w organizmie."
        ],
        "mechanism_steps": [
          "Buduje się krzywą stężenie–odpowiedź.",
          "Wyznacza się maksymalną odpowiedź obserwowaną w danym układzie.",
          "EC50 to stężenie, przy którym odpowiedź osiąga połowę tego maksimum.",
          "Wartość zależy od testu i biologii układu, dlatego nie należy traktować jej jak absolutnej właściwości cząsteczki."
        ],
        "why_it_matters": "To pojęcie porządkuje podstawowe parametry, dzięki którym później można czytać wykresy i badania bez mieszania wiązania, potencji oraz skuteczności.",
        "compare_note": "IC50: IC50 dotyczy hamowania. Krzywa dawka–odpowiedź: EC50 odczytuje się z krzywej odpowiedzi.",
        "study_note": "Przy porównywaniu dwóch ligandów sprawdź, jaki parametr naprawdę mierzono: Kd/Ki, EC50, IC50, Emax czy occupancy. Te liczby odpowiadają na różne pytania.",
        "memory_hook": "EC50 to środek krzywej odpowiedzi, nie „połowa receptorów”."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "IC50 zależy od warunków testu i nie jest tym samym co stała wiązania Ki. Przy porównywaniu badań trzeba sprawdzać metodę i stężenie substratu.",
          "IC50 jest wynikiem konkretnego eksperymentu, a nie czystą stałą fizyczną inhibitora. Dla inhibitora enzymu często do dokładniejszej charakterystyki potrzebne są parametry kinetyczne, takie jak Ki oraz informacja o typie inhibicji.",
          "To podstawowe pojęcie języka farmakologii. Jeśli rozumiesz je precyzyjnie, łatwiej później oddzielić trzy rzeczy, które często są mieszane: wiązanie do celu, aktywację celu i końcowy efekt w organizmie."
        ],
        "mechanism_steps": [
          "Najpierw definiuje się aktywność kontrolną — np. aktywność enzymu bez inhibitora.",
          "Dodaje się rosnące stężenia inhibitora i mierzy spadek aktywności.",
          "IC50 to stężenie dające 50% zahamowania w tych konkretnych warunkach.",
          "Zmiana stężenia substratu, czasu inkubacji albo konstrukcji testu może zmienić IC50 bez zmiany samej cząsteczki."
        ],
        "why_it_matters": "To pojęcie porządkuje podstawowe parametry, dzięki którym później można czytać wykresy i badania bez mieszania wiązania, potencji oraz skuteczności.",
        "compare_note": "EC50: EC50 mierzy aktywację/odpowiedź. Hamowanie enzymu: IC50 często raportuje siłę inhibitora.",
        "study_note": "Przy porównywaniu dwóch ligandów sprawdź, jaki parametr naprawdę mierzono: Kd/Ki, EC50, IC50, Emax czy occupancy. Te liczby odpowiadają na różne pytania.",
        "memory_hook": "IC50 to połowa inhibicji w konkretnym teście, nie uniwersalna moc inhibitora."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Zajęcie rośnie wraz ze stężeniem wolnego ligandu i jego powinowactwem. 100% zajęcia nie zawsze oznacza 100% efektu, m.in. przez częściową agonistykę lub receptor reserve.",
          "To podstawowe pojęcie języka farmakologii. Jeśli rozumiesz je precyzyjnie, łatwiej później oddzielić trzy rzeczy, które często są mieszane: wiązanie do celu, aktywację celu i końcowy efekt w organizmie."
        ],
        "mechanism_steps": [
          "Ligand krąży wokół receptora i może się z nim wiązać oraz odłączać.",
          "Przy danym powinowactwie wzrost stężenia zwykle zwiększa odsetek zajętych receptorów.",
          "Zajęcie receptora nie jest równoznaczne z proporcjonalnym efektem — układ może mieć zapas receptorów lub nieliniową sygnalizację.",
          "Dlatego dane o occupancy trzeba interpretować razem z efficacy i krzywą odpowiedzi."
        ],
        "why_it_matters": "To pojęcie porządkuje podstawowe parametry, dzięki którym później można czytać wykresy i badania bez mieszania wiązania, potencji oraz skuteczności.",
        "compare_note": "Skuteczność wewnętrzna (efficacy): Zajęcie i skuteczność razem wpływają na odpowiedź.",
        "study_note": "Przy porównywaniu dwóch ligandów sprawdź, jaki parametr naprawdę mierzono: Kd/Ki, EC50, IC50, Emax czy occupancy. Te liczby odpowiadają na różne pytania.",
        "memory_hook": "Nie pytaj tylko „czy się wiąże?”. Pytaj też „co robi po związaniu?”."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Pozwala porównywać potencję, maksymalną odpowiedź i kształt reakcji. Jest podstawowym narzędziem do analizy agonistów, antagonistów i inhibitorów.",
          "To podstawowe pojęcie języka farmakologii. Jeśli rozumiesz je precyzyjnie, łatwiej później oddzielić trzy rzeczy, które często są mieszane: wiązanie do celu, aktywację celu i końcowy efekt w organizmie."
        ],
        "mechanism_steps": [
          "Zmienia się dawkę lub stężenie i dla każdego poziomu mierzy określony endpoint.",
          "Powstaje krzywa pokazująca, jak szybko odpowiedź rośnie i gdzie osiąga plateau.",
          "Z krzywej można odczytać parametry takie jak Emax i EC50 oraz porównywać przesunięcia między warunkami.",
          "Kształt krzywej może ujawnić m.in. różnice w potencji, skuteczności i antagonizmie."
        ],
        "why_it_matters": "To pojęcie porządkuje podstawowe parametry, dzięki którym później można czytać wykresy i badania bez mieszania wiązania, potencji oraz skuteczności.",
        "compare_note": "EC50: EC50 to jeden z parametrów krzywej.",
        "study_note": "Przy porównywaniu dwóch ligandów sprawdź, jaki parametr naprawdę mierzono: Kd/Ki, EC50, IC50, Emax czy occupancy. Te liczby odpowiadają na różne pytania.",
        "memory_hook": "Nie pytaj tylko „czy się wiąże?”. Pytaj też „co robi po związaniu?”."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Selektywność jest zależna od stężenia: przy małej dawce związek może działać głównie na jeden cel, a przy większej angażować kolejne.",
          "To podstawowe pojęcie języka farmakologii. Jeśli rozumiesz je precyzyjnie, łatwiej później oddzielić trzy rzeczy, które często są mieszane: wiązanie do celu, aktywację celu i końcowy efekt w organizmie."
        ],
        "mechanism_steps": [
          "Porównuje się działanie tej samej substancji na kilka celów molekularnych.",
          "Selektywność oznacza przewagę dla jednego celu nad innymi, a nie całkowity brak działania poza głównym celem.",
          "Przy wyższym stężeniu substancja może zacząć zajmować cele o mniejszym powinowactwie.",
          "Dlatego selektywność zawsze warto rozpatrywać razem z realną ekspozycją."
        ],
        "why_it_matters": "To pojęcie porządkuje podstawowe parametry, dzięki którym później można czytać wykresy i badania bez mieszania wiązania, potencji oraz skuteczności.",
        "compare_note": "Działanie off-target: Działania off-target pojawiają się przy innych celach.",
        "study_note": "Przy porównywaniu dwóch ligandów sprawdź, jaki parametr naprawdę mierzono: Kd/Ki, EC50, IC50, Emax czy occupancy. Te liczby odpowiadają na różne pytania.",
        "memory_hook": "Nie pytaj tylko „czy się wiąże?”. Pytaj też „co robi po związaniu?”."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Pełny agonista stabilizuje aktywne stany receptora w sposób pozwalający osiągnąć maksymalną mierzoną odpowiedź w danym systemie.",
          "W receptorach kluczowe jest rozdzielenie dwóch pytań: czy ligand się wiąże oraz co receptor robi po związaniu. Ten podział pozwala poprawnie rozumieć agonistów, antagonistów, modulatory i tolerancję."
        ],
        "mechanism_steps": [
          "Agonista wiąże receptor i stabilizuje jego stan aktywny.",
          "W danym układzie potrafi doprowadzić do maksymalnej dostępnej odpowiedzi.",
          "Po osiągnięciu plateau dalsze zwiększanie stężenia nie podnosi już Emax, choć może zwiększać zajęcie receptorów.",
          "„Pełny” dotyczy konkretnego układu pomiarowego — ten sam ligand może wyglądać inaczej w innym systemie sygnalizacyjnym."
        ],
        "why_it_matters": "Pozwala przewidzieć, czy substancja zwiększy, zmniejszy czy zmodyfikuje odpowiedź receptora oraz jak może zachowywać się w obecności innych ligandów.",
        "compare_note": "Częściowy agonista: Częściowy agonista ma niższy efekt maksymalny.",
        "study_note": "Sprawdź typ receptora, zastosowany agonista, system komórkowy i mierzony szlak. Ten sam receptor może wyglądać inaczej przy innym endpointcie.",
        "memory_hook": "Receptor to przełącznik z wieloma możliwymi ustawieniami, nie zwykłe ON/OFF."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Nawet przy wysokim zajęciu receptorów częściowy agonista może nie osiągać odpowiedzi pełnego agonisty. W obecności pełnego agonisty może funkcjonalnie ograniczać całkowitą odpowiedź, konkurując o receptor.",
          "To pojęcie jest intuicyjnie dziwne, bo częściowy agonista może być jednocześnie „agonistą” i zachowywać się funkcjonalnie jak hamulec w obecności pełnego agonisty. Nie ma tu sprzeczności: wszystko zależy od tego, z jakim poziomem aktywacji porównujesz układ.",
          "W receptorach kluczowe jest rozdzielenie dwóch pytań: czy ligand się wiąże oraz co receptor robi po związaniu. Ten podział pozwala poprawnie rozumieć agonistów, antagonistów, modulatory i tolerancję."
        ],
        "mechanism_steps": [
          "Częściowy agonista wiąże się z receptorem i rzeczywiście go aktywuje.",
          "Jego skuteczność wewnętrzna jest jednak niższa, więc nawet przy dużym zajęciu receptorów Emax pozostaje poniżej pełnego agonisty.",
          "Gdy oba ligandy są obecne jednocześnie, częściowy agonista może zajmować receptory, które inaczej zająłby pełny agonista.",
          "W takim układzie może więc jednocześnie sam dawać sygnał i ograniczać odpowiedź wywołaną pełnym agonistą."
        ],
        "why_it_matters": "Pozwala przewidzieć, czy substancja zwiększy, zmniejszy czy zmodyfikuje odpowiedź receptora oraz jak może zachowywać się w obecności innych ligandów.",
        "compare_note": "Antagonista: Oba mogą zmniejszać odpowiedź pełnego agonisty, ale częściowy agonista sam aktywuje receptor.",
        "study_note": "Sprawdź typ receptora, zastosowany agonista, system komórkowy i mierzony szlak. Ten sam receptor może wyglądać inaczej przy innym endpointcie.",
        "memory_hook": "Częściowy agonista naciska gaz, ale nie do podłogi — i może zająć miejsce pełnemu agoniscie."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Antagonista może konkurować o miejsce ortosteryczne lub działać innymi mechanizmami. Klasyczny neutralny antagonista nie obniża konstytutywnej aktywności receptora.",
          "Antagonista nie musi „wyłączać receptora” sam z siebie. Neutralny antagonista przede wszystkim uniemożliwia innemu ligandowi wywołanie efektu. Jeśli receptor ma aktywność konstytutywną, dopiero odwrotny agonista obniża ją poniżej poziomu bazowego.",
          "W receptorach kluczowe jest rozdzielenie dwóch pytań: czy ligand się wiąże oraz co receptor robi po związaniu. Ten podział pozwala poprawnie rozumieć agonistów, antagonistów, modulatory i tolerancję."
        ],
        "mechanism_steps": [
          "Antagonista wiąże się z receptorem bez uruchamiania typowej odpowiedzi agonisty.",
          "Przez zajęcie miejsca lub zmianę receptora ogranicza możliwość działania agonisty.",
          "Antagonista kompetycyjny zwykle przesuwa krzywą agonisty w prawo bez zmiany Emax, jeśli da się go „przebić” większym stężeniem agonisty.",
          "Inne typy antagonizmu mogą zmniejszać odpowiedź maksymalną."
        ],
        "why_it_matters": "Pozwala przewidzieć, czy substancja zwiększy, zmniejszy czy zmodyfikuje odpowiedź receptora oraz jak może zachowywać się w obecności innych ligandów.",
        "compare_note": "Odwrotny agonista: Odwrotny agonista obniża aktywność podstawową.",
        "study_note": "Sprawdź typ receptora, zastosowany agonista, system komórkowy i mierzony szlak. Ten sam receptor może wyglądać inaczej przy innym endpointcie.",
        "memory_hook": "Antagonista zajmuje miejsce lub blokuje drogę, ale sam nie musi wysyłać sygnału."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Ma znaczenie przy receptorach wykazujących aktywność konstytutywną. To nie to samo co neutralny antagonista, który głównie blokuje działanie innych ligandów.",
          "W receptorach kluczowe jest rozdzielenie dwóch pytań: czy ligand się wiąże oraz co receptor robi po związaniu. Ten podział pozwala poprawnie rozumieć agonistów, antagonistów, modulatory i tolerancję."
        ],
        "mechanism_steps": [
          "Receptor ma pewną aktywność nawet bez przyłączonego agonisty.",
          "Odwrotny agonista wiąże receptor i stabilizuje stan mniej aktywny niż stan bazowy.",
          "W efekcie obniża sygnalizację poniżej poziomu konstytutywnego.",
          "To odróżnia go od neutralnego antagonisty, który blokuje agonistę, ale sam nie powinien obniżać aktywności bazowej."
        ],
        "why_it_matters": "Pozwala przewidzieć, czy substancja zwiększy, zmniejszy czy zmodyfikuje odpowiedź receptora oraz jak może zachowywać się w obecności innych ligandów.",
        "compare_note": "Aktywność konstytutywna: Odwrotna agonistyka wymaga aktywności podstawowej do obniżenia.",
        "study_note": "Sprawdź typ receptora, zastosowany agonista, system komórkowy i mierzony szlak. Ten sam receptor może wyglądać inaczej przy innym endpointcie.",
        "memory_hook": "Antagonista blokuje wzrost; odwrotny agonista może zejść poniżej poziomu bazowego."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Niektóre receptory spontanicznie przechodzą między stanami aktywnymi i nieaktywnymi. Odwrotny agonista może przesuwać równowagę w stronę nieaktywną.",
          "W receptorach kluczowe jest rozdzielenie dwóch pytań: czy ligand się wiąże oraz co receptor robi po związaniu. Ten podział pozwala poprawnie rozumieć agonistów, antagonistów, modulatory i tolerancję."
        ],
        "mechanism_steps": [
          "Część receptorów spontanicznie przechodzi w stan aktywny bez ligandu.",
          "Tworzy to poziom sygnału bazowego, który może być różny między tkankami i systemami ekspresyjnymi.",
          "Agonista zwiększa sygnał ponad bazę, a odwrotny agonista może go obniżyć.",
          "Jeśli aktywność konstytutywna jest bardzo niska, rozróżnienie neutralnego antagonisty i odwrotnego agonisty staje się trudniejsze."
        ],
        "why_it_matters": "Pozwala przewidzieć, czy substancja zwiększy, zmniejszy czy zmodyfikuje odpowiedź receptora oraz jak może zachowywać się w obecności innych ligandów.",
        "compare_note": "Odwrotny agonista: Wyjaśnia różnicę między antagonistą i odwrotnym agonistą.",
        "study_note": "Sprawdź typ receptora, zastosowany agonista, system komórkowy i mierzony szlak. Ten sam receptor może wyglądać inaczej przy innym endpointcie.",
        "memory_hook": "Receptor to przełącznik z wieloma możliwymi ustawieniami, nie zwykłe ON/OFF."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "PAM może zwiększać powinowactwo agonisty, jego skuteczność albo oba parametry. Niektóre PAM-y mają małą lub żadną aktywność bez agonisty.",
          "W receptorach kluczowe jest rozdzielenie dwóch pytań: czy ligand się wiąże oraz co receptor robi po związaniu. Ten podział pozwala poprawnie rozumieć agonistów, antagonistów, modulatory i tolerancję."
        ],
        "mechanism_steps": [
          "PAM wiąże się z miejscem allosterycznym, nie z głównym miejscem agonisty.",
          "Zmienia konformację receptora tak, że odpowiedź na agonistę staje się większa lub łatwiejsza do wywołania.",
          "Może zwiększyć powinowactwo agonisty, jego skuteczność albo oba parametry.",
          "Wiele PAM-ów działa najmocniej wtedy, gdy naturalny agonista jest już obecny, co może zachowywać część fizjologicznego rytmu sygnalizacji."
        ],
        "why_it_matters": "Pozwala przewidzieć, czy substancja zwiększy, zmniejszy czy zmodyfikuje odpowiedź receptora oraz jak może zachowywać się w obecności innych ligandów.",
        "compare_note": "NAM — negatywny modulator allosteryczny: NAM osłabia działanie agonisty.",
        "study_note": "Sprawdź typ receptora, zastosowany agonista, system komórkowy i mierzony szlak. Ten sam receptor może wyglądać inaczej przy innym endpointcie.",
        "memory_hook": "Receptor to przełącznik z wieloma możliwymi ustawieniami, nie zwykłe ON/OFF."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Może obniżać powinowactwo agonisty, jego skuteczność albo oba parametry, bez bezpośredniego konkurowania o główne miejsce wiążące.",
          "W receptorach kluczowe jest rozdzielenie dwóch pytań: czy ligand się wiąże oraz co receptor robi po związaniu. Ten podział pozwala poprawnie rozumieć agonistów, antagonistów, modulatory i tolerancję."
        ],
        "mechanism_steps": [
          "NAM wiąże się z miejscem allosterycznym receptora.",
          "Zmienia receptor w kierunku słabszej odpowiedzi na agonistę.",
          "Może obniżyć powinowactwo agonisty, jego skuteczność albo oba parametry.",
          "Ponieważ nie musi konkurować o to samo miejsce, zwiększenie stężenia agonisty nie zawsze całkowicie znosi jego działanie."
        ],
        "why_it_matters": "Pozwala przewidzieć, czy substancja zwiększy, zmniejszy czy zmodyfikuje odpowiedź receptora oraz jak może zachowywać się w obecności innych ligandów.",
        "compare_note": "PAM — pozytywny modulator allosteryczny: PAM działa w przeciwnym kierunku.",
        "study_note": "Sprawdź typ receptora, zastosowany agonista, system komórkowy i mierzony szlak. Ten sam receptor może wyglądać inaczej przy innym endpointcie.",
        "memory_hook": "Receptor to przełącznik z wieloma możliwymi ustawieniami, nie zwykłe ON/OFF."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Po aktywacji GPCR zmienia konformację i może regulować białka G, a pośrednio m.in. cAMP, fosfolipazy, kanały jonowe i kinazy. CB1, CB2 i receptory muskarynowe należą do GPCR.",
          "GPCR-y są ogromną rodziną receptorów i nie istnieje jeden uniwersalny „efekt GPCR”. Ten sam schemat receptor → białko G → efektor może w różnych komórkach regulować zupełnie inne procesy.",
          "W receptorach kluczowe jest rozdzielenie dwóch pytań: czy ligand się wiąże oraz co receptor robi po związaniu. Ten podział pozwala poprawnie rozumieć agonistów, antagonistów, modulatory i tolerancję."
        ],
        "mechanism_steps": [
          "Ligand wiąże zewnętrzną część receptora w błonie.",
          "Receptor zmienia konformację i wpływa na sprzężone białko G.",
          "Podjednostki białka G regulują efektory, takie jak cyklaza adenylanowa, fosfolipaza C lub kanały jonowe.",
          "Powstają wtórne przekaźniki i kaskada sygnałowa, którą komórka może wzmacniać, wygaszać i regulować w czasie."
        ],
        "why_it_matters": "Pozwala przewidzieć, czy substancja zwiększy, zmniejszy czy zmodyfikuje odpowiedź receptora oraz jak może zachowywać się w obecności innych ligandów.",
        "compare_note": "Wtórny przekaźnik: GPCR często zmieniają poziomy wtórnych przekaźników. Biased agonism / selektywność funkcjonalna: Jeden GPCR może aktywować wiele szlaków.",
        "study_note": "Sprawdź typ receptora, zastosowany agonista, system komórkowy i mierzony szlak. Ten sam receptor może wyglądać inaczej przy innym endpointcie.",
        "memory_hook": "Receptor to przełącznik z wieloma możliwymi ustawieniami, nie zwykłe ON/OFF."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Działa zwykle szybko: związanie neuroprzekaźnika bezpośrednio zmienia przepływ jonów i potencjał błonowy. Przykłady: GABA-A, AMPA, NMDA, nikotynowy receptor ACh.",
          "W receptorach kluczowe jest rozdzielenie dwóch pytań: czy ligand się wiąże oraz co receptor robi po związaniu. Ten podział pozwala poprawnie rozumieć agonistów, antagonistów, modulatory i tolerancję."
        ],
        "mechanism_steps": [
          "Ligand wiąże receptor będący jednocześnie kanałem jonowym.",
          "Kanał szybko zmienia prawdopodobieństwo otwarcia.",
          "Jony przepływają zgodnie z gradientem elektrochemicznym i zmieniają potencjał błony lub stężenie jonów wewnątrz komórki.",
          "Dlatego odpowiedź receptorów jonotropowych może zaczynać się w skali milisekund."
        ],
        "why_it_matters": "Pozwala przewidzieć, czy substancja zwiększy, zmniejszy czy zmodyfikuje odpowiedź receptora oraz jak może zachowywać się w obecności innych ligandów.",
        "compare_note": "Receptor GABA-A: GABA-A jest kanałem chlorkowym. Receptor AMPA: AMPA przepuszcza kationy.",
        "study_note": "Sprawdź typ receptora, zastosowany agonista, system komórkowy i mierzony szlak. Ten sam receptor może wyglądać inaczej przy innym endpointcie.",
        "memory_hook": "Receptor to przełącznik z wieloma możliwymi ustawieniami, nie zwykłe ON/OFF."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Działa zwykle wolniej niż receptor jonotropowy, ale odpowiedź może być bardziej złożona i długotrwała. Wiele receptorów metabotropowych to GPCR.",
          "W receptorach kluczowe jest rozdzielenie dwóch pytań: czy ligand się wiąże oraz co receptor robi po związaniu. Ten podział pozwala poprawnie rozumieć agonistów, antagonistów, modulatory i tolerancję."
        ],
        "mechanism_steps": [
          "Ligand aktywuje receptor, który nie jest bezpośrednio kanałem jonowym.",
          "Receptor uruchamia białko G lub inną kaskadę sygnalizacyjną.",
          "Wtórne przekaźniki zmieniają pracę enzymów, kanałów, genów lub innych białek.",
          "Odpowiedź bywa wolniejsza niż przy receptorach jonotropowych, ale może trwać dłużej i być mocno wzmacniana."
        ],
        "why_it_matters": "Pozwala przewidzieć, czy substancja zwiększy, zmniejszy czy zmodyfikuje odpowiedź receptora oraz jak może zachowywać się w obecności innych ligandów.",
        "compare_note": "GPCR — receptor sprzężony z białkiem G: Wiele receptorów metabotropowych to GPCR.",
        "study_note": "Sprawdź typ receptora, zastosowany agonista, system komórkowy i mierzony szlak. Ten sam receptor może wyglądać inaczej przy innym endpointcie.",
        "memory_hook": "Receptor to przełącznik z wieloma możliwymi ustawieniami, nie zwykłe ON/OFF."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Do klasycznych wtórnych przekaźników należą cAMP, IP3, DAG i Ca2+. Pozwalają wzmacniać i rozgałęziać sygnał.",
          "W receptorach kluczowe jest rozdzielenie dwóch pytań: czy ligand się wiąże oraz co receptor robi po związaniu. Ten podział pozwala poprawnie rozumieć agonistów, antagonistów, modulatory i tolerancję."
        ],
        "mechanism_steps": [
          "Aktywacja receptora uruchamia enzym lub białko, które tworzy albo uwalnia wtórny przekaźnik.",
          "Wtórny przekaźnik rozchodzi się wewnątrz komórki i przekazuje informację dalej.",
          "Jedna aktywacja receptora może wpłynąć na wiele cząsteczek przekaźnika, co wzmacnia sygnał.",
          "System ma też mechanizmy wygaszania, dzięki którym odpowiedź nie rośnie bez końca."
        ],
        "why_it_matters": "Pozwala przewidzieć, czy substancja zwiększy, zmniejszy czy zmodyfikuje odpowiedź receptora oraz jak może zachowywać się w obecności innych ligandów.",
        "compare_note": "GPCR — receptor sprzężony z białkiem G: GPCR często reguluje wtórne przekaźniki.",
        "study_note": "Sprawdź typ receptora, zastosowany agonista, system komórkowy i mierzony szlak. Ten sam receptor może wyglądać inaczej przy innym endpointcie.",
        "memory_hook": "Receptor to przełącznik z wieloma możliwymi ustawieniami, nie zwykłe ON/OFF."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Różne ligandy mogą stabilizować odmienne konformacje receptora, przez co preferencyjnie angażują np. białka G albo β-arrestyny. Oznacza to, że „oba są agonistami tego samego receptora” nie gwarantuje identycznego profilu efektów.",
          "W receptorach kluczowe jest rozdzielenie dwóch pytań: czy ligand się wiąże oraz co receptor robi po związaniu. Ten podział pozwala poprawnie rozumieć agonistów, antagonistów, modulatory i tolerancję."
        ],
        "mechanism_steps": [
          "Jeden receptor może uruchamiać więcej niż jeden szlak sygnalizacyjny.",
          "Różne ligandy stabilizują nieco inne konformacje tego samego receptora.",
          "W efekcie jeden ligand może preferencyjnie wzmacniać szlak A, a inny szlak B.",
          "Dlatego pojedyncza etykieta „agonista” nie zawsze opisuje cały profil działania ligandu."
        ],
        "why_it_matters": "Pozwala przewidzieć, czy substancja zwiększy, zmniejszy czy zmodyfikuje odpowiedź receptora oraz jak może zachowywać się w obecności innych ligandów.",
        "compare_note": "Desensytyzacja receptora: β-arrestyny uczestniczą też w desensytyzacji GPCR.",
        "study_note": "Sprawdź typ receptora, zastosowany agonista, system komórkowy i mierzony szlak. Ten sam receptor może wyglądać inaczej przy innym endpointcie.",
        "memory_hook": "Receptor to przełącznik z wieloma możliwymi ustawieniami, nie zwykłe ON/OFF."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Może wynikać z fosforylacji receptora, wiązania arrestyn, internalizacji lub zmian dalszych elementów szlaku. Jest jednym z mechanizmów szybkiej tolerancji.",
          "W receptorach kluczowe jest rozdzielenie dwóch pytań: czy ligand się wiąże oraz co receptor robi po związaniu. Ten podział pozwala poprawnie rozumieć agonistów, antagonistów, modulatory i tolerancję."
        ],
        "mechanism_steps": [
          "Powtarzająca lub długotrwała aktywacja receptora uruchamia mechanizmy regulacyjne.",
          "Receptor może być fosforylowany, sprzęgać się słabiej z białkami sygnałowymi albo zostać internalizowany.",
          "Przy tej samej ilości agonisty odpowiedź komórki staje się mniejsza.",
          "Po usunięciu bodźca część receptorów może odzyskać wrażliwość, ale czas i zakres tego procesu zależą od systemu."
        ],
        "why_it_matters": "Pozwala przewidzieć, czy substancja zwiększy, zmniejszy czy zmodyfikuje odpowiedź receptora oraz jak może zachowywać się w obecności innych ligandów.",
        "compare_note": "Tolerancja: Desensytyzacja może przyczyniać się do tolerancji.",
        "study_note": "Sprawdź typ receptora, zastosowany agonista, system komórkowy i mierzony szlak. Ten sam receptor może wyglądać inaczej przy innym endpointcie.",
        "memory_hook": "Receptor to przełącznik z wieloma możliwymi ustawieniami, nie zwykłe ON/OFF."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Może być farmakodynamiczna (np. receptory i szlaki) lub farmakokinetyczna (np. szybszy metabolizm). Nie jest jednym procesem molekularnym.",
          "Tolerancja może być farmakodynamiczna, gdy zmienia się wrażliwość układu na lek, albo farmakokinetyczna, gdy organizm szybciej go usuwa. Może też dotyczyć jednego efektu mocniej niż innego, dlatego nie należy mówić o „jednej tolerancji na substancję”.",
          "W receptorach kluczowe jest rozdzielenie dwóch pytań: czy ligand się wiąże oraz co receptor robi po związaniu. Ten podział pozwala poprawnie rozumieć agonistów, antagonistów, modulatory i tolerancję."
        ],
        "mechanism_steps": [
          "Organizm jest wielokrotnie eksponowany na tę samą substancję lub podobny sygnał.",
          "Zmienia się jeden lub kilka poziomów układu: receptory, szlaki sygnałowe, ekspresja białek, farmakokinetyka albo zachowanie.",
          "Ta sama dawka zaczyna wywoływać mniejszy efekt lub do osiągnięcia podobnego efektu potrzebna jest większa dawka.",
          "Tolerancja nie jest jednym mechanizmem i może rozwijać się różnie dla różnych efektów tej samej substancji."
        ],
        "why_it_matters": "Pozwala przewidzieć, czy substancja zwiększy, zmniejszy czy zmodyfikuje odpowiedź receptora oraz jak może zachowywać się w obecności innych ligandów.",
        "compare_note": "Indukcja enzymu metabolicznego: Indukcja enzymów może zwiększać tolerancję farmakokinetyczną.",
        "study_note": "Sprawdź typ receptora, zastosowany agonista, system komórkowy i mierzony szlak. Ten sam receptor może wyglądać inaczej przy innym endpointcie.",
        "memory_hook": "Receptor to przełącznik z wieloma możliwymi ustawieniami, nie zwykłe ON/OFF."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Enzym wiąże substrat, stabilizuje stan przejściowy i przyspiesza reakcję. Aktywność enzymu można zmieniać inhibitorami, aktywatorami, stężeniem substratu i warunkami środowiska.",
          "W enzymach warto myśleć o przepływie: substrat → enzym → produkt. Inhibitor nie „usuwa chemii”, tylko zmienia szybkość albo możliwość przejścia tego procesu."
        ],
        "mechanism_steps": [
          "Substrat trafia do miejsca aktywnego enzymu.",
          "Enzym stabilizuje stan przejściowy i obniża barierę energetyczną reakcji.",
          "Powstaje produkt, który odłącza się od enzymu.",
          "Enzym zwykle może przejść kolejny cykl reakcji, o ile nie został trwale zmodyfikowany lub zahamowany."
        ],
        "why_it_matters": "Pomaga rozumieć, jak organizm kończy sygnały i metabolizuje cząsteczki oraz dlaczego inhibitor może zmienić zarówno fizjologię, jak i farmakokinetykę innych substancji.",
        "compare_note": "Hamowanie enzymu: Inhibitory zmniejszają aktywność enzymu.",
        "study_note": "Szukaj stężenia substratu, IC50/Ki, typu inhibicji, czasu inkubacji i informacji o odwracalności. Bez tego trudno porównywać dwa inhibitory.",
        "memory_hook": "Maszyna na linii produkcyjnej, która przetwarza kolejne sztuki substratu."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Dla AChE substratem jest acetylocholina. Substrat wiąże się w miejscu aktywnym, przechodzi reakcję i opuszcza enzym jako produkt lub produkty.",
          "W enzymach warto myśleć o przepływie: substrat → enzym → produkt. Inhibitor nie „usuwa chemii”, tylko zmienia szybkość albo możliwość przejścia tego procesu."
        ],
        "mechanism_steps": [
          "Substrat dociera do enzymu i może związać się z jego miejscem aktywnym.",
          "Powstaje kompleks enzym–substrat.",
          "Enzym ułatwia przekształcenie substratu w produkt lub produkty.",
          "Szybkość procesu zależy m.in. od stężenia substratu, ilości enzymu i obecności inhibitorów."
        ],
        "why_it_matters": "Pomaga rozumieć, jak organizm kończy sygnały i metabolizuje cząsteczki oraz dlaczego inhibitor może zmienić zarówno fizjologię, jak i farmakokinetykę innych substancji.",
        "compare_note": "Miejsce aktywne enzymu: Substrat trafia do miejsca aktywnego.",
        "study_note": "Szukaj stężenia substratu, IC50/Ki, typu inhibicji, czasu inkubacji i informacji o odwracalności. Bez tego trudno porównywać dwa inhibitory.",
        "memory_hook": "Enzym przyspiesza przepływ reakcji; inhibitor zmienia tempo tego przepływu."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Geometria, ładunki i ruchliwość aminokwasów w miejscu aktywnym determinują selektywność i szybkość reakcji.",
          "W enzymach warto myśleć o przepływie: substrat → enzym → produkt. Inhibitor nie „usuwa chemii”, tylko zmienia szybkość albo możliwość przejścia tego procesu."
        ],
        "mechanism_steps": [
          "Substrat rozpoznaje kieszeń o określonym kształcie i właściwościach chemicznych.",
          "Reszty aminokwasowe w miejscu aktywnym ustawiają substrat w korzystnej orientacji.",
          "W tym mikrośrodowisku zachodzi kataliza.",
          "Zmiana miejsca aktywnego przez mutację lub inhibitor może mocno zmienić szybkość reakcji."
        ],
        "why_it_matters": "Pomaga rozumieć, jak organizm kończy sygnały i metabolizuje cząsteczki oraz dlaczego inhibitor może zmienić zarówno fizjologię, jak i farmakokinetykę innych substancji.",
        "compare_note": "Inhibicja kompetycyjna: Inhibitor kompetycyjny konkuruje o miejsce aktywne.",
        "study_note": "Szukaj stężenia substratu, IC50/Ki, typu inhibicji, czasu inkubacji i informacji o odwracalności. Bez tego trudno porównywać dwa inhibitory.",
        "memory_hook": "Enzym przyspiesza przepływ reakcji; inhibitor zmienia tempo tego przepływu."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Może wynikać z bezpośredniego zajęcia miejsca aktywnego, wiązania allosterycznego, stabilizacji nieaktywnej konformacji albo trwałej modyfikacji enzymu.",
          "W enzymach warto myśleć o przepływie: substrat → enzym → produkt. Inhibitor nie „usuwa chemii”, tylko zmienia szybkość albo możliwość przejścia tego procesu."
        ],
        "mechanism_steps": [
          "Inhibitor wiąże enzym lub zmienia jego stan funkcjonalny.",
          "Przez to zmniejsza liczbę efektywnych cykli katalitycznych albo utrudnia wiązanie/przetwarzanie substratu.",
          "Sposób zmiany zależności szybkości od substratu pozwala rozróżniać typy inhibicji.",
          "Znaczenie biologiczne zależy dodatkowo od stężenia inhibitora, odwracalności i tego, czy podobna ekspozycja występuje w organizmie."
        ],
        "why_it_matters": "Pomaga rozumieć, jak organizm kończy sygnały i metabolizuje cząsteczki oraz dlaczego inhibitor może zmienić zarówno fizjologię, jak i farmakokinetykę innych substancji.",
        "compare_note": "Inhibicja kompetycyjna: Jeden z klasycznych typów inhibicji. Inhibicja nieodwracalna: Może być trwałe dla danej cząsteczki enzymu.",
        "study_note": "Szukaj stężenia substratu, IC50/Ki, typu inhibicji, czasu inkubacji i informacji o odwracalności. Bez tego trudno porównywać dwa inhibitory.",
        "memory_hook": "Enzym przyspiesza przepływ reakcji; inhibitor zmienia tempo tego przepływu."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "W klasycznym modelu zwiększenie stężenia substratu może przezwyciężyć hamowanie. Vmax pozostaje, a pozorne Km rośnie.",
          "Klasyczny obraz „substrat i inhibitor walczą o jedno krzesło” jest dobry na start, ale realne enzymy mogą mieć kilka stanów konformacyjnych i miejsc wiążących. Typ inhibicji powinien wynikać z danych kinetycznych, a nie tylko z intuicji o strukturze cząsteczki.",
          "W enzymach warto myśleć o przepływie: substrat → enzym → produkt. Inhibitor nie „usuwa chemii”, tylko zmienia szybkość albo możliwość przejścia tego procesu."
        ],
        "mechanism_steps": [
          "Inhibitor i substrat konkurują o tę samą lub funkcjonalnie nakładającą się przestrzeń wiążącą.",
          "Przy danym stężeniu substratu inhibitor zmniejsza liczbę kompleksów enzym–substrat.",
          "Zwiększenie stężenia substratu może częściowo „wygrać” konkurencję.",
          "W klasycznym modelu rośnie pozorna Km, a Vmax może pozostać niezmieniona."
        ],
        "why_it_matters": "Pomaga rozumieć, jak organizm kończy sygnały i metabolizuje cząsteczki oraz dlaczego inhibitor może zmienić zarówno fizjologię, jak i farmakokinetykę innych substancji.",
        "compare_note": "Inhibicja niekompetycyjna: Niekompetycyjna nie polega na prostej walce o to samo miejsce.",
        "study_note": "Szukaj stężenia substratu, IC50/Ki, typu inhibicji, czasu inkubacji i informacji o odwracalności. Bez tego trudno porównywać dwa inhibitory.",
        "memory_hook": "Dwa samochody chcą wjechać do tej samej bramki."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "W czystym modelu zmniejsza Vmax bez zmiany Km. W realnych układach częściej spotyka się zachowanie mieszane niż perfekcyjnie niekompetycyjne.",
          "W enzymach warto myśleć o przepływie: substrat → enzym → produkt. Inhibitor nie „usuwa chemii”, tylko zmienia szybkość albo możliwość przejścia tego procesu."
        ],
        "mechanism_steps": [
          "Inhibitor wiąże się poza miejscem zajmowanym przez substrat i zmniejsza aktywność enzymu.",
          "Substrat może nadal wiązać enzym, ale część kompleksów nie prowadzi efektywnie do produktu.",
          "Samo zwiększanie stężenia substratu nie musi przywrócić maksymalnej szybkości.",
          "W czystym modelu niekompetycyjnym Vmax spada przy niezmienionej Km; realne układy często są bardziej złożone."
        ],
        "why_it_matters": "Pomaga rozumieć, jak organizm kończy sygnały i metabolizuje cząsteczki oraz dlaczego inhibitor może zmienić zarówno fizjologię, jak i farmakokinetykę innych substancji.",
        "compare_note": "Inhibicja mieszana: Inhibicja mieszana jest bardziej ogólnym przypadkiem.",
        "study_note": "Szukaj stężenia substratu, IC50/Ki, typu inhibicji, czasu inkubacji i informacji o odwracalności. Bez tego trudno porównywać dwa inhibitory.",
        "memory_hook": "Enzym przyspiesza przepływ reakcji; inhibitor zmienia tempo tego przepływu."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Zmienia zarówno Vmax, jak i pozorne Km. To wygodny model dla inhibitorów, które nie zachowują się idealnie kompetycyjnie ani niekompetycyjnie.",
          "W enzymach warto myśleć o przepływie: substrat → enzym → produkt. Inhibitor nie „usuwa chemii”, tylko zmienia szybkość albo możliwość przejścia tego procesu."
        ],
        "mechanism_steps": [
          "Inhibitor może wiązać zarówno wolny enzym, jak i kompleks enzym–substrat, ale z różnym powinowactwem.",
          "Zmniejsza dostępną aktywność enzymatyczną i jednocześnie zmienia pozorne powinowactwo do substratu.",
          "W efekcie Vmax spada, a Km może wzrosnąć albo zmaleć.",
          "Ten model jest częstszy w realnych układach niż idealna „czysta” inhibicja niekompetycyjna."
        ],
        "why_it_matters": "Pomaga rozumieć, jak organizm kończy sygnały i metabolizuje cząsteczki oraz dlaczego inhibitor może zmienić zarówno fizjologię, jak i farmakokinetykę innych substancji.",
        "compare_note": "Inhibicja niekompetycyjna: Czysta inhibicja niekompetycyjna jest szczególnym przypadkiem mieszanej.",
        "study_note": "Szukaj stężenia substratu, IC50/Ki, typu inhibicji, czasu inkubacji i informacji o odwracalności. Bez tego trudno porównywać dwa inhibitory.",
        "memory_hook": "Enzym przyspiesza przepływ reakcji; inhibitor zmienia tempo tego przepływu."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Często wynika z kowalencyjnej modyfikacji enzymu. Usunięcie wolnego inhibitora nie przywraca aktywności już zmodyfikowanej cząsteczki; aktywność układu wraca przez reaktywację w szczególnych przypadkach lub syntezę nowych cząsteczek enzymu.",
          "Nieodwracalność dotyczy danej cząsteczki enzymu, nie całego organizmu na zawsze. Aktywność biologiczna może wracać, gdy komórka wytworzy nowe białko; tempo powrotu zależy więc od obrotu enzymu.",
          "W enzymach warto myśleć o przepływie: substrat → enzym → produkt. Inhibitor nie „usuwa chemii”, tylko zmienia szybkość albo możliwość przejścia tego procesu."
        ],
        "mechanism_steps": [
          "Inhibitor tworzy bardzo trwałe, często kowalencyjne oddziaływanie z enzymem.",
          "Dana cząsteczka enzymu przestaje uczestniczyć w prawidłowej katalizie.",
          "Usunięcie wolnego inhibitora nie przywraca aktywności tej konkretnej cząsteczki enzymu.",
          "Organizm odzyskuje aktywność głównie przez syntezę nowego enzymu lub obrót białek."
        ],
        "why_it_matters": "Pomaga rozumieć, jak organizm kończy sygnały i metabolizuje cząsteczki oraz dlaczego inhibitor może zmienić zarówno fizjologię, jak i farmakokinetykę innych substancji.",
        "compare_note": "Najbliższy kontekst dają: Hamowanie enzymu.",
        "study_note": "Szukaj stężenia substratu, IC50/Ki, typu inhibicji, czasu inkubacji i informacji o odwracalności. Bez tego trudno porównywać dwa inhibitory.",
        "memory_hook": "Nieodwracalny inhibitor wyłącza tę cząsteczkę enzymu; organizm odzyskuje funkcję, tworząc nowe."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "AChE rozkłada acetylocholinę do choliny i octanu, co ogranicza czas działania ACh w synapsach i złączu nerwowo-mięśniowym. Silne zahamowanie AChE może prowadzić do nadmiernej stymulacji cholinergicznej.",
          "AChE działa wyjątkowo szybko, co pozwala układowi cholinergicznemu przesyłać krótkie, dobrze odseparowane sygnały. Zahamowanie enzymu może być użyteczne farmakologicznie w określonych warunkach, ale nadmierne zahamowanie powoduje kumulację ACh i ryzyko toksyczności cholinergicznej.",
          "W enzymach warto myśleć o przepływie: substrat → enzym → produkt. Inhibitor nie „usuwa chemii”, tylko zmienia szybkość albo możliwość przejścia tego procesu."
        ],
        "mechanism_steps": [
          "Neuron uwalnia acetylocholinę do szczeliny synaptycznej lub złącza nerwowo-mięśniowego.",
          "ACh wiąże receptory i przekazuje sygnał.",
          "AChE bardzo szybko hydrolizuje acetylocholinę do choliny i octanu, ograniczając czas sygnału.",
          "Gdy AChE jest silnie zahamowana, ACh utrzymuje się dłużej i może nadmiernie pobudzać receptory muskarynowe oraz nikotynowe."
        ],
        "why_it_matters": "Pomaga rozumieć, jak organizm kończy sygnały i metabolizuje cząsteczki oraz dlaczego inhibitor może zmienić zarówno fizjologię, jak i farmakokinetykę innych substancji.",
        "compare_note": "Układ cholinergiczny: AChE jest kluczowym elementem transmisji cholinergicznej. BChE — butyrylocholinoesteraza: BChE jest pokrewną cholinoesterazą.",
        "study_note": "Szukaj stężenia substratu, IC50/Ki, typu inhibicji, czasu inkubacji i informacji o odwracalności. Bez tego trudno porównywać dwa inhibitory.",
        "memory_hook": "AChE to „delete” dla acetylocholiny: usuwa sygnał bardzo szybko."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "BChE występuje m.in. w osoczu i tkankach. Może hydrolizować różne estry i wpływać na los niektórych leków i toksyn.",
          "W enzymach warto myśleć o przepływie: substrat → enzym → produkt. Inhibitor nie „usuwa chemii”, tylko zmienia szybkość albo możliwość przejścia tego procesu."
        ],
        "mechanism_steps": [
          "BChE wiąże i hydrolizuje szerszy zestaw estrów niż AChE.",
          "Jej znaczenie jest szczególnie widoczne w osoczu i niektórych tkankach, gdzie uczestniczy w metabolizmie różnych związków.",
          "Nie pełni identycznej roli synaptycznej jak AChE, choć oba enzymy należą do cholinoesteraz.",
          "Porównanie AChE i BChE jest ważne przy interpretowaniu selektywności inhibitorów."
        ],
        "why_it_matters": "Pomaga rozumieć, jak organizm kończy sygnały i metabolizuje cząsteczki oraz dlaczego inhibitor może zmienić zarówno fizjologię, jak i farmakokinetykę innych substancji.",
        "compare_note": "AChE — acetylocholinesteraza: Obie są cholinoesterazami, ale różnią się lokalizacją i preferencjami substratowymi.",
        "study_note": "Szukaj stężenia substratu, IC50/Ki, typu inhibicji, czasu inkubacji i informacji o odwracalności. Bez tego trudno porównywać dwa inhibitory.",
        "memory_hook": "Enzym przyspiesza przepływ reakcji; inhibitor zmienia tempo tego przepływu."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "MAO znajduje się na zewnętrznej błonie mitochondriów. Hamowanie MAO-A może zwiększać ekspozycję na jego substraty i tworzyć ważne interakcje.",
          "W enzymach warto myśleć o przepływie: substrat → enzym → produkt. Inhibitor nie „usuwa chemii”, tylko zmienia szybkość albo możliwość przejścia tego procesu."
        ],
        "mechanism_steps": [
          "MAO-A znajduje się na zewnętrznej błonie mitochondriów i utlenia wybrane monoaminy.",
          "Substrat trafia do enzymu, gdzie zachodzi oksydacyjne usunięcie grupy aminowej.",
          "Proces pomaga kontrolować stężenia monoamin i tworzy metabolity dalej przetwarzane przez inne enzymy.",
          "Zmiana aktywności MAO-A wpływa więc na metabolizm m.in. serotoniny, noradrenaliny i częściowo dopaminy."
        ],
        "why_it_matters": "Pomaga rozumieć, jak organizm kończy sygnały i metabolizuje cząsteczki oraz dlaczego inhibitor może zmienić zarówno fizjologię, jak i farmakokinetykę innych substancji.",
        "compare_note": "MAO-B: MAO-B jest drugim głównym izoenzymem.",
        "study_note": "Szukaj stężenia substratu, IC50/Ki, typu inhibicji, czasu inkubacji i informacji o odwracalności. Bez tego trudno porównywać dwa inhibitory.",
        "memory_hook": "Enzym przyspiesza przepływ reakcji; inhibitor zmienia tempo tego przepływu."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "MAO-B uczestniczy m.in. w metabolizmie części amin biogennych. Różnice MAO-A/MAO-B mają znaczenie farmakologiczne i kliniczne.",
          "W enzymach warto myśleć o przepływie: substrat → enzym → produkt. Inhibitor nie „usuwa chemii”, tylko zmienia szybkość albo możliwość przejścia tego procesu."
        ],
        "mechanism_steps": [
          "MAO-B uczestniczy w oksydacyjnym metabolizmie monoamin i innych amin biogennych.",
          "Zakres substratów częściowo nakłada się z MAO-A, ale proporcje aktywności różnią się między tkankami i związkami.",
          "W mózgu MAO-B ma istotne znaczenie m.in. dla metabolizmu niektórych amin i dopaminy w określonych obszarach.",
          "Dlatego selektywność inhibitora względem MAO-A lub MAO-B ma znaczenie farmakologiczne."
        ],
        "why_it_matters": "Pomaga rozumieć, jak organizm kończy sygnały i metabolizuje cząsteczki oraz dlaczego inhibitor może zmienić zarówno fizjologię, jak i farmakokinetykę innych substancji.",
        "compare_note": "MAO-A: Obie katalizują oksydacyjne deaminowanie monoamin.",
        "study_note": "Szukaj stężenia substratu, IC50/Ki, typu inhibicji, czasu inkubacji i informacji o odwracalności. Bez tego trudno porównywać dwa inhibitory.",
        "memory_hook": "Enzym przyspiesza przepływ reakcji; inhibitor zmienia tempo tego przepływu."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "COMT wykorzystuje S-adenozylometioninę jako donor grupy metylowej. Wraz z MAO uczestniczy w unieczynnianiu dopaminy, noradrenaliny i adrenaliny.",
          "W enzymach warto myśleć o przepływie: substrat → enzym → produkt. Inhibitor nie „usuwa chemii”, tylko zmienia szybkość albo możliwość przejścia tego procesu."
        ],
        "mechanism_steps": [
          "COMT rozpoznaje związki z układem katecholowym.",
          "Przenosi grupę metylową z donorowej cząsteczki na jedną z grup hydroksylowych substratu.",
          "W ten sposób uczestniczy w inaktywacji lub dalszym metabolizmie katecholamin i innych katecholi.",
          "W układzie dopaminergicznym jego względne znaczenie zależy od tkanki i dostępności innych dróg usuwania dopaminy."
        ],
        "why_it_matters": "Pomaga rozumieć, jak organizm kończy sygnały i metabolizuje cząsteczki oraz dlaczego inhibitor może zmienić zarówno fizjologię, jak i farmakokinetykę innych substancji.",
        "compare_note": "MAO-A: MAO i COMT tworzą uzupełniające szlaki metabolizmu katecholamin.",
        "study_note": "Szukaj stężenia substratu, IC50/Ki, typu inhibicji, czasu inkubacji i informacji o odwracalności. Bez tego trudno porównywać dwa inhibitory.",
        "memory_hook": "Enzym przyspiesza przepływ reakcji; inhibitor zmienia tempo tego przepływu."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Transporter może wykorzystywać gradient jonów albo energię pośrednią. W neurobiologii transportery regulują usuwanie neuroprzekaźników z przestrzeni zewnątrzkomórkowej i ich magazynowanie.",
          "Transporter nie jest receptorem. Jego główną funkcją jest fizyczne przenoszenie cząsteczki przez błonę, dlatego zmiana transportera wpływa przede wszystkim na to, gdzie i jak długo dostępny jest dany związek."
        ],
        "mechanism_steps": [
          "Białko transportowe rozpoznaje określoną cząsteczkę lub grupę podobnych cząsteczek.",
          "Wiązanie zmienia konformację transportera.",
          "Transporter udostępnia miejsce wiążące po drugiej stronie błony i uwalnia ładunek.",
          "Kierunek oraz koszt energetyczny transportu zależą od typu transportera i gradientów jonowych."
        ],
        "why_it_matters": "Wyjaśnia, dlaczego zablokowanie wychwytu albo magazynowania neuroprzekaźnika może zmienić jego stężenie bez bezpośredniego agonizowania receptora.",
        "compare_note": "Wychwyt zwrotny (reuptake): Reuptake wykorzystuje transportery błonowe.",
        "study_note": "Sprawdź, czy mierzono bezpośredni transport, wiązanie do transportera czy zmianę stężenia neuroprzekaźnika. To pokrewne, ale nie identyczne pomiary.",
        "memory_hook": "Transporter decyduje, gdzie cząsteczka się znajduje i jak długo tam pozostaje."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "SERT, DAT i NET przenoszą odpowiednio serotoninę, dopaminę i noradrenalinę z powrotem do komórek. Hamowanie wychwytu może wydłużać obecność transmitera poza komórką.",
          "Transporter nie jest receptorem. Jego główną funkcją jest fizyczne przenoszenie cząsteczki przez błonę, dlatego zmiana transportera wpływa przede wszystkim na to, gdzie i jak długo dostępny jest dany związek."
        ],
        "mechanism_steps": [
          "Neuroprzekaźnik zostaje uwolniony do przestrzeni zewnątrzkomórkowej.",
          "Po aktywacji receptorów część cząsteczek trafia do transportera wychwytu zwrotnego.",
          "Transporter przenosi neuroprzekaźnik z powrotem do komórki, ograniczając sygnał poza komórką.",
          "Zablokowanie transportera zwykle wydłuża lub zwiększa ekspozycję receptorów na dany neuroprzekaźnik, ale efekt systemowy zależy od sieci neuronalnej."
        ],
        "why_it_matters": "Wyjaśnia, dlaczego zablokowanie wychwytu albo magazynowania neuroprzekaźnika może zmienić jego stężenie bez bezpośredniego agonizowania receptora.",
        "compare_note": "SERT — transporter serotoniny: SERT odpowiada za wychwyt serotoniny. DAT — transporter dopaminy: DAT odpowiada za wychwyt dopaminy.",
        "study_note": "Sprawdź, czy mierzono bezpośredni transport, wiązanie do transportera czy zmianę stężenia neuroprzekaźnika. To pokrewne, ale nie identyczne pomiary.",
        "memory_hook": "Reuptake to sprzątanie neuroprzekaźnika przez transport z powrotem do komórki."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "DAT ogranicza czas i przestrzenny zasięg sygnału dopaminowego oraz pomaga odzyskiwać dopaminę do neuronu presynaptycznego.",
          "Transporter nie jest receptorem. Jego główną funkcją jest fizyczne przenoszenie cząsteczki przez błonę, dlatego zmiana transportera wpływa przede wszystkim na to, gdzie i jak długo dostępny jest dany związek."
        ],
        "mechanism_steps": [
          "Dopamina po uwolnieniu działa na receptory dopaminowe w przestrzeni zewnątrzkomórkowej.",
          "DAT rozpoznaje dopaminę i transportuje ją z powrotem do neuronu presynaptycznego, wykorzystując gradienty jonowe.",
          "Zmniejsza to dostępność dopaminy poza komórką i umożliwia jej ponowne magazynowanie lub metabolizm.",
          "Blokada DAT zwiększa zewnątrzkomórkową dopaminę przede wszystkim tam, gdzie DAT jest ważną drogą jej usuwania."
        ],
        "why_it_matters": "Wyjaśnia, dlaczego zablokowanie wychwytu albo magazynowania neuroprzekaźnika może zmienić jego stężenie bez bezpośredniego agonizowania receptora.",
        "compare_note": "NET — transporter noradrenaliny: DAT i NET należą do rodziny transporterów monoamin SLC6. SERT — transporter serotoniny: SERT również należy do SLC6.",
        "study_note": "Sprawdź, czy mierzono bezpośredni transport, wiązanie do transportera czy zmianę stężenia neuroprzekaźnika. To pokrewne, ale nie identyczne pomiary.",
        "memory_hook": "Transporter decyduje, gdzie cząsteczka się znajduje i jak długo tam pozostaje."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Blokada SERT zmniejsza wychwyt serotoniny i zmienia jej sygnalizację. SERT jest głównym celem leków z grupy SSRI.",
          "W przypadku SERT ważne jest rozdzielenie natychmiastowej farmakologii od wolniejszych adaptacji układu. Sam transporter jest blokowany szybko, ale część efektów klinicznych wymaga zmian receptorowych, sieciowych i ekspresji genów rozwijających się w czasie.",
          "Transporter nie jest receptorem. Jego główną funkcją jest fizyczne przenoszenie cząsteczki przez błonę, dlatego zmiana transportera wpływa przede wszystkim na to, gdzie i jak długo dostępny jest dany związek."
        ],
        "mechanism_steps": [
          "Serotonina zostaje uwolniona z neuronu i aktywuje receptory 5-HT.",
          "SERT wiąże serotoninę i wraz z jonami przenosi ją z powrotem do komórki presynaptycznej.",
          "Wychwyt ogranicza czas oraz zasięg sygnału serotoninowego.",
          "Blokowanie SERT zmienia stężenie serotoniny szybko, ale pełne efekty kliniczne leków działających na SERT mogą wymagać wolniejszych adaptacji sieci i receptorów."
        ],
        "why_it_matters": "Wyjaśnia, dlaczego zablokowanie wychwytu albo magazynowania neuroprzekaźnika może zmienić jego stężenie bez bezpośredniego agonizowania receptora.",
        "compare_note": "DAT — transporter dopaminy: Oba są transporterami monoamin SLC6.",
        "study_note": "Sprawdź, czy mierzono bezpośredni transport, wiązanie do transportera czy zmianę stężenia neuroprzekaźnika. To pokrewne, ale nie identyczne pomiary.",
        "memory_hook": "Transporter decyduje, gdzie cząsteczka się znajduje i jak długo tam pozostaje."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "NET pomaga kończyć sygnał noradrenergiczny i odzyskiwać noradrenalinę do neuronu presynaptycznego.",
          "Transporter nie jest receptorem. Jego główną funkcją jest fizyczne przenoszenie cząsteczki przez błonę, dlatego zmiana transportera wpływa przede wszystkim na to, gdzie i jak długo dostępny jest dany związek."
        ],
        "mechanism_steps": [
          "Noradrenalina jest uwalniana i działa na receptory adrenergiczne.",
          "NET transportuje noradrenalinę z przestrzeni zewnątrzkomórkowej do neuronu presynaptycznego.",
          "W niektórych obszarach mózgu NET może także uczestniczyć w usuwaniu dopaminy.",
          "Blokada NET zmienia więc sygnalizację katecholamin w sposób zależny od regionu mózgu."
        ],
        "why_it_matters": "Wyjaśnia, dlaczego zablokowanie wychwytu albo magazynowania neuroprzekaźnika może zmienić jego stężenie bez bezpośredniego agonizowania receptora.",
        "compare_note": "DAT — transporter dopaminy: DAT i NET mają pokrewną architekturę i mechanizm.",
        "study_note": "Sprawdź, czy mierzono bezpośredni transport, wiązanie do transportera czy zmianę stężenia neuroprzekaźnika. To pokrewne, ale nie identyczne pomiary.",
        "memory_hook": "Transporter decyduje, gdzie cząsteczka się znajduje i jak długo tam pozostaje."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "VMAT2 pomaga magazynować dopaminę, serotoninę, noradrenalinę i inne monoaminy przed ich uwolnieniem. To inna funkcja niż DAT/SERT/NET, które transportują przez błonę komórkową.",
          "Transporter nie jest receptorem. Jego główną funkcją jest fizyczne przenoszenie cząsteczki przez błonę, dlatego zmiana transportera wpływa przede wszystkim na to, gdzie i jak długo dostępny jest dany związek."
        ],
        "mechanism_steps": [
          "Monoaminy powstają w cytoplazmie neuronu.",
          "VMAT2 wykorzystuje gradient protonowy pęcherzyka do przenoszenia monoamin do jego wnętrza.",
          "Zmagazynowane przekaźniki są chronione przed częścią metabolizmu cytoplazmatycznego i gotowe do uwolnienia egzocytotycznego.",
          "Zaburzenie VMAT2 zmienia ilość przekaźnika dostępną do uwolnienia przy kolejnym impulsie."
        ],
        "why_it_matters": "Wyjaśnia, dlaczego zablokowanie wychwytu albo magazynowania neuroprzekaźnika może zmienić jego stężenie bez bezpośredniego agonizowania receptora.",
        "compare_note": "DAT — transporter dopaminy: DAT działa na błonie komórkowej, VMAT2 na błonie pęcherzyka.",
        "study_note": "Sprawdź, czy mierzono bezpośredni transport, wiązanie do transportera czy zmianę stężenia neuroprzekaźnika. To pokrewne, ale nie identyczne pomiary.",
        "memory_hook": "Transporter decyduje, gdzie cząsteczka się znajduje i jak długo tam pozostaje."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "VAChT wykorzystuje gradient protonowy pęcherzyka, dzięki czemu ACh może zostać zgromadzona i później uwolniona egzocytozą.",
          "Transporter nie jest receptorem. Jego główną funkcją jest fizyczne przenoszenie cząsteczki przez błonę, dlatego zmiana transportera wpływa przede wszystkim na to, gdzie i jak długo dostępny jest dany związek."
        ],
        "mechanism_steps": [
          "Acetylocholina jest syntetyzowana w cytoplazmie zakończenia nerwowego.",
          "VAChT transportuje ACh do pęcherzyków synaptycznych, wykorzystując gradient protonowy.",
          "Pęcherzyki gromadzą ACh do momentu sygnału wyzwalającego egzocytozę.",
          "Bez prawidłowego magazynowania neuron ma mniej neuroprzekaźnika gotowego do szybkiego uwolnienia."
        ],
        "why_it_matters": "Wyjaśnia, dlaczego zablokowanie wychwytu albo magazynowania neuroprzekaźnika może zmienić jego stężenie bez bezpośredniego agonizowania receptora.",
        "compare_note": "AChE — acetylocholinesteraza: VAChT magazynuje ACh, AChE kończy jej sygnał.",
        "study_note": "Sprawdź, czy mierzono bezpośredni transport, wiązanie do transportera czy zmianę stężenia neuroprzekaźnika. To pokrewne, ale nie identyczne pomiary.",
        "memory_hook": "Transporter decyduje, gdzie cząsteczka się znajduje i jak długo tam pozostaje."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "W synapsie chemicznej neuron presynaptyczny uwalnia neuroprzekaźnik, który dyfunduje przez szczelinę i oddziałuje z receptorami komórki postsynaptycznej lub receptorami presynaptycznymi.",
          "Neurotransmisja jest zjawiskiem sieciowym. Ten sam neuroprzekaźnik może działać inaczej w różnych miejscach, bo różnią się receptory, lokalizacja synaps i połączenia dalszych neuronów."
        ],
        "mechanism_steps": [
          "Impuls elektryczny dociera do zakończenia presynaptycznego.",
          "Pęcherzyki uwalniają neuroprzekaźnik do szczeliny synaptycznej.",
          "Przekaźnik wiąże receptory komórki postsynaptycznej lub autoreceptory presynaptyczne.",
          "Sygnał kończy się przez wychwyt, rozkład enzymatyczny, dyfuzję albo kombinację tych procesów."
        ],
        "why_it_matters": "Łączy poziom molekularny z działaniem sieci neuronalnej i chroni przed uproszczeniami typu „jeden neuroprzekaźnik = jeden nastrój”.",
        "compare_note": "Neuroprzekaźnik: Neuroprzekaźniki przenoszą sygnał w synapsie. Wychwyt zwrotny (reuptake): Wychwyt zwrotny pomaga kończyć sygnał.",
        "study_note": "Nie przenoś automatycznie efektu z jednego receptora na cały neuroprzekaźnik. Zawsze sprawdź region mózgu, typ komórki i podtyp receptora.",
        "memory_hook": "Efekt neuroprzekaźnika zależy od receptora i obwodu, nie od samej nazwy cząsteczki."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Po uwolnieniu neuroprzekaźnik może aktywować różne typy receptorów. Ten sam neuroprzekaźnik nie ma jednego uniwersalnego efektu — zależy od receptorów, komórki i obwodu.",
          "Neurotransmisja jest zjawiskiem sieciowym. Ten sam neuroprzekaźnik może działać inaczej w różnych miejscach, bo różnią się receptory, lokalizacja synaps i połączenia dalszych neuronów."
        ],
        "mechanism_steps": [
          "Neuron syntetyzuje i magazynuje cząsteczkę sygnałową.",
          "Aktywność neuronu powoduje kontrolowane uwolnienie tej cząsteczki.",
          "Cząsteczka wiąże odpowiednie receptory i zmienia zachowanie komórki docelowej.",
          "Układ ma mechanizm kończący sygnał, np. wychwyt zwrotny lub degradację enzymatyczną."
        ],
        "why_it_matters": "Łączy poziom molekularny z działaniem sieci neuronalnej i chroni przed uproszczeniami typu „jeden neuroprzekaźnik = jeden nastrój”.",
        "compare_note": "Acetylocholina (ACh): ACh jest neuroprzekaźnikiem. GABA: GABA jest głównym hamującym neuroprzekaźnikiem CNS.",
        "study_note": "Nie przenoś automatycznie efektu z jednego receptora na cały neuroprzekaźnik. Zawsze sprawdź region mózgu, typ komórki i podtyp receptora.",
        "memory_hook": "Efekt neuroprzekaźnika zależy od receptora i obwodu, nie od samej nazwy cząsteczki."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Po napływie Ca2+ pęcherzyki mogą łączyć się z błoną presynaptyczną i uwalniać zawartość do szczeliny synaptycznej.",
          "Neurotransmisja jest zjawiskiem sieciowym. Ten sam neuroprzekaźnik może działać inaczej w różnych miejscach, bo różnią się receptory, lokalizacja synaps i połączenia dalszych neuronów."
        ],
        "mechanism_steps": [
          "Transporter pęcherzykowy gromadzi neuroprzekaźnik wewnątrz pęcherzyka.",
          "Impuls nerwowy podnosi stężenie wapnia w zakończeniu presynaptycznym.",
          "Pęcherzyk łączy się z błoną komórkową i uwalnia zawartość przez egzocytozę.",
          "Błona pęcherzyka jest następnie odzyskiwana i może wejść w kolejny cykl."
        ],
        "why_it_matters": "Łączy poziom molekularny z działaniem sieci neuronalnej i chroni przed uproszczeniami typu „jeden neuroprzekaźnik = jeden nastrój”.",
        "compare_note": "VMAT2 — pęcherzykowy transporter monoamin: VMAT2 ładuje monoaminy do pęcherzyków. VAChT — pęcherzykowy transporter acetylocholiny: VAChT ładuje ACh.",
        "study_note": "Nie przenoś automatycznie efektu z jednego receptora na cały neuroprzekaźnik. Zawsze sprawdź region mózgu, typ komórki i podtyp receptora.",
        "memory_hook": "Efekt neuroprzekaźnika zależy od receptora i obwodu, nie od samej nazwy cząsteczki."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "ACh uczestniczy m.in. w transmisji nerwowo-mięśniowej, autonomicznej oraz funkcjach ośrodkowego układu nerwowego. Jej sygnał jest szybko kończony przez AChE.",
          "Neurotransmisja jest zjawiskiem sieciowym. Ten sam neuroprzekaźnik może działać inaczej w różnych miejscach, bo różnią się receptory, lokalizacja synaps i połączenia dalszych neuronów."
        ],
        "mechanism_steps": [
          "Cholina i acetylo-CoA są wykorzystywane do syntezy ACh w neuronie cholinergicznym.",
          "VAChT magazynuje ACh w pęcherzykach.",
          "Po uwolnieniu ACh aktywuje receptory nikotynowe lub muskarynowe.",
          "AChE szybko rozkłada ACh, a cholina może zostać odzyskana do ponownej syntezy."
        ],
        "why_it_matters": "Łączy poziom molekularny z działaniem sieci neuronalnej i chroni przed uproszczeniami typu „jeden neuroprzekaźnik = jeden nastrój”.",
        "compare_note": "AChE — acetylocholinesteraza: AChE hydrolizuje ACh. Nikotynowy receptor acetylocholiny (nAChR): Receptory nikotynowe są jedną rodziną receptorów ACh. Muskarynowy receptor acetylocholiny (mAChR): Muskarynowe receptory ACh są GPCR.",
        "study_note": "Nie przenoś automatycznie efektu z jednego receptora na cały neuroprzekaźnik. Zawsze sprawdź region mózgu, typ komórki i podtyp receptora.",
        "memory_hook": "Efekt neuroprzekaźnika zależy od receptora i obwodu, nie od samej nazwy cząsteczki."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Nazwa pochodzi od nikotyny, która może aktywować tę rodzinę receptorów. Podtypy różnią się składem podjednostek, rozmieszczeniem i farmakologią.",
          "Neurotransmisja jest zjawiskiem sieciowym. Ten sam neuroprzekaźnik może działać inaczej w różnych miejscach, bo różnią się receptory, lokalizacja synaps i połączenia dalszych neuronów."
        ],
        "mechanism_steps": [
          "Acetylocholina lub inny agonista wiąże receptor nikotynowy.",
          "Receptor, będący kanałem jonowym, zmienia prawdopodobieństwo otwarcia.",
          "Przepływ kationów szybko zmienia pobudliwość błony.",
          "Długotrwała ekspozycja na agonistę może prowadzić do desensytyzacji receptora."
        ],
        "why_it_matters": "Łączy poziom molekularny z działaniem sieci neuronalnej i chroni przed uproszczeniami typu „jeden neuroprzekaźnik = jeden nastrój”.",
        "compare_note": "Muskarynowy receptor acetylocholiny (mAChR): Muskarynowe receptory ACh są metabotropowe.",
        "study_note": "Nie przenoś automatycznie efektu z jednego receptora na cały neuroprzekaźnik. Zawsze sprawdź region mózgu, typ komórki i podtyp receptora.",
        "memory_hook": "Efekt neuroprzekaźnika zależy od receptora i obwodu, nie od samej nazwy cząsteczki."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Podtypy M1–M5 uruchamiają różne szlaki sygnałowe. Efekt ACh zależy więc od tego, który receptor i w jakiej tkance zostanie aktywowany.",
          "Neurotransmisja jest zjawiskiem sieciowym. Ten sam neuroprzekaźnik może działać inaczej w różnych miejscach, bo różnią się receptory, lokalizacja synaps i połączenia dalszych neuronów."
        ],
        "mechanism_steps": [
          "Acetylocholina wiąże jeden z podtypów receptora muskarynowego.",
          "Receptor aktywuje określone białko G.",
          "Powstaje kaskada wtórnych przekaźników lub zmiana aktywności kanałów jonowych.",
          "Odpowiedź jest zwykle wolniejsza niż w nAChR, ale może być bardziej rozbudowana i długotrwała."
        ],
        "why_it_matters": "Łączy poziom molekularny z działaniem sieci neuronalnej i chroni przed uproszczeniami typu „jeden neuroprzekaźnik = jeden nastrój”.",
        "compare_note": "Nikotynowy receptor acetylocholiny (nAChR): nAChR to kanały jonowe.",
        "study_note": "Nie przenoś automatycznie efektu z jednego receptora na cały neuroprzekaźnik. Zawsze sprawdź region mózgu, typ komórki i podtyp receptora.",
        "memory_hook": "Efekt neuroprzekaźnika zależy od receptora i obwodu, nie od samej nazwy cząsteczki."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Obejmuje m.in. ChAT, VAChT, ACh, receptory nikotynowe i muskarynowe oraz AChE. To cały cykl sygnału, a nie jeden receptor.",
          "Neurotransmisja jest zjawiskiem sieciowym. Ten sam neuroprzekaźnik może działać inaczej w różnych miejscach, bo różnią się receptory, lokalizacja synaps i połączenia dalszych neuronów."
        ],
        "mechanism_steps": [
          "Neurony cholinergiczne syntetyzują i uwalniają acetylocholinę.",
          "ACh działa przez receptory nikotynowe i muskarynowe w różnych tkankach.",
          "VAChT, transport choliny i AChE kontrolują dostępność przekaźnika przed oraz po uwolnieniu.",
          "Efekt układu cholinergicznego zależy od miejsca: inne funkcje dominują w mózgu, zwojach autonomicznych, przywspółczulnym układzie nerwowym i złączu nerwowo-mięśniowym."
        ],
        "why_it_matters": "Łączy poziom molekularny z działaniem sieci neuronalnej i chroni przed uproszczeniami typu „jeden neuroprzekaźnik = jeden nastrój”.",
        "compare_note": "AChE — acetylocholinesteraza: AChE kończy sygnał ACh.",
        "study_note": "Nie przenoś automatycznie efektu z jednego receptora na cały neuroprzekaźnik. Zawsze sprawdź region mózgu, typ komórki i podtyp receptora.",
        "memory_hook": "Efekt neuroprzekaźnika zależy od receptora i obwodu, nie od samej nazwy cząsteczki."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Dopamina działa przez kilka receptorów GPCR. Jej sygnał reguluje m.in. DAT, MAO i COMT. Nie jest prostą „cząsteczką przyjemności”.",
          "Największe uproszczenie to „dopamina = przyjemność”. W rzeczywistości sygnalizacja dopaminowa bierze udział m.in. w uczeniu przez przewidywanie, motywacji, kontroli ruchu i wielu innych funkcjach, zależnie od szlaku i receptorów.",
          "Neurotransmisja jest zjawiskiem sieciowym. Ten sam neuroprzekaźnik może działać inaczej w różnych miejscach, bo różnią się receptory, lokalizacja synaps i połączenia dalszych neuronów."
        ],
        "mechanism_steps": [
          "Dopamina jest syntetyzowana z prekursorów katecholaminowych i magazynowana w pęcherzykach.",
          "Po uwolnieniu działa na receptory dopaminowe należące do GPCR.",
          "DAT, metabolizm enzymatyczny i dyfuzja regulują jej dostępność poza komórką.",
          "Rola dopaminy zależy od obwodu neuronalnego — nie jest po prostu „cząsteczką przyjemności”."
        ],
        "why_it_matters": "Łączy poziom molekularny z działaniem sieci neuronalnej i chroni przed uproszczeniami typu „jeden neuroprzekaźnik = jeden nastrój”.",
        "compare_note": "DAT — transporter dopaminy: DAT uczestniczy w wychwycie dopaminy. COMT — katecholo-O-metylotransferaza: COMT uczestniczy w metabolizmie katecholamin.",
        "study_note": "Nie przenoś automatycznie efektu z jednego receptora na cały neuroprzekaźnik. Zawsze sprawdź region mózgu, typ komórki i podtyp receptora.",
        "memory_hook": "Dopamina to nie „przyjemność”; to sygnał zależny od obwodu i kontekstu."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Serotonina reguluje liczne funkcje fizjologiczne i behawioralne. SERT uczestniczy w jej wychwycie, a MAO-A w metabolizmie.",
          "Neurotransmisja jest zjawiskiem sieciowym. Ten sam neuroprzekaźnik może działać inaczej w różnych miejscach, bo różnią się receptory, lokalizacja synaps i połączenia dalszych neuronów."
        ],
        "mechanism_steps": [
          "Serotonina jest syntetyzowana z tryptofanu i magazynowana w pęcherzykach.",
          "Po uwolnieniu działa na wiele rodzin receptorów 5-HT o różnych mechanizmach.",
          "SERT odpowiada za ważną część jej wychwytu zwrotnego, a MAO uczestniczy w metabolizmie.",
          "Ponieważ receptory 5-HT różnią się funkcją i lokalizacją, wzrost serotoniny nie przekłada się na jeden prosty efekt psychiczny."
        ],
        "why_it_matters": "Łączy poziom molekularny z działaniem sieci neuronalnej i chroni przed uproszczeniami typu „jeden neuroprzekaźnik = jeden nastrój”.",
        "compare_note": "SERT — transporter serotoniny: SERT reguluje wychwyt serotoniny. MAO-A: MAO-A jest ważny w jej metabolizmie.",
        "study_note": "Nie przenoś automatycznie efektu z jednego receptora na cały neuroprzekaźnik. Zawsze sprawdź region mózgu, typ komórki i podtyp receptora.",
        "memory_hook": "Efekt neuroprzekaźnika zależy od receptora i obwodu, nie od samej nazwy cząsteczki."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "NET odpowiada za dużą część jej wychwytu zwrotnego, a MAO i COMT uczestniczą w metabolizmie.",
          "Neurotransmisja jest zjawiskiem sieciowym. Ten sam neuroprzekaźnik może działać inaczej w różnych miejscach, bo różnią się receptory, lokalizacja synaps i połączenia dalszych neuronów."
        ],
        "mechanism_steps": [
          "Noradrenalina jest syntetyzowana w neuronach katecholaminergicznych i magazynowana w pęcherzykach.",
          "Po uwolnieniu aktywuje receptory adrenergiczne o różnych funkcjach.",
          "NET odpowiada za dużą część wychwytu zwrotnego w wielu obszarach.",
          "Zmiana noradrenaliny może wpływać na pobudzenie, uwagę i odpowiedzi autonomiczne, ale kierunek efektu zależy od receptora i obwodu."
        ],
        "why_it_matters": "Łączy poziom molekularny z działaniem sieci neuronalnej i chroni przed uproszczeniami typu „jeden neuroprzekaźnik = jeden nastrój”.",
        "compare_note": "NET — transporter noradrenaliny: NET transportuje noradrenalinę. COMT — katecholo-O-metylotransferaza: COMT uczestniczy w metabolizmie katecholamin.",
        "study_note": "Nie przenoś automatycznie efektu z jednego receptora na cały neuroprzekaźnik. Zawsze sprawdź region mózgu, typ komórki i podtyp receptora.",
        "memory_hook": "Efekt neuroprzekaźnika zależy od receptora i obwodu, nie od samej nazwy cząsteczki."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Monoaminy mają wspólne elementy biologii: syntezę enzymatyczną, magazynowanie pęcherzykowe, transportery wychwytu oraz metabolizm m.in. przez MAO.",
          "Neurotransmisja jest zjawiskiem sieciowym. Ten sam neuroprzekaźnik może działać inaczej w różnych miejscach, bo różnią się receptory, lokalizacja synaps i połączenia dalszych neuronów."
        ],
        "mechanism_steps": [
          "Monoaminy są syntetyzowane w wyspecjalizowanych neuronach i magazynowane przez VMAT2.",
          "Po uwolnieniu aktywują własne rodziny receptorów.",
          "Transportery błonowe i enzymy, takie jak MAO oraz COMT, pomagają zakończyć lub ograniczyć sygnał.",
          "Każda monoamina ma własną anatomię i funkcje, dlatego wspólna kategoria chemiczna nie oznacza identycznego działania."
        ],
        "why_it_matters": "Łączy poziom molekularny z działaniem sieci neuronalnej i chroni przed uproszczeniami typu „jeden neuroprzekaźnik = jeden nastrój”.",
        "compare_note": "VMAT2 — pęcherzykowy transporter monoamin: VMAT2 magazynuje wiele monoamin. MAO-A: MAO rozkłada monoaminy.",
        "study_note": "Nie przenoś automatycznie efektu z jednego receptora na cały neuroprzekaźnik. Zawsze sprawdź region mózgu, typ komórki i podtyp receptora.",
        "memory_hook": "Efekt neuroprzekaźnika zależy od receptora i obwodu, nie od samej nazwy cząsteczki."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "GABA działa m.in. przez szybkie receptory GABA-A i wolniejsze GABA-B. „Hamujący” oznacza wpływ zmniejszający prawdopodobieństwo pobudzenia w określonych warunkach, nie jeden subiektywny efekt.",
          "„Hamujący neuroprzekaźnik” opisuje wpływ na pobudliwość komórki, a nie gwarantowany subiektywny stan. Hamowanie jednego neuronu hamującego może nawet pośrednio zwiększyć aktywność dalszej części obwodu — to tzw. rozhamowanie.",
          "Neurotransmisja jest zjawiskiem sieciowym. Ten sam neuroprzekaźnik może działać inaczej w różnych miejscach, bo różnią się receptory, lokalizacja synaps i połączenia dalszych neuronów."
        ],
        "mechanism_steps": [
          "GABA jest uwalniany z neuronów hamujących.",
          "Na receptorach GABA-A szybko zwiększa przewodnictwo anionowe, a przez GABA-B uruchamia wolniejszą sygnalizację metabotropową.",
          "W dojrzałym OUN efektem jest zwykle zmniejszenie prawdopodobieństwa pobudzenia neuronu lub osłabienie uwalniania przekaźnika.",
          "To, czy człowiek odczuje „uspokojenie”, zależy od tego, gdzie i jak mocno zmienia się sieć neuronalna."
        ],
        "why_it_matters": "Łączy poziom molekularny z działaniem sieci neuronalnej i chroni przed uproszczeniami typu „jeden neuroprzekaźnik = jeden nastrój”.",
        "compare_note": "Receptor GABA-A: GABA-A jest receptorem jonotropowym. Receptor GABA-B: GABA-B jest GPCR.",
        "study_note": "Nie przenoś automatycznie efektu z jednego receptora na cały neuroprzekaźnik. Zawsze sprawdź region mózgu, typ komórki i podtyp receptora.",
        "memory_hook": "GABA zwykle zmniejsza pobudliwość neuronu, ale efekt całej sieci może być bardziej złożony."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Różne kombinacje podjednostek dają receptory o odmiennej lokalizacji i farmakologii. GABA-A posiada wiele miejsc modulacyjnych.",
          "Neurotransmisja jest zjawiskiem sieciowym. Ten sam neuroprzekaźnik może działać inaczej w różnych miejscach, bo różnią się receptory, lokalizacja synaps i połączenia dalszych neuronów."
        ],
        "mechanism_steps": [
          "GABA wiąże receptor GABA-A, który jest kanałem jonowym.",
          "Rośnie przewodnictwo głównie dla jonów chlorkowych.",
          "Zmiana potencjału błonowego i przewodnictwa utrudnia neuronowi generowanie pobudzenia w wielu warunkach.",
          "Modulatory allosteryczne mogą wzmacniać lub osłabiać odpowiedź na GABA bez zajmowania jego głównego miejsca wiążącego."
        ],
        "why_it_matters": "Łączy poziom molekularny z działaniem sieci neuronalnej i chroni przed uproszczeniami typu „jeden neuroprzekaźnik = jeden nastrój”.",
        "compare_note": "PAM — pozytywny modulator allosteryczny: Niektóre ligandy mogą dodatnio modulować GABA-A w miejscach allosterycznych.",
        "study_note": "Nie przenoś automatycznie efektu z jednego receptora na cały neuroprzekaźnik. Zawsze sprawdź region mózgu, typ komórki i podtyp receptora.",
        "memory_hook": "Efekt neuroprzekaźnika zależy od receptora i obwodu, nie od samej nazwy cząsteczki."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Może zmniejszać napływ Ca2+, zwiększać przewodnictwo K+ i ograniczać uwalnianie neuroprzekaźników. Działa wolniej niż GABA-A.",
          "Neurotransmisja jest zjawiskiem sieciowym. Ten sam neuroprzekaźnik może działać inaczej w różnych miejscach, bo różnią się receptory, lokalizacja synaps i połączenia dalszych neuronów."
        ],
        "mechanism_steps": [
          "GABA wiąże receptor GABA-B będący GPCR.",
          "Receptor uruchamia białka G typu Gi/o.",
          "Może ograniczać napływ wapnia presynaptycznie, zwiększać przewodnictwo potasowe postsynaptycznie i zmniejszać aktywność cyklazy adenylanowej.",
          "Efekt jest wolniejszy niż w GABA-A, ale może dłużej modulować pobudliwość i uwalnianie neuroprzekaźników."
        ],
        "why_it_matters": "Łączy poziom molekularny z działaniem sieci neuronalnej i chroni przed uproszczeniami typu „jeden neuroprzekaźnik = jeden nastrój”.",
        "compare_note": "Receptor GABA-A: GABA-A jest kanałem jonowym.",
        "study_note": "Nie przenoś automatycznie efektu z jednego receptora na cały neuroprzekaźnik. Zawsze sprawdź region mózgu, typ komórki i podtyp receptora.",
        "memory_hook": "Efekt neuroprzekaźnika zależy od receptora i obwodu, nie od samej nazwy cząsteczki."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Aktywuje receptory jonotropowe AMPA, NMDA i kainianowe oraz receptory metabotropowe. Jest kluczowy dla transmisji pobudzającej i plastyczności.",
          "Neurotransmisja jest zjawiskiem sieciowym. Ten sam neuroprzekaźnik może działać inaczej w różnych miejscach, bo różnią się receptory, lokalizacja synaps i połączenia dalszych neuronów."
        ],
        "mechanism_steps": [
          "Glutaminian jest uwalniany z wielu neuronów pobudzających.",
          "Działa na szybkie receptory AMPA/NMDA oraz receptory metabotropowe.",
          "Transportery glutaminianu w neuronach i komórkach glejowych szybko ograniczają jego stężenie poza komórką.",
          "Precyzyjna kontrola jest ważna, bo nadmierna i długotrwała aktywacja receptorów glutaminianowych może być szkodliwa."
        ],
        "why_it_matters": "Łączy poziom molekularny z działaniem sieci neuronalnej i chroni przed uproszczeniami typu „jeden neuroprzekaźnik = jeden nastrój”.",
        "compare_note": "Receptor AMPA: AMPA pośredniczy w szybkiej transmisji pobudzającej. Receptor NMDA: NMDA pełni szczególną rolę w plastyczności.",
        "study_note": "Nie przenoś automatycznie efektu z jednego receptora na cały neuroprzekaźnik. Zawsze sprawdź region mózgu, typ komórki i podtyp receptora.",
        "memory_hook": "Efekt neuroprzekaźnika zależy od receptora i obwodu, nie od samej nazwy cząsteczki."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Po związaniu glutaminianu otwiera kanał kationowy, zwykle powodując depolaryzację. AMPA często zapewnia szybki początek sygnału pobudzającego.",
          "Neurotransmisja jest zjawiskiem sieciowym. Ten sam neuroprzekaźnik może działać inaczej w różnych miejscach, bo różnią się receptory, lokalizacja synaps i połączenia dalszych neuronów."
        ],
        "mechanism_steps": [
          "Glutaminian wiąże receptor AMPA.",
          "Kanał szybko się otwiera i przepuszcza kationy.",
          "Powstaje szybka depolaryzacja postsynaptyczna.",
          "Liczba i właściwości receptorów AMPA w synapsie mogą zmieniać się podczas plastyczności synaptycznej."
        ],
        "why_it_matters": "Łączy poziom molekularny z działaniem sieci neuronalnej i chroni przed uproszczeniami typu „jeden neuroprzekaźnik = jeden nastrój”.",
        "compare_note": "Receptor NMDA: AMPA i NMDA często współdziałają w plastyczności synaptycznej.",
        "study_note": "Nie przenoś automatycznie efektu z jednego receptora na cały neuroprzekaźnik. Zawsze sprawdź region mózgu, typ komórki i podtyp receptora.",
        "memory_hook": "Efekt neuroprzekaźnika zależy od receptora i obwodu, nie od samej nazwy cząsteczki."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Kanał NMDA przewodzi m.in. Ca2+ i przy spoczynkowym potencjale jest blokowany przez Mg2+. Do silnej aktywacji potrzebne są odpowiednie ligandy oraz depolaryzacja, dlatego receptor działa jak detektor koincydencji.",
          "NMDA jest dobrym przykładem receptora, którego funkcji nie da się opisać samym „ligand wiąże → kanał otwarty”. Wymaga odpowiedniego stanu elektrycznego błony i dlatego łączy informację chemiczną z aktywnością neuronu.",
          "Neurotransmisja jest zjawiskiem sieciowym. Ten sam neuroprzekaźnik może działać inaczej w różnych miejscach, bo różnią się receptory, lokalizacja synaps i połączenia dalszych neuronów."
        ],
        "mechanism_steps": [
          "Glutaminian wiąże receptor NMDA, ale sam ligand nie zawsze wystarcza do przepływu jonów.",
          "Przy potencjale spoczynkowym kanał może być blokowany przez magnez.",
          "Depolaryzacja usuwa blok, a aktywny receptor przepuszcza m.in. wapń.",
          "Połączenie sygnału chemicznego i stanu elektrycznego sprawia, że NMDA działa jak detektor koincydencji ważny dla części form plastyczności."
        ],
        "why_it_matters": "Łączy poziom molekularny z działaniem sieci neuronalnej i chroni przed uproszczeniami typu „jeden neuroprzekaźnik = jeden nastrój”.",
        "compare_note": "Plastyczność synaptyczna: Napływ Ca2+ przez NMDA uczestniczy w zmianach plastyczności.",
        "study_note": "Nie przenoś automatycznie efektu z jednego receptora na cały neuroprzekaźnik. Zawsze sprawdź region mózgu, typ komórki i podtyp receptora.",
        "memory_hook": "Efekt neuroprzekaźnika zależy od receptora i obwodu, nie od samej nazwy cząsteczki."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Plastyczność obejmuje wiele mechanizmów presynaptycznych i postsynaptycznych. Receptory NMDA i AMPA są ważnymi elementami wielu modeli uczenia i pamięci.",
          "Neurotransmisja jest zjawiskiem sieciowym. Ten sam neuroprzekaźnik może działać inaczej w różnych miejscach, bo różnią się receptory, lokalizacja synaps i połączenia dalszych neuronów."
        ],
        "mechanism_steps": [
          "Aktywność synapsy zmienia stężenia jonów i wtórnych przekaźników.",
          "Uruchamiane są kinazy, fosfatazy i zmiany białek synaptycznych.",
          "Zmienia się liczba lub właściwości receptorów, uwalnianie neuroprzekaźnika albo struktura synapsy.",
          "Jeśli zmiana utrzymuje się w czasie, synapsa reaguje inaczej na przyszłą aktywność."
        ],
        "why_it_matters": "Łączy poziom molekularny z działaniem sieci neuronalnej i chroni przed uproszczeniami typu „jeden neuroprzekaźnik = jeden nastrój”.",
        "compare_note": "Pamięć — poziom systemowy: Plastyczność jest jednym z mechanizmów biologicznych związanych z uczeniem.",
        "study_note": "Nie przenoś automatycznie efektu z jednego receptora na cały neuroprzekaźnik. Zawsze sprawdź region mózgu, typ komórki i podtyp receptora.",
        "memory_hook": "Efekt neuroprzekaźnika zależy od receptora i obwodu, nie od samej nazwy cząsteczki."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Pamięć wymaga współpracy wielu obwodów, receptorów i procesów plastyczności. Zwiększenie jednego neuroprzekaźnika nie przekłada się liniowo na „więcej pamięci”.",
          "Neurotransmisja jest zjawiskiem sieciowym. Ten sam neuroprzekaźnik może działać inaczej w różnych miejscach, bo różnią się receptory, lokalizacja synaps i połączenia dalszych neuronów."
        ],
        "mechanism_steps": [
          "Informacja jest kodowana przez aktywność wielu sieci neuronalnych, a nie pojedynczą cząsteczkę.",
          "Plastyczność synaptyczna zmienia siłę wybranych połączeń.",
          "Systemy mózgowe konsolidują i reorganizują ślad pamięci w czasie.",
          "Farmakologia może wpływać na poszczególne etapy pamięci, ale nie istnieje jeden prosty „neuroprzekaźnik pamięci”."
        ],
        "why_it_matters": "Łączy poziom molekularny z działaniem sieci neuronalnej i chroni przed uproszczeniami typu „jeden neuroprzekaźnik = jeden nastrój”.",
        "compare_note": "AChE — acetylocholinesteraza: Zmiana transmisji cholinergicznej może wpływać na funkcje poznawcze, ale nie jest prostym suwakiem pamięci.",
        "study_note": "Nie przenoś automatycznie efektu z jednego receptora na cały neuroprzekaźnik. Zawsze sprawdź region mózgu, typ komórki i podtyp receptora.",
        "memory_hook": "Efekt neuroprzekaźnika zależy od receptora i obwodu, nie od samej nazwy cząsteczki."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "ADME odpowiada na pytanie „co organizm robi z substancją?”. Od tego zależy, czy i jak długo związek osiąga stężenie wystarczające do działania na dany cel.",
          "Farmakokinetyka odpowiada na pytanie „co organizm robi z substancją?”. Nawet świetny mechanizm molekularny nie ma znaczenia, jeśli substancja nie dociera do celu w odpowiednim stężeniu i czasie."
        ],
        "mechanism_steps": [
          "Substancja dostaje się do organizmu i ulega wchłanianiu.",
          "Jest rozprowadzana między krwią i tkankami.",
          "Enzymy mogą przekształcać ją w metabolity o innej aktywności i właściwościach.",
          "Substancja oraz metabolity są usuwane z organizmu; suma tych procesów określa ekspozycję w czasie."
        ],
        "why_it_matters": "Pozwala sprawdzić, czy efekt widoczny w laboratorium ma szansę wystąpić po rzeczywistej dawce i jak długo organizm pozostaje eksponowany na związek.",
        "compare_note": "Biodostępność: Bioavailability opisuje część etapu wchłaniania. Metabolizm substancji: Metabolizm zmienia związek chemicznie.",
        "study_note": "Patrz na Cmax, Tmax, AUC, t½, drogę podania i frakcję wolną. Jedna liczba rzadko opisuje całą ekspozycję.",
        "memory_hook": "Mechanizm działa tylko wtedy, gdy substancja realnie dotrze do celu."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Dla podania dożylnego przyjmuje się 100%. Droga podania, wchłanianie i metabolizm pierwszego przejścia mogą znacznie zmieniać biodostępność.",
          "Farmakokinetyka odpowiada na pytanie „co organizm robi z substancją?”. Nawet świetny mechanizm molekularny nie ma znaczenia, jeśli substancja nie dociera do celu w odpowiednim stężeniu i czasie."
        ],
        "mechanism_steps": [
          "Dawka zostaje podana określoną drogą.",
          "Tylko część może dotrzeć do krążenia ogólnego w niezmienionej postaci.",
          "Wchłanianie i metabolizm przed wejściem do krążenia zmniejszają dostępność niektórych substancji.",
          "Biodostępność wpływa na zależność między podaną dawką a rzeczywistą ekspozycją organizmu."
        ],
        "why_it_matters": "Pozwala sprawdzić, czy efekt widoczny w laboratorium ma szansę wystąpić po rzeczywistej dawce i jak długo organizm pozostaje eksponowany na związek.",
        "compare_note": "Efekt pierwszego przejścia: Metabolizm pierwszego przejścia może obniżyć biodostępność doustną.",
        "study_note": "Patrz na Cmax, Tmax, AUC, t½, drogę podania i frakcję wolną. Jedna liczba rzadko opisuje całą ekspozycję.",
        "memory_hook": "Mechanizm działa tylko wtedy, gdy substancja realnie dotrze do celu."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Zależy m.in. od lipofilności, wielkości, ładunku, przepływu krwi, wiązania z białkami i właściwości barier biologicznych.",
          "Farmakokinetyka odpowiada na pytanie „co organizm robi z substancją?”. Nawet świetny mechanizm molekularny nie ma znaczenia, jeśli substancja nie dociera do celu w odpowiednim stężeniu i czasie."
        ],
        "mechanism_steps": [
          "Substancja krąży we krwi po wchłonięciu lub podaniu dożylnego.",
          "Przechodzi do tkanek w stopniu zależnym m.in. od przepływu krwi, lipofilności, wiązania z białkami i barier biologicznych.",
          "Część może gromadzić się w określonych kompartmentach.",
          "Dystrybucja wpływa zarówno na szybkość początku efektu, jak i na późniejsze uwalnianie substancji z tkanek."
        ],
        "why_it_matters": "Pozwala sprawdzić, czy efekt widoczny w laboratorium ma szansę wystąpić po rzeczywistej dawce i jak długo organizm pozostaje eksponowany na związek.",
        "compare_note": "Objętość dystrybucji (Vd): Vd jest parametrem opisującym dystrybucję. Bariera krew–mózg (BBB): BBB ogranicza dostęp części związków do CNS.",
        "study_note": "Patrz na Cmax, Tmax, AUC, t½, drogę podania i frakcję wolną. Jedna liczba rzadko opisuje całą ekspozycję.",
        "memory_hook": "Mechanizm działa tylko wtedy, gdy substancja realnie dotrze do celu."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Duże Vd często oznacza rozległą dystrybucję poza osocze. To parametr modelowy, a nie dosłowna objętość anatomiczna.",
          "Farmakokinetyka odpowiada na pytanie „co organizm robi z substancją?”. Nawet świetny mechanizm molekularny nie ma znaczenia, jeśli substancja nie dociera do celu w odpowiednim stężeniu i czasie."
        ],
        "mechanism_steps": [
          "Porównuje się ilość substancji w organizmie z jej zmierzonym stężeniem w osoczu.",
          "Jeżeli dużo związku znajduje się poza osoczem, obliczona objętość dystrybucji może być duża.",
          "Vd jest parametrem modelowym, a nie rzeczywistą anatomiczną objętością.",
          "Wraz z klirensem pomaga opisywać m.in. okres półtrwania i projektować dawkowanie."
        ],
        "why_it_matters": "Pozwala sprawdzić, czy efekt widoczny w laboratorium ma szansę wystąpić po rzeczywistej dawce i jak długo organizm pozostaje eksponowany na związek.",
        "compare_note": "Okres półtrwania (t½): Vd wraz z klirensem wpływa na okres półtrwania.",
        "study_note": "Patrz na Cmax, Tmax, AUC, t½, drogę podania i frakcję wolną. Jedna liczba rzadko opisuje całą ekspozycję.",
        "memory_hook": "Mechanizm działa tylko wtedy, gdy substancja realnie dotrze do celu."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Klirens wynika m.in. z metabolizmu i wydalania. W połączeniu z Vd wpływa na okres półtrwania.",
          "Farmakokinetyka odpowiada na pytanie „co organizm robi z substancją?”. Nawet świetny mechanizm molekularny nie ma znaczenia, jeśli substancja nie dociera do celu w odpowiednim stężeniu i czasie."
        ],
        "mechanism_steps": [
          "Narządy i enzymy usuwają aktywną substancję z osocza przez metabolizm lub wydalanie.",
          "Klirens opisuje efektywną objętość osocza „oczyszczaną” z substancji w jednostce czasu.",
          "Większy klirens zwykle zmniejsza ekspozycję przy tej samej szybkości podawania.",
          "Zmiana funkcji wątroby, nerek lub aktywności enzymów może znacząco zmienić klirens."
        ],
        "why_it_matters": "Pozwala sprawdzić, czy efekt widoczny w laboratorium ma szansę wystąpić po rzeczywistej dawce i jak długo organizm pozostaje eksponowany na związek.",
        "compare_note": "Okres półtrwania (t½): W uproszczonym modelu t1/2 zależy od Vd i CL.",
        "study_note": "Patrz na Cmax, Tmax, AUC, t½, drogę podania i frakcję wolną. Jedna liczba rzadko opisuje całą ekspozycję.",
        "memory_hook": "Mechanizm działa tylko wtedy, gdy substancja realnie dotrze do celu."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "W prostym modelu t½ ≈ 0,693 × Vd / CL. Nie zawsze oznacza czas trwania subiektywnego efektu, bo efekt może zależeć od aktywnych metabolitów, dystrybucji i dynamiki receptora.",
          "Po około 4–5 okresach półtrwania w prostym modelu pozostaje niewielka część początkowej ilości związku, a podczas regularnego dawkowania podobna skala czasowa jest potrzebna do zbliżenia się do stanu stacjonarnego. To reguła orientacyjna, nie gwarancja czasu efektu.",
          "Farmakokinetyka odpowiada na pytanie „co organizm robi z substancją?”. Nawet świetny mechanizm molekularny nie ma znaczenia, jeśli substancja nie dociera do celu w odpowiednim stężeniu i czasie."
        ],
        "mechanism_steps": [
          "Stężenie substancji spada w czasie wskutek dystrybucji i eliminacji.",
          "W prostym modelu liniowym t½ zależy od objętości dystrybucji i klirensu: około 0,693 × Vd / CL.",
          "Po każdym okresie półtrwania pozostaje połowa poprzedniej ilości w opisywanej fazie.",
          "Czas trwania odczuwanego efektu może być krótszy lub dłuższy od t½ z powodu redystrybucji, metabolitów i farmakodynamiki."
        ],
        "why_it_matters": "Pozwala sprawdzić, czy efekt widoczny w laboratorium ma szansę wystąpić po rzeczywistej dawce i jak długo organizm pozostaje eksponowany na związek.",
        "compare_note": "Najbliższy kontekst dają: Objętość dystrybucji (Vd), Klirens.",
        "study_note": "Patrz na Cmax, Tmax, AUC, t½, drogę podania i frakcję wolną. Jedna liczba rzadko opisuje całą ekspozycję.",
        "memory_hook": "t½ mówi, jak szybko spada stężenie, a nie dokładnie jak długo „czujesz” substancję."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Przenikanie zależy od właściwości cząsteczki oraz transporterów i mechanizmów barierowych. Wynik in vitro na białku nie gwarantuje działania w mózgu, jeśli substancja nie osiąga tam odpowiedniego stężenia.",
          "BBB nie jest betonową ścianą. To selektywny układ barier, transporterów i enzymów. Małe, lipofilne cząsteczki często przechodzą łatwiej, ale istnieje wiele wyjątków, a aktywny transport może całkowicie zmienić intuicję opartą tylko na lipofilności.",
          "Farmakokinetyka odpowiada na pytanie „co organizm robi z substancją?”. Nawet świetny mechanizm molekularny nie ma znaczenia, jeśli substancja nie dociera do celu w odpowiednim stężeniu i czasie."
        ],
        "mechanism_steps": [
          "Śródbłonek naczyń mózgowych tworzy szczelniejszą barierę niż większość naczyń obwodowych.",
          "Cząsteczka musi mieć odpowiednie właściwości, skorzystać z transportera albo ominąć barierę inną drogą, by osiągnąć znaczące stężenie w OUN.",
          "Białka wypływowe mogą aktywnie usuwać niektóre związki z mózgu.",
          "Dlatego aktywność w probówce na receptorze mózgowym nic nie mówi, jeśli związek w praktyce nie osiąga mózgu."
        ],
        "why_it_matters": "Pozwala sprawdzić, czy efekt widoczny w laboratorium ma szansę wystąpić po rzeczywistej dawce i jak długo organizm pozostaje eksponowany na związek.",
        "compare_note": "Ekspozycja: czy stężenie jest biologicznie osiągalne?: Liczy się realne stężenie w miejscu działania.",
        "study_note": "Patrz na Cmax, Tmax, AUC, t½, drogę podania i frakcję wolną. Jedna liczba rzadko opisuje całą ekspozycję.",
        "memory_hook": "Aktywny na receptorze ≠ aktywny w mózgu; najpierw trzeba przejść BBB."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Frakcja wolna jest bezpośrednio dostępna do dystrybucji i wielu interakcji. Silne wiązanie może zmieniać dystrybucję i klirens.",
          "Farmakokinetyka odpowiada na pytanie „co organizm robi z substancją?”. Nawet świetny mechanizm molekularny nie ma znaczenia, jeśli substancja nie dociera do celu w odpowiednim stężeniu i czasie."
        ],
        "mechanism_steps": [
          "Część cząsteczek substancji wiąże się odwracalnie z białkami osocza.",
          "Tylko frakcja niezwiązana może swobodniej przechodzić do tkanek i być filtrowana lub metabolizowana.",
          "Zmiany wiązania mogą chwilowo zmieniać wolne stężenie, ale organizm często reaguje zmianą dystrybucji i eliminacji.",
          "Dlatego samo „wysokie wiązanie z białkami” nie wystarcza do przewidzenia siły działania."
        ],
        "why_it_matters": "Pozwala sprawdzić, czy efekt widoczny w laboratorium ma szansę wystąpić po rzeczywistej dawce i jak długo organizm pozostaje eksponowany na związek.",
        "compare_note": "Najbliższy kontekst dają: Dystrybucja.",
        "study_note": "Patrz na Cmax, Tmax, AUC, t½, drogę podania i frakcję wolną. Jedna liczba rzadko opisuje całą ekspozycję.",
        "memory_hook": "Mechanizm działa tylko wtedy, gdy substancja realnie dotrze do celu."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Metabolizm może dezaktywować związek, tworzyć aktywny metabolit albo czasem metabolit bardziej toksyczny. Zachodzi szczególnie intensywnie w wątrobie, ale nie tylko tam.",
          "Farmakokinetyka odpowiada na pytanie „co organizm robi z substancją?”. Nawet świetny mechanizm molekularny nie ma znaczenia, jeśli substancja nie dociera do celu w odpowiednim stężeniu i czasie."
        ],
        "mechanism_steps": [
          "Enzym rozpoznaje substancję jako substrat.",
          "W reakcjach fazy I może dojść m.in. do utleniania, redukcji lub hydrolizy.",
          "W fazie II cząsteczka lub jej metabolit może zostać sprzężony z bardziej polarną grupą.",
          "Metabolizm może dezaktywować związek, aktywować prolek albo tworzyć aktywny lub toksyczny metabolit."
        ],
        "why_it_matters": "Pozwala sprawdzić, czy efekt widoczny w laboratorium ma szansę wystąpić po rzeczywistej dawce i jak długo organizm pozostaje eksponowany na związek.",
        "compare_note": "Cytochrom P450 (CYP): CYP450 jest ważnym systemem metabolizującym ksenobiotyki.",
        "study_note": "Patrz na Cmax, Tmax, AUC, t½, drogę podania i frakcję wolną. Jedna liczba rzadko opisuje całą ekspozycję.",
        "memory_hook": "Mechanizm działa tylko wtedy, gdy substancja realnie dotrze do celu."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Metabolit może być nieaktywny, aktywny lub mieć profil odmienny od związku macierzystego. Dlatego modelowanie efektu wymaga czasem śledzenia całej sieci metabolitów.",
          "Farmakokinetyka odpowiada na pytanie „co organizm robi z substancją?”. Nawet świetny mechanizm molekularny nie ma znaczenia, jeśli substancja nie dociera do celu w odpowiednim stężeniu i czasie."
        ],
        "mechanism_steps": [
          "Związek macierzysty jest chemicznie przekształcany przez enzymy.",
          "Powstaje metabolit o nowych właściwościach fizykochemicznych i farmakologicznych.",
          "Metabolit może być nieaktywny, podobnie aktywny, aktywniejszy albo działać na inne cele.",
          "Dlatego profil efektów substancji może zależeć nie tylko od związku podanego, ale też od czasu powstawania i eliminacji metabolitów."
        ],
        "why_it_matters": "Pozwala sprawdzić, czy efekt widoczny w laboratorium ma szansę wystąpić po rzeczywistej dawce i jak długo organizm pozostaje eksponowany na związek.",
        "compare_note": "Interakcja farmakokinetyczna: Interakcje metaboliczne mogą zmieniać poziomy metabolitów.",
        "study_note": "Patrz na Cmax, Tmax, AUC, t½, drogę podania i frakcję wolną. Jedna liczba rzadko opisuje całą ekspozycję.",
        "memory_hook": "Mechanizm działa tylko wtedy, gdy substancja realnie dotrze do celu."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Różne izoenzymy mają odmienne substraty i podatność na hamowanie lub indukcję. To jeden z głównych mechanizmów interakcji farmakokinetycznych.",
          "„CYP450” to rodzina wielu izoenzymów, a nie jeden enzym. Dwa związki mogą mieć całkowicie różne profile metabolizmu zależnie od tego, które izoformy CYP są zaangażowane.",
          "Farmakokinetyka odpowiada na pytanie „co organizm robi z substancją?”. Nawet świetny mechanizm molekularny nie ma znaczenia, jeśli substancja nie dociera do celu w odpowiednim stężeniu i czasie."
        ],
        "mechanism_steps": [
          "Izomer CYP wiąże substrat w miejscu aktywnym.",
          "Układ hemowy enzymu uczestniczy w reakcjach utleniania z użyciem tlenu i elektronów.",
          "Powstaje bardziej polarny lub inaczej reaktywny metabolit.",
          "Jeśli dwa związki korzystają z tego samego izoenzymu albo jeden go hamuje/indukuje, ich ekspozycja może się zmienić."
        ],
        "why_it_matters": "Pozwala sprawdzić, czy efekt widoczny w laboratorium ma szansę wystąpić po rzeczywistej dawce i jak długo organizm pozostaje eksponowany na związek.",
        "compare_note": "Hamowanie enzymu metabolicznego: Hamowanie CYP może zwiększać ekspozycję na jego substrat. Indukcja enzymu metabolicznego: Indukcja może przyspieszać metabolizm.",
        "study_note": "Patrz na Cmax, Tmax, AUC, t½, drogę podania i frakcję wolną. Jedna liczba rzadko opisuje całą ekspozycję.",
        "memory_hook": "Mechanizm działa tylko wtedy, gdy substancja realnie dotrze do celu."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Jeśli A hamuje enzym metabolizujący B, ekspozycja na B może wzrosnąć. Siła efektu zależy od udziału danego enzymu w całkowitym klirensie B i osiąganych stężeń inhibitora.",
          "Farmakokinetyka odpowiada na pytanie „co organizm robi z substancją?”. Nawet świetny mechanizm molekularny nie ma znaczenia, jeśli substancja nie dociera do celu w odpowiednim stężeniu i czasie."
        ],
        "mechanism_steps": [
          "Inhibitor zmniejsza aktywność enzymu metabolicznego.",
          "Substrat tego enzymu jest przekształcany wolniej.",
          "Jego stężenie lub AUC może wzrosnąć, jeżeli inne drogi eliminacji nie kompensują zmiany.",
          "Znaczenie kliniczne zależy od siły inhibicji, dawki, czasu, udziału danego enzymu w klirensie i marginesu bezpieczeństwa substratu."
        ],
        "why_it_matters": "Pozwala sprawdzić, czy efekt widoczny w laboratorium ma szansę wystąpić po rzeczywistej dawce i jak długo organizm pozostaje eksponowany na związek.",
        "compare_note": "Interakcja farmakokinetyczna: To klasyczna interakcja farmakokinetyczna.",
        "study_note": "Patrz na Cmax, Tmax, AUC, t½, drogę podania i frakcję wolną. Jedna liczba rzadko opisuje całą ekspozycję.",
        "memory_hook": "Mechanizm działa tylko wtedy, gdy substancja realnie dotrze do celu."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Może przyspieszyć metabolizm substratu i obniżyć jego ekspozycję. Zwykle rozwija się wolniej niż bezpośrednie hamowanie enzymu.",
          "Farmakokinetyka odpowiada na pytanie „co organizm robi z substancją?”. Nawet świetny mechanizm molekularny nie ma znaczenia, jeśli substancja nie dociera do celu w odpowiednim stężeniu i czasie."
        ],
        "mechanism_steps": [
          "Związek zwiększa ekspresję lub aktywność określonych enzymów metabolicznych.",
          "Po pewnym czasie substraty tych enzymów mogą być metabolizowane szybciej.",
          "Ich stężenie może spadać, a efekt osłabiać się lub zmieniać.",
          "Indukcja zwykle rozwija się i zanika wolniej niż prosta odwracalna inhibicja, bo wymaga zmian ilości białka."
        ],
        "why_it_matters": "Pozwala sprawdzić, czy efekt widoczny w laboratorium ma szansę wystąpić po rzeczywistej dawce i jak długo organizm pozostaje eksponowany na związek.",
        "compare_note": "Tolerancja: Indukcja metabolizmu może zmniejszać efekt tej samej dawki.",
        "study_note": "Patrz na Cmax, Tmax, AUC, t½, drogę podania i frakcję wolną. Jedna liczba rzadko opisuje całą ekspozycję.",
        "memory_hook": "Mechanizm działa tylko wtedy, gdy substancja realnie dotrze do celu."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Jelito i wątroba mogą znacząco zmniejszyć ilość związku macierzystego docierającą do krwi oraz zwiększyć udział metabolitów.",
          "Farmakokinetyka odpowiada na pytanie „co organizm robi z substancją?”. Nawet świetny mechanizm molekularny nie ma znaczenia, jeśli substancja nie dociera do celu w odpowiednim stężeniu i czasie."
        ],
        "mechanism_steps": [
          "Substancja podana doustnie jest wchłaniana z przewodu pokarmowego.",
          "Krew z jelit trafia najpierw m.in. do wątroby przez krążenie wrotne.",
          "Enzymy jelitowe i wątrobowe mogą przekształcić część dawki zanim dotrze ona do krążenia ogólnego.",
          "W efekcie biodostępność doustna może być dużo niższa niż po drodze omijającej znaczną część pierwszego przejścia."
        ],
        "why_it_matters": "Pozwala sprawdzić, czy efekt widoczny w laboratorium ma szansę wystąpić po rzeczywistej dawce i jak długo organizm pozostaje eksponowany na związek.",
        "compare_note": "Najbliższy kontekst dają: Biodostępność, Metabolizm substancji.",
        "study_note": "Patrz na Cmax, Tmax, AUC, t½, drogę podania i frakcję wolną. Jedna liczba rzadko opisuje całą ekspozycję.",
        "memory_hook": "Mechanizm działa tylko wtedy, gdy substancja realnie dotrze do celu."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "To punkt odniesienia dla oceny synergii i antagonizmu. „Więcej niż każdy osobno” nie musi jeszcze oznaczać synergii — trzeba porównać z odpowiednim modelem addytywności.",
          "Interakcja nie jest jedną kategorią „wzmacniania”. Trzeba osobno ustalić, czy zmienia się stężenie substancji, odpowiedź na poziomie celu, czy dopiero końcowy efekt organizmu."
        ],
        "mechanism_steps": [
          "Najpierw definiuje się model przewidujący efekt kombinacji na podstawie efektów A i B osobno.",
          "Mierzy się kombinację przy określonych dawkach i proporcjach.",
          "Jeżeli wynik odpowiada przewidywaniu modelu, mówimy o addycji.",
          "Dopiero odchylenie od tego punktu odniesienia daje podstawę do mówienia o synergii lub antagonizmie."
        ],
        "why_it_matters": "Jest potrzebne do sensownej analizy mieszanin leków, kannabinoidów i terpenów bez automatycznego nazywania każdej kombinacji „entourage”.",
        "compare_note": "Synergia: Synergia przekracza oczekiwanie addytywne. Antagonizm interakcji: Antagonizm daje mniej niż oczekiwano.",
        "study_note": "Sprawdź dawki A i B osobno, ich proporcję w mieszaninie oraz model addytywności. Bez punktu odniesienia słowo „synergia” jest nieprecyzyjne.",
        "memory_hook": "„Mocniej razem” to jeszcze nie synergia."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Synergia wymaga formalnego punktu odniesienia i zależy od dawki, proporcji, endpointu i modelu. Nie wystarczy stwierdzić, że mieszanina działa mocniej od pojedynczego składnika.",
          "W badaniach kombinacji najważniejsze jest pytanie: „synergia względem jakiego modelu?”. Bliss, Loewe i inne modele odpowiadają na trochę inne założenia. Bez zdefiniowanego punktu odniesienia słowo „synergia” jest bardziej etykietą marketingową niż wynikiem ilościowym.",
          "Interakcja nie jest jedną kategorią „wzmacniania”. Trzeba osobno ustalić, czy zmienia się stężenie substancji, odpowiedź na poziomie celu, czy dopiero końcowy efekt organizmu."
        ],
        "mechanism_steps": [
          "Wyznacza się odpowiedź A i B osobno oraz wybiera formalny model addytywności.",
          "Bada się konkretną kombinację dawek i proporcji.",
          "Jeżeli odpowiedź mieszaniny istotnie przekracza oczekiwanie modelu, można mówić o synergii dla tego endpointu.",
          "Wyniku nie wolno automatycznie przenosić na inne dawki, inne proporcje ani inne efekty biologiczne."
        ],
        "why_it_matters": "Jest potrzebne do sensownej analizy mieszanin leków, kannabinoidów i terpenów bez automatycznego nazywania każdej kombinacji „entourage”.",
        "compare_note": "Antagonizm interakcji: Antagonizm jest odwrotnym odchyleniem od oczekiwania.",
        "study_note": "Sprawdź dawki A i B osobno, ich proporcję w mieszaninie oraz model addytywności. Bez punktu odniesienia słowo „synergia” jest nieprecyzyjne.",
        "memory_hook": "Synergia istnieje dopiero względem zdefiniowanej addytywności."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Antagonizm może wynikać z konkurencji o receptor, przeciwstawnych szlaków fizjologicznych, zmiany metabolizmu albo innych mechanizmów.",
          "Interakcja nie jest jedną kategorią „wzmacniania”. Trzeba osobno ustalić, czy zmienia się stężenie substancji, odpowiedź na poziomie celu, czy dopiero końcowy efekt organizmu."
        ],
        "mechanism_steps": [
          "Określa się efekt składników osobno i przewidywaną odpowiedź addytywną.",
          "Mierzy się odpowiedź kombinacji.",
          "Jeżeli jest mniejsza niż oczekiwana według modelu, mamy antagonizm interakcji.",
          "Przyczyną może być konkurencja o receptor, przeciwstawne szlaki sygnałowe, zmiana farmakokinetyki albo wiele innych mechanizmów."
        ],
        "why_it_matters": "Jest potrzebne do sensownej analizy mieszanin leków, kannabinoidów i terpenów bez automatycznego nazywania każdej kombinacji „entourage”.",
        "compare_note": "Antagonista: Antagonista receptorowy to tylko jeden z mechanizmów antagonizmu.",
        "study_note": "Sprawdź dawki A i B osobno, ich proporcję w mieszaninie oraz model addytywności. Bez punktu odniesienia słowo „synergia” jest nieprecyzyjne.",
        "memory_hook": "„Mocniej razem” to jeszcze nie synergia."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Może obejmować wspólny receptor, różne receptory prowadzące do tego samego efektu, synergię funkcjonalną lub antagonizm fizjologiczny.",
          "Interakcja nie jest jedną kategorią „wzmacniania”. Trzeba osobno ustalić, czy zmienia się stężenie substancji, odpowiedź na poziomie celu, czy dopiero końcowy efekt organizmu."
        ],
        "mechanism_steps": [
          "Dwie substancje docierają do swoich celów molekularnych.",
          "Ich działania zbiegają się na tym samym receptorze, szlaku, narządzie lub końcowym efekcie fizjologicznym.",
          "Łączny wynik może być addytywny, synergistyczny lub antagonistyczny.",
          "Farmakodynamika opisuje tu zmianę efektu bez konieczności zmiany stężenia którejkolwiek substancji."
        ],
        "why_it_matters": "Jest potrzebne do sensownej analizy mieszanin leków, kannabinoidów i terpenów bez automatycznego nazywania każdej kombinacji „entourage”.",
        "compare_note": "Interakcja farmakokinetyczna: PK zmienia ekspozycję, PD zmienia odpowiedź przy danej ekspozycji.",
        "study_note": "Sprawdź dawki A i B osobno, ich proporcję w mieszaninie oraz model addytywności. Bez punktu odniesienia słowo „synergia” jest nieprecyzyjne.",
        "memory_hook": "„Mocniej razem” to jeszcze nie synergia."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Typowe mechanizmy to hamowanie/indukcja enzymów, zmiana wchłaniania, transportu lub wydalania.",
          "Interakcja nie jest jedną kategorią „wzmacniania”. Trzeba osobno ustalić, czy zmienia się stężenie substancji, odpowiedź na poziomie celu, czy dopiero końcowy efekt organizmu."
        ],
        "mechanism_steps": [
          "Jedna substancja zmienia wchłanianie, dystrybucję, metabolizm lub eliminację drugiej.",
          "Zmienia się jej stężenie w czasie lub ekspozycja całkowita.",
          "Dopiero ta zmieniona ekspozycja prowadzi do silniejszego, słabszego albo dłuższego efektu.",
          "Dlatego interakcję PK rozpoznaje się przez pomiary stężeń i parametrów ADME, a nie tylko obserwację efektu."
        ],
        "why_it_matters": "Jest potrzebne do sensownej analizy mieszanin leków, kannabinoidów i terpenów bez automatycznego nazywania każdej kombinacji „entourage”.",
        "compare_note": "Interakcja farmakodynamiczna: PD dotyczy odpowiedzi, PK dotyczy ekspozycji.",
        "study_note": "Sprawdź dawki A i B osobno, ich proporcję w mieszaninie oraz model addytywności. Bez punktu odniesienia słowo „synergia” jest nieprecyzyjne.",
        "memory_hook": "„Mocniej razem” to jeszcze nie synergia."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Przy wyższych stężeniach wiele związków traci selektywność. Off-target może odpowiadać za dodatkowy efekt, działanie niepożądane albo pozorną „synergię”.",
          "Interakcja nie jest jedną kategorią „wzmacniania”. Trzeba osobno ustalić, czy zmienia się stężenie substancji, odpowiedź na poziomie celu, czy dopiero końcowy efekt organizmu."
        ],
        "mechanism_steps": [
          "Substancja ma główny cel, dla którego zwykle ją opisujemy.",
          "Przy odpowiednim stężeniu może jednak wiązać również inne białka.",
          "Te dodatkowe oddziaływania mogą wnosić do efektów terapeutycznych, ubocznych albo toksycznych.",
          "Znaczenie off-target zależy od selektywności i tego, czy realna ekspozycja wystarcza do zajęcia dodatkowego celu."
        ],
        "why_it_matters": "Jest potrzebne do sensownej analizy mieszanin leków, kannabinoidów i terpenów bez automatycznego nazywania każdej kombinacji „entourage”.",
        "compare_note": "Ekspozycja: czy stężenie jest biologicznie osiągalne?: Znaczenie off-target zależy od osiąganego stężenia.",
        "study_note": "Sprawdź dawki A i B osobno, ich proporcję w mieszaninie oraz model addytywności. Bez punktu odniesienia słowo „synergia” jest nieprecyzyjne.",
        "memory_hook": "„Mocniej razem” to jeszcze nie synergia."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Kluczowe elementy obejmują CB1, CB2, anandamid (AEA), 2-AG, FAAH i MAGL. ECS reguluje uwalnianie neuroprzekaźników i liczne procesy obwodowe.",
          "ECS jest układem regulacyjnym, a nie prostą „linią sygnałową”. Endokannabinoidy są często produkowane lokalnie i na żądanie, dlatego ich działanie może być bardzo przestrzennie i czasowo ograniczone.",
          "W ECS szczególnie ważna jest lokalizacja. CB1, CB2, endokannabinoidy i enzymy degradujące tworzą lokalne układy regulacyjne, a nie jeden prosty suwak „więcej = mocniej”."
        ],
        "mechanism_steps": [
          "Komórki wytwarzają endokannabinoidy na żądanie z lipidowych prekursorów błonowych.",
          "Endokannabinoidy działają miejscowo m.in. na receptory CB1 i CB2.",
          "W wielu synapsach mogą działać wstecznie: od neuronu postsynaptycznego do presynaptycznego i modulować uwalnianie przekaźnika.",
          "Enzymy takie jak FAAH i MAGL ograniczają sygnał przez rozkład głównych endokannabinoidów."
        ],
        "why_it_matters": "Daje mechanistyczny język do opisu THC, CBD i endokannabinoidów zamiast opierania się na etykietach odmian albo ogólnych hasłach o ECS.",
        "compare_note": "Receptor CB1: CB1 jest głównym receptorem ECS w CNS. Receptor CB2: CB2 ma ważne funkcje obwodowe i immunologiczne.",
        "study_note": "Sprawdź, czy badanie dotyczy CB1, CB2, konkretnego enzymu czy poziomu endokannabinoidu. Ogólne słowo „ECS” często ukrywa zupełnie różne mechanizmy.",
        "memory_hook": "ECS moduluje lokalnie; miejsce działania jest równie ważne jak sam receptor."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "CB1 często znajduje się presynaptycznie i może zmniejszać uwalnianie neuroprzekaźników przez szlaki Gi/o. THC oddziałuje z CB1 i to jest kluczowe dla jego psychoaktywnych efektów.",
          "CB1 jest jednym z najliczniejszych GPCR w mózgu, ale jego efekt zależy od tego, na jakim neuronie znajduje się receptor. Ograniczenie uwalniania GABA i ograniczenie uwalniania glutaminianu mogą prowadzić do bardzo różnych zmian sieciowych.",
          "W ECS szczególnie ważna jest lokalizacja. CB1, CB2, endokannabinoidy i enzymy degradujące tworzą lokalne układy regulacyjne, a nie jeden prosty suwak „więcej = mocniej”."
        ],
        "mechanism_steps": [
          "Agonista wiąże receptor CB1 będący GPCR sprzężonym głównie z Gi/o.",
          "Zmienia aktywność cyklazy adenylanowej, kanałów jonowych i innych elementów sygnalizacji.",
          "Presynaptycznie CB1 często ogranicza uwalnianie neuroprzekaźników.",
          "Ponieważ CB1 występuje w wielu obwodach mózgu, ten sam mechanizm molekularny może prowadzić do różnych efektów zależnie od miejsca."
        ],
        "why_it_matters": "Daje mechanistyczny język do opisu THC, CBD i endokannabinoidów zamiast opierania się na etykietach odmian albo ogólnych hasłach o ECS.",
        "compare_note": "Δ9-THC: THC aktywuje CB1 jako agonista o częściowej skuteczności w wielu układach. Anandamid (AEA): AEA jest endogennym ligandem CB1.",
        "study_note": "Sprawdź, czy badanie dotyczy CB1, CB2, konkretnego enzymu czy poziomu endokannabinoidu. Ogólne słowo „ECS” często ukrywa zupełnie różne mechanizmy.",
        "memory_hook": "CB1 najczęściej moduluje to, ile przekaźnika uwolni presynaptyczny neuron."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "CB2 występuje również w niektórych komórkach układu nerwowego. Jego aktywacja ma inny profil fizjologiczny niż dominująca aktywacja CB1 w CNS.",
          "W ECS szczególnie ważna jest lokalizacja. CB1, CB2, endokannabinoidy i enzymy degradujące tworzą lokalne układy regulacyjne, a nie jeden prosty suwak „więcej = mocniej”."
        ],
        "mechanism_steps": [
          "Ligand aktywuje receptor CB2 należący do GPCR.",
          "CB2 uruchamia szlaki Gi/o i zmienia wewnątrzkomórkową sygnalizację.",
          "Receptor jest szczególnie istotny w komórkach układu odpornościowego, choć może występować również w innych tkankach.",
          "Rola CB2 zależy od typu komórki, stanu zapalnego i poziomu ekspresji receptora."
        ],
        "why_it_matters": "Daje mechanistyczny język do opisu THC, CBD i endokannabinoidów zamiast opierania się na etykietach odmian albo ogólnych hasłach o ECS.",
        "compare_note": "β-kariofilen: β-kariofilen jest znanym ligandem CB2 w badaniach przedklinicznych.",
        "study_note": "Sprawdź, czy badanie dotyczy CB1, CB2, konkretnego enzymu czy poziomu endokannabinoidu. Ogólne słowo „ECS” często ukrywa zupełnie różne mechanizmy.",
        "memory_hook": "ECS moduluje lokalnie; miejsce działania jest równie ważne jak sam receptor."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "AEA jest syntetyzowany „na żądanie” z prekursorów błonowych i degradowany głównie przez FAAH. Może oddziaływać z CB1 i innymi celami, m.in. TRPV1.",
          "W ECS szczególnie ważna jest lokalizacja. CB1, CB2, endokannabinoidy i enzymy degradujące tworzą lokalne układy regulacyjne, a nie jeden prosty suwak „więcej = mocniej”."
        ],
        "mechanism_steps": [
          "AEA jest syntetyzowany z lipidowych prekursorów błonowych w odpowiedzi na lokalne sygnały.",
          "Działa m.in. jako agonista receptorów kannabinoidowych, szczególnie w lokalnych obwodach.",
          "Nie jest magazynowany w klasycznych pęcherzykach synaptycznych jak wiele neuroprzekaźników.",
          "FAAH jest ważną drogą jego rozkładu i pomaga ograniczać czas działania."
        ],
        "why_it_matters": "Daje mechanistyczny język do opisu THC, CBD i endokannabinoidów zamiast opierania się na etykietach odmian albo ogólnych hasłach o ECS.",
        "compare_note": "FAAH: FAAH hydrolizuje AEA. Receptor CB1: AEA jest endogennym agonistą CB1.",
        "study_note": "Sprawdź, czy badanie dotyczy CB1, CB2, konkretnego enzymu czy poziomu endokannabinoidu. Ogólne słowo „ECS” często ukrywa zupełnie różne mechanizmy.",
        "memory_hook": "ECS moduluje lokalnie; miejsce działania jest równie ważne jak sam receptor."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "2-AG powstaje z lipidów błonowych i działa na CB1/CB2. Jego hydroliza zachodzi głównie przez MAGL, z udziałem innych hydrolaz.",
          "W ECS szczególnie ważna jest lokalizacja. CB1, CB2, endokannabinoidy i enzymy degradujące tworzą lokalne układy regulacyjne, a nie jeden prosty suwak „więcej = mocniej”."
        ],
        "mechanism_steps": [
          "2-AG powstaje z lipidów błonowych w odpowiedzi na aktywność komórki.",
          "Może przemieszczać się wstecznie do zakończenia presynaptycznego i aktywować CB1.",
          "Aktywacja CB1 ogranicza uwalnianie określonych neuroprzekaźników.",
          "MAGL odpowiada za dużą część rozkładu 2-AG i pomaga zakończyć sygnał."
        ],
        "why_it_matters": "Daje mechanistyczny język do opisu THC, CBD i endokannabinoidów zamiast opierania się na etykietach odmian albo ogólnych hasłach o ECS.",
        "compare_note": "MAGL / MGL: MAGL odpowiada za znaczną część hydrolizy 2-AG.",
        "study_note": "Sprawdź, czy badanie dotyczy CB1, CB2, konkretnego enzymu czy poziomu endokannabinoidu. Ogólne słowo „ECS” często ukrywa zupełnie różne mechanizmy.",
        "memory_hook": "ECS moduluje lokalnie; miejsce działania jest równie ważne jak sam receptor."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Hamowanie FAAH może zwiększać stężenie AEA, ale wpływ systemowy zależy od miejsca, dawki i innych szlaków lipidowych.",
          "W ECS szczególnie ważna jest lokalizacja. CB1, CB2, endokannabinoidy i enzymy degradujące tworzą lokalne układy regulacyjne, a nie jeden prosty suwak „więcej = mocniej”."
        ],
        "mechanism_steps": [
          "FAAH rozpoznaje amidy kwasów tłuszczowych, w tym anandamid.",
          "Enzym hydrolizuje substrat i zmniejsza jego dostępność do dalszej sygnalizacji.",
          "Zahamowanie FAAH może zwiększać poziom AEA w tkankach, ale wielkość i znaczenie efektu zależą od miejsca oraz ekspozycji inhibitora.",
          "FAAH nie jest „enzymem od THC” — reguluje przede wszystkim endogenne lipidy, nie fitokannabinoidy w prostym sensie."
        ],
        "why_it_matters": "Daje mechanistyczny język do opisu THC, CBD i endokannabinoidów zamiast opierania się na etykietach odmian albo ogólnych hasłach o ECS.",
        "compare_note": "MAGL / MGL: MAGL pełni analogiczną główną rolę dla 2-AG.",
        "study_note": "Sprawdź, czy badanie dotyczy CB1, CB2, konkretnego enzymu czy poziomu endokannabinoidu. Ogólne słowo „ECS” często ukrywa zupełnie różne mechanizmy.",
        "memory_hook": "ECS moduluje lokalnie; miejsce działania jest równie ważne jak sam receptor."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "MAGL przekształca 2-AG w glicerol i kwas arachidonowy, regulując czas i zasięg sygnału endokannabinoidowego.",
          "W ECS szczególnie ważna jest lokalizacja. CB1, CB2, endokannabinoidy i enzymy degradujące tworzą lokalne układy regulacyjne, a nie jeden prosty suwak „więcej = mocniej”."
        ],
        "mechanism_steps": [
          "MAGL rozpoznaje 2-AG jako ważny substrat.",
          "Hydrolizuje go do glicerolu i kwasu arachidonowego.",
          "W ten sposób ogranicza czas sygnału 2-AG w wielu tkankach, szczególnie w układzie nerwowym.",
          "Zahamowanie MAGL może więc zwiększać dostępność 2-AG, ale ma też konsekwencje dla metabolizmu lipidów."
        ],
        "why_it_matters": "Daje mechanistyczny język do opisu THC, CBD i endokannabinoidów zamiast opierania się na etykietach odmian albo ogólnych hasłach o ECS.",
        "compare_note": "FAAH: FAAH reguluje głównie AEA, MAGL głównie 2-AG.",
        "study_note": "Sprawdź, czy badanie dotyczy CB1, CB2, konkretnego enzymu czy poziomu endokannabinoidu. Ogólne słowo „ECS” często ukrywa zupełnie różne mechanizmy.",
        "memory_hook": "ECS moduluje lokalnie; miejsce działania jest równie ważne jak sam receptor."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "THC oddziałuje z receptorami kannabinoidowymi, szczególnie CB1 w kontekście efektów psychoaktywnych. Jego działanie zależy również od farmakokinetyki, metabolitów, dawki, drogi podania i indywidualnej biologii.",
          "THC jest często opisywany jako częściowy agonista CB1, co pomaga wyjaśnić, dlaczego samo zajęcie receptora nie przewiduje liniowo siły wszystkich efektów. Po podaniu doustnym ważny może być również 11-hydroksy-THC, aktywny metabolit powstający w większym stopniu przy pierwszym przejściu.",
          "W ECS szczególnie ważna jest lokalizacja. CB1, CB2, endokannabinoidy i enzymy degradujące tworzą lokalne układy regulacyjne, a nie jeden prosty suwak „więcej = mocniej”."
        ],
        "mechanism_steps": [
          "Po podaniu THC jest wchłaniany i rozprowadzany do tkanek; szybkość zależy mocno od drogi podania.",
          "THC wiąże receptory kannabinoidowe, a w OUN szczególnie istotna jest częściowa agonistyka CB1.",
          "Zmiana presynaptycznego uwalniania neuroprzekaźników w wielu obwodach daje złożony, zależny od dawki profil efektów.",
          "Metabolizm, aktywne metabolity, tolerancja i indywidualna biologia dodatkowo zmieniają siłę oraz czas działania."
        ],
        "why_it_matters": "Daje mechanistyczny język do opisu THC, CBD i endokannabinoidów zamiast opierania się na etykietach odmian albo ogólnych hasłach o ECS.",
        "compare_note": "CBD: CBD ma odmienny profil farmakologiczny. Interakcja farmakodynamiczna: Inne składniki mogą potencjalnie modyfikować odpowiedź, ale wymaga to dowodu dla konkretnej kombinacji.",
        "study_note": "Sprawdź, czy badanie dotyczy CB1, CB2, konkretnego enzymu czy poziomu endokannabinoidu. Ogólne słowo „ECS” często ukrywa zupełnie różne mechanizmy.",
        "memory_hook": "THC zmienia sygnalizację głównie przez CB1, ale efekt końcowy zależy od obwodu, dawki i farmakokinetyki."
      }
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
      "evidence_status": "mixed_by_endpoint",
      "learning": {
        "overview_paragraphs": [
          "CBD oddziałuje z wieloma potencjalnymi celami i szlakami, a jego efekty zależą od stężenia i kontekstu. Upraszczanie go do jednego mechanizmu jest błędem.",
          "Wokół CBD istnieje wyjątkowo dużo uproszczeń. Lista potencjalnych celów molekularnych jest długa, ale nie każdy efekt obserwowany in vitro jest osiągalny przy typowych stężeniach u człowieka. Dlatego przy CBD szczególnie ważne jest łączenie danych mechanistycznych z farmakokinetyką.",
          "W ECS szczególnie ważna jest lokalizacja. CB1, CB2, endokannabinoidy i enzymy degradujące tworzą lokalne układy regulacyjne, a nie jeden prosty suwak „więcej = mocniej”."
        ],
        "mechanism_steps": [
          "CBD dociera do wielu potencjalnych celów molekularnych, ale jego profil nie daje się sprowadzić do prostego „agonista CB1/CB2”.",
          "Dla różnych stężeń i modeli opisano modulację kilku receptorów, enzymów i transporterów.",
          "Znaczenie każdego z tych mechanizmów trzeba zestawić z realną ekspozycją osiąganą u człowieka.",
          "Dlatego mechanizm CBD najlepiej opisywać jako wielocelowy i zależny od kontekstu, zamiast przypisywać mu jeden uniwersalny receptor."
        ],
        "why_it_matters": "Daje mechanistyczny język do opisu THC, CBD i endokannabinoidów zamiast opierania się na etykietach odmian albo ogólnych hasłach o ECS.",
        "compare_note": "Δ9-THC: THC i CBD mają różne profile farmakologiczne.",
        "study_note": "Sprawdź, czy badanie dotyczy CB1, CB2, konkretnego enzymu czy poziomu endokannabinoidu. Ogólne słowo „ECS” często ukrywa zupełnie różne mechanizmy.",
        "memory_hook": "ECS moduluje lokalnie; miejsce działania jest równie ważne jak sam receptor."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Terpeny mogą mieć aktywność biologiczną, ale wynik in vitro nie oznacza automatycznie istotnego działania u człowieka. Kluczowe są dawka, biodostępność, metabolizm i realne stężenie w tkance.",
          "Przy terpenach najważniejsze jest utrzymanie granicy między chemią zapachu, potencjalnym mechanizmem biologicznym i realnym efektem człowieka. Te trzy poziomy często są w internecie zlewane w jedną narrację."
        ],
        "mechanism_steps": [
          "Terpen jest lotną cząsteczką powstającą z jednostek izoprenowych; terpenoid to pokrewna, zwykle utleniona pochodna.",
          "W roślinie związki te współtworzą zapach, komunikację chemiczną i ochronę przed środowiskiem.",
          "Po dostaniu się do organizmu mogą oddziaływać z różnymi białkami, ale zakres działania zależy od stężenia i drogi podania.",
          "Obecność terpenu w profilu aromatycznym nie pozwala sama w sobie przewidzieć konkretnego efektu psychoaktywnego."
        ],
        "why_it_matters": "Pozwala opisywać terpeny jako konkretne cząsteczki z mierzalnymi stężeniami i celami, zamiast przypisywać im stałe „charaktery” na podstawie samego aromatu.",
        "compare_note": "Entourage effect — hipoteza: Terpeny są często omawiane w hipotezie entourage effect.",
        "study_note": "Najpierw porównaj stężenie użyte w eksperymencie z realną ekspozycją. Potem sprawdź, czy wynik pochodzi z enzymu, komórki, zwierzęcia czy człowieka.",
        "memory_hook": "Zapach ≠ mechanizm ≠ efekt u człowieka."
      }
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
      "evidence_status": "hypothesis_with_mixed_preclinical_evidence",
      "learning": {
        "overview_paragraphs": [
          "Mechanistycznie taka interakcja jest możliwa, ale dla wielu popularnych twierdzeń o konkretnych terpene profiles brakuje dobrych danych klinicznych. Termin bywa używany marketingowo szerzej niż pozwalają dowody.",
          "Samo współwystępowanie związków w roślinie nie jest dowodem, że wzajemnie wzmacniają swoje działanie. Dobra hipoteza entourage powinna wskazać konkretną parę lub mieszaninę, cel biologiczny, zakres stężeń i przewidywany rodzaj interakcji.",
          "Przy terpenach najważniejsze jest utrzymanie granicy między chemią zapachu, potencjalnym mechanizmem biologicznym i realnym efektem człowieka. Te trzy poziomy często są w internecie zlewane w jedną narrację."
        ],
        "mechanism_steps": [
          "Najpierw identyfikuje się konkretne składniki mieszaniny i ich stężenia.",
          "Następnie trzeba zdefiniować mechanizm albo endpoint, na którym potencjalna interakcja ma być mierzona.",
          "Porównuje się mieszaninę z działaniem składników osobno przy odpowiednim modelu addytywności.",
          "Dopiero powtarzalny efekt przy biologicznie osiągalnej ekspozycji daje sensowną podstawę do wnioskowania o interakcji, a nie sama etykieta „entourage”."
        ],
        "why_it_matters": "Pozwala opisywać terpeny jako konkretne cząsteczki z mierzalnymi stężeniami i celami, zamiast przypisywać im stałe „charaktery” na podstawie samego aromatu.",
        "compare_note": "Poziomy dowodów: Każda konkretna kombinacja wymaga własnej oceny dowodów.",
        "study_note": "Najpierw porównaj stężenie użyte w eksperymencie z realną ekspozycją. Potem sprawdź, czy wynik pochodzi z enzymu, komórki, zwierzęcia czy człowieka.",
        "memory_hook": "Entourage to hipoteza o konkretnej interakcji, nie magiczna właściwość całej rośliny."
      }
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
      "evidence_status": "preclinical_mixed",
      "learning": {
        "overview_paragraphs": [
          "Limonen ma liczne opisane aktywności w modelach eksperymentalnych, ale konkretnego subiektywnego profilu cannabis nie można wyprowadzić wyłącznie z jego obecności. Analizuj stężenie, drogę podania i dane dla konkretnego mechanizmu.",
          "W dyskusjach konsumenckich limonen często dostaje etykietę „energetyczny” lub „poprawiający nastrój”. Takiej etykiety nie powinno się traktować jako reguły farmakologicznej. Chemotyp produktu, THC/CBD, dawka, tolerancja i kontekst użytkownika zwykle mają znacznie większe znaczenie dla odczucia.",
          "Przy terpenach najważniejsze jest utrzymanie granicy między chemią zapachu, potencjalnym mechanizmem biologicznym i realnym efektem człowieka. Te trzy poziomy często są w internecie zlewane w jedną narrację."
        ],
        "mechanism_steps": [
          "Limonen może zostać wchłonięty i zmetabolizowany do kilku produktów utleniania.",
          "W modelach eksperymentalnych badano jego wpływ na wiele celów i procesów biologicznych.",
          "Trzeba jednak porównać użyte w badaniu stężenie z tym, które rzeczywiście można osiągnąć po typowej ekspozycji.",
          "Dlatego obecność limonenu w cannabis jest informacją o składzie chemicznym i aromacie, a nie gotową prognozą „energii” czy nastroju."
        ],
        "why_it_matters": "Pozwala opisywać terpeny jako konkretne cząsteczki z mierzalnymi stężeniami i celami, zamiast przypisywać im stałe „charaktery” na podstawie samego aromatu.",
        "compare_note": "Model kombinacji terpenów i kannabinoidów: Może być jednym z wejść modelu mieszaniny.",
        "study_note": "Najpierw porównaj stężenie użyte w eksperymencie z realną ekspozycją. Potem sprawdź, czy wynik pochodzi z enzymu, komórki, zwierzęcia czy człowieka.",
        "memory_hook": "Zapach ≠ mechanizm ≠ efekt u człowieka."
      }
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
      "evidence_status": "preclinical",
      "learning": {
        "overview_paragraphs": [
          "β-kariofilen jest szczególnie interesujący farmakologicznie z powodu aktywności związanej z CB2 w badaniach przedklinicznych. Nie oznacza to jednak prostego, przewidywalnego efektu psychicznego u człowieka.",
          "β-kariofilen jest ciekawym wyjątkiem, bo mechanistycznie łączy temat terpenów z ECS przez CB2. To nadal nie oznacza, że działa jak THC — CB2 ma inny rozkład i funkcje niż CB1, a psychoaktywność charakterystyczna dla THC wiąże się przede wszystkim z CB1 w OUN.",
          "Przy terpenach najważniejsze jest utrzymanie granicy między chemią zapachu, potencjalnym mechanizmem biologicznym i realnym efektem człowieka. Te trzy poziomy często są w internecie zlewane w jedną narrację."
        ],
        "mechanism_steps": [
          "β-kariofilen jest seskwiterpenem obecnym w wielu roślinach i przyprawach.",
          "W odróżnieniu od wielu terpenów ma dobrze opisane oddziaływanie z receptorem CB2 w modelach eksperymentalnych.",
          "Znaczenie tego mechanizmu zależy od stężenia osiąganego w tkankach i kontekstu biologicznego.",
          "Nie oznacza to automatycznie, że dowolny produkt zawierający β-kariofilen wywoła przewidywalny efekt kliniczny przez CB2."
        ],
        "why_it_matters": "Pozwala opisywać terpeny jako konkretne cząsteczki z mierzalnymi stężeniami i celami, zamiast przypisywać im stałe „charaktery” na podstawie samego aromatu.",
        "compare_note": "Model kombinacji terpenów i kannabinoidów: Jego udział można traktować jako cechę modelu, nie gotową etykietę efektu.",
        "study_note": "Najpierw porównaj stężenie użyte w eksperymencie z realną ekspozycją. Potem sprawdź, czy wynik pochodzi z enzymu, komórki, zwierzęcia czy człowieka.",
        "memory_hook": "Zapach ≠ mechanizm ≠ efekt u człowieka."
      }
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
      "evidence_status": "preclinical_mixed",
      "learning": {
        "overview_paragraphs": [
          "Badania przedkliniczne opisują różne działania biologiczne linalolu, lecz translacja na konkretne efekty mieszaniny cannabis u ludzi jest niepewna.",
          "Zapach lawendy może tworzyć silne skojarzenie z sedacją, ale skojarzenie sensoryczne i farmakologia po wchłonięciu to dwie różne rzeczy. W encyklopedii warto trzymać te poziomy osobno.",
          "Przy terpenach najważniejsze jest utrzymanie granicy między chemią zapachu, potencjalnym mechanizmem biologicznym i realnym efektem człowieka. Te trzy poziomy często są w internecie zlewane w jedną narrację."
        ],
        "mechanism_steps": [
          "Linalol jest monoterpenoidem obecnym m.in. w lawendzie i wielu innych roślinach.",
          "W badaniach przedklinicznych opisywano różne działania na układ nerwowy, ale zależą one od modelu, dawki i drogi podania.",
          "Profil zapachowy nie jest tym samym co farmakologicznie aktywne stężenie w mózgu.",
          "Przy interpretacji cannabis ważniejsze od stereotypu „uspokajający terpen” są rzeczywiste stężenia i jakość dowodów dla konkretnego efektu."
        ],
        "why_it_matters": "Pozwala opisywać terpeny jako konkretne cząsteczki z mierzalnymi stężeniami i celami, zamiast przypisywać im stałe „charaktery” na podstawie samego aromatu.",
        "compare_note": "Model kombinacji terpenów i kannabinoidów: W modelu powinien być reprezentowany liczbowo wraz z dawką i ekspozycją.",
        "study_note": "Najpierw porównaj stężenie użyte w eksperymencie z realną ekspozycją. Potem sprawdź, czy wynik pochodzi z enzymu, komórki, zwierzęcia czy człowieka.",
        "memory_hook": "Zapach ≠ mechanizm ≠ efekt u człowieka."
      }
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
      "evidence_status": "preclinical_mixed",
      "learning": {
        "overview_paragraphs": [
          "Ma wiele badanych aktywności biologicznych, ale popularne internetowe przypisania typu „pinen = pamięć/koncentracja” nie powinny być traktowane jako pewny efekt kliniczny mieszaniny.",
          "Popularna teza, że α-pinen „cofa problemy z pamięcią po THC” jest znacznie mocniejsza niż dostępne dane pozwalają pewnie stwierdzić. Mechanizmy takie jak inhibicja AChE można badać eksperymentalnie, ale trzeba wykazać odpowiednią ekspozycję i efekt u ludzi.",
          "Przy terpenach najważniejsze jest utrzymanie granicy między chemią zapachu, potencjalnym mechanizmem biologicznym i realnym efektem człowieka. Te trzy poziomy często są w internecie zlewane w jedną narrację."
        ],
        "mechanism_steps": [
          "α-pinen jest lotnym monoterpenem powszechnym w roślinach iglastych i wielu innych gatunkach.",
          "Badano jego interakcje z różnymi celami molekularnymi, w tym enzymami i receptorami, głównie w modelach przedklinicznych.",
          "Wynik in vitro przy wysokim stężeniu nie oznacza, że podobna siła działania wystąpi po inhalacji śladowej ilości z mieszaniny roślinnej.",
          "Dlatego α-pinen należy traktować jako składnik chemiczny z potencjalnymi mechanizmami, nie jako prostą etykietę efektu."
        ],
        "why_it_matters": "Pozwala opisywać terpeny jako konkretne cząsteczki z mierzalnymi stężeniami i celami, zamiast przypisywać im stałe „charaktery” na podstawie samego aromatu.",
        "compare_note": "AChE — acetylocholinesteraza: Niektóre badania terpenów analizują aktywność wobec AChE, zwykle in vitro.",
        "study_note": "Najpierw porównaj stężenie użyte w eksperymencie z realną ekspozycją. Potem sprawdź, czy wynik pochodzi z enzymu, komórki, zwierzęcia czy człowieka.",
        "memory_hook": "Zapach ≠ mechanizm ≠ efekt u człowieka."
      }
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
      "evidence_status": "preclinical_mixed",
      "learning": {
        "overview_paragraphs": [
          "Często przypisuje mu się sedację, ale jako reguła przewidująca odczuwalny efekt chemovaru jest to słabo ugruntowane. Dane trzeba rozdzielać na model, dawkę i drogę podania.",
          "Mircen bywa łączony w kulturze cannabis z cięższym, bardziej „indica” profilem. To ciekawa hipoteza użytkowa, ale nie powinno się jej mylić z przewidywalnym, udowodnionym działaniem czystego mircenu w realnych stężeniach produktu.",
          "Przy terpenach najważniejsze jest utrzymanie granicy między chemią zapachu, potencjalnym mechanizmem biologicznym i realnym efektem człowieka. Te trzy poziomy często są w internecie zlewane w jedną narrację."
        ],
        "mechanism_steps": [
          "Mircen jest jednym z częściej spotykanych monoterpenów w różnych roślinach i niektórych chemotypach cannabis.",
          "Ma opisane działania w modelach przedklinicznych, ale dane nie pozwalają przypisać mu uniwersalnego „ciężkiego” albo „kanapowego” efektu u ludzi.",
          "Istotne są dawka, droga podania, metabolizm oraz to, czy osiągane stężenie jest wystarczające dla badanego celu.",
          "W praktyce profil mircenu może być użyteczny do opisu chemotypu, ale nie zastępuje danych farmakologicznych."
        ],
        "why_it_matters": "Pozwala opisywać terpeny jako konkretne cząsteczki z mierzalnymi stężeniami i celami, zamiast przypisywać im stałe „charaktery” na podstawie samego aromatu.",
        "compare_note": "Najbliższy kontekst dają: Terpen / terpenoid.",
        "study_note": "Najpierw porównaj stężenie użyte w eksperymencie z realną ekspozycją. Potem sprawdź, czy wynik pochodzi z enzymu, komórki, zwierzęcia czy człowieka.",
        "memory_hook": "Zapach ≠ mechanizm ≠ efekt u człowieka."
      }
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
      "evidence_status": "preclinical_mixed",
      "learning": {
        "overview_paragraphs": [
          "Jest badany m.in. w kontekście aktywności biologicznych i mieszanin terpenowych. Samo jego wykrycie nie pozwala wiarygodnie przewidzieć efektu psychicznego.",
          "Przy terpenach najważniejsze jest utrzymanie granicy między chemią zapachu, potencjalnym mechanizmem biologicznym i realnym efektem człowieka. Te trzy poziomy często są w internecie zlewane w jedną narrację."
        ],
        "mechanism_steps": [
          "Terpinolen jest monoterpenem obecnym w wielu olejkach eterycznych i niektórych odmianach cannabis.",
          "W eksperymentach badano m.in. jego wpływ na enzymy i procesy komórkowe.",
          "Wyniki zależą od stężenia i środowiska testu, a dane kliniczne dotyczące specyficznych efektów psychicznych są ograniczone.",
          "Dlatego przy modelowaniu mieszaniny terpinolen jest jednym z wejść, a nie samodzielnym wyjaśnieniem subiektywnego działania."
        ],
        "why_it_matters": "Pozwala opisywać terpeny jako konkretne cząsteczki z mierzalnymi stężeniami i celami, zamiast przypisywać im stałe „charaktery” na podstawie samego aromatu.",
        "compare_note": "Najbliższy kontekst dają: Terpen / terpenoid.",
        "study_note": "Najpierw porównaj stężenie użyte w eksperymencie z realną ekspozycją. Potem sprawdź, czy wynik pochodzi z enzymu, komórki, zwierzęcia czy człowieka.",
        "memory_hook": "Zapach ≠ mechanizm ≠ efekt u człowieka."
      }
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
      "evidence_status": "research_direction",
      "learning": {
        "overview_paragraphs": [
          "Lepszy model nie używa reguł „terpen X = efekt Y”, lecz uwzględnia stężenia, proporcje, THC/CBD, PK, potencjalne cele, interakcje parami i wyższego rzędu oraz dane empiryczne. Wynik powinien być probabilistyczny i zawierać niepewność.",
          "Najbardziej użyteczny model nie pyta „jaki efekt ma ten terpen?”, tylko „jakie cząsteczki są obecne, w jakich ilościach, do jakich celów mogą realnie dotrzeć i które z tych oddziaływań mają dowody?”. To wolniejsze, ale dużo bardziej naukowe.",
          "Przy terpenach najważniejsze jest utrzymanie granicy między chemią zapachu, potencjalnym mechanizmem biologicznym i realnym efektem człowieka. Te trzy poziomy często są w internecie zlewane w jedną narrację."
        ],
        "mechanism_steps": [
          "Najpierw zapisuje się skład mieszaniny: które związki są obecne i w jakich stężeniach.",
          "Dla każdego związku określa się potencjalne cele molekularne oraz poziom dowodów.",
          "Następnie sprawdza się, gdzie cele lub szlaki się nakładają i czy istnieją dane o addycji, synergii albo antagonizmie.",
          "Na końcu filtruje się hipotezy przez farmakokinetykę: interakcja ma sens tylko wtedy, gdy odpowiednie stężenia są biologicznie osiągalne."
        ],
        "why_it_matters": "Pozwala opisywać terpeny jako konkretne cząsteczki z mierzalnymi stężeniami i celami, zamiast przypisywać im stałe „charaktery” na podstawie samego aromatu.",
        "compare_note": "Model mechanistyczny: Można połączyć model mechanistyczny z danymi obserwacyjnymi. Uczenie maszynowe w farmakologii: ML może wykrywać zależności bez narzucania prostych reguł.",
        "study_note": "Najpierw porównaj stężenie użyte w eksperymencie z realną ekspozycją. Potem sprawdź, czy wynik pochodzi z enzymu, komórki, zwierzęcia czy człowieka.",
        "memory_hook": "Najpierw skład i stężenia, potem cele, na końcu pytanie: czy ekspozycja jest realna?"
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Wynik biochemiczny in vitro może pokazać mechanizm, badanie zwierzęce — efekt w organizmie modelowym, a dobre badanie kliniczne — wpływ u ludzi. Nie należy przeskakiwać między poziomami bez dodatkowych danych.",
          "Ta kategoria uczy nie „co działa”, ale jak ocenić, ile naprawdę wynika z danego badania. To kluczowe w tematach, gdzie mechanistycznych hipotez jest znacznie więcej niż mocnych danych klinicznych."
        ],
        "mechanism_steps": [
          "Najpierw określa się rodzaj dowodu: mechanizm molekularny, komórki, zwierzęta, farmakokinetyka człowieka, badanie kliniczne czy dane obserwacyjne.",
          "Każdy poziom odpowiada na inne pytanie i ma inne ograniczenia.",
          "Spójność kilku niezależnych poziomów zwiększa wiarygodność modelu.",
          "Najczęstszy błąd to używanie prawdziwego wyniku z jednego poziomu jako dowodu na znacznie szersze twierdzenie."
        ],
        "why_it_matters": "Pomaga oddzielić ciekawą hipotezę od wniosku, który rzeczywiście ma wystarczające wsparcie eksperymentalne lub kliniczne.",
        "compare_note": "In vitro: In vitro to jeden z najwcześniejszych poziomów. Badanie kliniczne: Badania kliniczne dotyczą ludzi.",
        "study_note": "Zadaj cztery pytania: jaki był model, jaka dawka/stężenie, jaki endpoint i czy wynik został powtórzony w bardziej realistycznym systemie.",
        "memory_hook": "Prawdziwy wynik może nadal nie uzasadniać szerokiego wniosku."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Świetnie nadaje się do odkrywania mechanizmów i pomiaru powinowactwa lub inhibicji. Nie mówi automatycznie, czy podobny efekt wystąpi przy realnej ekspozycji u człowieka.",
          "Najczęściej pomijanym pytaniem po wyniku in vitro jest: „czy człowiek może osiągnąć takie stężenie w odpowiedniej tkance bez toksyczności?”. Jeśli odpowiedź brzmi „nie”, wynik może nadal być ciekawy mechanistycznie, ale jego znaczenie praktyczne jest małe.",
          "Ta kategoria uczy nie „co działa”, ale jak ocenić, ile naprawdę wynika z danego badania. To kluczowe w tematach, gdzie mechanistycznych hipotez jest znacznie więcej niż mocnych danych klinicznych."
        ],
        "mechanism_steps": [
          "Izoluje się receptor, enzym, komórki lub fragment tkanki od całego organizmu.",
          "Badacz precyzyjnie kontroluje stężenie badanej substancji i mierzy określony mechanizm.",
          "Wynik pokazuje, że mechanizm jest możliwy w tych warunkach.",
          "Aby przenieść go na człowieka, trzeba jeszcze wykazać odpowiednią ekspozycję, dystrybucję i znaczenie tego celu w całym organizmie."
        ],
        "why_it_matters": "Pomaga oddzielić ciekawą hipotezę od wniosku, który rzeczywiście ma wystarczające wsparcie eksperymentalne lub kliniczne.",
        "compare_note": "Ekspozycja: czy stężenie jest biologicznie osiągalne?: Stężenia in vitro trzeba porównać z osiągalnymi in vivo.",
        "study_note": "Zadaj cztery pytania: jaki był model, jaka dawka/stężenie, jaki endpoint i czy wynik został powtórzony w bardziej realistycznym systemie.",
        "memory_hook": "In vitro mówi „to może działać w tych warunkach”, nie „to działa u człowieka”."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Uwzględnia PK, metabolizm i interakcje tkanek, ale wyniki ze zwierząt nie zawsze przenoszą się ilościowo lub jakościowo na ludzi.",
          "Ta kategoria uczy nie „co działa”, ale jak ocenić, ile naprawdę wynika z danego badania. To kluczowe w tematach, gdzie mechanistycznych hipotez jest znacznie więcej niż mocnych danych klinicznych."
        ],
        "mechanism_steps": [
          "Substancja jest badana w żywym organizmie, więc działają jednocześnie farmakokinetyka, wiele narządów i systemów regulacyjnych.",
          "Można mierzyć zarówno stężenia, jak i efekty fizjologiczne lub zachowanie.",
          "Wynik jest bliższy realnej biologii niż in vitro, ale zależy od gatunku, dawki i modelu choroby.",
          "Dane ze zwierząt nadal nie są automatycznie dowodem identycznego efektu u człowieka."
        ],
        "why_it_matters": "Pomaga oddzielić ciekawą hipotezę od wniosku, który rzeczywiście ma wystarczające wsparcie eksperymentalne lub kliniczne.",
        "compare_note": "Badanie kliniczne: Badanie kliniczne dotyczy bezpośrednio ludzi.",
        "study_note": "Zadaj cztery pytania: jaki był model, jaka dawka/stężenie, jaki endpoint i czy wynik został powtórzony w bardziej realistycznym systemie.",
        "memory_hook": "Prawdziwy wynik może nadal nie uzasadniać szerokiego wniosku."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Najlepsze projekty kontrolują dawkę, randomizację, zaślepienie i punkt końcowy. Nawet badanie kliniczne odpowiada tylko na pytanie, które rzeczywiście testowało.",
          "„Badanie kliniczne” nie jest automatycznie mocnym dowodem. Mały, niezaślepiony eksperyment z miękkim endpointem i dużą liczbą porównań daje dużo mniej pewności niż dobrze zaprojektowane, randomizowane badanie z prerejestrowanym głównym punktem końcowym.",
          "Ta kategoria uczy nie „co działa”, ale jak ocenić, ile naprawdę wynika z danego badania. To kluczowe w tematach, gdzie mechanistycznych hipotez jest znacznie więcej niż mocnych danych klinicznych."
        ],
        "mechanism_steps": [
          "Badanie definiuje populację, interwencję, porównanie i endpoint.",
          "Uczestnicy otrzymują badaną substancję lub kontrolę zgodnie z protokołem.",
          "Analiza ocenia wielkość efektu, niepewność oraz działania niepożądane.",
          "Randomizacja, zaślepienie, wielkość próby i dobór endpointu decydują o tym, jak mocno można ufać wnioskowi."
        ],
        "why_it_matters": "Pomaga oddzielić ciekawą hipotezę od wniosku, który rzeczywiście ma wystarczające wsparcie eksperymentalne lub kliniczne.",
        "compare_note": "Dane real-world / raporty użytkowników: Dane real-world mogą uzupełniać badania kontrolowane.",
        "study_note": "Zadaj cztery pytania: jaki był model, jaka dawka/stężenie, jaki endpoint i czy wynik został powtórzony w bardziej realistycznym systemie.",
        "memory_hook": "Prawdziwy wynik może nadal nie uzasadniać szerokiego wniosku."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Mogą ujawniać wzorce i generować hipotezy, ale są podatne na selekcję, oczekiwania, różnice dawek, etykietowanie produktu i wiele czynników zakłócających.",
          "Raporty użytkowników są bardzo wartościowe do wykrywania wzorców, szczególnie gdy kontrolowane badanie jeszcze nie istnieje. Problem pojawia się wtedy, gdy traktuje się je jak dowód mechanizmu — oczekiwania, selekcja osób i brak kontroli składu produktu mogą silnie wpływać na wynik.",
          "Ta kategoria uczy nie „co działa”, ale jak ocenić, ile naprawdę wynika z danego badania. To kluczowe w tematach, gdzie mechanistycznych hipotez jest znacznie więcej niż mocnych danych klinicznych."
        ],
        "mechanism_steps": [
          "Dane powstają poza ściśle kontrolowanym eksperymentem — np. z rejestrów, praktyki klinicznej lub raportów użytkowników.",
          "Dają obraz tego, co dzieje się w rzeczywistych warunkach i mogą ujawniać rzadkie sygnały albo wzorce.",
          "Jednocześnie trudniej kontrolować dawkę, skład produktu, selekcję osób i czynniki zakłócające.",
          "Dlatego real-world świetnie generuje hipotezy i uzupełnia RCT, ale słabiej ustala czystą przyczynowość."
        ],
        "why_it_matters": "Pomaga oddzielić ciekawą hipotezę od wniosku, który rzeczywiście ma wystarczające wsparcie eksperymentalne lub kliniczne.",
        "compare_note": "Uczenie maszynowe w farmakologii: Mogą zasilać ML, jeśli model uwzględnia bias i jakość danych.",
        "study_note": "Zadaj cztery pytania: jaki był model, jaka dawka/stężenie, jaki endpoint i czy wynik został powtórzony w bardziej realistycznym systemie.",
        "memory_hook": "Prawdziwy wynik może nadal nie uzasadniać szerokiego wniosku."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Jeżeli związek hamuje enzym przy 100 µM, ale po typowej ekspozycji osiąga w mózgu 0,1 µM, mechanizm może nie mieć znaczenia in vivo. Zawsze zestawiaj IC50/EC50/Ki z PK i stężeniem w miejscu działania.",
          "Ta jedna zasada potrafi odsiać ogromną liczbę efektownie brzmiących hipotez. Jeżeli IC50 wynosi np. dziesiątki lub setki mikromoli, a po typowej dawce we właściwej tkance osiąga się stężenia wielokrotnie niższe, sam wynik testu nie wystarcza do przewidywania efektu in vivo.",
          "Ta kategoria uczy nie „co działa”, ale jak ocenić, ile naprawdę wynika z danego badania. To kluczowe w tematach, gdzie mechanistycznych hipotez jest znacznie więcej niż mocnych danych klinicznych."
        ],
        "mechanism_steps": [
          "Badanie mechanistyczne podaje stężenie wywołujące efekt na komórce, enzymie lub receptorze.",
          "Następnie porównuje się je z wolnym stężeniem osiąganym w odpowiedniej tkance po realnej dawce.",
          "Uwzględnia się metabolizm, wiązanie z białkami, barierę krew–mózg i czas ekspozycji.",
          "Jeżeli wymagane stężenie jest wielokrotnie wyższe niż osiągalne, mechanizm może być prawdziwy w probówce, ale mało istotny in vivo."
        ],
        "why_it_matters": "Pomaga oddzielić ciekawą hipotezę od wniosku, który rzeczywiście ma wystarczające wsparcie eksperymentalne lub kliniczne.",
        "compare_note": "Bariera krew–mózg (BBB): BBB może ograniczać ekspozycję mózgu. In vitro: Warunkuje translację wyników in vitro.",
        "study_note": "Zadaj cztery pytania: jaki był model, jaka dawka/stężenie, jaki endpoint i czy wynik został powtórzony w bardziej realistycznym systemie.",
        "memory_hook": "Bez realnego stężenia nawet piękny mechanizm może nie mieć znaczenia in vivo."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Jeśli chemovary o wysokim limonenie częściej dostają raport „euforia”, przyczyną może być limonen, inny współwystępujący związek, THC, kontekst albo bias użytkowników. Do rozdzielenia potrzebne są odpowiednie modele lub eksperymenty.",
          "Korelacja jest przydatna: mówi, że istnieje wzorzec wart wyjaśnienia. Błąd zaczyna się dopiero wtedy, gdy bez dodatkowego dowodu zmienia się zdanie „A występuje razem z B” na „A powoduje B”.",
          "Ta kategoria uczy nie „co działa”, ale jak ocenić, ile naprawdę wynika z danego badania. To kluczowe w tematach, gdzie mechanistycznych hipotez jest znacznie więcej niż mocnych danych klinicznych."
        ],
        "mechanism_steps": [
          "Obserwuje się, że dwie zmienne zmieniają się razem.",
          "Trzeba sprawdzić kierunek zależności, możliwe czynniki trzecie i sposób doboru próby.",
          "Bez odpowiedniego projektu nie wiadomo, czy A powoduje B, B powoduje A, czy oba zależą od C.",
          "Mechanizm i dane eksperymentalne mogą wzmocnić argument przyczynowy, ale sama korelacja tego nie robi."
        ],
        "why_it_matters": "Pomaga oddzielić ciekawą hipotezę od wniosku, który rzeczywiście ma wystarczające wsparcie eksperymentalne lub kliniczne.",
        "compare_note": "Model kombinacji terpenów i kannabinoidów: Model musi radzić sobie z cechami silnie skorelowanymi.",
        "study_note": "Zadaj cztery pytania: jaki był model, jaka dawka/stężenie, jaki endpoint i czy wynik został powtórzony w bardziej realistycznym systemie.",
        "memory_hook": "Razem ≠ przez siebie."
      }
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
      "evidence_status": "established",
      "learning": {
        "overview_paragraphs": [
          "Jest interpretowalny i może ekstrapolować poza dane, ale łatwo pominąć nieznane mechanizmy. W złożonych mieszaninach zwykle najlepiej łączyć go z danymi empirycznymi.",
          "Ta kategoria uczy nie „co działa”, ale jak ocenić, ile naprawdę wynika z danego badania. To kluczowe w tematach, gdzie mechanistycznych hipotez jest znacznie więcej niż mocnych danych klinicznych."
        ],
        "mechanism_steps": [
          "Łączy się znane elementy: cele molekularne, szlaki, farmakokinetykę i obserwowany efekt.",
          "Model opisuje przewidywany ciąg przyczynowy od ekspozycji do wyniku biologicznego.",
          "Dobre modele wskazują nie tylko to, co pasuje, ale też co powinno się wydarzyć, jeśli hipoteza jest prawdziwa.",
          "Model staje się użyteczny naukowo wtedy, gdy można go testować i potencjalnie obalić."
        ],
        "why_it_matters": "Pomaga oddzielić ciekawą hipotezę od wniosku, który rzeczywiście ma wystarczające wsparcie eksperymentalne lub kliniczne.",
        "compare_note": "Uczenie maszynowe w farmakologii: ML może uzupełniać brakujące zależności.",
        "study_note": "Zadaj cztery pytania: jaki był model, jaka dawka/stężenie, jaki endpoint i czy wynik został powtórzony w bardziej realistycznym systemie.",
        "memory_hook": "Prawdziwy wynik może nadal nie uzasadniać szerokiego wniosku."
      }
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
      "evidence_status": "methodology",
      "learning": {
        "overview_paragraphs": [
          "Może analizować profile wielowymiarowe, ale nauczy się również biasu, błędów pomiaru i korelacji pozornych. Potrzebuje walidacji na niezależnych danych i dobrze zdefiniowanych punktów końcowych.",
          "W farmakologii model ML może świetnie priorytetyzować tysiące cząsteczek do dalszych testów. Największe ryzyko to piękna dokładność na danych podobnych do treningowych i słaba generalizacja na zupełnie nowe chemotypy albo warunki biologiczne.",
          "Ta kategoria uczy nie „co działa”, ale jak ocenić, ile naprawdę wynika z danego badania. To kluczowe w tematach, gdzie mechanistycznych hipotez jest znacznie więcej niż mocnych danych klinicznych."
        ],
        "mechanism_steps": [
          "Algorytm otrzymuje dane wejściowe, np. struktury cząsteczek, profile ekspresji lub wyniki testów biologicznych.",
          "Uczy się wzorców pozwalających przewidywać etykietę albo wartość liczbową dla nowych przykładów.",
          "Jakość predykcji zależy od jakości danych, podziału trening/test i podobieństwa nowych przykładów do zbioru treningowego.",
          "Model ML może wskazać obiecujący trop, ale nie zastępuje eksperymentalnej walidacji mechanizmu."
        ],
        "why_it_matters": "Pomaga oddzielić ciekawą hipotezę od wniosku, który rzeczywiście ma wystarczające wsparcie eksperymentalne lub kliniczne.",
        "compare_note": "Model mechanistyczny: Podejście hybrydowe łączy mechanizmy i ML.",
        "study_note": "Zadaj cztery pytania: jaki był model, jaka dawka/stężenie, jaki endpoint i czy wynik został powtórzony w bardziej realistycznym systemie.",
        "memory_hook": "Prawdziwy wynik może nadal nie uzasadniać szerokiego wniosku."
      }
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
