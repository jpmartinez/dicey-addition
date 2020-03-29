import React, { useContext } from "react";
import { DiceyAddictionContext } from "../../App";
import { joinClassNames } from "../../utils/helpers";
import Text from "../controls/text/Text";
import styles from "./score-table.module.scss";

const Points = ({ match }) => (
  <div className={styles.points}>
    {match.map((m, ix) => {
      return <div key={ix} className={joinClassNames(styles.point, m ? styles.win : m != null && styles.lose)}></div>;
    })}
  </div>
);
export default function ScoreTable({ title = "Puntaje" }) {
  const [
    {
      players: { player1, player2 }
    }
  ] = useContext(DiceyAddictionContext);
  return (
    <div className={styles.container}>
      <Text>{title}</Text>
      <div className={styles.moves}>
        <Text>{player1.name}</Text>
        <Points {...player1}></Points>
        <Text className={styles.score}>{player1.score}</Text>
        <Text>{player2.name}</Text>
        <Points {...player2}></Points>
        <Text className={styles.score}>{player2.score}</Text>
      </div>
    </div>
  );
}
