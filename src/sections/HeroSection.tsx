import { siteConfig } from "../content/siteContent";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <img className={styles.photo} src={hero.image} alt={hero.imageAlt} />
      <div className={styles.scrim} />
      <div className={styles.copy}>
        <p className={styles.eyebrow}>{hero.eyebrow}</p>
        <h1 id="hero-title" className={styles.title}>
          {hero.title}
        </h1>
        <p className={styles.tagline}>{hero.tagline}</p>
        <div className={styles.actions}>
          <a href={hero.primaryCta.href} className={styles.primaryBtn}>
            {hero.primaryCta.label}
          </a>
          <a href={hero.secondaryCta.href} className={styles.secondaryBtn}>
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
