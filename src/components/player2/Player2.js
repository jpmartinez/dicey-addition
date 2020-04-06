import React, { useContext } from 'react';
import { DiceyAddictionContext } from '../../App';
import { joinClassNames } from '../../utils/helpers';
import Button from '../controls/button/Button';
import Text from '../controls/text/Text';
import Digits from '../digits-generator/digits/Digits';
import Sum from '../sum/Sum';
import Timer from '../timer/Timer';
import styles from './player2.module.scss';

export const Player2 = () => {
	const [
		{
			move,
			timer,
			players: { player2 },
		},
		dispatch,
	] = useContext(DiceyAddictionContext);
	const players = { player2: { ...player2, move: move.map(m => (m === '' ? '?' : m)) }, move: ['', '', '', ''] };
	return (
		<>
			<Digits />
			<div className={joinClassNames(styles.playArea, timer.running && styles.playing)}>
				<Text>{player2.name}</Text>
				<Sum />
			</div>
			{timer.finished ? (
				<Button onClick={() => dispatch({ type: 'calculate', value: players })}>Siguiente</Button>
			) : (
				<Timer />
			)}
		</>
	);
};
