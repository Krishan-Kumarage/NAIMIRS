import { methodologySection } from "../content/siteContent";
import { SectionHeading } from "../components/SectionHeading";
import styles from "./MethodologySection.module.css";

export function MethodologySection() {
  return (
    <section
      id={methodologySection.id}
      className={styles.section}
      aria-labelledby="methodology-title"
    >
      <div className={styles.inner}>
        <SectionHeading
          eyebrow={methodologySection.eyebrow}
          title={methodologySection.title}
        />
        <div className={styles.grid}>
          {methodologySection.cards.map((card) => (
            <article key={card.id} className={styles.card}>
              <h3>{card.title}</h3>
              <p>{card.summary}</p>
              <ul>
                {card.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
