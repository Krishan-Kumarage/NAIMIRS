import { introductionSection, siteConfig } from "../content/siteContent";
import styles from "./IntroductionSection.module.css";

export function IntroductionSection() {
  return (
    <section
      id={introductionSection.id}
      className={styles.section}
      aria-labelledby="introduction-title"
    >
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{introductionSection.eyebrow}</p>
        <div className={styles.layout}>
          <figure className={styles.figure}>
            <img src={introductionSection.image} alt={introductionSection.imageAlt} />
            <img
              className={styles.mark}
              src={introductionSection.mark}
              alt=""
            />
          </figure>
          <div>
            <h2 id="introduction-title" className={styles.title}>
              {siteConfig.tagline}
            </h2>
            <p className={styles.description}>{introductionSection.description}</p>
            <ul className={styles.facts}>
              {introductionSection.facts.map((fact) => (
                <li key={fact.id}>
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
