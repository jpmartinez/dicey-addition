import React, { useReducer } from 'react';
import { DndProvider } from 'react-dnd';
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Card from './components/card/Card';
import DigitsGenerator from './components/digits-generator/DigitsGenerator';
import { End } from './components/end/End';
import NameForm from './components/name-form/NameForm';
import { Player1 } from './components/player1/Player1';
import { Player2 } from './components/player2/Player2';
import { Round } from './components/round/Round';
import { Steps } from './components/steps/Steps';
import { initialState, reducer } from './reducer';

export const DiceyAddictionContext = React.createContext();

const DiceyAddictionContextProvider = props => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<DiceyAddictionContext.Provider value={[state, dispatch]}>
			{props.children}
		</DiceyAddictionContext.Provider>
	);
};

function App() {
	return (
		<DiceyAddictionContextProvider>
			<DndProvider backend={MultiBackend} options={HTML5toTouch}>
				<BrowserRouter>
					<Card>
						<Switch>
							<Route path="/start">
								<NameForm />
							</Route>
							<Route path="/generate">
								<DigitsGenerator />
							</Route>
							<Route path="/player1">
								<DndProvider backend={MultiBackend} options={HTML5toTouch}>
									<Player1 />
								</DndProvider>
							</Route>
							<Route path="/player2">
								<DndProvider backend={MultiBackend} options={HTML5toTouch}>
									<Player2 />
								</DndProvider>
							</Route>
							<Route path="/score">
								<Round />
							</Route>
							<Route path="/result">
								<End />
							</Route>
							<Route path="/">
								<Steps />
							</Route>
						</Switch>
					</Card>
				</BrowserRouter>
			</DndProvider>
		</DiceyAddictionContextProvider>
	);
}

export default App;
