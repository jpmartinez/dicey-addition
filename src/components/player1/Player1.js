import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { DiceyAddictionContext } from '../../App';
import { joinClassNames } from '../../utils/helpers';
import Button from '../controls/button/Button';
import Text from '../controls/text/Text';
import Digits from '../digits-generator/digits/Digits';
import Sum from '../sum/Sum';
import Timer from '../timer/Timer';
import styles from './player1.module.scss';

export const Player1 = () => {
	const [
		{
			move,
			timer,
			players: { player1 },
		},
		dispatch,
	] = useContext(DiceyAddictionContext);
	const players = {
		player1: { ...player1, move: move.map(m => (m === '' ? '?' : m)) },
		move: ['', '', '', ''],
	};
	const history = useHistory();
	return (
		<>
			<Digits />
			<div className={joinClassNames(styles.playArea, timer.running && styles.playing)}>
				<Text>{player1.name}</Text>
				<Sum />
			</div>
			{timer.finished ? (
				<Button
					onClick={() => {
						dispatch({ type: 'next', value: players });
						history.push('player2');
					}}
				>
					Siguiente
				</Button>
			) : (
				<Timer />
			)}
		</>
	);
};
