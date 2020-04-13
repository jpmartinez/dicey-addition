import { createSlice } from '@reduxjs/toolkit';
import { nextRound } from '../round/round.slice';

export const generateSlice = createSlice({
	name: 'generate',
	initialState: ['?', '?', '?', '?'],
	reducers: {
		setDigits: (state, action) => {
			return action.payload;
		},
	},
	extraReducers: {
		[nextRound]: state => (state = ['?', '?', '?', '?']),
	},
});

export const { setDigits } = generateSlice.actions;

export const selectDigits = state => state.digits;

export default generateSlice.reducer;
