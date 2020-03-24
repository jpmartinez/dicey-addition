import React, { useContext } from "react";
import { DiceyAddictionContext } from "../App";
import Digit from "./Digit";
import styles from "./digits.module.scss";

export default function Digits() {
  const [state] = useContext(DiceyAddictionContext);
  const digits = state.digits.length ? state.digits : ["?", "?", "?", "?"];
  return (
    <div className={styles.container}>
      {digits.map((value, ix) => (
        <Digit key={ix} value={value} />
      ))}
    </div>
  );
}
