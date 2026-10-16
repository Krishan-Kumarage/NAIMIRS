import { commercializationSection } from "../content/siteContent";
import { SectionHeading } from "../components/SectionHeading";
import styles from "./CommercializationSection.module.css";

export function CommercializationSection() {
  return (
    <section
      id={commercializationSection.id}
      className={styles.section}
      aria-labelledby="commercialization-title"
    >
      <div className={styles.inner}>
        <SectionHeading
          eyebrow={commercializationSection.eyebrow}
          title={commercializationSection.title}
          titleId="commercialization-title"
          description={commercializationSection.description}
        />
        <ul className={styles.list}>
          {commercializationSection.offers.map((offer) => (
            <li
              key={offer.id}
              className={offer.highlighted ? styles.highlight : styles.row}
            >
              <div>
                <h3>{offer.title}</h3>
                <p>{offer.summary}</p>
              </div>
              <span aria-hidden>→</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
