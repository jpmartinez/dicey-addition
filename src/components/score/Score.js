import React, { useContext } from "react";
import { DiceyAddictionContext } from "../../App";
import Button from "../controls/button/Button";
import Text from "../controls/text/Text";
import ScoreTable from "../score-table/ScoreTable";

export const Score = () => {
  const [
    {
      round: { draw, bothLose, winner },
      players: { player1, player2 }
    },
    dispatch
  ] = useContext(DiceyAddictionContext);
  console.info(player1, player2);
  const Result = () => {
    if (!bothLose) {
      return (
        <>
          <Text>{draw ? "Empate" : `Ganador ${winner}`}</Text>
          <Text>{`${player1.name} vs ${player2.name}`}</Text>
          <Text>{`${player1.sum} vs ${player2.sum}`}</Text>
        </>
      );
    } else {
      return <Text>{`Ambos pierden`}</Text>;
    }
  };

  return (
    <>
      <Result />
      <ScoreTable />
      <Button onClick={() => dispatch({ type: "nextRound" })}>Siguiente</Button>
    </>
  );
};
