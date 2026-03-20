"use client";

import CustomCursor from "@/components/CustomCursor";
import StarfieldCanvas from "@/components/StarfieldCanvas";
import ClassSelector from "@/components/ClassSelector";
import Countdown from "@/components/Countdown";
import ScrollReveal from "@/components/ScrollReveal";
import QuizDestino from "@/components/QuizDestino";
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
        <div className="section-inner" data-reveal>
          <QuizDestino />
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
                  <a href="https://www.catarse.me/veyrath_fractured" target="_blank" rel="noopener noreferrer">
                    <button className="btn-pkg-fill">{pkg.ctaLabel}</button>
                  </a>
                ) : (
                  <a href="https://www.catarse.me/veyrath_fractured" target="_blank" rel="noopener noreferrer">
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
          SOBRE O ESTÚDIO
          ============================================================ */}
      <section className="veyrath-studio" id="studio">
        <div className="section-inner studio-inner" data-reveal>
          <div className="studio-text">
            <p className="s-label">Por trás do jogo</p>
            <h2 className="s-title">EMBRASA <em>GAMES</em></h2>
            <p className="studio-desc">
              Veyrath é um projeto solo desenvolvido em Florianópolis, Santa Catarina — Brasil.
              Um desenvolvedor, um sonho, e um GDD que virou realidade.
            </p>
            <p className="studio-desc">
              A Embrasa Games nasceu da paixão por MMORPGs da era clássica — jogos que criavam
              comunidades reais, onde cada escolha importava e cada jogador tinha uma história única.
              Veyrath é a resposta brasileira para esse vazio.
            </p>
            <p className="studio-desc">
              <strong>Zero pay-to-win. Zero atalhos. 100% paixão.</strong>
            </p>
            <div className="studio-stats">
              <div className="studio-stat"><span className="studio-num">1</span><span className="studio-lbl">Desenvolvedor</span></div>
              <div className="studio-stat"><span className="studio-num">1.0</span><span className="studio-lbl">Versão do GDD</span></div>
              <div className="studio-stat"><span className="studio-num">2026</span><span className="studio-lbl">Início do Dev</span></div>
              <div className="studio-stat"><span className="studio-num">2027</span><span className="studio-lbl">Early Access</span></div>
            </div>
          </div>
          <div className="studio-visual" data-reveal-right>
            <div className="studio-card">
              <div className="studio-avatar">⚔️</div>
              <p className="studio-name">EMB-Ghost</p>
              <p className="studio-role">Game Designer & Developer</p>
              <p className="studio-loc">📍 Florianópolis, SC — Brasil</p>
              <div className="studio-links">
                <a href="https://discord.gg/g567wFPy3s" className="studio-link">Discord</a>
                <a href="https://x.com/VeyrathFracture" className="studio-link">Twitter/X</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          ROADMAP TEASER
          ============================================================ */}
      <section className="veyrath-roadmap-teaser" data-reveal>
        <div className="section-inner roadmap-teaser-inner">
          <div className="roadmap-teaser-text">
            <p className="s-label">Desenvolvimento Público</p>
            <h2 className="s-title">ROADMAP <em>COMPLETO</em></h2>
            <p className="roadmap-teaser-desc">
              Acompanhe cada etapa do desenvolvimento de Veyrath — do GDD ao lançamento.
              Transparência total com a comunidade.
            </p>
          </div>
          <div className="roadmap-fases">
            <div className="roadmap-fase roadmap-done">
              <span className="rf-label">Jan–Mar 2026</span>
              <span className="rf-nome">Fundação & GDD</span>
              <span className="rf-status">✓ Concluído</span>
            </div>
            <div className="roadmap-fase roadmap-progress">
              <span className="rf-label">Abr–Dez 2026</span>
              <span className="rf-nome">Pré-Produção</span>
              <span className="rf-status">⬤ Em Dev</span>
            </div>
            <div className="roadmap-fase roadmap-upcoming">
              <span className="rf-label">Jan–Jun 2027</span>
              <span className="rf-nome">Alpha Fechado</span>
              <span className="rf-status">Planejado</span>
            </div>
            <div className="roadmap-fase roadmap-upcoming">
              <span className="rf-label">Mai 2027</span>
              <span className="rf-nome">Early Access</span>
              <span className="rf-status">Planejado</span>
            </div>
          </div>
          <a href="/roadmap" className="roadmap-teaser-btn">Ver Roadmap Completo →</a>
        </div>
      </section>

      {/* ============================================================
          FAQ
          ============================================================ */}
      <section className="veyrath-faq" id="faq" data-reveal>
        <div className="section-inner">
          <div className="faq-intro">
            <p className="s-label">Dúvidas frequentes</p>
            <h2 className="s-title">FAQ</h2>
          </div>
          <div className="faq-grid">
            {[
              { q: "Veyrath é gratuito para jogar?", a: "O Early Access terá um custo de entrada. Após o lançamento completo, o modelo de negócio será definido com base no feedback da comunidade. O que garantimos: zero pay-to-win. Nunca." },
              { q: "Quando o jogo vai lançar?", a: "O Early Access está previsto para Maio de 2027. Fundadores que adquirirem o pacote terão acesso antecipado ao Alpha Fechado no início de 2027." },
              { q: "Vai ter versão para Mobile ou Console?", a: "Não. Veyrath é e sempre será exclusivo para PC (Steam). A experiência MMORPG que queremos entregar exige mouse, teclado e a capacidade de processamento de um computador." },
              { q: "O Pre-Order no Catarse é reembolsável?", a: "Sim. Dentro das políticas da plataforma Catarse, reembolsos podem ser solicitados. Recomendamos ler os termos da campanha em catarse.me/veyrath_fractured." },
              { q: "Vai ter Pay-to-Win?", a: "Jamais. Esse é um dos pilares inegociáveis de Veyrath. A loja de skins (cosméticos) é o único modelo monetário planejado após o lançamento. Poder não se compra." },
              { q: "Quais são os requisitos mínimos do PC?", a: "Ainda estamos em desenvolvimento, mas estimamos: CPU i5 8ª geração, 16GB RAM, GPU GTX 1060 6GB. Os requisitos finais serão publicados antes do Alpha." },
              { q: "Vou perder meu personagem no lançamento final?", a: "O wipe entre Alpha e Early Access será comunicado com antecedência. Fundadores receberão compensações especiais por sua participação no teste." },
              { q: "Como posso contribuir com o desenvolvimento?", a: "Apoiando no Catarse, entrando no Discord para dar feedback, e compartilhando o projeto. Um solo dev brasileiro agradece muito cada divulgação." },
            ].map((item, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-q">{item.q}</summary>
                <p className="faq-a">{item.a}</p>
              </details>
            ))}
          </div>
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
        <div className="footer-top">
          {/* Coluna 1 — Logo + Copyright */}
          <div className="footer-col">
            <div className="footer-logo">{footer.logo}</div>
            <p className="footer-copy">{footer.copyright}</p>
            <div className="footer-socials">
              {footer.socials.map((social) => (
                <a key={social.label} href={social.href} className="soc-btn" aria-label={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2 — Links */}
          <div className="footer-col footer-col-center">
            <p className="footer-col-title">Navegação</p>
            <a href="/roadmap" className="footer-link">Roadmap</a>
            <a href="#faq" className="footer-link">FAQ</a>
            <a href="#studio" className="footer-link">Sobre o Estúdio</a>
            <a href="/privacidade" className="footer-link">Política de Privacidade</a>
            <a href="https://discord.gg/g567wFPy3s" className="footer-link" target="_blank" rel="noopener noreferrer">Discord</a>
            <a href="https://www.catarse.me/veyrath_fractured" className="footer-link" target="_blank" rel="noopener noreferrer">Apoiar no Catarse</a>
          </div>

          {/* Coluna 3 — LGPD + Lang */}
          <div className="footer-col footer-col-right">
            <p className="footer-col-title">Privacidade</p>
            <p className="footer-lgpd">
              Este site coleta e-mails mediante consentimento expresso, conforme a LGPD (Lei 13.709/2018).
              Seus dados são usados apenas para comunicações sobre Veyrath e nunca compartilhados com terceiros.
            </p>
            <div className="footer-lang-toggle">
              <button
                className="lang-btn lang-btn-active"
                id="lang-pt"
                onClick={() => {
                  document.getElementById('lang-pt')?.classList.add('lang-btn-active');
                  document.getElementById('lang-en')?.classList.remove('lang-btn-active');
                }}
              >PT</button>
              <span className="lang-sep">/</span>
              <button
                className="lang-btn"
                id="lang-en"
                onClick={() => {
                  window.open('https://www.veyrath.com.br', '_blank');
                  document.getElementById('lang-en')?.classList.add('lang-btn-active');
                  document.getElementById('lang-pt')?.classList.remove('lang-btn-active');
                }}
              >EN</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-text">
            Feito com paixão por um desenvolvedor solo brasileiro · Florianópolis, SC
          </p>
        </div>
      </footer>
    </>
  );
}
