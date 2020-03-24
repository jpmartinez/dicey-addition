import React from "react";
import styles from "./button.module.scss";
import { joinClassNames } from "./helpers";

export default function Button({ className, children, ...props }) {
  return (
    <button className={joinClassNames(styles.button, className)} {...props}>
      {children}
    </button>
  );
}
