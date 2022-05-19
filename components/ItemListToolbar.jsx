import styles from "@styles/components/ItemListToolbar.module.css";

export default function ItemListToolbar({ children }) {
  return (
    <menu className={styles.itemListToolbar}>
      {children}
    </menu>
  );
}