import React, { useContext } from "react";
import { DiceyAddictionContext } from "../../App";
import Button from "../controls/button/Button";
import Text from "../controls/text/Text";
import Digits from "../digits-generator/digits/Digits";
import Sum from "../sum/Sum";
import Timer from "../timer/Timer";

export const Player2 = () => {
  const [
    {
      move,
      players: { player2 }
    },
    dispatch
  ] = useContext(DiceyAddictionContext);
  const players = { player2: { ...player2, move: move.map(m => (m === "" ? undefined : m)) }, move: ["", "", "", ""] };
  return (
    <>
      <Digits />
      <Timer />
      <Text>{player2.name}</Text>
      <Sum />
      <Button onClick={() => dispatch({ type: "calculate", value: players })}>Siguiente</Button>
    </>
  );
};
