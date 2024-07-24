const S = 'We test coders. Give us a try?';

function solution(S) {
	const regExp = /[.!?]/;
	const wordRegExp = /[a-zA-Z]/;
	const count = [];

	// check to see if the string contains special characters
	if (regExp.test(S)) {
		const splitStr = S.split(regExp);

		for (let sentence of splitStr) {
			const words = sentence.split(' ');

			// check for only alphabetical characters
			const filterWhiteSpace = words.filter((word) =>
				wordRegExp.test(word)
			);
			console.log(filterWhiteSpace);
			count.push(filterWhiteSpace.length);
		}
	} else {
		// for strings without special characters
		const words = S.split(' ');

		const filterWhiteSpace = words.filter((word) => wordRegExp.test(word));
		console.log(filterWhiteSpace);
		count.push(filterWhiteSpace.length);
	}

	return Math.max(...count);
}

console.log(solution(S));
console.log(solution(''));
