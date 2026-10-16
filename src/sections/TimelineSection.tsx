import { timelineSection } from "../content/siteContent";
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
        <header className={styles.header}>
          <h2 id="timeline-title" className={styles.title}>
            {timelineSection.titleLead}{" "}
            <span className={styles.titleAccent}>{timelineSection.titleAccent}</span>
          </h2>
          <p className={styles.description}>{timelineSection.description}</p>
        </header>

        <div className={styles.rail}>
          <ol className={styles.timelineList}>
            {timelineSection.items.map((item, index) => (
              <li
                key={item.id}
                className={`${styles.timelineItem} ${
                  index % 2 === 0 ? styles.timelineItemRight : styles.timelineItemLeft
                }`}
              >
                <article className={styles.eventCard}>
                  <div className={styles.eventMeta}>
                    <span className={styles.eventDate}>{item.date}</span>
                    <span className={`${styles.badge} ${styles[item.status]}`}>
                      {statusLabel[item.status]}
                    </span>
                  </div>
                  <h3 className={styles.eventTitle}>{item.title}</h3>
                </article>
                <span className={styles.node} aria-hidden />
              </li>
            ))}
          </ol>
          <div className={styles.railLine} aria-hidden />
        </div>

        <div className={styles.ctaWrap}>
          <a href="#timeline-velocity" className={styles.ctaButton}>
            See full timeline
          </a>
        </div>

        <div id="timeline-velocity" className={styles.velocityCard}>
          <div className={styles.velocityHeader}>
            <div>
              <p className={styles.velocityPhase}>{timelineSection.progressPhaseLabel}</p>
              <h3 className={styles.velocityTitle}>{timelineSection.progressLabel}</h3>
            </div>
            <div className={styles.velocityStat}>
              <strong>{timelineSection.progressPercent}%</strong>
              <span>Completed</span>
            </div>
          </div>

          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{ width: `${timelineSection.progressPercent}%` }}
            />
          </div>

          <ul className={styles.velocityMarkers}>
            {timelineSection.velocityTrack.map((milestone) => (
              <li key={milestone.id}>
                <span className={styles.markerDot} aria-hidden />
                <span className={styles.markerLabel}>{milestone.label}</span>
                <span className={styles.markerDate}>{milestone.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
