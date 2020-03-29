import React, { useContext } from "react";
import { DiceyAddictionContext } from "../../App";
import Card from "../card/Card";
import DigitsGenerator from "../digits-generator/DigitsGenerator";
import { End } from "../end/End";
import NameForm from "../name-form/NameForm";
import { Player1 } from "../player1/Player1";
import { Player2 } from "../player2/Player2";
import { Round } from "../round/Round";

const stepToComponent = {
  start: NameForm,
  generate: DigitsGenerator,
  player1: Player1,
  player2: Player2,
  score: Round,
  end: End
};
const Empty = () => <div></div>;

export const Steps = () => {
  const [{ step }] = useContext(DiceyAddictionContext);
  const Component = stepToComponent[step] || Empty;
  return (
    <Card>
      <Component />
    </Card>
  );
};
