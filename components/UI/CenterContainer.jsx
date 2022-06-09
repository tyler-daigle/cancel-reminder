import styles from "@styles/UI/CenterContainer.module.css";
export default function CenterContainer({ children }) {
  return <div className={styles.centerContainer}>{children}</div>;
}
