import { siteConfig } from "../content/siteContent";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.baseFill} aria-hidden />

      <div className={styles.collageArea} aria-hidden>
        <div className={styles.collage}>
          {hero.collage.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.column} ${styles[`column${index}`]}`}
            >
              <figure className={styles.tile}>
                <img src={item.src} alt={item.alt} loading={index === 0 ? "eager" : "lazy"} />
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.readabilityVeil} aria-hidden />

      <div className={styles.mobileScrim} aria-hidden />

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
