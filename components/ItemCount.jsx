import styles from "@styles/components/ItemCount.module.css";

export default function ItemCount({ count }) {
  return (
    <span className={styles.itemCount}>{count} Items</span>
  );
}