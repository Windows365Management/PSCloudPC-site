import clsx from "clsx";
import Heading from "@theme/Heading";

import styles from "./styles.module.css";

/**
 * Navy page header with the brand glow, shared by the standalone pages.
 */
export default function PageHeader({ eyebrow, title, children }) {
  return (
    <header className={styles.header}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={clsx("container", styles.inner)}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <Heading as="h1" className={styles.title}>
          {title}
        </Heading>
        {children && <p className={styles.lead}>{children}</p>}
      </div>
    </header>
  );
}
