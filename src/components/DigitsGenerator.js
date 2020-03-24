import React, { useContext } from "react";
import { DiceyAddictionContext } from "../App";
import Button from "./Button";
import Digits from "./Digits";

function generateDigits() {
  return ["", "", "", ""].map(a => Math.floor(Math.random() * 10));
}
export default function DigitsGenerator() {
  // eslint-disable-next-line no-unused-vars
  const [_, dispatch] = useContext(DiceyAddictionContext);
  return (
    <>
      <Digits />
      <Button onClick={() => dispatch({ type: "setDigits", value: generateDigits(), nextStep: "player1" })}>
        Generar
      </Button>
    </>
  );
}
