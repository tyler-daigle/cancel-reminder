import styles from "@styles/UI/FlexContainer.module.css";

export default function FlexContainer({ children }) {
  return (
    <div className={styles.flexContainer}>{children}</div>
  );
}