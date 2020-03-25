import React, { useContext } from "react";
import { DiceyAddictionContext } from "../../App";
import Text from "../controls/text/Text";
import ScoreTable from "../score-table/ScoreTable";

export const End = () => {
  const [{ winner }] = useContext(DiceyAddictionContext);
  return (
    <>
      <Text>{`El ganador es ${winner}`}</Text>
      <ScoreTable />
    </>
  );
};
