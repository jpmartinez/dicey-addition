import React, { useContext } from "react";
import { DiceyAddictionContext } from "../../App";
import Button from "../controls/button/Button";
import LargeText from "../controls/large-text/LargeText";
import ScoreTable from "../score-table/ScoreTable";

export const End = () => {
  const [{ winner, round }, dispatch] = useContext(DiceyAddictionContext);
  return (
    <>
      <ScoreTable title="Puntaje Final" />
      <LargeText>{winner && !round.draw ? `Ganador ${winner}` : "Empate"}</LargeText>
      <Button onClick={() => dispatch({ type: "reset" })}>¿Otra?</Button>
    </>
  );
};
