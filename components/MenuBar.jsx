import styles from "@styles/components/MenuBar.module.css";
import Link from "next/link";
import { useState } from "react";

export default function MenuBar() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className={styles.menuBarContainer}>
      <nav>
        <span
          onClick={() => setMenuVisible(!menuVisible)}
          className={`${styles.menuToggle} ${
            menuVisible ? styles.menuVisible : ""
          }`}
        >
          <span></span>
          <span></span>
          <span></span>
        </span>
        <Link href="/">
          <a className={styles.homeLink}>Cancel Reminder</a>
        </Link>

        <ul
          className={`${styles.navList} ${
            menuVisible ? styles.navListVisible : ""
          }`}
        >
          <li className={styles.navLink}>
            <Link href="/">
              <a>Support</a>
            </Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/">
              <a>Settings</a>
            </Link>
          </li>
          <li className={styles.logoutLink}>
            <Link href="/">
              <a>Logout</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
