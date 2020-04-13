import { createSlice } from '@reduxjs/toolkit';
import { ROUNDS_TO_WIN } from '../../utils/constants';
import { getPlayerMove, getPlayersScore } from './round.utils';

export const roundSlice = createSlice({
	name: 'generate',
	initialState: { round: { id: 1 }, score: [] },
	reducers: {
		calculate: (state, { payload }) => {
			const results = Object.entries(payload).map(([player, move]) => [player, getPlayerMove(move).result]);
			if (isNaN(results[0][1]) && isNaN(results[1][1])) {
				state.score.push('none');
				state.round.result = 'Ambos pierden';
			} else if (isNaN(results[0][1]) || isNaN(results[1][1])) {
				const winner = isNaN(results[0][1]) ? results[1][0] : results[0][0];
				state.score.push(winner);
				state.round.result = `Ganador ${winner}`;
			} else if (Math.abs(results[0][1]) === Math.abs(results[1][1])) {
				state.score.push('none');
				state.round.result = 'Empate';
			} else {
				const winner = Math.abs(results[0][1]) > Math.abs(results[1][1]) ? results[1][0] : results[0][0];
				state.score.push(winner);
				state.round.result = `Ganador ${winner}`;
			}
		},
		nextRound: state => {
			if (state.round.id === ROUNDS_TO_WIN) {
				const score = getPlayersScore(state.score);
				const results = Object.entries(score).filter(s => s[0] !== 'none');
				if (results.length === 1) {
					state.result = `Ganador ${results[0][0]}`;
				} else if (results.length === 0 || results[0][1] === results[1][1]) {
					state.result = 'Empate';
				} else {
					state.result = `Ganador ${results[0][1] > results[1][1] ? results[0][0] : results[1][0]}`;
				}
			}
			state.round.id += 1;
		},
	},
});

export const { calculate, nextRound } = roundSlice.actions;

export const selectRound = state => state.results.round;
export const selectScore = state => state.results.score;
export const selectResult = state => state.results.result;

export default roundSlice.reducer;
