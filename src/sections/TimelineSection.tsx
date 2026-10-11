import { timelineSection } from "../content/siteContent";
import { SectionHeading } from "../components/SectionHeading";
import styles from "./TimelineSection.module.css";

const statusLabel = {
  completed: "Completed",
  "in-progress": "In progress",
  upcoming: "Upcoming",
} as const;

export function TimelineSection() {
  return (
    <section
      id={timelineSection.id}
      className={styles.section}
      aria-labelledby="timeline-title"
    >
      <div className={styles.inner}>
        <SectionHeading
          eyebrow={timelineSection.eyebrow}
          title={timelineSection.title}
          description={timelineSection.description}
        />

        <div className={styles.panel}>
          <div className={styles.progressCard}>
            <p className={styles.progressLabel}>{timelineSection.progressLabel}</p>
            <div className={styles.progressTop}>
              <strong>{timelineSection.progressPercent}%</strong>
              <span>Completed</span>
            </div>
            <div className={styles.progressTrack}>
              <div
                className={styles.progressFill}
                style={{ width: `${timelineSection.progressPercent}%` }}
              />
            </div>
          </div>

          <ol className={styles.list}>
            {timelineSection.items.map((item) => (
              <li key={item.id} className={styles.item}>
                <div className={styles.meta}>
                  <span className={styles.date}>{item.date}</span>
                  <span className={`${styles.badge} ${styles[item.status]}`}>
                    {statusLabel[item.status]}
                  </span>
                </div>
                <h3>{item.title}</h3>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
