import React from 'react';
import { useDrop } from 'react-dnd';
import { useSelector } from 'react-redux';
import { selectTimer } from '../../../features/timer/timer.slice';
import { ItemTypes } from '../../../utils/constants';
import { joinClassNames } from '../../../utils/helpers';
import styles from './digit-box.module.scss';

export default function DigitBox({ setMove, move, children }) {
	const timer = useSelector(selectTimer);
	const [{ isOver }, drop] = useDrop({
		accept: ItemTypes.DIGIT,
		drop: ({ value }) => {
			setMove(value);
		},
		collect: mon => ({
			isOver: !!mon.isOver(),
		}),
		canDrop: () => timer.running,
	});

	return (
		<div ref={drop} className={joinClassNames(styles.digitBox, isOver && timer.running && styles.isOver)}>
			{children}
		</div>
	);
}
