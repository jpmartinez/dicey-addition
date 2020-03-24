import React, { useContext } from "react";
import { DiceyAddictionContext } from "../App";
import DigitBox from "./DigitBox";
import styles from "./sum.module.scss";

export default function Sum() {
  const [{ move }] = useContext(DiceyAddictionContext);

  return (
    <>
      <div className={styles.formula}>
        <DigitBox id="0">{move[0]}</DigitBox>
        <DigitBox id="1">{move[1]}</DigitBox>
        <span>+</span>
        <DigitBox id="2">{move[2]}</DigitBox>
        <DigitBox id="3">{move[3]}</DigitBox>
      </div>
    </>
  );
}
