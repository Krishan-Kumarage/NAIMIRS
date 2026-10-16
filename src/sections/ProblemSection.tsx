import { problemSection } from "../content/siteContent";
import { SectionHeading } from "../components/SectionHeading";
import styles from "./ProblemSection.module.css";

export function ProblemSection() {
  return (
    <section
      id={problemSection.id}
      className={styles.section}
      aria-labelledby="problem-title"
    >
      <div className={styles.inner}>
        <SectionHeading
          eyebrow={problemSection.eyebrow}
          title={problemSection.title}
          titleId="problem-title"
        />
        <div className={styles.columns}>
          <article className={styles.column}>
            <h3>{problemSection.existingTitle}</h3>
            <ul>
              {problemSection.existing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className={styles.column}>
            <h3>{problemSection.importanceTitle}</h3>
            <ul>
              {problemSection.importance.map((item, index) => (
                <li
                  key={item}
                  className={
                    index === problemSection.importance.length - 1
                      ? styles.highlight
                      : undefined
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
