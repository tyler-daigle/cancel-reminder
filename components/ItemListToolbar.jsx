import styles from "@styles/components/ItemListToolbar.module.css";

export default function ItemListToolbar({ children }) {
  return (
    <div className={styles.ItemListToolbar}>
      {children}
    </div>
  );
}