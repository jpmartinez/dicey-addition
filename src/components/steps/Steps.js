import React, { useContext } from "react";
import { DiceyAddictionContext } from "../../App";
import DigitsGenerator from "../digits-generator/DigitsGenerator";
import { End } from "../end/End";
import NameForm from "../name-form/NameForm";
import { Player1 } from "../player1/Player1";
import { Player2 } from "../player2/Player2";
import { Score } from "../score/Score";

const stepToComponent = {
  start: NameForm,
  generate: DigitsGenerator,
  player1: Player1,
  player2: Player2,
  score: Score,
  end: End
};
const Empty = () => <div></div>;

export const Steps = () => {
  const [{ step }] = useContext(DiceyAddictionContext);
  console.info(step);
  const Component = stepToComponent[step] || Empty;
  return <Component />;
};
