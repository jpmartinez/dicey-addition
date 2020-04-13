export const getPlayerMove = move => {
	const firstSummand = move
		.slice(0, 2)
		.reduce((res, k) => (typeof k !== 'number' ? `${res}?` : `${res}${k}`), '');
	const secondSummand = move
		.slice(2, 4)
		.reduce((res, k) => (typeof k !== 'number' ? `${res}?` : `${res}${k}`), '');
	const sum = move.some(m => typeof m !== 'number')
		? '???'
		: parseInt(firstSummand) + parseInt(secondSummand);
	const result = 100 - sum;
	return {
		operation: `${firstSummand} + ${secondSummand} = ${sum}`,
		sum,
		result: isNaN(result) ? 'Incompleto' : result,
	};
};

export const getPlayersScore = score => {
	return score.reduce((res, k) => {
		return res[k] ? { ...res, [k]: res[k] + 1 } : { ...res, [k]: 1 };
	}, {});
};
