import React, { useContext } from "react";
import { DiceyAddictionContext } from "../../App";
import Button from "../controls/button/Button";
import Text from "../controls/text/Text";
import Digits from "../digits-generator/digits/Digits";
import Sum from "../sum/Sum";
import Timer from "../timer/Timer";

export const Player1 = () => {
  const [
    {
      move,
      players: { player1 },
      timer
    },
    dispatch
  ] = useContext(DiceyAddictionContext);
  const players = { player1: { ...player1, move: move.map(m => (m === "" ? undefined : m)) }, move: ["", "", "", ""] };
  return (
    <>
      <Digits />
      <Timer />
      <div>
        <Text>{player1.name}</Text>
        <Sum />
      </div>
      <Button onClick={() => dispatch({ type: "next", value: players, nextStep: "player2" })}>Siguiente</Button>
    </>
  );
};
