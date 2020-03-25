import React from "react";
import { joinClassNames } from "../../../utils/helpers";
import styles from "./button.module.scss";

export default function Button({ className, children, ...props }) {
  return (
    <button className={joinClassNames(styles.button, className)} {...props}>
      {children}
    </button>
  );
}
