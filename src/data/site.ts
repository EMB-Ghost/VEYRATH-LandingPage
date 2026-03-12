/**
 * ============================================================
 * VEYRATH — Os Reinos Fraturados | MMORPG 2027
 * ARQUIVO DE CONFIGURAÇÃO CENTRAL — TOTALMENTE EDITÁVEL
 *
 * Edite este arquivo para alterar qualquer texto, link, preço,
 * cor, conteúdo ou configuração da landing page.
 * ============================================================
 */

// ─────────────────────────────────────────────────────────────
// METADADOS DO SITE (SEO, título, descrição)
// ─────────────────────────────────────────────────────────────
export const siteMetadata = {
  title: "VEYRATH — Os Reinos Fraturados | MMORPG 2027",
  description:
    "O MMORPG 3D de mundo aberto que chega em 2027. Cinco reinos estilhaçados, três classes únicas, economia livre e escolhas permanentes. Wishlist no Steam agora.",
  keywords: [
    "MMORPG",
    "VEYRATH",
    "Os Reinos Fraturados",
    "2027",
    "Steam",
    "RPG",
    "mundo aberto",
    "PvP",
    "PvE",
  ],
  openGraph: {
    title: "VEYRATH — Os Reinos Fraturados | MMORPG 2027",
    description:
      "Cinco reinos estilhaçados. Três classes. Escolhas permanentes. Sua lenda começa em 2027.",
    locale: "pt_BR",
  },
  twitter: {
    title: "VEYRATH — Os Reinos Fraturados | MMORPG 2027",
    description:
      "Cinco reinos estilhaçados. Três classes. Escolhas permanentes. Sua lenda começa em 2027.",
  },
};

// ─────────────────────────────────────────────────────────────
// LINKS EXTERNOS (Steam, Discord, redes sociais)
// ─────────────────────────────────────────────────────────────
export const links = {
  steam: "https://steamcommunity.com/groups/EmbrasaGames",               // Substitua pelo link real da Wishlist
  discord: "https://discord.gg/g567wFPy3s",                             // Substitua pelo link real do Discord
  twitter: "https://x.com/VeyrathFracture",                            // Substitua pelo link real do Twitter/X
  youtube: "https://youtube.com/@VEYRATHOSREINOSFRATURADOS",          // Substitua pelo link real do YouTube
  twitch: "https://www.twitch.tv/veyrathfractured",                  // Substitua pelo link real da Twitch
};

// ─────────────────────────────────────────────────────────────
// NAVEGAÇÃO
// ─────────────────────────────────────────────────────────────
export const navigation = {
  logo: "VEYRATH",
  menu: [
    { label: "Lore", href: "#lore" },
    { label: "Reinos", href: "#realms" },
    { label: "Classes", href: "#classes" },
    { label: "Sistemas", href: "#sistemas" },
    { label: "Pre-Order", href: "#preorder" },
  ],
  ctaDiscord: "Discord",
  ctaSteam: "Wishlist Steam",
};

// ─────────────────────────────────────────────────────────────
// SEÇÃO HERO
// ─────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "PC · STEAM · LANÇAMENTO 2027",
  title: "VEYRATH",
  tagline: '"Os Reinos Fraturados — O novo MMORPG que você precisa!"',
  ctaPrimary: "🛒 Wishlist no Steam",
  ctaSecondary: "⚔ Entrar no Discord",
  badges: [
    "MMORPG 3D",
    "Mundo Aberto",
    "PvP / PvE",
    "Economia Livre",
  ],
  scrollLabel: "Explore",
  // Runas flutuantes — altere os símbolos se quiser
  runes: ["ᚠ", "ᚢ", "ᚦ", "ᚨ", "ᚱ", "ᚲ", "ᚷ"],
};

// ─────────────────────────────────────────────────────────────
// SEÇÃO LORE
// ─────────────────────────────────────────────────────────────
export const lore = {
  label: "Prólogo",
  titleLine1: "A FRATURA",
  titleLine2: "PRIMORDIAL",
  paragraphs: [
    'O tecido da realidade se rompeu. A <strong>CORRUPÇÃO</strong> — uma ferida cósmica aberta por forças além da compreensão mortal — estilhaçou o mundo em cinco reinos separados, cada um retorcido pela energia primordial que vaza através das rachaduras.',
    'Você desperta em Veyrath sem memória do que era. <strong>Cada escolha que você faz esculpe permanentemente seu legado</strong> — sua subclasse, sua aliança, seu destino no campo de batalha. Nada se apaga. Tudo persiste.',
  ],
  stats: [
    { number: "5", label: "Reinos" },
    { number: "3", label: "Classes" },
    { number: "∞", label: "Escolhas" },
  ],
  visualEmoji: "🌌",
};

