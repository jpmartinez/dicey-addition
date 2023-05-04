import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/controls/button/Button';
import { ROUNDS_TO_WIN } from '../../utils/constants';
import styles from './home.module.scss';

export const Home = () => {
	return (
		<>
			<div className={styles.title}>
				<h1>Dicey</h1>
				<h2>Additon</h2>
			</div>
			<ul className={styles.instructions}>
				<li>Se generarán 4 dígitos</li>
				<li>Cada jugador debe realizar una suma con estos dígitos</li>
				<li>Quien genere la suma más cercana a 100 gana la ronda</li>
				<li>Se jugaran {ROUNDS_TO_WIN} rondas</li>
				<li>Quien gane más veces será el ganador</li>
			</ul>
			<Link to="/start">
				<Button>Jugar</Button>
			</Link>
		</>
	);
};
