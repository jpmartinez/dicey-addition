import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '../../components/controls/button/Button';
import Text from '../../components/controls/text/Text';
import ScoreTable from '../../components/score-table/ScoreTable';
import { ROUNDS_TO_WIN } from '../../utils/constants';
import { selectMoves } from '../player/player.slice';
import styles from './round.module.scss';
import { calculate, nextRound, selectRound } from './round.slice';
import { getPlayerMove } from './round.utils';

export const Round = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const round = useSelector(selectRound);
	const moves = useSelector(selectMoves);

	useEffect(() => {
		dispatch(calculate(moves));
	}, [dispatch, moves]);

	return (
		<>
			<div className={styles.header}>
				<Text className={styles.round}>{`Round ${round.id}`}</Text>
				<Text className={styles.title}>{round.result}</Text>
			</div>
			<div className={styles.moves}>
				{Object.entries(moves).map(([player, move], ix) => {
					const { operation, result } = getPlayerMove(move);
					return <Result key={ix} name={player} move={operation} result={result} />;
				})}
			</div>
			<div className={styles.separator}></div>
			<ScoreTable></ScoreTable>
			<Button
				onClick={() => {
					dispatch(nextRound());
					history.push(round.id >= ROUNDS_TO_WIN ? '/result' : '/generate');
				}}
			>
				Siguiente
			</Button>
		</>
	);
};

const Result = ({ name, move, result }) => (
	<>
		<Text>{name}</Text>
		<Text className={styles.move}>{move}</Text>
		<Text className={styles.result}>{result}</Text>
	</>
);
