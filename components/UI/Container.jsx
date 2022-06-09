// <Container> is just a generic div for now.
import styles from "@styles/UI/Container.module.css";

export default function Container({ children }) {
  return <div className={styles.uiContainer}>{children}</div>;
}
