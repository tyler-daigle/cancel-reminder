import styles from "@styles/UI/EditButton.module.css";

import { FaEdit } from "react-icons/fa";
export default function EditButton() {
  return (
    <button type="button" className={styles.editButton}><FaEdit /></button>
  );
}