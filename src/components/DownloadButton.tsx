import styles from "./DownloadButton.module.css";

type DownloadButtonProps = {
  href: string;
  label?: string;
  variant?: "primary" | "secondary";
  fileType?: "pdf" | "pptx";
};

function DownloadIcon() {
  return (
    <svg
      className={styles.icon}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M12 3v12m0 0l4-4m-4 4L8 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DownloadButton({
  href,
  label = "Download",
  variant = "secondary",
  fileType,
}: DownloadButtonProps) {
  const text =
    fileType === "pdf"
      ? `${label} PDF`
      : fileType === "pptx"
        ? label
        : label;

  return (
    <a
      href={href}
      className={`${styles.btn} ${styles[variant]}`}
      download
      target="_blank"
      rel="noopener noreferrer"
    >
      <DownloadIcon />
      <span>{text}</span>
    </a>
  );
}
