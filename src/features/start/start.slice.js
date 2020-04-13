import { createSlice } from '@reduxjs/toolkit';

export const startSlice = createSlice({
	name: 'start',
	initialState: [],
	reducers: {
		set: (state, action) => {
			return action.payload;
		},
	},
});

export const { set } = startSlice.actions;

export const selectPlayerNames = state => state.players;

export default startSlice.reducer;
