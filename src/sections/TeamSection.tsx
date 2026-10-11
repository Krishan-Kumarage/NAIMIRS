import { teamSection } from "../content/siteContent";
import { SectionHeading } from "../components/SectionHeading";
import styles from "./TeamSection.module.css";

export function TeamSection() {
  return (
    <section
      id={teamSection.id}
      className={styles.section}
      aria-labelledby="team-title"
    >
      <div className={styles.inner}>
        <SectionHeading
          eyebrow={teamSection.eyebrow}
          title={teamSection.title}
          align="center"
        />
        <div className={styles.grid}>
          {teamSection.members.map((member) => (
            <article
              key={member.id}
              className={`${styles.card} ${
                member.variant === "supervisor" ? styles.supervisor : ""
              }`}
            >
              <p className={styles.role}>{member.role}</p>
              <h3>{member.name}</h3>
              <p className={styles.focus}>{member.focus}</p>
              {member.email ? (
                <a href={`mailto:${member.email}`} className={styles.email}>
                  {member.email}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
