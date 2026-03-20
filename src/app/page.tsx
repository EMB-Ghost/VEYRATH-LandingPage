import CustomCursor from "@/components/CustomCursor";
import StarfieldCanvas from "@/components/StarfieldCanvas";
import ClassSelector from "@/components/ClassSelector";
import Countdown from "@/components/Countdown";
import ScrollReveal from "@/components/ScrollReveal";
import {
  navigation,
  hero,
  lore,
  realms,
  classes,
  profissoes,
  sistemas,
  preorder,
  ctaFinal,
  partners,
  footer,
  links,
} from "@/data/site";

export default function Home() {
  return (
    <>
      {/* Client-side interactive elements */}
      <CustomCursor />
      <StarfieldCanvas />
      <ScrollReveal />

      {/* ============================================================
          NAVIGATION
          ============================================================ */}
      <nav className="veyrath-nav" id="veyrath-nav">
        <a href="#hero" className="veyrath-logo">
          <div className="veyrath-logo-mark" />
          {navigation.logo}
        </a>
        <ul className="veyrath-nav-menu">
          {navigation.menu.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="veyrath-nav-ctas">
          <a href={links.discord}>
            <button className="btn-ghost">{navigation.ctaDiscord}</button>
          </a>
          <a href="#quiz">
            <button className="btn-gold">{navigation.ctaSteam}</button>
          </a>
        </div>
      </nav>

      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="veyrath-hero" id="hero">
        <div className="hero-atm" />
        <div className="hero-grid" />
        <div className="hero-vig" />

        {/* Video background */}
        <video
          className="hero-video"
          src="/trailer.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Floating runes */}
        {hero.runes.map((rune, i) => {
          const positions = [
            { left: "8%", top: "65%", delay: "0s" },
            { left: "18%", top: "70%", delay: "2s" },
            { left: "75%", top: "60%", delay: "1s" },
            { left: "85%", top: "72%", delay: "3s" },
            { left: "50%", top: "80%", delay: "4s" },
            { left: "35%", top: "68%", delay: "1.5s" },
            { left: "62%", top: "75%", delay: "2.5s" },
          ];
          const pos = positions[i] ?? { left: `${10 + i * 12}%`, top: "70%", delay: `${i}s` };
          return (
            <span
              key={i}
              className="rune-float"
              style={{ left: pos.left, top: pos.top, animationDelay: pos.delay }}
            >
              {rune}
            </span>
          );
        })}

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eline" />
            {hero.eyebrow}
            <span className="eline r" />
          </div>

          <h1 className="hero-title">{hero.title}</h1>

          <p className="hero-tagline">{hero.tagline}</p>

          <div className="hero-divider">
            <span />
            <span>◆</span>
            <span
              style={{
                background:
                  "linear-gradient(to left, transparent, var(--border-hi))",
              }}
            />
          </div>

          <div className="hero-ctas">
            <a href="#quiz">
              <button className="cta-main">{hero.ctaPrimary}</button>
            </a>
            <a href={links.discord}>
              <button className="cta-outline">{hero.ctaSecondary}</button>
            </a>
          </div>

          <div className="hero-badges">
            {hero.badges.map((badge) => (
              <div key={badge} className="hero-badge">
                <span className="badge-dot" />
                {badge}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-scroll">
          <span className="scroll-text">{hero.scrollLabel}</span>
          <div className="scroll-track" />
        </div>
      </section>

        {/* ============================================================
          LORE
          ============================================================ */}
      <section className="veyrath-lore" id="lore">
        <div className="section-inner">
          <div className="lore-grid">
            <div className="lore-text" data-reveal>
              <p className="s-label">{lore.label}</p>
              <h2 className="s-title">
                {lore.titleLine1}
                <br />
                <em>{lore.titleLine2}</em>
              </h2>
              {lore.paragraphs.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
              <div className="lore-stats">
                {lore.stats.map((stat) => (
                  <div key={stat.label} className="lore-stat" data-reveal>
                    <div className="lore-stat-num">{stat.number}</div>
                    <div className="lore-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lore-visual" data-reveal-right>
              <video
                className="lore-video"
                src="/lore-video.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          REALMS
          ============================================================ */}
      <section className="veyrath-realms" id="realms">
        <div className="section-inner realms-intro" data-reveal>
          <p className="s-label">{realms.label}</p>
          <h2 className="s-title">
            {realms.titleLine1} <em>{realms.titleLine2}</em>
          </h2>
        </div>

        <div className="realms-scroll-track">
          {realms.cards.map((card) => (
            <div key={card.id} className="realm-card" data-reveal>
              <div className="realm-card-art">
                <img src={card.image} alt={card.name} className="w-full h-full object-cover" />
              </div>
              <div className="realm-card-body">
                <p className="realm-id">{card.id}</p>
                <h3 className="realm-name">{card.name}</h3>
                <p className="realm-desc">{card.description}</p>
                <span className="realm-badge">{card.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          PROFISSÕES
          ============================================================ */}
      <section className="veyrath-profissoes" id="profissoes">
        <div className="section-inner profissoes-intro" data-reveal>
          <p className="s-label">{profissoes.label}</p>
          <h2 className="s-title">
            {profissoes.titleLine1} <em>{profissoes.titleLine2}</em>
          </h2>
        </div>

        <div className="profissoes-scroll-track">
          {profissoes.cards.map((card) => (
            <div key={card.id} className="prof-card" data-reveal>
              <div className="prof-card-art">
                <img src={card.image} alt={card.name} />
              </div>
              <div className="prof-card-body">
                <p className="prof-id">{card.id}</p>
                <h3 className="prof-name">{card.name}</h3>
                <p className="prof-desc">{card.description}</p>
                <span className="prof-badge">{card.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          CLASSES
          ============================================================ */}
      <section className="veyrath-classes" id="classes">
        <div className="classes-bg-glow" />
        <div className="section-inner">
          <div className="classes-intro" data-reveal>
            <p className="s-label">{classes.label}</p>
            <h2 className="s-title">
              {classes.titleLine1} <em>{classes.titleLine2}</em>
            </h2>
          </div>
          <ClassSelector classes={classes.list} />
        </div>
      </section>

      {/* ============================================================
          QUIZ DO DESTINO
          ============================================================ */}
      <section className="veyrath-quiz" id="quiz">
        <div className="section-inner quiz-intro" data-reveal>
          <p className="s-label">Oráculo dos Reinos Fraturados</p>
          <h2 className="s-title">QUAL É O SEU <em>DESTINO?</em></h2>
          <p className="quiz-sub">6 perguntas revelam seu Reino, Classe e Profissão em Veyrath</p>
        </div>
        <div className="quiz-container" data-reveal>
          <div id="quiz-inner">
            <div id="qbody">
              <div className="prog" id="prog"></div>
              <p className="qtext" id="qtext"></p>
              <div className="qopts" id="opts"></div>
            </div>
            <div className="qresult" id="rbody">
              <p className="r-classe" id="r-classe"></p>
              <p className="r-reino" id="r-reino"></p>
              <p className="r-prof" id="r-prof"></p>
              <div className="num-box">
                <p className="num-lbl">Fundador Número</p>
                <p className="num-val" id="r-num"></p>
                <p className="num-sub">Sua lenda precede a de todos</p>
              </div>
              <p className="r-desc" id="r-desc"></p>
              <div className="r-pdesc" id="r-pdesc"></div>
              <p className="q-counter">Já <b id="cnt">1.043</b> heróis reservaram seu lugar</p>
              <div className="email-row" id="erow">
                <input className="email-in" type="email" id="ein" placeholder="seu@email.com" />
                <button className="btn-gold" onClick={async () => {
                  const el = document.getElementById('ein') as HTMLInputElement;
                  const v = el.value;
                  if (!v || !v.includes('@')) { el.style.borderColor='rgba(226,75,74,0.5)'; return; }
                  try {
                    await fetch('https://formspree.io/f/mojkroly', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                      body: JSON.stringify({ email: v, reino: document.getElementById('r-reino')?.textContent, classe: document.getElementById('r-classe')?.textContent, profissao: document.getElementById('r-prof')?.textContent, fundador: document.getElementById('r-num')?.textContent })
                    });
                  } catch(e) {}
                  document.getElementById('erow')!.style.display='none';
                  document.getElementById('conf')!.classList.add('on');
                }}>Registrar lenda</button>
              </div>
              <div className="q-confirmed" id="conf">✦ Lenda registrada — você será notificado no lançamento em 2027</div>
              <p className="q-share">Compartilhe seu resultado com a comunidade de Veyrath</p>
              <button className="btn-restart" id="btn-restart">Tentar novamente</button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SYSTEMS
          ============================================================ */}
      <section className="veyrath-sistemas" id="sistemas">
        <div className="section-inner">
          <div className="sistemas-layout">
            <div className="sistemas-sticky" data-reveal-left>
              <p className="s-label">{sistemas.label}</p>
              <h2 className="s-title">
                {sistemas.titleLine1}
                <br />
                <em>{sistemas.titleLine2}</em>
              </h2>
              <p
                style={{
                  marginTop: "20px",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.05rem",
                  color: "var(--text-dim)",
                  lineHeight: "1.8",
                }}
              >
                {sistemas.intro}
              </p>
              <div className="sistemas-visual" style={{ marginTop: "48px" }}>
                <video
                  className="sistemas-video"
                  src="/sistemas-video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>

            <div className="sistemas-list" data-reveal-right>
              {sistemas.list.map((item, i) => (
                <div key={item.name} className={`sistema-item${i === 0 ? " active" : ""}`}>
                  <div className="sistema-header">
                    <div className="sistema-icon">{item.icon}</div>
                    <div>
                      <div className="sistema-cat">{item.category}</div>
                      <div className="sistema-name-h">{item.name}</div>
                    </div>
                  </div>
                  <div className="sistema-body">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PRE-ORDER
          ============================================================ */}
      <section className="veyrath-preorder" id="preorder">
        <div className="section-inner preorder-intro" data-reveal>
          <p className="s-label">{preorder.label}</p>
          <h2 className="s-title gold-text">{preorder.title}</h2>
          <p>{preorder.subtitle}</p>
        </div>

        <Countdown />

        <div className="packages" data-reveal>
          {preorder.packages.map((pkg) => (
            <div key={pkg.id} className={`pkg${pkg.featured ? " star" : ""}`}>
              <div className="pkg-top-bar" />
              {pkg.featured && pkg.featuredLabel && (
                <div className="pkg-label">{pkg.featuredLabel}</div>
              )}
              <div className="pkg-art">
                <img src={pkg.image} alt={pkg.name} />
              </div>
              <div className="pkg-body">
                <div className="pkg-tier">{pkg.tier}</div>
                <div className="pkg-name">{pkg.name}</div>
                <div className="pkg-price">{pkg.price}</div>
                <ul className="pkg-feats">
                  {pkg.features.map((feat, i) => (
                    <li key={i}>
                      <span className="feat-check">◆</span>
                      <div>
                        {feat.sub ? (
                          <>
                            <span className="feat-main">{feat.main}</span>
                            <span className="feat-sub">{feat.sub}</span>
                          </>
                        ) : (
                          feat.main
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
                {pkg.ctaStyle === "fill" ? (
                  <a href="#quiz">
                    <button className="btn-pkg-fill">{pkg.ctaLabel}</button>
                  </a>
                ) : (
                  <a href="#quiz">
                    <button className="btn-pkg-outline">{pkg.ctaLabel}</button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Legacy Rewards */}
        <div data-reveal>
          <div className="legacy-header">
            <div>
              <div className="legacy-title-h">{preorder.legacyRewards.title}</div>
              <div className="legacy-sub-h">{preorder.legacyRewards.subtitle}</div>
            </div>
            <a href={preorder.legacyRewards.viewAllHref} className="view-all-link">
              {preorder.legacyRewards.viewAllLabel}
            </a>
          </div>
          <div className="rewards">
            {preorder.legacyRewards.items.map((item) => (
              <div key={item.name} className="reward">
                <div className="reward-icon">{item.icon}</div>
                <div className="reward-name">{item.name}</div>
                <div className="reward-type">{item.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA FINAL
          ============================================================ */}
      <section className="veyrath-cta-final" id="cta-final">
        <div className="cta-bg" />
        <div
          className="section-inner"
          style={{ position: "relative", zIndex: 1 }}
          data-reveal
        >
          <p className="s-label" style={{ justifyContent: "center" }}>
            {ctaFinal.label}
          </p>
          <h2 className="cta-final-title">{ctaFinal.title}</h2>
          <p className="cta-final-sub">{ctaFinal.subtitle}</p>
          <a href="#quiz">
            <button
              className="cta-main"
              style={{ fontSize: ".9rem", padding: "18px 52px" }}
            >
              {ctaFinal.ctaLabel}
            </button>
          </a>
        </div>
      </section>

      {/* ============================================================
          PARTNERS
          ============================================================ */}
      <section className="veyrath-partners" id="partners">
        <div className="section-inner">
          <p className="partners-label">{partners.label}</p>
          <div className="partner-row">
            {partners.chips.map((chip) => (
              <div key={chip.label} className="partner-chip">
                {chip.label}
              </div>
            ))}
          </div>
          <div className="streamers">
            {partners.streamers.map((streamer) => (
              <div key={streamer.name} className="streamer">
                <div className="streamer-av">{streamer.avatar}</div>
                <div>
                  <div className="streamer-name-t">{streamer.name}</div>
                  <div className="streamer-plat">
                    <span className="twitch-badge">●</span> {streamer.platform}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FOOTER
          ============================================================ */}
      <footer className="veyrath-footer">
        <div className="footer-logo">{footer.logo}</div>
        <div className="footer-copy">{footer.copyright}</div>
        <div className="footer-socials">
          {footer.socials.map((social) => (
            <a key={social.label} href={social.href} className="soc-btn" aria-label={social.label}>
              {social.icon}
            </a>
          ))}
        </div>
        <div className="footer-lang">
          {footer.languages.map((lang, i) => (
            <span key={lang}>
              {i > 0 && " / "}
              {i === footer.languages.length - 1 ? (
                <span>{lang}</span>
              ) : (
                lang
              )}
            </span>
          ))}
        </div>
      </footer>

      <script dangerouslySetInnerHTML={{ __html: `
        (function(){
          var Qs=[
            {t:"A Fratura Primordial rasgou o céu de Veyrath. Você desperta numa caverna com um Fragmento de Éter pulsando no peito. Seu primeiro instinto é...",ops:[{l:"⚔️ Empunhar o que tiver à mão e proteger quem está próximo",s:"Protetor nato",v:{r:1,c:0,p:1}},{l:"👁️ Observar em silêncio, mapear saídas, agir com precisão",s:"Calculista nato",v:{r:3,c:1,p:7}},{l:"✨ Sentir a energia do Fragmento e tentar canalizá-la",s:"Sensível ao Éter",v:{r:5,c:2,p:3}},{l:"⚗️ Estudar o ambiente, coletar amostras, entender o que ocorreu",s:"Pesquisador compulsivo",v:{r:2,c:2,p:6}}]},
            {t:"Você chega à cidade de Aurenthia. O ferreiro Thalor da Forja Eterna te oferece trabalho. O que você prefere fazer?",ops:[{l:"🔨 Aprender o Ritual da Forja — bater metal é meditação",s:"Artífice paciente",v:{r:1,c:0,p:1}},{l:"💎 Trabalhar com gemas e acessórios na bancada de Lirael",s:"Perfeccionista detalhista",v:{r:2,c:2,p:4}},{l:"🗡️ Ir direto para o quartel treinar com Veyra, a Lâmina Sombria",s:"Combatente focado",v:{r:3,c:1,p:2}},{l:"📦 Preferir negociar e descobrir o que o mercado negro tem a oferecer",s:"Oportunista esperto",v:{r:5,c:1,p:8}}]},
            {t:"Você enfrenta um monstro corrompido de Kaelorn. Qual é sua abordagem de combate?",ops:[{l:"🛡️ Ficar na frente, absorver os golpes, proteger os aliados",s:"Muralha viva",v:{r:1,c:0,p:1}},{l:"🌀 Conjurar feitiços do Éter e amplificar minha Aura com o Arcano",s:"Mestre arcano",v:{r:5,c:2,p:3}},{l:"🏹 Usar venenos do Alquimista Zephyr e atacar pelo flanco",s:"Assassino tático",v:{r:3,c:1,p:6}},{l:"🍖 Preparar rações do Caldeirão Viajante antes — comida é vantagem",s:"Estrategista de suporte",v:{r:2,c:0,p:5}}]},
            {t:"O Cartógrafo Eldrin oferece um portal raro para Kaelorn — reino de PvP livre e corrupção total. O que você faz?",ops:[{l:"💀 Entro sem hesitar — risco alto, recompensa lendária",s:"Caçador de glória",v:{r:5,c:1,p:7}},{l:"🗺️ Peço os mapas primeiro, planejo cada passo antes de cruzar",s:"Explorador metódico",v:{r:4,c:0,p:7}},{l:"🔮 Só entro com minha Aura amplificada e uma poção de resistência",s:"Preparado para o caos",v:{r:5,c:2,p:6}},{l:"🤝 Organizo um grupo antes — Kaelorn não é lugar para ir sozinho",s:"Líder natural",v:{r:1,c:0,p:1}}]},
            {t:"Nos Reinos Fraturados, qual ambiente ressoa com sua alma?",ops:[{l:"☀️ Planaltos dourados de Aurenthia — ruínas ancestrais sob céu claro",s:"Alma da luz",v:{r:1,c:0,p:4}},{l:"🌿 Florestas colossais de Sylphae — cachoeiras e segredos escondidos",s:"Espírito selvagem",v:{r:2,c:2,p:5}},{l:"❄️ Montanhas geladas de Glacieryn — silêncio e força absoluta",s:"Guardião resistente",v:{r:4,c:0,p:2}},{l:"🌑 Pântanos de Obsidryn — névoa, perigo e oportunidades ocultas",s:"Filho das sombras",v:{r:3,c:1,p:8}}]},
            {t:"Ao nível 50, sua subclasse é permanente. Qual legado você deixa gravado nos anais de Veyrath?",ops:[{l:"👑 Fundador de um Clã lendário que dominou três reinos",s:"Líder eterno",v:{r:1,c:0,p:1}},{l:"⚗️ O Alquimista que criou a poção que mudou o PvP",s:"Artesão do caos",v:{r:3,c:2,p:6}},{l:"🗺️ O primeiro a mapear toda a Fratura Primordial",s:"Explorador lendário",v:{r:4,c:1,p:7}},{l:"💰 O Mercador das Sombras que controlou a economia de Kaelorn",s:"Senhor da economia",v:{r:5,c:1,p:8}}]}
          ];
          var REINOS={1:{n:"Aurenthia",c:"Protetor",ct:"— Vanguarda do Reino",d:"Os planaltos dourados te reconhecem como um dos seus. Você carrega a essência dos heróis ancestrais — protetor nato, líder silencioso. O Fragmento de Éter no seu peito brilha com veias cyan-douradas."},2:{n:"Sylphae",c:"Teurgo",ct:"— Mestre do Éter",d:"A selva vertical de Sylphae te chama com suas cachoeiras colossais e segredos milenares. Você vê onde outros são cegos, sente o que outros ignoram."},3:{n:"Obsidryn",c:"Algoz",ct:"— Lâmina das Sombras",d:"As águas negras de Obsidryn espelham sua alma. Névoa perpétua, perigo em cada sombra — mas também oportunidades que só os mais perspicazes enxergam."},4:{n:"Glacieryn",c:"Protetor",ct:"— Vanguarda do Reino",d:"Ventos cortantes e neve eterna de Glacieryn forjaram sua determinação. Você suporta o que quebraria qualquer outro. Sua força não grita — ela resiste."},5:{n:"Kaelorn",c:"Algoz",ct:"— Lâmina das Sombras",d:"O epicentro da Corrupção te reconhece como igual. Kaelorn é o único reino de PvP livre — onde os fracos morrem e os fortes escrevem a história."}};
          var PROFS={1:{n:"Ferreiro",npc:"Thalor da Forja Eterna",d:"Você domina o Ritual da Forja — o processo sagrado de têmpera que cria equipamentos impossíveis de obter de outra forma. Protetores e guerreiros dependem de você."},2:{n:"Armeiro",npc:"Veyra, a Lâmina Sombria",d:"Especialista em armas leves e reforços elementais. Algozes te buscam para obter as armas que definem batalhas."},3:{n:"Arcano",npc:"Arcanis, Tecelão de Runas",d:"Você cria itens mágicos, catalisadores e amplificadores de Aura. Teurgos não sobrevivem sem você."},4:{n:"Joalheiro",npc:"Lirael, Joias do Destino",d:"Acessórios com resistências, crítico e redução de cooldown. Toda classe em Veyrath precisa do que você cria."},5:{n:"Cozinheiro",npc:"Margo, Caldeirão Viajante",d:"Uma ração ativa por categoria — mas o efeito que ela gera muda batalhas inteiras. Em PvP de longa duração, quem tem suas rações sobrevive mais."},6:{n:"Alquimista",npc:"Zephyr, Frascos Proibidos",d:"Poções, venenos e encantamentos. Receitas raras de endgame que só um Alquimista nível 50 desbloqueia. Seu poder no PvP é indireto — e letal."},7:{n:"Senhor dos Mapas",npc:"Eldrin, Cartógrafo Ancestral",d:"Mapas consumíveis, portais, chaves de dungeon — você controla o acesso ao mundo. Ninguém explora sem você."},8:{n:"Mercador das Sombras",npc:"Kael, o Mercador",d:"Contratos player/NPC, contrabando de alto risco e recompensa. Você joga com a economia emergente de Veyrath."}};
          var answers=[],step=0;
          function renderQ(){
            var q=Qs[step];
            var prog=document.getElementById('prog');
            if(!prog)return;
            prog.innerHTML='';
            for(var i=0;i<Qs.length;i++){var d=document.createElement('div');d.className='qdot'+(i<step?' qd':i===step?' qa':'');prog.appendChild(d);}
            document.getElementById('qtext').textContent=q.t;
            var opts=document.getElementById('opts');opts.innerHTML='';
            q.ops.forEach(function(o){var b=document.createElement('button');b.className='qopt';b.innerHTML='<strong>'+o.l+'</strong><span>'+o.s+'</span>';b.onclick=function(){pick(o.v);};opts.appendChild(b);});
          }
          function pick(v){answers.push(v);step++;if(step<Qs.length){renderQ();}else{showResult();}}
          function showResult(){
            var rs={},cs={},ps={};
            answers.forEach(function(a){rs[a.r]=(rs[a.r]||0)+1;cs[a.c]=(cs[a.c]||0)+1;ps[a.p]=(ps[a.p]||0)+1;});
            var r=+Object.keys(rs).sort(function(a,b){return rs[b]-rs[a];})[0];
            var c=+Object.keys(cs).sort(function(a,b){return cs[b]-cs[a];})[0];
            var p=+Object.keys(ps).sort(function(a,b){return ps[b]-ps[a];})[0];
            var reino=REINOS[r]||REINOS[1];
            var prof=PROFS[p]||PROFS[1];
            var num='#'+(Math.floor(Math.random()*600)+800);
            document.getElementById('r-classe').textContent=reino.c+' '+reino.ct;
            document.getElementById('r-reino').textContent=reino.n;
            document.getElementById('r-prof').textContent='Profissão: '+prof.n+' · '+prof.npc;
            document.getElementById('r-num').textContent=num;
            document.getElementById('r-desc').textContent=reino.d;
            document.getElementById('r-pdesc').textContent='⚒ '+prof.d;
            document.getElementById('qbody').style.display='none';
            document.getElementById('rbody').classList.add('on');
            var cnt=1010;var iv=setInterval(function(){cnt++;var el=document.getElementById('cnt');if(el)el.textContent=cnt.toLocaleString('pt-BR');if(cnt>=1043)clearInterval(iv);},70);
          }
          var rb=document.getElementById('btn-restart');
          if(rb)rb.onclick=function(){answers=[];step=0;document.getElementById('qbody').style.display='block';document.getElementById('rbody').classList.remove('on');var er=document.getElementById('erow');if(er)er.style.display='flex';var cf=document.getElementById('conf');if(cf)cf.classList.remove('on');var ei=document.getElementById('ein');if(ei)(ei).value='';renderQ();};
          renderQ();
        })();
      ` }} />
    </>
  );
}
