import { GasProduct } from "./gasesData";

export const frGasesData: GasProduct[] = [
  {
    slug: "oksijen-gazi",
    title: "Gaz Oxygène (O₂)",
    badge: "Gaz Industriels",
    icon: "🔥",
    desc: "L'oxygène (O₂), composant fondamental et indispensable de la production industrielle, est un gaz inodore, incolore et insipide qui constitue environ 21 % de l'atmosphère. Cependant, les exigences de haute efficacité, de précision et de sécurité dans les applications industrielles imposent l'utilisation d'un gaz d'une pureté bien supérieure à celle de l'oxygène atmosphérique.",
    features: [
      "Production conforme aux normes industrielles nationales",
      "Pureté élevée et garantie de débit stable",
      "Bouteilles testées pour l'étanchéité et la sécurité"
    ],
    usageAreas: [
      "Production et traitement des métaux (Fours sidérurgiques)",
      "Procédés d'oxycoupage et de soudage (Oxy-Fuel)",
      "Technologies de découpe laser (Aciers au carbone)",
      "Fabrication du verre et de la céramique (Rendement des fours)"
    ],
    specifications: [
      { label: "Formule Chimique", value: "O₂" },
      { label: "Pression de Remplissage", value: "150 - 200 Bar" },
      { label: "Norme de Propreté", value: "Nettoyé pour l'Oxygène" },
      { label: "Modèle d'Emballage", value: "Bouteille sous Pression / Cadre de Bouteilles (Bundle)" }
    ],
    content: "L'oxygène (O₂), composant fondamental et indispensable de la production industrielle, est un gaz inodore, incolore et insipide qui constitue environ 21 % de l'atmosphère. Cependant, les exigences de haute efficacité, de précision et de sécurité dans les applications industrielles imposent l'utilisation d'un gaz d'une pureté bien supérieure à celle de l'oxygène atmosphérique. Chez Tinsa Gaz, nous assurons un approvisionnement continu à un large éventail de secteurs, de l'industrie lourde à la fabrication de précision, avec de l'oxygène industriel de haute pureté.",
    supplyModels: [
      {
        title: "1. Bouteilles d'Oxygène Haute Pression",
        desc: "Solution idéale pour les entreprises à consommation précise, les ateliers de soudage/découpe mobiles et les projets temporaires. Livré dans des bouteilles hautement sécurisées de 150 à 200 bars de pression ayant passé les tests internationaux. Des contrôles d'étanchéité et de pureté sont rigoureusement effectués à chaque étape."
      },
      {
        title: "2. Cadres de Bouteilles et Systèmes de Palettes (Bundle)",
        desc: "Développé pour les usines, les chantiers navals et les grands ateliers nécessitant un débit d'oxygène important et ininterrompu. Il consiste à connecter plusieurs bouteilles haute pression à un collecteur unique dans un cadre en acier. Ce système réduit les temps de changement de bouteille, économise la main-d'œuvre et augmente la sécurité opérationnelle."
      }
    ],
    safetyWarning: "Avertissement Technique et Norme de Sécurité : Bien que l'oxygène ne soit pas inflammable en soi, il soutient activement et violemment la combustion. Par conséquent, les bouteilles, cadres et canalisations d'oxygène ne doivent jamais entrer en contact avec de l'huile, de la graisse ou d'autres matières organiques. Tous les raccords et composants de palettes livrés par Tinsa Gaz sont soumis aux normes de 'propreté oxygène'."
  },
  {
    slug: "argon-gazi",
    title: "Gaz Argon (Ar)",
    badge: "Gaz Industriels",
    icon: "⚗️",
    desc: "L'argon (Ar) est un gaz rare incolore, inodore et extrêmement stable (inerte) qui constitue environ 0,93 % de l'atmosphère. Cette inertie absolue face aux réactions chimiques fait de l'argon un 'bouclier protecteur' parfait dans les procédés de fabrication industrielle.",
    features: [
      "Protection par pureté élevée",
      "Risque de porosité nul dans les applications de soudage critiques",
      "Protection parfaite de l'arc de soudage et du métal en fusion"
    ],
    usageAreas: [
      "Technologies de soudage TIG (Argon) et MIG/MAG",
      "Métallurgie et industrie sidérurgique (procédé AOD)",
      "Procédés de traitement thermique (atmosphère protectrice)",
      "Production de double vitrage (isolation thermique)"
    ],
    specifications: [
      { label: "Formule Chimique", value: "Ar" },
      { label: "Pression de Remplissage", value: "150 - 230 Bar" },
      { label: "Caractéristique", value: "Gaz rare inerte incolore et inodore" },
      { label: "Niveau de Pureté", value: "Pureté élevée (Qualité industrielle)" }
    ],
    content: "L'argon (Ar) est un gaz rare incolore, inodore et extrêmement stable (inerte) qui constitue environ 0,93 % de l'atmosphère. Cette inertie absolue face aux réactions chimiques fait de l'argon un 'bouclier protecteur' parfait dans les procédés de fabrication industrielle. L'absence de liaison avec d'autres éléments, même à haute température, est essentielle pour prévenir l'oxydation en métallurgie et en soudage. Chez Tinsa Gaz, nous proposons de l'argon de haute pureté selon les normes de sécurité les plus strictes.",
    supplyModels: [
      {
        title: "1. Bouteilles d'Argon Haute Pression",
        desc: "Nos solutions offrant des avantages de mobilité dans les ateliers, les installations moyennes et sur le terrain. Rempli à une pression de 150 à 230 bars selon vos besoins. Les bouteilles sont inspectées avant chaque remplissage pour préserver la pureté."
      },
      {
        title: "2. Cadres de Bouteilles d'Argon (Bundle)",
        desc: "Solution à grand volume pour les chantiers navals avec lignes de soudage continu, l'industrie lourde et les usines de production de masse. Constituée de bouteilles connectées à un collecteur unique dans un cadre en acier. Élimine les temps d'arrêt de production."
      }
    ],
    safetyWarning: "Avertissement Technique et Norme de Sécurité : Bien que l'argon ne soit pas toxique, les fuites dans les espaces clos ne peuvent être détectées en raison de son absence d'odeur et de couleur. Comme il déplace l'oxygène et peut provoquer l'asphyxie, une ventilation efficace des zones de stockage et d'utilisation est obligatoire."
  },
  {
    slug: "karisim-gazlari",
    title: "Mélanges de Gaz (Gaz de Soudage MIG/MAG)",
    badge: "Gaz Industriels",
    icon: "🔧",
    desc: "Dans la fabrication industrielle, le choix du gaz de protection détermine la qualité, la vitesse et la résistance mécanique des soudures. Les mélanges de gaz, souvent appelés 'gaz de soudage', sont des combinaisons technologiques de deux gaz ou plus (généralement Argon et CO₂) à des ratios stables.",
    features: [
      "Projections minimales et aucun nettoyage post-soudure",
      "Excellente pénétration et stabilité de l'arc",
      "Vitesse de production et consommation de fil optimisées"
    ],
    usageAreas: [
      "Méthodes de soudage MIG/MAG (semi-automatique)",
      "Soudage des aciers de construction et de fabrication générale",
      "Assemblage de tôles fines et moyennes",
      "Transfert par pulvérisation axiale pour pièces épaisses"
    ],
    specifications: [
      { label: "Composition", value: "82% Argon + 18% CO₂ (ou Ratios Spécifiques)" },
      { label: "Pression de Remplissage", value: "150 - 230 Bar" },
      { label: "Caractéristique", value: "Mélange homogène stabilisé" },
      { label: "Qualité de Soudure", value: "Sans projections, sans porosités, haute résistance" }
    ],
    content: "Dans la fabrication industrielle, le choix du gaz de protection détermine la qualité, la vitesse et la résistance mécanique des soudures. Les mélanges de gaz, souvent appelés 'gaz de soudage', sont des combinaisons technologiques de deux gaz ou plus (généralement Argon et CO₂) à des ratios stables. Chez Tinsa Gaz, nous assurons le remplissage et la fourniture de mélanges gazeux stabilisés selon les normes internationales.",
    supplyModels: [
      {
        title: "1. Bouteilles de Mélange de Gaz Haute Pression",
        desc: "Les gaz mélangés à des ratios précis sont proposés dans des bouteilles hautement sécurisées à des pressions de service de 150 à 230 bars."
      },
      {
        title: "2. Cadres de Bouteilles & Palettes (Bundle)",
        desc: "Solutions d'approvisionnement continu pour les usines et chantiers navals ayant des besoins importants. Les cadres connectés à un collecteur unique évitent les arrêts de ligne."
      }
    ],
    safetyWarning: "Avertissement Technique et Norme de Qualité : Si la technologie de remplissage est inadéquate, les composants du mélange peuvent se séparer avec le temps en raison des différences de densité ou des variations de température. Tinsa Gaz utilise des systèmes de pesée modernes pour garantir la stabilité parfaite du ratio du premier au dernier litre."
  },
  {
    slug: "karbondioksit-gazi",
    title: "Gaz Dioxyde de Carbone (CO₂)",
    badge: "Gaz Industriels",
    icon: "❄️",
    desc: "Le dioxyde de carbone (CO₂) joue un rôle critique dans la fabrication industrielle, l'agroalimentaire, l'événementiel et la sécurité incendie. Composé d'un atome de carbone et de deux d'oxygène, c'est un gaz inodore et incolore qui coexiste sous formes liquide et gazeuse dans les bouteilles.",
    features: [
      "Précision de remplissage garantie par pesée numérique en kilogrammes",
      "Pénétration profonde pour le soudage sous atmosphère protectrice",
      "Excellente propriété d'extinction d'incendie par étouffement de l'oxygène"
    ],
    usageAreas: [
      "Procédés de soudage MIG/MAG",
      "Systèmes d'extinction d'incendie et extincteurs",
      "Industrie agroalimentaire (carbonatation, MAP, refroidissement)",
      "Fonderies et processus chimiques (moules à sable, contrôle du pH)"
    ],
    specifications: [
      { label: "Formule Chimique", value: "CO₂" },
      { label: "Principe de Remplissage", value: "Contrôle précis du poids par balances numériques (kg)" },
      { label: "Options d'Emballage", value: "Bouteilles Individuelles, Cadres (Bundle), Bouteilles à Tube Plongeur" },
      { label: "État de Phase", value: "Coexistence des phases liquide et gazeuse" }
    ],
    content: "Le dioxyde de carbone (CO₂) joue un rôle critique dans la fabrication industrielle, l'agroalimentaire, l'événementiel et la sécurité incendie. Composé d'un atome de carbone et de deux d'oxygène, c'est un gaz inodore et incolore qui coexiste sous formes liquide et gazeuse dans les bouteilles. Par conséquent, la quantité est déterminée par pesée (en kilogrammes) et non par manomètre. Chez Tinsa Gaz, nous pesons méticuleusement chaque bouteille et cadre pour garantir un approvisionnement précis.",
    supplyModels: [
      {
        title: "1. Bouteilles de Dioxyde de Carbone Haute Pression",
        desc: "Le modèle le plus courant pour les usines, ateliers et applications industrielles. La phase gazeuse accumulée en haut de la bouteille est prélevée. Toutes nos bouteilles sont pesées numériquement et facturées au poids net."
      },
      {
        title: "2. Cadres de Bouteilles (Bundle)",
        desc: "Nos solutions sur palettes assurent un débit continu pour les grandes usines. Conformément à notre politique, tous nos cadres font l'objet d'un contrôle de poids strict en kilogrammes."
      },
      {
        title: "3. Bouteilles à Tube Plongeur (CO₂ Liquide pour Show & Alimentaire)",
        desc: "Pour les applications nécessitant du CO₂ liquide direct, Tinsa Gaz propose des bouteilles à tube plongeur (siphon). Ce tube permet de soutirer directement le CO₂ liquide du fond. Essentiel pour les effets de fumée/carboglace, la surgélation rapide et la recharge d'extincteurs."
      }
    ],
    safetyWarning: "Avertissement Technique et Norme de Sécurité : Les bouteilles contenant du produit liquide, il est vital de laisser un espace de sécurité pour éviter la surpression. Tinsa Gaz élimine ce risque grâce à des systèmes de remplissage informatisés. De plus, le CO₂ est plus lourd que l'air ; en cas de fuite, il s'accumule au sol, créant un risque d'asphyxie. Une ventilation basse est indispensable."
  },
  {
    slug: "saf-azot-gazi",
    title: "Gaz Azote Pur (N₂)",
    badge: "Gaz Industriels",
    icon: "🌫️",
    desc: "L'azote (N₂), qui constitue environ 78 % de notre atmosphère, est un gaz inerte, inodore, incolore et insipide. Il est le garant de la sécurité et de la conservation dans l'industrie. Son inertie chimique exceptionnelle empêche l'oxydation, la combustion et la dégradation.",
    features: [
      "Pureté élevée garantie par des technologies de remplissage avancées",
      "Protection éliminant l'oxydation et la détérioration indésirables",
      "Qualité de découpe laser lisse et sans coloration sur acier inoxydable"
    ],
    usageAreas: [
      "Inertage et purge pour la sécurité incendie et explosion",
      "Emballage alimentaire (MAP pour prolonger la durée de conservation)",
      "Découpe laser (découpe de l'acier inoxydable sans oxydation)",
      "Électronique et traitement thermique (soudage à la vague, semi-conducteurs)"
    ],
    specifications: [
      { label: "Formule Chimique", value: "N₂" },
      { label: "Classe de Pureté", value: "Haute Pureté (High Purity)" },
      { label: "Pression de Remplissage (Bouteilles)", value: "150 - 230 Bar" },
      { label: "Pression de Remplissage (Cadres)", value: "230 Bar Standard" }
    ],
    content: "L'azote (N₂), qui constitue environ 78 % de notre atmosphère, est un gaz inerte, inodore, incolore et insipide. Il est le garant de la sécurité et de la conservation dans l'industrie. Son inertie chimique exceptionnelle empêche l'oxydation, la combustion et la dégradation. Chez Tinsa Gaz, nous fournissons de l'azote pur de haute pureté issu de nos centres de remplissage modernes, en conformité avec les normes industrielles.",
    supplyModels: [
      {
        title: "1. Bouteilles d'Azote Pur Haute Pression",
        desc: "Idéal pour les ateliers à cycles de consommation intermittents, les chantiers mobiles et l'agroalimentaire. Les bouteilles individuelles sont livrées à des pressions de 150 à 230 bars pour maintenir la pureté."
      },
      {
        title: "2. Cadres de Bouteilles & Palettes (Bundle)",
        desc: "Développé pour les centres de découpe laser, l'agroalimentaire et la chimie fine nécessitant de grands volumes. Tinsa Gaz standardise ses cadres d'azote à 230 bars pour assurer la continuité et limiter les manutentions."
      }
    ],
    safetyWarning: "Avertissement Technique et Norme de Sécurité : L'azote n'est pas toxique ni inflammable, mais les fuites sont indétectables par les sens humains. L'accumulation d'azote déplace l'oxygène, créant un risque d'asphyxie immédiate. Des détecteurs d'oxygène et une ventilation active sont indispensables."
  },
  {
    slug: "asetilen-gazi",
    title: "Gaz Acétylène (C₂H₂)",
    badge: "Gaz Industriels",
    icon: "🧨",
    desc: "L'acétylène (C₂H₂), combustible indispensable aux procédés à haute température et forte concentration thermique, est un hydrocarbure incolore dégageant une odeur caractéristique d'ail. Il présente la température et la vitesse de flamme les plus élevées.",
    features: [
      "Température de flamme maximale de 3160°C en combinaison avec l'oxygène pur",
      "Masse poreuse et solvant acétone pour un stockage en bouteille sécurisé",
      "Garantie de remplissage par pesée de précision en kilogrammes"
    ],
    usageAreas: [
      "Soudage oxyacétylénique et oxycoupage",
      "Trempe superficielle et redressage à la flamme (recuit)",
      "Travail du verre et de la bijouterie (réglage précis de la flamme)"
    ],
    specifications: [
      { label: "Formule Chimique", value: "C₂H₂" },
      { label: "Température de Flamme", value: "~3160°C (avec Oxygène)" },
      { label: "Méthode de Stockage", value: "Masse poreuse et liquide dissout dans l'acétone" },
      { label: "Base de Remplissage", value: "Pesée précise en kilogrammes (kg)" }
    ],
    content: "L'acétylène (C₂H₂), combustible indispensable aux procédés à haute température et forte concentration thermique, est un hydrocarbure incolore dégageant une odeur caractéristique d'ail. Il présente la température de flamme la plus élevée (environ 3160°C avec de l'oxygène pur). Cette puissance thermique unique en fait le standard absolu pour le découpage et le soudage dans l'industrie lourde. Tinsa Gaz fournit de l'acétylène industriel en appliquant des méthodes de remplissage précises dans des installations modernes.",
    supplyModels: [
      {
        title: "1. Bouteilles d'Acétylène Haute Pression",
        desc: "Solution de combustible critique pour les usines, les chantiers navals et les ateliers mobiles. En raison de sa structure chimique, stocker de l'acétylène libre sous haute pression présente un risque d'explosion mortel. Par conséquent, les bouteilles d'Acétylène contiennent une matière poreuse spéciale et le gaz y est dissous dans de l'acétone. Tinsa Gaz vend donc l'acétylène au poids net (kg) et non à la pression."
      },
      {
        title: "2. Cadres de Bouteilles & Palettes (Bundle)",
        desc: "Nos cadres d'acétylène assurent un débit continu pour l'oxycoupage intensif et les grands ateliers de construction métallique. Conformément à nos règles de sécurité, tous nos cadres d'acétylène sont équipés de clapets anti-retour et de détendeurs. Remplissage et facturation au kilogramme."
      }
    ],
    safetyWarning: "Avertissement Technique et Norme de Sécurité : L'acétylène est le gaz le plus sensible et présente le risque d'explosion le plus élevé. Son mélange avec l'air est explosif sur une large plage de concentrations. Les bouteilles ne doivent jamais être couchées. En position horizontale, de l'acétone liquide pourrait s'échapper, entraînant un risque d'explosion immédiat. Toutes nos bouteilles sont protégées par des clapets de sécurité."
  },
  {
    slug: "helyum-gazi",
    title: "Gaz Hélium (He)",
    badge: "Gaz Industriels",
    icon: "🎈",
    desc: "L'hélium (He), aux applications hautement stratégiques allant de la recherche de pointe à l'industrie et au divertissement, est un gaz rare connu pour sa légèreté et son inertie absolue. Deuxième élément le plus léger de l'univers, son ininflammabilité le rend indispensable pour les procédés de haute sécurité.",
    features: [
      "Structure de gaz rare incombustible et très léger",
      "Pouvoir de refroidissement de l'hélium liquide (-269°C) pour les IRM supraconducteurs",
      "Capacité de détection de fuite précise grâce à un diamètre atomique minuscule"
    ],
    usageAreas: [
      "Gonflage de ballons et événementiel (ballons volants ininflammables)",
      "Santé et refroidissement des IRM (imagerie par résonance magnétique)",
      "Détection de fuites et laboratoires d'analyse (tests d'étanchéité)",
      "Soudage à l'hélium et mélanges gazeux industriels (MIG/TIG)"
    ],
    specifications: [
      { label: "Formule Chimique", value: "He" },
      { label: "Mélanges de Soudage", value: "Combinaisons Argon + Hélium" },
      { label: "Pression (Bouteilles)", value: "150 - 230 Bar" },
      { label: "Pression (Cadres)", value: "230 Bar" }
    ],
    content: "L'hélium (He), aux applications hautement stratégiques allant de la recherche de pointe à l'industrie et au divertissement, est un gaz rare connu pour sa légèreté et son inertie absolue. Deuxième élément le plus léger de l'univers, son ininflammabilité le rend indispensable pour les procédés de haute sécurité. Tinsa Gaz fournit de l'hélium industriel et technologique de haute pureté selon les normes de sécurité logistique les plus élevées.",
    supplyModels: [
      {
        title: "1. Bouteilles d'Hélium Haute Pression",
        desc: "Solutions optimisées pour les analyses de laboratoire, les tests de fuite et le gonflage de ballons. L'hélium gazeux est stocké sous forme gazeuse et vendu à la pression. Livré à des pressions de 150 à 230 bars avec garantie de pureté."
      },
      {
        title: "2. Cadres de Bouteilles & Palettes (Bundle)",
        desc: "Solutions assurant un débit continu pour les découpes laser, chantiers navals et ateliers de soudage lourds. Tinsa Gaz standardise ses cadres d'hélium à une pression unique de 230 bars pour assurer la régularité du flux."
      },
      {
        title: "3. Gaz de Soudage à l'Hélium & Mélanges Industriels (MIG/TIG)",
        desc: "En soudage MIG, TIG et Laser, l'argon pur peut s'avérer insuffisant pour l'aluminium épais, le cuivre ou l'inox. L'hélium offre un potentiel d'ionisation et une conductivité thermique plus élevés. Nos mélanges Hélium + Argon permettent d'apporter plus de chaleur à l'arc, augmentant la pénétration et la vitesse tout en évitant le préchauffage du cuivre."
      }
    ],
    safetyWarning: "Avertissement Technique et Norme de Sécurité : L'hélium n'est ni toxique ni inflammable. Cependant, son accumulation en zone non ventilée déplace l'oxygène, créant un risque d'asphyxie. Inhaler de l'hélium pour modifier la voix est extrêmement dangereux car cela prive instantanément les poumons d'oxygène, provoquant évanouissement ou séquelles graves."
  },
  {
    slug: "hidrojen-gazi",
    title: "Gaz Hydrogène (H₂)",
    badge: "Gaz Industriels",
    icon: "💨",
    desc: "L'hydrogène (H₂), l'élément le plus léger et le plus énergétique de l'univers par unité de masse, est un gaz inodore, incolore et insipide. Il joue un rôle clé dans les processus industriels grâce à sa haute conductivité thermique, son fort pouvoir réducteur et sa combustion propre.",
    features: [
      "Atmosphère réductrice pour capter l'oxygène dans les traitements thermiques",
      "Combustion extrêmement propre pour le travail du verre avec flamme oxhydrique",
      "Haute conductivité thermique pour le refroidissement des rotors d'alternateurs"
    ],
    usageAreas: [
      "Traitement thermique & métallurgie (recuit brillant pour éviter la rouille)",
      "Fabrication de verre et quartz (façonnage à la flamme oxhydrique)",
      "Systèmes de refroidissement d'alternateurs et énergie",
      "Industries chimiques et pétrolières (hydrocraquage, hydrogénation)"
    ],
    specifications: [
      { label: "Formule Chimique", value: "H₂" },
      { label: "Classe de Pureté", value: "Haute Pureté Industrielle" },
      { label: "Pression (Bouteilles)", value: "150 - 230 Bar" },
      { label: "Pression (Cadres)", value: "230 Bar" }
    ],
    content: "L'hydrogène (H₂), l'élément le plus léger et le plus énergétique de l'univers par unité de masse, est un gaz inodore, incolore et insipide. Il joue un rôle clé dans les processus industriels grâce à sa haute conductivité thermique, son fort pouvoir réducteur (captant l'oxygène) et sa combustion propre. Tinsa Gaz assure le remplissage et l'approvisionnement en hydrogène de haute pureté avec des infrastructures de pointe et des protocoles de sécurité stricts.",
    supplyModels: [
      {
        title: "1. Bouteilles d'Hydrogène Haute Pression",
        desc: "Solution idéale pour les laboratoires, la climatisation de générateurs et les petites installations de traitement thermique. Livré à des pressions de 150 à 230 bars avec des filetages et raccords étanches adaptés."
      },
      {
        title: "2. Cadres de Bouteilles & Palettes (Bundle)",
        desc: "Solutions sur cadres pour les verreries à flux continu, chantiers navals et usines métallurgiques. Pour garantir un débit élevé et régulier, Tinsa Gaz standardise ses cadres d'hydrogène à 230 bars, optimisant l'efficacité logistique."
      }
    ],
    safetyWarning: "Avertissement Technique et Norme de Sécurité : L'hydrogène présente la vitesse de combustion et d'explosion la plus élevée et est extrêmement réactif. Il forme un mélange explosif (ATEX) sur une large plage de concentrations dans l'air. S'agissant de la plus petite molécule, il s'échappe par les micro-fuites. Les filetages (pas à gauche pour gaz inflammable) sont vérifiés à chaque remplissage. Les locaux doivent être ex-proof et ventilés en toiture car le gaz s'accumule au plafond."
  },
  {
    slug: "cng-dogalgaz",
    title: "Gaz Naturel Comprimé (GNC) (CH₄)",
    badge: "Gaz Industriels",
    icon: "⚡",
    desc: "Le GNC (Gaz Naturel Comprimé), principalement composé de méthane (CH₄), est un carburant à haut rendement obtenu par compression du gaz naturel sous haute pression. C'est une source d'énergie stratégique pour l'industrie et les flottes de transport.",
    features: [
      "Confort du gaz naturel pour les usines situées hors réseau de gazoducs",
      "Combustible économique pour les centrales d'enrobage et les fours à ciment",
      "Carburant propre alternatif pour poids lourds et flottes logistiques"
    ],
    usageAreas: [
      "Combustible industriel hors réseau (vapeur, eau chaude, chaleur procédé)",
      "Centrales d'enrobage et cimenteries (fours de séchage)",
      "Poids lourds & Flottes logistiques (bus municipaux, camions bennes)"
    ],
    specifications: [
      { label: "Formule Chimique", value: "CH₄ (à dominante Methane)" },
      { label: "Pression (Bouteilles)", value: "200 - 250 Bar" },
      { label: "Pression (Cadres)", value: "230 - 250 Bar" },
      { label: "Équipements de Sécurité", value: "Soupapes de sécurité, limiteurs de pression" }
    ],
    content: "Le GNC (Gaz Naturel Comprimé), principalement composé de méthane (CH₄), est un carburant à haut rendement obtenu par compression du gaz naturel sous haute pression. C'est une source d'énergie stratégique pour l'industrie et les flottes de transport. Il représente la solution logistique la plus fiable pour acheminer le gaz naturel et ses avantages économiques hors réseau de gazoducs. Tinsa Gaz propose un approvisionnement en GNC conforme aux réglementations nationales grâce à ses systèmes de transport et de remplissage.",
    supplyModels: [
      {
        title: "1. Bouteilles de Gaz Naturel Comprimé (GNC) Haute Pression",
        desc: "Nos bouteilles haute pression optimisées pour les chantiers temporaires et les unités à faible consommation. Livrées après contrôles d'étanchéité sous une pression de service de 200 à 250 bars."
      },
      {
        title: "2. Cadres de Bouteilles & Palettes (Bundle)",
        desc: "Systèmes de cadres d'approvisionnement pour l'industrie et les mines. Tinsa Gaz remplit ses cadres GNC entre 230 et 250 bars selon vos besoins de consommation, garantissant un gaz de qualité réseau et une pression stable."
      }
    ],
    safetyWarning: "Avertissement Technique et Norme de Sécurité : Le GNC contient une forte proportion de méthane et est hautement inflammable et explosif. Plus léger que l'air, il monte rapidement en cas de fuite ; les zones de stockage clos doivent donc disposer d'une ventilation haute et de détecteurs ex-proof. Tous nos systèmes GNC sont équipés de soupapes de sécurité et de vannes d'arrêt rapide."
  }
];
