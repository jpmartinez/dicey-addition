import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DigitBox from '../../../components/controls/digit-box/DigitBox';
import { move, selectMoves } from '../player.slice';
import styles from './sum.module.scss';

export default function Sum({ player }) {
	const moves = useSelector(selectMoves);
	const playerMoves = moves[player] || ['', '', '', ''];
	const dispatch = useDispatch();
	const setMove = id => value => {
		dispatch(move({ player, id, value }));
	};

	return (
		<>
			<div className={styles.formula}>
				<DigitBox setMove={setMove(0)}>{playerMoves[0]}</DigitBox>
				<DigitBox setMove={setMove(1)}>{playerMoves[1]}</DigitBox>
				<span>+</span>
				<DigitBox setMove={setMove(2)}>{playerMoves[2]}</DigitBox>
				<DigitBox setMove={setMove(3)}>{playerMoves[3]}</DigitBox>
			</div>
		</>
	);
}
