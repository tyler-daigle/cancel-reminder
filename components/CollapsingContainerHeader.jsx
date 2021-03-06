import styles from "@styles/components/CollapsingContainerHeader.module.css";

/*
  CollapsingContainerHeader is the header for a collapsing container. Clicking the
  header causes the - to be replaced with a +.

  The children prop is the text to be displayed.
  collapsed is a boolean that determines whether a + or - is displayed.
  onClick is the handler that will be called when the header is clicked.
*/

export default function CollapsingContainerHeader({ collapsed, onClick, children }) {
  return (
    collapsed ?
      <h2 onClick={onClick} className={styles.collapsingContainerHeader}>+ {children}</h2> :
      <h2 onClick={onClick} className={styles.collapsingContainerHeader}>- {children}</h2>
  );
}