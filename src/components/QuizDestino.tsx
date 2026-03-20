"use client";

import { useState } from "react";

const Qs = [
  {
    t: "A Fratura Primordial rasgou o céu de Veyrath. Você desperta numa caverna com um Fragmento de Éter pulsando no peito. Seu primeiro instinto é...",
    ops: [
      { l: "⚔️ Empunhar o que tiver à mão e proteger quem está próximo", s: "Protetor nato", v: { r: 1, c: 0, p: 1 } },
      { l: "👁️ Observar em silêncio, mapear saídas, agir com precisão", s: "Calculista nato", v: { r: 3, c: 1, p: 7 } },
      { l: "✨ Sentir a energia do Fragmento e tentar canalizá-la", s: "Sensível ao Éter", v: { r: 5, c: 2, p: 3 } },
      { l: "⚗️ Estudar o ambiente, coletar amostras, entender o que ocorreu", s: "Pesquisador compulsivo", v: { r: 2, c: 2, p: 6 } },
    ],
  },
  {
    t: "Você chega à cidade de Aurenthia. O ferreiro Thalor da Forja Eterna te oferece trabalho. O que você prefere fazer?",
    ops: [
      { l: "🔨 Aprender o Ritual da Forja — bater metal é meditação", s: "Artífice paciente", v: { r: 1, c: 0, p: 1 } },
      { l: "💎 Trabalhar com gemas e acessórios na bancada de Lirael", s: "Perfeccionista detalhista", v: { r: 2, c: 2, p: 4 } },
      { l: "🗡️ Ir direto para o quartel treinar com Veyra, a Lâmina Sombria", s: "Combatente focado", v: { r: 3, c: 1, p: 2 } },
      { l: "📦 Preferir negociar e descobrir o que o mercado negro tem a oferecer", s: "Oportunista esperto", v: { r: 5, c: 1, p: 8 } },
    ],
  },
  {
    t: "Você enfrenta um monstro corrompido de Kaelorn. Qual é sua abordagem de combate?",
    ops: [
      { l: "🛡️ Ficar na frente, absorver os golpes, proteger os aliados", s: "Muralha viva", v: { r: 1, c: 0, p: 1 } },
      { l: "🌀 Conjurar feitiços do Éter e amplificar minha Aura com o Arcano", s: "Mestre arcano", v: { r: 5, c: 2, p: 3 } },
      { l: "🏹 Usar venenos do Alquimista Zephyr e atacar pelo flanco", s: "Assassino tático", v: { r: 3, c: 1, p: 6 } },
      { l: "🍖 Preparar rações do Caldeirão Viajante antes — comida é vantagem", s: "Estrategista de suporte", v: { r: 2, c: 0, p: 5 } },
    ],
  },
  {
    t: "O Cartógrafo Eldrin oferece um portal raro para Kaelorn — reino de PvP livre e corrupção total. O que você faz?",
    ops: [
      { l: "💀 Entro sem hesitar — risco alto, recompensa lendária", s: "Caçador de glória", v: { r: 5, c: 1, p: 7 } },
      { l: "🗺️ Peço os mapas primeiro, planejo cada passo antes de cruzar", s: "Explorador metódico", v: { r: 4, c: 0, p: 7 } },
      { l: "🔮 Só entro com minha Aura amplificada e uma poção de resistência", s: "Preparado para o caos", v: { r: 5, c: 2, p: 6 } },
      { l: "🤝 Organizo um grupo antes — Kaelorn não é lugar para ir sozinho", s: "Líder natural", v: { r: 1, c: 0, p: 1 } },
    ],
  },
  {
    t: "Nos Reinos Fraturados, qual ambiente ressoa com sua alma?",
    ops: [
      { l: "☀️ Planaltos dourados de Aurenthia — ruínas ancestrais sob céu claro", s: "Alma da luz", v: { r: 1, c: 0, p: 4 } },
      { l: "🌿 Florestas colossais de Sylphae — cachoeiras e segredos escondidos", s: "Espírito selvagem", v: { r: 2, c: 2, p: 5 } },
      { l: "❄️ Montanhas geladas de Glacieryn — silêncio e força absoluta", s: "Guardião resistente", v: { r: 4, c: 0, p: 2 } },
      { l: "🌑 Pântanos de Obsidryn — névoa, perigo e oportunidades ocultas", s: "Filho das sombras", v: { r: 3, c: 1, p: 8 } },
    ],
  },
  {
    t: "Ao nível 50, sua subclasse é permanente. Qual legado você deixa gravado nos anais de Veyrath?",
    ops: [
      { l: "👑 Fundador de um Clã lendário que dominou três reinos", s: "Líder eterno", v: { r: 1, c: 0, p: 1 } },
      { l: "⚗️ O Alquimista que criou a poção que mudou o PvP", s: "Artesão do caos", v: { r: 3, c: 2, p: 6 } },
      { l: "🗺️ O primeiro a mapear toda a Fratura Primordial", s: "Explorador lendário", v: { r: 4, c: 1, p: 7 } },
      { l: "💰 O Mercador das Sombras que controlou a economia de Kaelorn", s: "Senhor da economia", v: { r: 5, c: 1, p: 8 } },
    ],
  },
];

