import styles from "@styles/components/ExpiringSoonHeader.module.css";

export default function ExpiringSoonHeader({ collapsed, onClick }) {
  return (
    <div onClick={onClick}>
      {collapsed ?
        <h2 className={styles.expiringSoonHeader}>+ Expiring Soon</h2> :
        <h2 className={styles.expiringSoonHeader}>- Expiring Soon</h2>
      }
    </div>
  );
}