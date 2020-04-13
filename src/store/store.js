import { configureStore } from '@reduxjs/toolkit';
import generateSlice from '../features/generate/generate.slice';
import playerSlice from '../features/player/player.slice';
import roundSlice from '../features/round/round.slice';
import startSlice from '../features/start/start.slice';
import timerSlice from '../features/timer/timer.slice';

export default configureStore({
	reducer: {
		players: startSlice,
		digits: generateSlice,
		timer: timerSlice,
		moves: playerSlice,
		results: roundSlice,
	},
});