const REINOS: Record<number, { n: string; c: string; ct: string; d: string }> = {
  1: { n: "Aurenthia", c: "Protetor", ct: "— Vanguarda do Reino", d: "Os planaltos dourados te reconhecem como um dos seus. Você carrega a essência dos heróis ancestrais — protetor nato, líder silencioso. O Fragmento de Éter no seu peito brilha com veias cyan-douradas." },
  2: { n: "Sylphae", c: "Teurgo", ct: "— Mestre do Éter", d: "A selva vertical de Sylphae te chama com suas cachoeiras colossais e segredos milenares. Você vê onde outros são cegos, sente o que outros ignoram." },
  3: { n: "Obsidryn", c: "Algoz", ct: "— Lâmina das Sombras", d: "As águas negras de Obsidryn espelham sua alma. Névoa perpétua, perigo em cada sombra — mas também oportunidades que só os mais perspicazes enxergam." },
  4: { n: "Glacieryn", c: "Protetor", ct: "— Vanguarda do Reino", d: "Ventos cortantes e neve eterna de Glacieryn forjaram sua determinação. Você suporta o que quebraria qualquer outro. Sua força não grita — ela resiste." },
  5: { n: "Kaelorn", c: "Algoz", ct: "— Lâmina das Sombras", d: "O epicentro da Corrupção te reconhece como igual. Kaelorn é o único reino de PvP livre — onde os fracos morrem e os fortes escrevem a história." },
};

const PROFS: Record<number, { n: string; npc: string; d: string }> = {
  1: { n: "Ferreiro", npc: "Thalor da Forja Eterna", d: "Você domina o Ritual da Forja — o processo sagrado de têmpera que cria equipamentos impossíveis de obter de outra forma. Protetores e guerreiros dependem de você." },
  2: { n: "Armeiro", npc: "Veyra, a Lâmina Sombria", d: "Especialista em armas leves e reforços elementais. Algozes te buscam para obter as armas que definem batalhas." },
  3: { n: "Arcano", npc: "Arcanis, Tecelão de Runas", d: "Você cria itens mágicos, catalisadores e amplificadores de Aura. Teurgos não sobrevivem sem você." },
  4: { n: "Joalheiro", npc: "Lirael, Joias do Destino", d: "Acessórios com resistências, crítico e redução de cooldown. Toda classe em Veyrath precisa do que você cria." },
  5: { n: "Cozinheiro", npc: "Margo, Caldeirão Viajante", d: "Uma ração ativa por categoria — mas o efeito que ela gera muda batalhas inteiras. Em PvP de longa duração, quem tem suas rações sobrevive mais." },
  6: { n: "Alquimista", npc: "Zephyr, Frascos Proibidos", d: "Poções, venenos e encantamentos. Receitas raras de endgame que só um Alquimista nível 50 desbloqueia. Seu poder no PvP é indireto — e letal." },
  7: { n: "Senhor dos Mapas", npc: "Eldrin, Cartógrafo Ancestral", d: "Mapas consumíveis, portais, chaves de dungeon — você controla o acesso ao mundo. Ninguém explora sem você." },
  8: { n: "Mercador das Sombras", npc: "Kael, o Mercador", d: "Contratos player/NPC, contrabando de alto risco e recompensa. Você joga com a economia emergente de Veyrath." },
};

