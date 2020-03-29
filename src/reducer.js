import merge, { overWriteMerge } from "./utils/array";
import { ROUNDS_TO_WIN } from "./utils/constants.js";

export const initialState = {
  players: {
    player1: { score: 0, match: [null, null, null, null, null, null, null, null, null, null] },
    player2: { score: 0, match: [null, null, null, null, null, null, null, null, null, null] }
  },
  timer: { running: false, finished: false },
  digits: {},
  move: ["", "", "", ""],
  round: { id: 1 },
  step: "start"
};
// export const initialState = {
//   players: {
//     player1: {
//       name: "Pedro",
//       move: ["1", "2", "?", "4"],
//       score: 2,
//       sum: 46,
//       result: "Incompleto",
//       match: [1, 0, 0, 1, 0, 0, 0, 0, 0, 0]
//     },
//     player2: {
//       name: "Paco",
//       move: ["5", "2", "5", "4"],
//       score: 6,
//       sum: 106,
//       result: 6,
//       match: [0, 1, 1, 0, 1, 0, 1, 1, 0, 1]
//     }
//   },
//   timer: { running: false, finished: false },
//   digits: {},
//   move: ["", "", "", ""],
//   round: { id: 10, draw: false, bothLose: false, winner: "Paco" },
//   winner: "Paco",
//   step: "start"
// };

export function reducer(state, action) {
  console.info({ state, action });
  switch (action.type) {
    case "setDigits":
      return merge(state, { digits: action.value, step: action.nextStep });
    case "next":
      return merge(
        state,
        { timer: { finished: false }, move: initialState.move, players: action.value, step: action.nextStep },
        { arrayMerge: overWriteMerge }
      );
    case "setMove":
      return merge(state, { move: action.value }, { arrayMerge: overWriteMerge });
    case "setPlayer":
      return merge(state, { players: action.value, step: action.nextStep });
    case "setTimer":
      return merge(state, { timer: action.value });
    case "calculate": {
      state = merge(
        state,
        { timer: { finished: false }, move: initialState.move, players: action.value },
        { arrayMerge: overWriteMerge }
      );
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
      const matchP1 = state.players.player1.match.slice(0);
      matchP1[state.round.id - 1] = winner === state.players.player1.name;
      const player1 = {
        result: result1,
        sum: sum1 >= 1000 ? "Incompleto" : sum1,
        score: winner === state.players.player1.name ? state.players.player1.score + 1 : state.players.player1.score,
        match: matchP1
      };
      const matchP2 = state.players.player2.match.slice(0);
      matchP2[state.round.id - 1] = winner === state.players.player2.name;
      const player2 = {
        result: result2,
        sum: sum2 >= 1000 ? "Incompleto" : sum2,
        score: winner === state.players.player2.name ? state.players.player2.score + 1 : state.players.player2.score,
        match: matchP2
      };
      const round = { draw, bothLose, winner };
      return merge(state, { round, players: { player1, player2 }, step: "score" });
    }
    case "nextRound":
      if (state.round.id === ROUNDS_TO_WIN) {
        return merge(
          state,
          {
            round: { id: state.round.id + 1 },
            move: initialState.move,
            digits: initialState.digits,
            step: "end",
            winner:
              state.players.player2.score > state.players.player1.score
                ? state.players.player2.name
                : state.players.player1.name
          },
          { arrayMerge: overWriteMerge }
        );
      }
      return merge(
        state,
        { round: { id: state.round.id + 1 }, move: initialState.move, digits: initialState.digits, step: "generate" },
        { arrayMerge: overWriteMerge }
      );
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
}
