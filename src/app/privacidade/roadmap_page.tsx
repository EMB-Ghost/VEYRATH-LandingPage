import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmap — VEYRATH: Os Reinos Fraturados",
  description: "Acompanhe o desenvolvimento de Veyrath — MMORPG 3D brasileiro previsto para 2027.",
};

const fases = [
  {
    periodo: "Jan — Mar 2026",
    nome: "Fase 1 · Fundação do Projeto",
    status: "done" as const,
    categorias: [
      {
        titulo: "Documentação",
        items: [
          { label: "Game Design Document v1.0", status: "done" as const },
          { label: "Lore e História Principal", status: "done" as const },
          { label: "Sistema de Combate (GDD)", status: "done" as const },
          { label: "Os 5 Reinos Fraturados", status: "done" as const },
          { label: "Sistema de Classes (3 Pilares)", status: "done" as const },
          { label: "9 Profissões Definidas", status: "done" as const },
          { label: "Duas Grandes Linhagens", status: "done" as const },
          { label: "Pêndulo do Éter", status: "done" as const },
        ],
      },
      {
        titulo: "Identidade Visual",
        items: [
          { label: "Logo e identidade do jogo", status: "done" as const },
          { label: "Arte conceitual dos 5 Reinos", status: "done" as const },
          { label: "Arte das 3 Classes", status: "done" as const },
          { label: "Arte das 9 Profissões", status: "done" as const },
          { label: "Key Art principal (capa)", status: "done" as const },
          { label: "Cursor Gema do Éter", status: "done" as const },
        ],
      },
      {
        titulo: "Site Oficial",
        items: [
          { label: "veyrath.com.br no ar", status: "done" as const },
          { label: "Seções: Lore, Reinos, Classes", status: "done" as const },
          { label: "Seções: Profissões, Sistemas", status: "done" as const },
          { label: "Quiz do Destino (interativo)", status: "done" as const },
          { label: "Pre-Order via Catarse", status: "done" as const },
          { label: "Captação de e-mails (Formspree)", status: "done" as const },
          { label: "FAQ, LGPD e Roadmap", status: "done" as const },
        ],
      },
      {
        titulo: "Comunidade",
        items: [
          { label: "Discord oficial aberto", status: "done" as const },
          { label: "Twitter/X criado", status: "done" as const },
          { label: "Canal YouTube criado", status: "done" as const },
          { label: "Catarse (crowdfunding) ativo", status: "done" as const },
        ],
      },
    ],
  },
  {
    periodo: "Abr — Dez 2026",
    nome: "Fase 2 · Pré-Produção & Prototipagem",
    status: "progress" as const,
    categorias: [
      {
        titulo: "Motor & Arquitetura",
        items: [
          { label: "Escolha da engine (Unreal 5)", status: "progress" as const },
          { label: "Arquitetura do servidor", status: "progress" as const },
          { label: "Pipeline de assets 3D", status: "upcoming" as const },
          { label: "Sistema de rede (MMO)", status: "upcoming" as const },
        ],
      },
      {
        titulo: "Prototipo de Combate",
        items: [
          { label: "Movimentação TPP básica", status: "upcoming" as const },
          { label: "Sistema de ataque/defesa", status: "upcoming" as const },
          { label: "Stamina e recursos", status: "upcoming" as const },
          { label: "Primeiro Pilar jogável (Protetor)", status: "upcoming" as const },
          { label: "Hitbox e parry", status: "upcoming" as const },
        ],
      },
      {
        titulo: "Mundo & Level Design",
        items: [
          { label: "Mapa de Aurenthia (bloco)", status: "upcoming" as const },
          { label: "Primeira cidade hub", status: "upcoming" as const },
          { label: "Caverna de spawn (tutorial)", status: "upcoming" as const },
          { label: "Bioma Planalto Dourado", status: "upcoming" as const },
        ],
      },
      {
        titulo: "Marketing & Comunidade",
        items: [
          { label: "Primeiros devlogs (YouTube)", status: "upcoming" as const },
          { label: "TikTok e Instagram ativos", status: "upcoming" as const },
          { label: "Roadmap público", status: "done" as const },
          { label: "FAQ e LGPD no site", status: "done" as const },
        ],
      },
    ],
  },
  {
    periodo: "Jan — Jun 2027",
    nome: "Fase 3 · Alpha Fechado",
    status: "upcoming" as const,
    categorias: [
      {
        titulo: "Acesso",
        items: [
          { label: "Alpha para Fundadores", status: "upcoming" as const },
          { label: "Sistema de login/conta", status: "upcoming" as const },
          { label: "Launcher do jogo", status: "upcoming" as const },
          { label: "Testes internos (NDA)", status: "upcoming" as const },
        ],
      },
      {
        titulo: "Gameplay",
        items: [
          { label: "3 Classes jogáveis", status: "upcoming" as const },
          { label: "Aurenthia completa (nv 1-25)", status: "upcoming" as const },
          { label: "Obsidryn parcial (nv 20-45)", status: "upcoming" as const },
          { label: "Sistema de Profissões (3)", status: "upcoming" as const },
          { label: "Craft e Têmpera básica", status: "upcoming" as const },
          { label: "Sistema de Corrupção", status: "upcoming" as const },
        ],
      },
      {
        titulo: "Social & MMO",
        items: [
          { label: "Sistema de Party", status: "upcoming" as const },
          { label: "Chat in-game", status: "upcoming" as const },
          { label: "Mercado de jogadores", status: "upcoming" as const },
          { label: "Banco e armazenamento", status: "upcoming" as const },
        ],
      },
      {
        titulo: "Quests & Lore",
        items: [
          { label: "Main Quest Cap 1-3", status: "upcoming" as const },
          { label: "Quest oculta ativada", status: "upcoming" as const },
          { label: "Side quests de Aurenthia", status: "upcoming" as const },
          { label: "Primeira escolha de Linhagem (nv 20)", status: "upcoming" as const },
        ],
      },
    ],
  },
  {
    periodo: "Mai 2027",
    nome: "Fase 4 · Lançamento — Early Access",
    status: "upcoming" as const,
    categorias: [
      {
        titulo: "5 Reinos",
        items: [
          { label: "Aurenthia (nv 1-25)", status: "upcoming" as const },
          { label: "Obsidryn (nv 20-45)", status: "upcoming" as const },
          { label: "Sylphae (nv 35-60)", status: "upcoming" as const },
          { label: "Glacieryn (nv 55-75)", status: "upcoming" as const },
          { label: "Kaelorn (nv 70-100+, PvP livre)", status: "upcoming" as const },
        ],
      },
      {
        titulo: "Sistemas Completos",
        items: [
          { label: "9 Profissões completas", status: "upcoming" as const },
          { label: "Sistema de Clãs", status: "upcoming" as const },
          { label: "PvP de Kaelorn", status: "upcoming" as const },
          { label: "Pêndulo do Éter (server)", status: "upcoming" as const },
          { label: "Câmara do Primeiro Selo", status: "upcoming" as const },
          { label: "Duas Linhagens (nv 50)", status: "upcoming" as const },
        ],
      },
      {
        titulo: "Endgame",
        items: [
          { label: "Raids e dungeons", status: "upcoming" as const },
          { label: "Eventos dinâmicos de cidade", status: "upcoming" as const },
          { label: "Questlines das Linhagens", status: "upcoming" as const },
          { label: "O Devorador (boss mundial)", status: "upcoming" as const },
        ],
      },
      {
        titulo: "Pós-Lançamento",
        items: [
          { label: "Patch 1.0 — Balance", status: "upcoming" as const },
          { label: "Eventos sazonais", status: "upcoming" as const },
          { label: "Novos reinos (expansão)", status: "upcoming" as const },
          { label: "Temporadas de PvP", status: "upcoming" as const },
        ],
      },
    ],
  },
];

