import React from 'react';
import { useSelector } from 'react-redux';
import { selectDigits } from '../../features/generate/generate.slice';
import { selectTimer } from '../../features/timer/timer.slice';
import Digit from './digit/Digit';
import styles from './digits.module.scss';

export default function Digits() {
	const timer = useSelector(selectTimer);
	const digits = useSelector(selectDigits);
	return (
		<div className={styles.container}>
			{digits.map((value, ix) => (
				<Digit key={ix} value={value} canDrag={timer.running} />
			))}
		</div>
	);
}
