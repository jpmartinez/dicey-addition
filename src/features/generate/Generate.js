import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '../../components/controls/button/Button';
import Digits from '../../components/digits/Digits';
import { selectPlayerNames } from '../start/start.slice';
import { setDigits } from './generate.slice';

function generateDigits() {
	return ['', '', '', ''].map(a => Math.floor(Math.random() * 10));
}

export default function Generate() {
	const history = useHistory();
	const players = useSelector(selectPlayerNames);
	const dispatch = useDispatch();
	return (
		<>
			<Digits />
			<Button
				onClick={() => {
					dispatch(setDigits(generateDigits()));
					history.push(`player/${players[0]}`);
				}}
			>
				Generar
			</Button>
		</>
	);
}
