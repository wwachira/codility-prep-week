function solution(S) {
	const strLength = S.length;
	const splitStr = S.split('');

	let start = 0;
	let end = strLength - 1;

	while (start <= end) {
		if (splitStr[start] === '?' && splitStr[end] === '?') {
			// make both of them have the same letter
			splitStr[start] = 'a';
			splitStr[end] = 'a';
		} else if (splitStr[start] === '?') {
			// assign the start side with the same letter as the end side
			splitStr[start] = splitStr[end];
		} else if (splitStr[end] === '?') {
			splitStr[end] = splitStr[start];
		} else if (splitStr[start] !== splitStr[end]) {
			return 'NO';
		}

		// increment from the start and decrement from the end
		start++;
		end--;
	}

	return splitStr.join('');
}

console.log(solution('aza'));
console.log(solution('?ab??a'));
