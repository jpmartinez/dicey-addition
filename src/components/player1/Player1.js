import React, { useContext } from "react";
import { DiceyAddictionContext } from "../../App";
import Button from "../controls/button/Button";
import Text from "../controls/text/Text";
import Digits from "../digits-generator/digits/Digits";
import Sum from "../sum/Sum";
import Timer from "../timer/Timer";
import styles from "./player1.module.scss";

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
      <div className={styles.playArea}>
        <Text>{player1.name}</Text>
        <Sum />
      </div>
      {timer.finished ? (
        <Button onClick={() => dispatch({ type: "next", value: players, nextStep: "player2" })}>Siguiente</Button>
      ) : (
        <Timer />
      )}
    </>
  );
};
