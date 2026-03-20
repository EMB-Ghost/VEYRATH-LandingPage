"use client";

import { useState, useEffect } from "react";

const CENAS = [
  {
    id: 1,
    ambiencia: "Uma caverna. Escuridão total. Você não sabe seu nome.",
    narrativa: "Você acorda com o gosto de sangue na boca e pedra fria no rosto. No centro do seu peito, algo pulsa — um cristal pequeno, cyan e dourado, visível através da sua pele. Ele bate como um segundo coração.",
    tensao: "Do lado de fora da caverna, você ouve passos. Muitos passos.",
    pergunta: "O que o Fragmento de Éter desperta em você neste momento?",
    opcoes: [
      { icone: "🛡️", titulo: "Dever", texto: "Alguém pode estar em perigo. Me levanto — mesmo sem saber quem sou.", sombra: false, v: { r: 1, c: 0, p: 1, l: 0 } },
      { icone: "🗡️", titulo: "Instinto", texto: "Me encolho nas sombras. Observo. Identifico a ameaça antes de agir.", sombra: false, v: { r: 3, c: 1, p: 7, l: 0 } },
      { icone: "✨", titulo: "Poder", texto: "Foco no Fragmento. Sinto algo imensurável pulsando — e quero mais.", sombra: true, v: { r: 5, c: 2, p: 3, l: 1 } },
      { icone: "💀", titulo: "Sede", texto: "Que venham. Quem quer que sejam, vão se arrepender de me encontrar aqui.", sombra: true, v: { r: 5, c: 1, p: 8, l: 1 } },
    ],
  },
  {
    id: 2,
    ambiencia: "Aurenthia. Planaltos dourados. Ruínas de uma era que não existe mais.",
    narrativa: "O guarda de Aurenthia te encontrou e te trouxe até a cidade. Ele aponta para o Fragmento no seu peito com olhos arregalados: \"Isso... só existe em lendas. Você é um Exilado do Éter.\"",
    tensao: "Ele hesita antes de completar: \"A última vez que um Exilado apareceu, metade de Veyrath desapareceu.\"",
    pergunta: "Como você responde ao guarda?",
    opcoes: [
      { icone: "🤝", titulo: "Aliança", texto: "\"Me conte tudo. Quero entender o que sou — e como posso ajudar.\"", sombra: false, v: { r: 1, c: 0, p: 1, l: 0 } },
      { icone: "👁️", titulo: "Silêncio", texto: "Você não responde. Apenas observa os olhos dele — procurando mentiras.", sombra: false, v: { r: 3, c: 1, p: 7, l: 0 } },
      { icone: "⚡", titulo: "Ambição", texto: "\"Se sou um Exilado, posso fazer coisas que ninguém mais pode. Certo?\"", sombra: true, v: { r: 5, c: 2, p: 3, l: 1 } },
      { icone: "😈", titulo: "Ameaça", texto: "\"Se metade de Veyrath desapareceu antes... imagine se me irritarem.\"", sombra: true, v: { r: 5, c: 1, p: 8, l: 1 } },
    ],
  },
  {
    id: 3,
    ambiencia: "A Fratura Primordial. Uma ferida no mundo visível do horizonte.",
    narrativa: "Do alto das muralhas, você vê ela pela primeira vez: uma cicatriz colossal que divide o continente. Luz cyan vaza de suas bordas. A Corrupção pulsa lá dentro como um coração negro.",
    tensao: "Seu Fragmento vibra violentamente. Algo — ou alguém — dentro da Fratura está chamando pelo seu nome.",
    pergunta: "O que você sente ao ver a Fratura Primordial?",
    opcoes: [
      { icone: "😤", titulo: "Repulsa", texto: "Isso precisa ser selado. Seja o que for que está lá dentro, não pertence a este mundo.", sombra: false, v: { r: 1, c: 0, p: 4, l: 0 } },
      { icone: "🔍", titulo: "Curiosidade", texto: "Quem colocou meu nome na voz que me chama? O que ela sabe sobre mim?", sombra: false, v: { r: 4, c: 2, p: 7, l: 0 } },
      { icone: "🔥", titulo: "Atração", texto: "A energia que emana daquela fenda... sinto que pertenço a ela.", sombra: true, v: { r: 5, c: 2, p: 6, l: 1 } },
      { icone: "👑", titulo: "Ambição", texto: "Quem controlar aquela energia controla Veyrath. Eu preciso entrar.", sombra: true, v: { r: 5, c: 1, p: 8, l: 1 } },
    ],
  },
  {
    id: 4,
    ambiencia: "Kaelorn. O reino corrompido. Onde as regras de civilização não existem.",
    narrativa: "Você chegou a Kaelorn — o único reino onde o PvP é livre e a Corrupção é total. Um guerreiro com armadura negra te para na entrada. Atrás dele, três cadáveres. Ele sorri: \"Novo? Aqui, o mais fraco alimenta o mais forte.\"",
    tensao: "Seu Fragmento queima. A Corrupção deste lugar testa seu controle.",
    pergunta: "O guerreiro de Kaelorn avança. Como você responde?",
    opcoes: [
      { icone: "🛡️", titulo: "Honra", texto: "\"Venha então. Mas saiba que não caio facilmente.\" Você enfrenta de frente.", sombra: false, v: { r: 1, c: 0, p: 2, l: 0 } },
      { icone: "🌑", titulo: "Astúcia", texto: "Você sorri e contorna — não veio até aqui para lutar na entrada.", sombra: false, v: { r: 3, c: 1, p: 8, l: 0 } },
      { icone: "💀", titulo: "Brutalidade", texto: "Você ataca primeiro. Aqui não é lugar para hesitação — ou ele cai, ou você cai.", sombra: true, v: { r: 5, c: 1, p: 6, l: 1 } },
      { icone: "🔮", titulo: "Corrupção", texto: "O Fragmento pulsa negro. Você deixa a Corrupção fluir — só para vê-lo recuar.", sombra: true, v: { r: 5, c: 2, p: 3, l: 1 } },
    ],
  },
  {
    id: 5,
    ambiencia: "Nível 50. A Câmara do Primeiro Selo. Um lugar que existe fora do tempo.",
    narrativa: "Depois de meses em Veyrath, você chegou. A Câmara do Primeiro Selo — acessível apenas uma vez na vida. No centro, o Fragmento no seu peito emite uma luz que ilumina tudo.",
    tensao: "Duas vozes falam:\n\n\"Sela a Corrupção. Restaura o que foi destruído. Torna-te o Herdeiro do Éter.\"\n\n\"Abraça a Fratura. Domina o novo mundo que nascerá das cinzas.\"",
    pergunta: "Esta escolha é permanente e irreversível. Qual é o seu destino?",
    opcoes: [
      { icone: "🌟", titulo: "Herdeiro do Éter", texto: "Eu vou reparar a Fratura. Mesmo que custe tudo que sou.", sombra: false, v: { r: 1, c: 0, p: 1, l: 0 } },
      { icone: "⚖️", titulo: "Guardião do Equilíbrio", texto: "Serei o equilíbrio entre as duas forças. Nenhuma deve dominar.", sombra: false, v: { r: 2, c: 2, p: 4, l: 0 } },
      { icone: "🌑", titulo: "Arauto da Fratura", texto: "A Corrupção não é o inimigo — é evolução. Eu vou dominá-la.", sombra: true, v: { r: 5, c: 2, p: 3, l: 1 } },
      { icone: "👿", titulo: "Rei das Cinzas", texto: "Que Veyrath queime. Das cinzas, construirei algo que nunca existiu.", sombra: true, v: { r: 5, c: 1, p: 8, l: 1 } },
    ],
  },
];

