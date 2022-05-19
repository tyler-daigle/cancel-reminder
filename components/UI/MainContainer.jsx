import styles from "@styles/UI/MainContainer.module.css";

export default function MainContainer({ children }) {
  return (
    <div className={styles.mainContainer}>
      {children}
    </div>
  );
}