// ─────────────────────────────────────────────────────────────
// SEÇÃO REINOS
// ─────────────────────────────────────────────────────────────
export const realms = {
  label: "Destinos",
  titleLine1: "OS 5 REINOS",
  titleLine2: "FRATURADOS",
  cards: [
    {
      id: "Reino I",
      name: "Aurenthia",
      description:
        "Planícies douradas e ruínas ancestrais banhadas por um sol eterno; o berço da esperança e o ponto de partida de todo herói.",
      badge: "Planaltos",
      image: "/Aurenthia.png",
     },
    {
      id: "Reino II",
      name: "Sylphae",
      description:
        "Uma selva vertical de árvores titânicas e cachoeiras colossais, pulsando com uma vida selvagem, úmida e ancestral.",
      badge: "Florestas",
      image: "/Sylphae.jpg",
    },
    {
      id: "Reino III",
      name: "Obsidryn",
      description:
        "Um pântano fétido de águas negras e névoa perpétua, onde a vida estagnou e o perigo espreita em cada sombra retorcida.",
      badge: "Pantanos",
      image: "/Obsidryn.png",
    },
    {
      id: "Reino IV",
      name: "Glacieryn",
      description:
        "Um deserto de gelo e montanhas afiadas sob ventos letais; o teste definitivo de sobrevivência contra o inverno eterno.",
      badge: "Geleiras",
      image: "/Glacieryn.png",
    },
    {
      id: "Reino V",
      name: "Kaelorn",
      description:
        "O epicentro da corrupção; um planalto fraturado com fendas roxas e energia instável que distorce a própria realidade.",
      badge: "Corrupção",
      image: "/Kaelorn.png",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// SEÇÃO CLASSES
// ─────────────────────────────────────────────────────────────
export const classes = {
  label: "A Trindade Sagrada",
  titleLine1: "ESCOLHA SEU",
  titleLine2: "DESTINO",
  list: [
    {
      id: 0,
      tab: "Protetores",
      image: "/protetores.png",
      name: "PROTETORES",
      desc: "Vanguardas inquebráveis. Absorvem o caos da batalha enquanto protegem aliados e controlam zonas inteiras.",
      traits: ["Tanque", "Defesa", "Suporte"],
      aura: "aura-p",
    },
    {
      id: 1,
      tab: "Algozes",
      image: "/algozes.png",
      name: "ALGOZES",
      desc: "Lâminas que cortam o véu da realidade. Especialistas em dano explosivo e mobilidade extrema no campo de batalha.",
      traits: ["DPS", "Mobilidade", "Furtivo"],
      aura: "aura-a",
    },
    {
      id: 2,
      tab: "Teurgos",
      image: "/teurgos.png",
      name: "TEURGOS",
      desc: "Canalizadores de energia natural pura. Manipulam a ordem e o caos com feitiços que alteram a estrutura do combate.",
      traits: ["Magia", "Arcano", "Controle"],
      aura: "aura-t",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// SEÇÃO SISTEMAS
// ─────────────────────────────────────────────────────────────
export const sistemas = {
  label: "Inovação",
  titleLine1: "SISTEMAS",
  titleLine2: "ÚNICOS",
  intro:
    "Mecânicas que definem uma nova era para MMORPGs. Cada sistema foi construído para garantir que cada decisão importe e deixe uma marca permanente no mundo.",
  list: [
    {
      icon: "🧙🏻‍♂️",
      category: "Nível 40+",
      name: "SISTEMA DE AURA",
      description:
        "Personalize seu personagem visual e ganhe bônus passivos baseados em escolhas estéticas únicas. Sua aura reflete sua história de jogo e intimida adversários no PvP.",
    },
    {
      icon: "🧬",
      category: "Exclusivo",
      name: "SUBCLASSE PERMANENTE",
      description:
        "Escolhas verdadeiramente definitivas. No nível 30 e 60 você define sua subclasse para sempre — não há reset. Cada personagem é genuinamente único no servidor.",
    },
    {
      icon: "💰",
      category: "Economia Real",
      name: "ECONOMIA LIVRE",
      description:
        "Um mercado 100% controlado pelos jogadores. Forje, encante, negocie e domine as forças econômicas entre os cinco reinos. Sem intervenção do sistema.",
    },
    {
      icon: "⚰️",
      category: "Risco Alto",
      name: "PVP DE ALTO RISCO",
      description:
        "Zonas de conflito oferecem recompensas lendárias — mas uma derrota pode significar a perda permanente de equipamentos raros. O perigo é real e as recompensas, extraordinárias.",
    },
    {
      icon: "🔨",
      category: "Crafting Avançado",
      name: "FORJA RÍTMICA",
      description:
        "Crafting baseado em habilidade e ritmo. Ações no tempo certo amplificam a qualidade dos itens criados. Mestres da Forja produzem equipamentos impossíveis de obter de outra form.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// SEÇÃO PRE-ORDER
// ─────────────────────────────────────────────────────────────
export const preorder = {
  label: "A Caçada começa AGORA",
  title: "Garanta já",
  subtitle:
    "Escolha seu caminho no reino fragmentado de Veyrath. Pre-orders de acesso antecipado concedem status exclusivo de fundador, skins lendárias e títulos eternos.",
  // Duração do countdown: dias, horas, minutos, segundos
  countdownDuration: {
    days: 300,
    hours: 14,
    minutes: 22,
    seconds: 58,
  },
  packages: [
    {
      id: "peregrino",
      featured: false,
      emoji: "",
      image: "/Peregrino.png",
      tier: "Acesso de Fundador",
      name: "Pack Peregrino",
      price: "R$39,99",
      features: [
        { main: "Acesso Antecipado" },
        {
          main: 'Insígnia "O Despertar"',
          sub: "Ícone exclusivo de apoiador no perfil e chat.",
        },
        { main: "15 Fragmentos de Éter", sub: "Moeda para cosméticos básicos." },
      ],
      ctaLabel: "Selecionar Pack",
      ctaStyle: "outline",
    },
    {
      id: "soberano",
      featured: true,
      featuredLabel: "Mais Popular",
      emoji: "",
      image: "/Soberano.png",
      tier: "Elite de Aurenthia",
      name: "Soberano Ancestral",
      price: "R$99,99",
      features: [
        {
          main: "Visual: Relíquia Áurea",
          sub: "Efeito visual de aura.",
        },
        {
          main: 'Título "Herdeiro do Planalto"',
          sub: "Flair dourado permanente acima do nome.",
        },
        {
          main: "45 Fragmentos de Éter",
          sub: "Moeda premium para a loja de skins.",
        },
      ],
      ctaLabel: "⚡ Apoiar Agora",
      ctaStyle: "fill",
    },
    {
      id: "sentinela",
      featured: false,
      emoji: "",
      image: "/Soberano.png",
      tier: "Vanguarda do Reino",
      name: "Pack Sentinela",
      price: "R$69,99",
      features: [
        { main: "Acesso Antecipado + 48h de Head Start" },
        {
          main: "Manto do Explorador",
          sub: "Capa cosmética exclusiva com física avançada.",
        },
        { main: "25 Fragmentos de Éter", sub: "Para itens de personalização." },
      ],
      ctaLabel: "Selecionar Pack",
      ctaStyle: "outline",
    },
  ],
  legacyRewards: {
    title: "Recompensas de Legado",
    subtitle: "Conquistadas pela lealdade, guardadas pela eternidade em Veyrath.",
    viewAllLabel: "Ver Todos os Benefícios →",
    viewAllHref: "#",
    items: [
      { icon: "✨", name: "Aura de Fundador", type: "Efeito Visual Customizado" },
      { icon: "📜", name: "Reserva de Nome", type: "Prioridade de Personagem" },
      { icon: "🏅", name: "Título de Fundador", type: "Social Nameplate" },
      { icon: "🎨", name: "Skins Exclusivas", type: "Cosmético de Legado" },
    ],
  },
};

// ─────────────────────────────────────────────────────────────
// SEÇÃO CTA FINAL
// ─────────────────────────────────────────────────────────────
export const ctaFinal = {
  label: "Sua Lenda Começa Agora",
  title: "SUA LENDA COMEÇA AGORA",
  subtitle:
    "Prepare-se para o lançamento em 2027. Junte-se a milhares de heróis cujas histórias já estão sendo escritas — e nunca serão apagadas.",
  ctaLabel: "🛒 Wishlist Gratuita no Steam",
};

// ─────────────────────────────────────────────────────────────
// SEÇÃO PARTNERS & STREAMERS
// ─────────────────────────────────────────────────────────────
export const partners = {
  label: "Director",
  chips: [
    { label: "🎮 Ghost" },
    { label: "𝕏 Twitter / X" },
    { label: "▶ YouTube Gaming" },
    { label: "🎮 GamersHub" },
    { label: "📺 Twitch" },
  ],
  streamers: [
    {
      avatar: "🎮",
      name: "KaueRamone, torto de Notre-Dame",
      platform: "STREAMER · TWITCH",
    },
    {
      avatar: "⚔️",
      name: "Thales, Rei deles",
      platform: "STREAMER · TWITCH",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────
export const footer = {
  logo: "VEYRATH",
  copyright: "© 2026 VEYRATH GAMES · TODOS OS DIREITOS RESERVADOS",
  socials: [
    { icon: "💬", href: links.discord, label: "Discord" },
    { icon: "𝕏", href: links.twitter, label: "Twitter/X" },
    { icon: "▶", href: links.youtube, label: "YouTube" },
  ],
  languages: ["PT", "EN"],
};
