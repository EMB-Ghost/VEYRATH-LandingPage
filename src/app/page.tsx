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
          <a href={links.steam}>
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
            <a href={links.steam}>
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
                <div className="vis-ring" />
                <div className="vis-ring" />
                <div className="vis-ring" />
                <div className="vis-orbit-dot" />
                <div className="vis-core">⚙️</div>
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

        <Countdown duration={preorder.countdownDuration} />

        <div className="packages" data-reveal>
          {preorder.packages.map((pkg) => (
            <div key={pkg.id} className={`pkg${pkg.featured ? " star" : ""}`}>
              <div className="pkg-top-bar" />
              {pkg.featured && pkg.featuredLabel && (
                <div className="pkg-label">{pkg.featuredLabel}</div>
              )}
              <div className="pkg-art">{pkg.emoji}</div>
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
                  <a href={links.steam}>
                    <button className="btn-pkg-fill">{pkg.ctaLabel}</button>
                  </a>
                ) : (
                  <a href={links.steam}>
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
          <a href={links.steam}>
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
    </>
  );
}
