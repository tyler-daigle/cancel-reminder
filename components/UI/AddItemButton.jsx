import styles from "@styles/UI/AddItemButton.module.css";
import Link from "next/link";
export default function AddItemButton() {
  return (
    <Link href="/add_subscription">
      <a className={styles.addItemButton}>Add Subscription</a>
    </Link>
  );
}
