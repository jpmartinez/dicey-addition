import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { DiceyAddictionContext } from '../../App';
import { ROUNDS_TO_WIN } from '../../utils/constants';
import Button from '../controls/button/Button';
import Text from '../controls/text/Text';
import ScoreTable from '../score-table/ScoreTable';
import styles from './round.module.scss';

const getTitle = ({ draw, winner }) => {
	if (winner) {
		return `Ganador ${winner}`;
	} else {
		return draw ? 'Empate' : 'Ambos pierden';
	}
};

const getPlayerMove = ({ move, sum }) => {
	const firstSummand = move.slice(0, 2).reduce((res, k) => (isNaN(k) ? `${res}?` : `${res}${k}`), '');
	const secondSummand = move.slice(2, 4).reduce((res, k) => (isNaN(k) ? `${res}?` : `${res}${k}`), '');
	return `${firstSummand} + ${secondSummand} = ${move.some(m => isNaN(m)) ? '???' : sum}`;
};

export const Round = () => {
	const [
		{
			round,
			players: { player1, player2 },
		},
		dispatch,
	] = useContext(DiceyAddictionContext);
	const history = useHistory();
	return (
		<>
			<div className={styles.header}>
				<Text className={styles.round}>{`Round ${round.id}`}</Text>
				<Text className={styles.title}>{getTitle(round)}</Text>
			</div>
			<div className={styles.moves}>
				<Text>{player1.name}</Text>
				<Text className={styles.move}>{getPlayerMove(player1)}</Text>
				<Text className={styles.result}>{player1.result}</Text>
				<Text>{player2.name}</Text>
				<Text className={styles.move}>{getPlayerMove(player2)}</Text>
				<Text className={styles.result}>{player2.result}</Text>
			</div>
			<div className={styles.separator}></div>
			<ScoreTable></ScoreTable>
			<Button
				onClick={() => {
					dispatch({ type: 'nextRound' });
					history.push(round.id >= ROUNDS_TO_WIN ? 'end' : 'generate');
				}}
			>
				Siguiente
			</Button>
		</>
	);
};
