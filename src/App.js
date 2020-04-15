import React from 'react';
import { DndProvider } from 'react-dnd';
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Card from './components/card/Card';
import { End } from './features/end/End';
import Generate from './features/generate/Generate';
import { Home } from './features/home/Home';
import { Player } from './features/player/Player';
import { Round } from './features/round/Round';
import Start from './features/start/Start';
import store from './store/store';

export const DiceyAddictionContext = React.createContext();

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter basename={'/dicey-addition'}>
				<DndProvider backend={MultiBackend} options={HTML5toTouch}>
					<Card>
						<Switch>
							<Route path="/start">
								<Start />
							</Route>
							<Route path="/generate">
								<Generate />
							</Route>
							<Route path="/player/:name">
								<Player />
							</Route>
							<Route path="/score">
								<Round />
							</Route>
							<Route path="/result">
								<End />
							</Route>
							<Route path="/">
								<Home />
							</Route>
						</Switch>
					</Card>
				</DndProvider>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
