import { siteConfig } from "../content/siteContent";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.copy}>
        <p className={styles.eyebrow}>{hero.eyebrow}</p>
        <h1 id="hero-title" className={styles.title}>
          {hero.title}
        </h1>
        <p className={styles.description}>{hero.description}</p>
        <div className={styles.actions}>
          <a href={hero.primaryCta.href} className={styles.primaryBtn}>
            {hero.primaryCta.label}
          </a>
          <a href={hero.secondaryCta.href} className={styles.secondaryBtn}>
            {hero.secondaryCta.label}
          </a>
        </div>
        <div className={styles.platforms}>
          <span>{hero.availabilityLabel}</span>
          <ul>
            {hero.platforms.map((platform) => (
              <li key={platform}>{platform}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.mockup} aria-hidden>
        <div className={styles.mockupTop}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.mockupBody}>
          <div className={styles.mockupSidebar} />
          <div className={styles.mockupContent}>
            <div className={styles.mockupLineWide} />
            <div className={styles.mockupLine} />
            <div className={styles.mockupLine} />
            <div className={styles.mockupCards}>
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <p className={styles.mockupUrl}>{siteConfig.domain}</p>
      </div>
    </section>
  );
}
