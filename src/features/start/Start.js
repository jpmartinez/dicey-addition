import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '../../components/controls/button/Button';
import Text from '../../components/controls/text/Text';
import { useForm } from '../../utils/hooks';
import styles from './start.module.scss';
import { set } from './start.slice';

export default function Start() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [onSubmit, onChange, { player1, player2 }] = useForm(() => {
		dispatch(set([player1, player2]));
		history.push('generate');
	});

	return (
		<form onSubmit={onSubmit} className={styles.form}>
			<div className={styles.fieldContainer}>
				<label>
					<Text>¿Quién va primero?</Text>
				</label>
				<input
					className={styles.input}
					type="text"
					name="player1"
					onChange={onChange}
					value={!!player1 ? player1 : ''}
					required
				/>
			</div>
			<div className={styles.fieldContainer}>
				<label>
					<Text>¿Quién va segundo?</Text>
				</label>
				<input
					className={styles.input}
					type="text"
					name="player2"
					onChange={onChange}
					value={!!player2 ? player2 : ''}
					required
				/>
			</div>
			<Button type="submit">Siguiente</Button>
		</form>
	);
}
