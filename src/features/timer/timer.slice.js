import { createSlice } from '@reduxjs/toolkit';

export const timerSlice = createSlice({
	name: 'timer',
	initialState: { running: false, finished: false },
	reducers: {
		toggleRunning: state => {
			state.running = !state.running;
		},
		setTimer: (state, action) => {
			return action.payload;
		},
	},
});

export const { toggleRunning, toggleFinished, setTimer } = timerSlice.actions;

export const selectTimer = state => state.timer;

export default timerSlice.reducer;
