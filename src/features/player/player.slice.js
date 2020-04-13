import { createSlice } from '@reduxjs/toolkit';
import { nextRound } from '../round/round.slice';
import { set } from '../start/start.slice';

export const playerSlice = createSlice({
	name: 'generate',
	initialState: {},
	reducers: {
		move: (state, { payload: { player, id, value } }) => {
			state[player][id] = value;
		},
	},
	extraReducers: {
		[nextRound]: state => Object.keys(state).forEach(player => (state[player] = ['', '', '', ''])),
		[set]: (state, { payload }) => payload.reduce((res, k) => ({ ...res, [k]: ['', '', '', ''] }), {}),
	},
});

export const { move } = playerSlice.actions;

export const selectMoves = state => state.moves;

export default playerSlice.reducer;