function calcResult(answers: { r: number; c: number; p: number }[]) {
  const rs: Record<number, number> = {};
  const cs: Record<number, number> = {};
  const ps: Record<number, number> = {};
  answers.forEach((a) => {
    rs[a.r] = (rs[a.r] || 0) + 1;
    cs[a.c] = (cs[a.c] || 0) + 1;
    ps[a.p] = (ps[a.p] || 0) + 1;
  });
  const r = +Object.keys(rs).sort((a, b) => rs[+b] - rs[+a])[0];
  const c = +Object.keys(cs).sort((a, b) => cs[+b] - cs[+a])[0];
  const p = +Object.keys(ps).sort((a, b) => ps[+b] - ps[+a])[0];
  return { reino: REINOS[r] || REINOS[1], prof: PROFS[p] || PROFS[1] };
}

export default function QuizDestino() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<{ r: number; c: number; p: number }[]>([]);
  const [result, setResult] = useState<{ reino: (typeof REINOS)[1]; prof: (typeof PROFS)[1] } | null>(null);
  const [fundador] = useState(() => "#" + (Math.floor(Math.random() * 600) + 800));
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const pick = (v: { r: number; c: number; p: number }) => {
    const next = [...answers, v];
    if (step + 1 < Qs.length) {
      setAnswers(next);
      setStep(step + 1);
    } else {
      setAnswers(next);
      setResult(calcResult(next));
    }
  };

  const registrar = async () => {
    if (!email || !email.includes("@")) return;
    setLoading(true);
    try {
      await fetch("https://formspree.io/f/mojkroly", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          reino: result?.reino.n,
          classe: result?.reino.c + " " + result?.reino.ct,
          profissao: result?.prof.n + " · " + result?.prof.npc,
          fundador,
        }),
      });
    } catch {}
    setLoading(false);
    setEnviado(true);
  };

  const reiniciar = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
    setEmail("");
    setEnviado(false);
  };

  if (result) {
    return (
      <div className="quiz-container">
        <p className="r-classe">{result.reino.c} {result.reino.ct}</p>
        <p className="r-reino">{result.reino.n}</p>
        <p className="r-prof">Profissão: {result.prof.n} · {result.prof.npc}</p>
        <div className="num-box">
          <p className="num-lbl">Fundador Número</p>
          <p className="num-val">{fundador}</p>
          <p className="num-sub">Sua lenda precede a de todos</p>
        </div>
        <p className="r-desc">{result.reino.d}</p>
        <div className="r-pdesc">⚒ {result.prof.d}</div>
        <p className="q-counter">Já <b>1.043</b> heróis reservaram seu lugar</p>
        {!enviado ? (
          <div className="email-row">
            <input
              className="email-in"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn-gold" onClick={registrar} disabled={loading}>
              {loading ? "..." : "Registrar lenda"}
            </button>
          </div>
        ) : (
          <div className="q-confirmed">✦ Lenda registrada — você será notificado no lançamento em 2027</div>
        )}
        <p className="q-share">Compartilhe seu resultado com a comunidade de Veyrath</p>
        <button className="btn-restart" onClick={reiniciar}>Tentar novamente</button>
      </div>
    );
  }

  const q = Qs[step];
  return (
    <div className="quiz-container">
      <div className="prog">
        {Qs.map((_, i) => (
          <div key={i} className={`qdot${i < step ? " qd" : i === step ? " qa" : ""}`} />
        ))}
      </div>
      <p className="qtext">{q.t}</p>
      <div className="qopts">
        {q.ops.map((o, i) => (
          <button key={i} className="qopt" onClick={() => pick(o.v)}>
            <strong>{o.l}</strong>
            <span>{o.s}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
