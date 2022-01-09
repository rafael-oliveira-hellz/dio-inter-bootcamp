function compareNumbers(num1, num2) {
	const firstSentence = makeFirstSentence(num1, num2);
	const secondSentence = makeSecondSentence(num1, num2);

	return `${firstSentence} ${secondSentence}`;
}

function makeFirstSentence(num1, num2) {
	let firstSentence = `Os números ${num1} e ${num2}`;
	let sameOrNot = 'não são iguais';

	if (num1 === num2) {
		sameOrNot = 'são iguais';
	}

	return `${firstSentence} ${sameOrNot}.`;
}

function makeSecondSentence(num1, num2) {
	const sumResult = num1 + num2;
	let compareWithTen = 'menor';
	let compareWithTwenty = 'menor';

	if (sumResult > 10) {
		compareWithTen = 'maior';
	}

	if (sumResult > 20) {
		compareWithTwenty = 'maior';
	}

	return `Sua soma é ${sumResult}, que é ${compareWithTen} do que 10 e ${compareWithTwenty} do que 20.`;
}

console.log(compareNumbers(10, 10));