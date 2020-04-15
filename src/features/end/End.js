import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../../components/controls/button/Button';
import LargeText from '../../components/controls/large-text/LargeText';
import ScoreTable from '../../components/score-table/ScoreTable';
import { selectResult } from '../round/round.slice';

export const End = () => {
	const result = useSelector(selectResult);
	return (
		<>
			<ScoreTable title="Puntaje Final" />
			<LargeText>{result}</LargeText>
			<a href="/dicey-addition/start">
				<Button>¿Otra?</Button>
			</a>
		</>
	);
};
