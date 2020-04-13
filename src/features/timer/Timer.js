import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { animated, useSpring } from 'react-spring';
import Button from '../../components/controls/button/Button';
import Text from '../../components/controls/text/Text';
import { COUNTDOWN_SECONDS } from '../../utils/constants';
import styles from './timer.module.scss';
import { selectTimer, setTimer, toggleRunning } from './timer.slice';

export default function Timer() {
	const [timeLeft, setTimeLeft] = useState(COUNTDOWN_SECONDS);
	const [running, setRunning] = useState(false);
	const [finished, setFinished] = useState(false);
	const dispatch = useDispatch();
	const timer = useSelector(selectTimer);

	useEffect(() => {
		let interval;
		if (timeLeft && running) {
			interval = setInterval(() => {
				setTimeLeft(currentSecond => {
					if (currentSecond <= 1) {
						setRunning(false);
						setFinished(true);
						clearInterval(interval);
					} else {
						setRunning(true);
					}
					return currentSecond <= 1 ? COUNTDOWN_SECONDS : currentSecond - 1;
				});
			}, 1000);
		}
		return () => clearInterval(interval);
	}, [dispatch, finished, running, timeLeft]);

	useEffect(() => {
		dispatch(setTimer({ running, finished }));
		return () => {};
	}, [dispatch, finished, running]);

	return (
		<>
			{timer.running ? (
				<Progress timeLeft={timeLeft} running={timer.running} finished={timer.finished} />
			) : (
				<Button
					onClick={() => {
						dispatch(toggleRunning());
						setRunning(true);
					}}
				>
					EMPEZAR
				</Button>
			)}
		</>
	);
}

const Progress = ({ timeLeft, running, finished }) => {
	const props = useSpring({
		from: { width: '0px' },
		to: { width: '298px' },
		config: { duration: COUNTDOWN_SECONDS * 1000 },
	});
	return (
		<div className={styles.container}>
			<Text className={styles.text}>{`${timeLeft} segundos!`}</Text>
			<animated.div style={props} className={styles.fill} />
		</div>
	);
};
