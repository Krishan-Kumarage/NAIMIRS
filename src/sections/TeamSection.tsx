import { teamSection, type TeamMember } from "../content/siteContent";
import styles from "./TeamSection.module.css";

function TeamCard({
  member,
  layout,
}: {
  member: TeamMember;
  layout: "supervisor" | "member";
}) {
  return (
    <article
      className={`${styles.card} ${
        layout === "supervisor" ? styles.cardSupervisor : styles.cardMember
      }`}
    >
      {member.photo ? (
        <img
          className={styles.photo}
          src={member.photo}
          alt=""
          style={{ objectPosition: member.photoPosition ?? "center 20%" }}
        />
      ) : (
        <div className={styles.photoPlaceholder} aria-hidden />
      )}
      <h3 className={styles.name}>{member.name}</h3>
      <p className={styles.role}>{member.role}</p>
      <p className={styles.focus}>{member.focus}</p>
      {member.email ? (
        <a href={`mailto:${member.email}`} className={styles.email}>
          {member.email}
        </a>
      ) : null}
    </article>
  );
}

export function TeamSection() {
  return (
    <section id={teamSection.id} className={styles.section} aria-labelledby="team-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>{teamSection.eyebrow}</p>
          <h2 id="team-title" className={styles.title}>
            {teamSection.titleLead}{" "}
            <span className={styles.titleAccent}>{teamSection.titleAccent}</span>
          </h2>
          <div className={styles.titleRule} aria-hidden />
        </header>

        {teamSection.supervisors.length > 0 ? (
          <div className={styles.supervisorGrid}>
            {teamSection.supervisors.map((member) => (
              <TeamCard key={member.id} member={member} layout="supervisor" />
            ))}
          </div>
        ) : null}

        <div className={styles.memberGrid}>
          {teamSection.members.map((member) => (
            <TeamCard key={member.id} member={member} layout="member" />
          ))}
        </div>
      </div>
    </section>
  );
}