const statusColors = {
  done: { bg: "rgba(99,153,34,0.08)", border: "rgba(99,153,34,0.3)", dot: "#639922", text: "#97c459" },
  progress: { bg: "rgba(55,138,221,0.08)", border: "rgba(55,138,221,0.3)", dot: "#378add", text: "#85b7eb" },
  upcoming: { bg: "rgba(255,255,255,0.02)", border: "rgba(255,255,255,0.08)", dot: "rgba(255,255,255,0.15)", text: "rgba(200,185,255,0.35)" },
};

const statusLabel = { done: "✓ Concluído", progress: "⬤ Em desenvolvimento", upcoming: "Planejado" };

export default function Roadmap() {
  return (
    <div style={{ background: "#07040f", minHeight: "100vh", color: "#f0e6c8", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

      {/* Header */}
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 48px", borderBottom: "1px solid rgba(255,255,255,0.08)", position: "sticky", top: 0, zIndex: 100, background: "rgba(7,4,15,0.92)", backdropFilter: "blur(12px)" }}>
        <a href="/" style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", letterSpacing: "4px", color: "#d4a017", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          VEYRATH <span style={{ fontSize: "0.65rem", letterSpacing: "2px", color: "rgba(200,185,255,0.5)" }}>OS REINOS FRATURADOS</span>
        </a>
        <a href="/" style={{ fontSize: "0.75rem", letterSpacing: "3px", textTransform: "uppercase", color: "rgba(200,185,255,0.5)", textDecoration: "none", border: "1px solid rgba(255,255,255,0.08)", padding: "8px 16px", borderRadius: "6px" }}>
          ← Voltar ao Site
        </a>
      </header>

      {/* Hero */}
      <section style={{ textAlign: "center", padding: "80px 24px 60px", background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(83,74,183,0.18) 0%, transparent 60%)" }}>
        <p style={{ fontSize: "10px", letterSpacing: "6px", textTransform: "uppercase", color: "#d4a017", opacity: 0.7, marginBottom: "12px" }}>Desenvolvimento Público</p>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "4px", marginBottom: "12px" }}>ROADMAP</h1>
        <p style={{ fontSize: "14px", color: "rgba(200,185,255,0.5)", letterSpacing: "2px", marginBottom: "40px" }}>Acompanhe cada passo da construção de Veyrath · Atualizado em Março 2026</p>

        {/* Legenda */}
        <div style={{ display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
          {(["done", "progress", "upcoming"] as const).map((s) => (
            <div key={s} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", letterSpacing: "2px", color: "rgba(200,185,255,0.6)" }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "2px", background: statusColors[s].dot }} />
              {s === "done" ? "Concluído" : s === "progress" ? "Em desenvolvimento" : "Planejado"}
            </div>
          ))}
        </div>
      </section>

      {/* Fases */}
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 100px" }}>
        {fases.map((fase, fi) => (
          <div key={fi} style={{ marginBottom: "64px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px", paddingBottom: "16px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <div>
                <p style={{ fontSize: "11px", letterSpacing: "5px", textTransform: "uppercase", color: "#d4a017", opacity: 0.8, marginBottom: "4px" }}>{fase.periodo}</p>
                <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.3rem", letterSpacing: "3px" }}>{fase.nome}</h2>
              </div>
              <span style={{ marginLeft: "auto", fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", padding: "4px 10px", borderRadius: "4px", background: statusColors[fase.status].bg, border: `1px solid ${statusColors[fase.status].border}`, color: statusColors[fase.status].text }}>
                {statusLabel[fase.status]}
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>
              {fase.categorias.map((cat, ci) => {
                const catStatus = cat.items.every(i => i.status === "done") ? "done" : cat.items.some(i => i.status === "progress") ? "progress" : "upcoming";
                return (
                  <div key={ci} style={{ borderRadius: "10px", padding: "16px", background: statusColors[catStatus].bg, border: `1px solid ${statusColors[catStatus].border}` }}>
                    <p style={{ fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", color: statusColors[catStatus].text, marginBottom: "12px", paddingBottom: "8px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                      {cat.titulo}
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      {cat.items.map((item, ii) => (
                        <div key={ii} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "7px 10px", borderRadius: "6px", fontSize: "12px", background: statusColors[item.status].bg, border: `1px solid ${statusColors[item.status].border}`, color: item.status === "done" ? "#c0dd97" : item.status === "progress" ? "#b5d4f4" : "rgba(200,185,255,0.4)" }}>
                          <div style={{ width: "6px", height: "6px", borderRadius: "50%", flexShrink: 0, background: statusColors[item.status].dot, animation: item.status === "progress" ? "pulse 1.5s ease-in-out infinite" : "none" }} />
                          {item.label}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {fi < fases.length - 1 && (
              <div style={{ display: "flex", alignItems: "center", gap: "16px", margin: "48px 0 0", color: "rgba(200,185,255,0.2)", fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase" }}>
                <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
                {fi === 0 ? "Em andamento" : "Planejado"}
                <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
              </div>
            )}
          </div>
        ))}
      </main>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.4;} }
        @media (max-width: 768px) {
          header { padding: 16px 20px !important; }
        }
      `}</style>

      <footer style={{ textAlign: "center", padding: "32px", borderTop: "1px solid rgba(255,255,255,0.08)", fontSize: "11px", letterSpacing: "2px", color: "rgba(200,185,255,0.25)" }}>
        © 2026 VEYRATH GAMES ·{" "}
        <a href="/" style={{ color: "#d4a017", textDecoration: "none", opacity: 0.7 }}>veyrath.com.br</a>
        {" "}·{" "}
        <a href="https://discord.gg/g567wFPy3s" style={{ color: "#d4a017", textDecoration: "none", opacity: 0.7 }}>Discord</a>
      </footer>
    </div>
  );
}
