import styles from "@styles/components/TitleBar.module.css";
import Link from "next/link";

export default function TitleBar({ currentTitle }) {
  return (
    <nav className={styles.titleBar}>
      <h1 className={styles.titleBarTitle}>{currentTitle}</h1>
      <ul className={styles.navList}>
        <li className={styles.navLink}>
          <Link href="/contact">
            <a>Support</a>
          </Link>
        </li>
        <li className={styles.navLink}>
          <button onClick={() => console.log("Logging out...")}>Logout</button>
        </li>
      </ul>
    </nav>
  );
}