const RESULTADOS: Record<string, {
  titulo: string; subtitulo: string; reino: string; classe: string;
  profissao: string; npcProfissao: string; linhagem: string; corLinhagem: string;
  descricao: string; destino: string; poder: string;
}> = {
  "luz-protetor": {
    titulo: "Herdeiro do Éter", subtitulo: "— Protetor de Aurenthia",
    reino: "Aurenthia", classe: "Protetor", profissao: "Ferreiro", npcProfissao: "Thalor da Forja Eterna",
    linhagem: "Linhagem da Luz", corLinhagem: "#7dd4f0",
    descricao: "Você carrega o peso de um mundo nos ombros — e escolheu não dobrar. O Fragmento no seu peito brilha cyan puro e dourado, veias luminosas que pulsam ao ritmo da sua determinação. Aurenthia te reconhece como filho de volta para casa.",
    destino: "Seu caminho leva à Câmara do Primeiro Selo. Você vai selar a Fratura — não porque é fácil, mas porque ninguém mais vai fazer isso.",
    poder: "Veias cyan-douradas. Asas etéreas ao ativar a Aura. -30% Corrupção. A luz te segue.",
  },
  "luz-algoz": {
    titulo: "Lâmina do Éter", subtitulo: "— Algoz de Obsidryn",
    reino: "Obsidryn", classe: "Algoz", profissao: "Senhor dos Mapas", npcProfissao: "Eldrin, Cartógrafo Ancestral",
    linhagem: "Linhagem da Luz", corLinhagem: "#7dd4f0",
    descricao: "Você opera nas sombras — mas pelo lado certo. Nos pântanos de Obsidryn, você é o perigo que ninguém viu vir. O Fragmento pulsa suave, quase invisível. E ainda assim, você escolheu proteger.",
    destino: "Você vai selar a Fratura por dentro. Infiltração, precisão, sacrifício silencioso. Ninguém saberá seu nome — até que seja tarde demais.",
    poder: "Movimentos imperceptíveis. Portais exclusivos. O inimigo não sabe que você já ganhou.",
  },
  "luz-teurgo": {
    titulo: "Tecelão do Éter", subtitulo: "— Teurgo de Sylphae",
    reino: "Sylphae", classe: "Teurgo", profissao: "Arcano", npcProfissao: "Arcanis, Tecelão de Runas",
    linhagem: "Linhagem da Luz", corLinhagem: "#7dd4f0",
    descricao: "A floresta densa de Sylphae pulsa com a mesma frequência do seu Fragmento. Você não combate a Corrupção com força — você a reescreve. Cada feitiço é uma frase na gramática de um mundo que tenta se reconstituir.",
    destino: "O Pêndulo do Éter responde a você. Quando você canaliza a Aura completa, o mundo inteiro sente o impacto.",
    poder: "Aura amplificada. Catalisadores únicos. Quando você fala, o Éter escuta.",
  },
  "sombra-protetor": {
    titulo: "Guardião das Cinzas", subtitulo: "— Protetor de Glacieryn",
    reino: "Glacieryn", classe: "Protetor", profissao: "Armeiro", npcProfissao: "Veyra, a Lâmina Sombria",
    linhagem: "Linhagem da Sombra", corLinhagem: "#a855f7",
    descricao: "Você abraçou a escuridão — mas não se perdeu nela. Em Glacieryn, onde o frio eterno mata os fracos, você sobreviveu. O Fragmento ganhou veias negras pulsantes sobre o cyan. Você protege os seus pelo preço que for necessário.",
    destino: "Pode absorver 1 morte por dia sem perder nada. Você já morreu — e voltou mais forte. Isso diz tudo sobre quem você é.",
    poder: "Olhos negros com íris cyan. Fumaça ao se mover. +25% dano em Kaelorn. A morte te conhece pelo nome.",
  },
  "sombra-algoz": {
    titulo: "Arauto da Fratura", subtitulo: "— Algoz de Kaelorn",
    reino: "Kaelorn", classe: "Algoz", profissao: "Mercador das Sombras", npcProfissao: "Kael, o Mercador",
    linhagem: "Linhagem da Sombra", corLinhagem: "#a855f7",
    descricao: "Kaelorn te chama pelo nome. A Corrupção que outros temem é, para você, um idioma fluente. O Fragmento pulsa negro — veias que cortam como facas sob a pele. Você não precisa ser o herói. Heróis morrem esquecidos.",
    destino: "O Trono de Kaelorn espera. Cinquenta guerreiros corrompidos te seguirão — ou serão eliminados no processo.",
    poder: "Rasgo no chão ao se mover. Caminhos Corrompidos exclusivos. O mundo teme o que não consegue nomear.",
  },
  "sombra-teurgo": {
    titulo: "Devorador do Éter", subtitulo: "— Teurgo de Kaelorn",
    reino: "Kaelorn", classe: "Teurgo", profissao: "Alquimista", npcProfissao: "Zephyr, Frascos Proibidos",
    linhagem: "Linhagem da Sombra", corLinhagem: "#a855f7",
    descricao: "A Corrupção não te consumiu — você a consumiu. O Fragmento virou algo que não existe em nenhum grimório. Você canaliza energias que os Guardiões Ancestrais passaram séculos tentando suprimir.",
    destino: "O Despertar do Devorador. Você vai libertar um fragmento da entidade primordial. Veyrath nunca mais será o mesmo.",
    poder: "Feitiços que reescrevem a realidade. +20% potência em zonas de risco. O Eclipse Eterno começa com você.",
  },
};

