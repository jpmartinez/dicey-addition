import React, { useContext, useReducer } from "react";
import { DndProvider } from "react-dnd";
import MultiBackend from "react-dnd-multi-backend";
import HTML5toTouch from "react-dnd-multi-backend/dist/esm/HTML5toTouch";
import "./App.scss";
import Button from "./components/Button";
import Digits from "./components/Digits";
import DigitsGenerator from "./components/DigitsGenerator";
import NameForm from "./components/NameForm";
import ScoreTable from "./components/ScoreTable";
import Sum from "./components/Sum";
import Text from "./components/Text";
import Timer from "./components/Timer";
import merge, { overWriteMerge } from "./utils/array";

const ROUNDS_TO_WIN = 3;

const Player1 = () => {
  const [
    {
      move,
      players: { player1 }
    },
    dispatch
  ] = useContext(DiceyAddictionContext);
  const players = { player1: { ...player1, move: move.map(m => (m === "" ? undefined : m)) }, move: ["", "", "", ""] };
  return (
    <>
      <Digits />
      <Timer />
      <Text>{player1.name}</Text>
      <Sum />
      <Button onClick={() => dispatch({ type: "next", value: players, nextStep: "player2" })}>Siguiente</Button>
    </>
  );
};

const Player2 = () => {
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

const Score = () => {
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

const End = () => {
  const [{ winner }] = useContext(DiceyAddictionContext);
  return (
    <>
      <Text>{`El ganador es ${winner}`}</Text>
      <ScoreTable />
    </>
  );
};

const stepToComponent = {
  start: NameForm,
  generate: DigitsGenerator,
  player1: Player1,
  player2: Player2,
  score: Score,
  end: End
};

export const DiceyAddictionContext = React.createContext();

function reducer(state, action) {
  console.info({ state, action });
  switch (action.type) {
    case "setDigits":
      return merge(state, { digits: action.value, step: action.nextStep });
    case "next":
      return merge(
        state,
        { move: initialState.move, players: action.value, step: action.nextStep },
        { arrayMerge: overWriteMerge }
      );
    case "setMove":
      return merge(state, { move: action.value }, { arrayMerge: overWriteMerge });
    case "setPlayer":
      return merge(state, { players: action.value, step: action.nextStep });
    case "setTimer":
      return merge(state, { timer: action.value });
    case "calculate": {
      state = merge(state, { move: initialState.move, players: action.value }, { arrayMerge: overWriteMerge });
      const player1Move = state.players.player1.move;
      const player2Move = state.players.player2.move;
      let sum1 = parseInt(`${player1Move[0]}${player1Move[1]}`) + parseInt(`${player1Move[2]}${player1Move[3]}`);
      let sum2 = parseInt(`${player2Move[0]}${player2Move[1]}`) + parseInt(`${player2Move[2]}${player2Move[3]}`);
      sum1 = isNaN(sum1) ? 1000 : sum1;
      sum2 = isNaN(sum2) ? 1000 : sum2;
      const result1 = Math.abs(100 - sum1);
      const result2 = Math.abs(100 - sum2);
      const draw = result1 === result2;
      const bothLose = sum1 >= 1000 && sum2 >= 1000;
      let winner;
      if (!draw && !bothLose) {
        if (sum1 > 100) {
          winner = !bothLose && state.players.player2.name;
        }
        if (sum2 > 100) {
          winner = !bothLose && state.players.player1.name;
        }
        winner = result1 > result2 ? state.players.player2.name : state.players.player1.name;
      }
      const player1 = {
        result: result1,
        sum: sum1 >= 1000 ? "Incompleto" : sum1,
        score: winner === state.players.player1.name ? state.players.player1.score + 1 : state.players.player1.score
      };
      const player2 = {
        result: result2,
        sum: sum2 >= 1000 ? "Incompleto" : sum2,
        score: winner === state.players.player2.name ? state.players.player2.score + 1 : state.players.player2.score
      };
      const round = { draw, bothLose, winner };
      return merge(state, { round, players: { player1, player2 }, step: "score" });
    }
    case "nextRound":
      if (state.players.player1.score >= ROUNDS_TO_WIN) {
        return merge(
          state,
          { move: initialState.move, digits: initialState.digits, step: "end", winner: state.players.player1.name },
          { arrayMerge: overWriteMerge }
        );
      }
      if (state.players.player2.score >= ROUNDS_TO_WIN) {
        return merge(
          state,
          { move: initialState.move, digits: initialState.digits, step: "end", winner: state.players.player2.name },
          { arrayMerge: overWriteMerge }
        );
      }
      return merge(
        state,
        { move: initialState.move, digits: initialState.digits, step: "generate" },
        { arrayMerge: overWriteMerge }
      );
    default:
      throw new Error();
  }
}

const initialState = {
  players: { player1: { score: 0 }, player2: { score: 0 } },
  timer: { running: false, finished: false },
  digits: {},
  move: ["", "", "", ""],
  round: {},
  step: "start"
};
const DiceyAddictionContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <DiceyAddictionContext.Provider value={[state, dispatch]}>{props.children}</DiceyAddictionContext.Provider>;
};

const Empty = () => <div></div>;

const Steps = () => {
  const [{ step }] = useContext(DiceyAddictionContext);
  console.info(step);
  const Component = stepToComponent[step] || Empty;
  return <Component />;
};

function App() {
  return (
    <div className="App">
      <DiceyAddictionContextProvider>
        <DndProvider backend={MultiBackend} options={HTML5toTouch}>
          <Steps />
        </DndProvider>
      </DiceyAddictionContextProvider>
    </div>
  );
}

export default App;
