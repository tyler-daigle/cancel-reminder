import styles from "@styles/UI/BackDrop.module.css";

export default function BackDrop({ dialogOpen }) {
  return <div className={`${styles.backDrop} ${dialogOpen ? styles.backDropVisible : ""}`}></div>;
} 
