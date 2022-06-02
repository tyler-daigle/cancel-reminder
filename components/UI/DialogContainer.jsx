import styles from "@styles/UI/DialogContainer.module.css";

import { useEffect } from "react";

export default function DialogContainer({ children, open }) {
  // useEffect(() => {
  //   // prevent the window from scrolling when the dialog is open
  //   if (open) {
  //     document.getElementsByTagName("body")[0].style.overflow = "hidden";
  //   } else {
  //     document.getElementsByTagName("body")[0].style.overflow = "auto";
  //   }
  // }, [open]);

  if (!open) {
    return null;
  }

  return <div className={styles.dialogContainer}>{children}</div>;
}
