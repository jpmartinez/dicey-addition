import React from "react";
import { joinClassNames } from "../../../utils/helpers";
import Text from "../text/Text";
import styles from "./large-text.module.scss";

export default function LargeText({ className, children }) {
  return <Text className={joinClassNames(styles.text, className)}>{children}</Text>;
}
