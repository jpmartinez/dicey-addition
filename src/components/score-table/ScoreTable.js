import React from 'react';
import { useSelector } from 'react-redux';
import { selectScore } from '../../features/round/round.slice';
import { getPlayersScore } from '../../features/round/round.utils';
import { selectPlayerNames } from '../../features/start/start.slice';
import { ROUNDS_TO_WIN } from '../../utils/constants';
import { joinClassNames } from '../../utils/helpers';
import Text from '../controls/text/Text';
import styles from './score-table.module.scss';

const defaultPoints = new Array(ROUNDS_TO_WIN).fill(null);

const Points = ({ player, score }) => {
	return (
		<div className={styles.points}>
			{defaultPoints.map((p, ix) => {
				return (
					<div
						key={ix}
						className={joinClassNames(
							styles.point,
							score[ix] === player ? styles.win : score[ix] != null && styles.lose
						)}
					></div>
				);
			})}
		</div>
	);
};

const PlayerScore = ({ player }) => {
	const score = useSelector(selectScore);
	const result = getPlayersScore(score)[player] || 0;
	return (
		<>
			<Text>{player}</Text>
			<Points player={player} score={score}></Points>
			<Text className={styles.score}>{result}</Text>
		</>
	);
};

export default function ScoreTable({ title = 'Puntaje' }) {
	const players = useSelector(selectPlayerNames);
	return (
		<div className={styles.container}>
			<Text>{title}</Text>
			<div className={styles.moves}>
				{players.map((player, ix) => (
					<PlayerScore player={player} key={ix} />
				))}
			</div>
		</div>
	);
}
