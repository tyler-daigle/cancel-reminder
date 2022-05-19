import styles from "@styles/UI/AddItemButton.module.css";

export default function AddItemButton({ onClick }) {
  return (
    <button onClick={onClick} type="button" className={styles.addItemButton}>Add Item</button>
  );
}