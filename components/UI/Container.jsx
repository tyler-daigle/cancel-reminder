// <Container> is just a generic div for now.
import styles from "@styles/UI/Container.module.css";

export default ({ children }) => <div className={styles.uiContainer}>{children}</div>;