import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { DiceyAddictionContext } from '../../App';
import Button from '../controls/button/Button';
import Digits from './digits/Digits';

function generateDigits() {
	return ['', '', '', ''].map(a => Math.floor(Math.random() * 10));
}
export default function DigitsGenerator() {
	// eslint-disable-next-line no-unused-vars
	const history = useHistory();
	const [_, dispatch] = useContext(DiceyAddictionContext);
	return (
		<>
			<Digits />
			<Button
				onClick={() => {
					dispatch({ type: 'setDigits', value: generateDigits() });
					history.push(`player1`);
				}}
			>
				Generar
			</Button>
		</>
	);
}