function calcResultado(answers: { r: number; c: number; p: number; l: number }[]) {
  const ls: Record<number, number> = {};
  const cs: Record<number, number> = {};
  answers.forEach((a) => {
    ls[a.l] = (ls[a.l] || 0) + 1;
    cs[a.c] = (cs[a.c] || 0) + 1;
  });
  const linhagem = (ls[0] || 0) >= (ls[1] || 0) ? "luz" : "sombra";
  const classeId = +Object.keys(cs).sort((a, b) => cs[+b] - cs[+a])[0];
  const classeNome = classeId === 0 ? "protetor" : classeId === 1 ? "algoz" : "teurgo";
  return RESULTADOS[`${linhagem}-${classeNome}`] || RESULTADOS["luz-protetor"];
}

export default function QuizDestino() {
  const [cena, setCena] = useState(0);
  const [answers, setAnswers] = useState<{ r: number; c: number; p: number; l: number }[]>([]);
  const [resultado, setResultado] = useState<(typeof RESULTADOS)[string] | null>(null);
  const [fundador] = useState(() => "#" + (Math.floor(Math.random() * 600) + 800));
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fade, setFade] = useState(true);
  const [mostrarOpcoes, setMostrarOpcoes] = useState(false);

  useEffect(() => {
    setFade(true);
    setMostrarOpcoes(false);
    const t = setTimeout(() => setMostrarOpcoes(true), 600);
    return () => clearTimeout(t);
  }, [cena]);

  const escolher = (v: { r: number; c: number; p: number; l: number }) => {
    setFade(false);
    const next = [...answers, v];
    setTimeout(() => {
      if (cena + 1 < CENAS.length) {
        setCena(cena + 1);
        setAnswers(next);
        setFade(true);
      } else {
        setResultado(calcResultado(next));
      }
    }, 350);
  };

  const registrar = async () => {
    if (!email || !email.includes("@")) return;
    setLoading(true);
    try {
      await fetch("https://formspree.io/f/mojkroly", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, titulo: resultado?.titulo, linhagem: resultado?.linhagem, reino: resultado?.reino, classe: resultado?.classe, fundador }),
      });
    } catch {}
    setLoading(false);
    setEnviado(true);
  };

  const reiniciar = () => {
    setCena(0); setAnswers([]); setResultado(null);
    setEmail(""); setEnviado(false); setFade(true);
  };

  const luzCount = answers.filter((a) => a.l === 0).length;
  const sombraCount = answers.filter((a) => a.l === 1).length;

  if (resultado) {
    const isLuz = resultado.linhagem === "Linhagem da Luz";
    return (
      <div className="quiz-resultado">
        <p className="qr-linhagem" style={{ color: resultado.corLinhagem }}>{resultado.linhagem.toUpperCase()}</p>
        <h3 className="qr-titulo">{resultado.titulo}</h3>
        <p className="qr-subtitulo">{resultado.subtitulo}</p>

        <div className={`qr-cristal ${isLuz ? "qr-cristal-luz" : "qr-cristal-sombra"}`}>
          <span>{isLuz ? "✦" : "✧"}</span>
        </div>

        <p className="qr-poder" style={{ color: resultado.corLinhagem }}>{resultado.poder}</p>

        <p className="qr-desc">{resultado.descricao}</p>
        <p className="qr-destino">"{resultado.destino}"</p>

        <div className="qr-grid">
          <div className="qr-item"><span className="qr-item-label">Reino</span><span className="qr-item-val">{resultado.reino}</span></div>
          <div className="qr-item"><span className="qr-item-label">Classe</span><span className="qr-item-val">{resultado.classe}</span></div>
          <div className="qr-item"><span className="qr-item-label">Profissão</span><span className="qr-item-val">{resultado.profissao}</span></div>
          <div className="qr-item"><span className="qr-item-label">Mestre</span><span className="qr-item-val">{resultado.npcProfissao}</span></div>
        </div>

        <div className="qr-fundador">
          <p className="qr-fund-label">Fundador Número</p>
          <p className="qr-fund-num">{fundador}</p>
          <p className="qr-fund-sub">Sua lenda está escrita antes do lançamento</p>
        </div>

        <p className="qr-counter">Já <b>1.043</b> heróis escolheram seu destino em Veyrath</p>

        {!enviado ? (
          <div className="qr-email-row">
            <input className="qr-email-in" type="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button className="btn-gold" onClick={registrar} disabled={loading}>{loading ? "..." : "Registrar Lenda"}</button>
          </div>
        ) : (
          <p className="qr-confirmado">✦ Lenda registrada — você será notificado no lançamento de Veyrath em 2027</p>
        )}

        <button className="btn-restart" onClick={reiniciar}>Reescrever meu destino</button>
      </div>
    );
  }

  const c = CENAS[cena];
  return (
    <div className={`quiz-cena ${fade ? "qcena-in" : "qcena-out"}`}>
      <div className="qprog">
        {CENAS.map((_, i) => (
          <div key={i} className={`qprog-dot ${i < cena ? "qprog-done" : i === cena ? "qprog-active" : ""}`} />
        ))}
        <span className="qprog-num">{cena + 1} / {CENAS.length}</span>
      </div>

      {cena > 0 && (
        <div className="qpendulo">
          <span className="qpend-label qpend-luz-label">Luz</span>
          <div className="qpend-barra">
            <div className="qpend-luz-fill" style={{ width: `${(luzCount / cena) * 100}%` }} />
            <div className="qpend-sombra-fill" style={{ width: `${(sombraCount / cena) * 100}%` }} />
          </div>
          <span className="qpend-label qpend-sombra-label">Sombra</span>
        </div>
      )}

      <p className="qcena-ambiencia">{c.ambiencia}</p>
      <p className="qcena-narrativa">{c.narrativa}</p>
      <p className="qcena-tensao">{c.tensao}</p>
      <p className="qcena-pergunta">{c.pergunta}</p>

      <div className={`qcena-opts ${mostrarOpcoes ? "qopts-show" : ""}`}>
        {c.opcoes.map((op, i) => (
          <button
            key={i}
            className={`qcena-opt ${op.sombra ? "qopt-sombra" : "qopt-luz"}`}
            onClick={() => escolher(op.v)}
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <span className="qopt-icone">{op.icone}</span>
            <div className="qopt-body">
              <strong className="qopt-titulo">{op.titulo}</strong>
              <span className="qopt-texto">{op.texto}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
