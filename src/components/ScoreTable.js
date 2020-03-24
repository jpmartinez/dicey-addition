import React, { useContext } from "react";
import { DiceyAddictionContext } from "../App";
import styles from "./score-table.module.scss";
import Text from "./Text";

export default function ScoreTable() {
  const [
    {
      players: { player1, player2 }
    }
  ] = useContext(DiceyAddictionContext);
  return (
    <div className={styles.container}>
      <Text className={styles.headers}>Jugador</Text>
      <Text className={styles.headers}>Puntaje</Text>
      <Text className={styles.rows}>{player1 && player1.name}</Text>
      <Text className={styles.rows}>{player1 && player1.score}</Text>
      <Text className={styles.rows}>{player2 && player2.name}</Text>
      <Text className={styles.rows}>{player2 && player2.score}</Text>
    </div>
  );
}
