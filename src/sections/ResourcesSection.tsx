import { DownloadButton } from "../components/DownloadButton";
import { resourcesSection, teamSection } from "../content/siteContent";
import styles from "./ResourcesSection.module.css";

const teamProfileById = new Map(
  teamSection.members.map((member) => [member.id, member]),
);

function FileTag({ type }: { type: "pdf" | "pptx" }) {
  return <span className={styles.fileTag}>{type.toUpperCase()}</span>;
}

export function ResourcesSection() {
  const { groupReport, students, presentations } = resourcesSection;

  return (
    <section
      id={resourcesSection.id}
      className={styles.section}
      aria-labelledby="resources-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.pill}>{resourcesSection.eyebrow}</p>
          <h2 id="resources-heading" className={styles.title}>
            {resourcesSection.title}
          </h2>
          <p className={styles.intro}>{resourcesSection.description}</p>
          <ul className={styles.stats} aria-label="Document counts">
            {resourcesSection.stats.map((stat) => (
              <li key={stat.id}>{stat.label}</li>
            ))}
          </ul>
        </header>

        <article className={styles.featured}>
          <div className={styles.featuredDecor} aria-hidden>
            <span className={styles.circle} />
            <span className={styles.circle} />
            <span className={styles.circle} />
          </div>
          <div className={styles.featuredBody}>
            <p className={styles.featuredLabel}>{groupReport.label}</p>
            <h3 className={styles.featuredTitle}>{groupReport.title}</h3>
            <p className={styles.featuredDesc}>{groupReport.description}</p>
            <DownloadButton
              href={groupReport.href}
              label="Download"
              variant="primary"
              fileType="pdf"
            />
          </div>
        </article>

        <div className={styles.block}>
          <h3 className={styles.blockTitle}>Individual submissions</h3>
          <ul className={styles.studentGrid}>
            {students.map((student) => {
              const profile = teamProfileById.get(student.id);
              return (
              <li key={student.id}>
                <article className={styles.studentCard}>
                  <div className={styles.studentHead}>
                    {profile?.photo ? (
                      <img
                        className={styles.avatarPhoto}
                        src={profile.photo}
                        alt={student.name}
                        style={{
                          objectPosition:
                            profile.photoPosition ?? "center 20%",
                        }}
                      />
                    ) : (
                      <div className={styles.avatarInitials} aria-hidden>
                        {student.initials}
                      </div>
                    )}
                    <div>
                      <p className={styles.studentName}>{student.name}</p>
                      <p className={styles.studentId}>{student.studentId}</p>
                    </div>
                  </div>
                  <div className={styles.docRows}>
                    <div className={styles.docRow}>
                      <div className={styles.docRowMeta}>
                        <span className={styles.docRowLabel}>
                          Proposal document
                        </span>
                        <FileTag type="pdf" />
                      </div>
                      <DownloadButton
                        href={student.proposalHref}
                        label="Download"
                        variant="secondary"
                      />
                    </div>
                    <div className={styles.docRow}>
                      <div className={styles.docRowMeta}>
                        <span className={styles.docRowLabel}>Final report</span>
                        <FileTag type="pdf" />
                      </div>
                      <DownloadButton
                        href={student.finalReportHref}
                        label="Download"
                        variant="secondary"
                      />
                    </div>
                  </div>
                </article>
              </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.block}>
          <h3 className={styles.blockTitle}>Progress presentations</h3>
          <ul className={styles.presentationGrid}>
            {presentations.map((item) => (
              <li key={item.id}>
                <article className={styles.slideCard}>
                  <div className={styles.thumb}>
                    <span className={styles.numeral}>{item.numeral}</span>
                    <span className={styles.thumbCode}>R26-IT-103</span>
                    <span className={styles.thumbTitle}>{item.title}</span>
                  </div>
                  <div className={styles.slideFooter}>
                    <div className={styles.slideTags}>
                      <FileTag type="pptx" />
                      <span className={styles.groupTag}>Group</span>
                    </div>
                    <DownloadButton href={item.href} label="Download" variant="secondary" />
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
