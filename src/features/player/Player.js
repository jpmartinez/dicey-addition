import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../components/controls/button/Button';
import Text from '../../components/controls/text/Text';
import Digits from '../../components/digits/Digits';
import { joinClassNames } from '../../utils/helpers';
import { selectPlayerNames } from '../start/start.slice';
import Timer from '../timer/Timer';
import { selectTimer, setTimer } from '../timer/timer.slice';
import styles from './player.module.scss';
import Sum from './sum/Sum';

export const Player = () => {
	const { name } = useParams();
	const dispatch = useDispatch();
	const players = useSelector(selectPlayerNames);
	const timer = useSelector(selectTimer);
	const nextStep =
		players.indexOf(name) === players.length - 1 ? '/score' : players[players.indexOf(name) + 1];
	const history = useHistory();
	return (
		<>
			<Digits />
			<div className={joinClassNames(styles.playArea, timer.running && styles.playing)}>
				<Text>{name}</Text>
				<Sum player={name} />
			</div>
			{timer.finished ? (
				<Button
					onClick={() => {
						dispatch(setTimer({ finished: false, running: false }));
						history.push(nextStep);
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
