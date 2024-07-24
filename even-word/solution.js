function solution(S) {
	// constraints
	if (S.length === 0 || S.length > 200000) {
		return 0;
	}
	const lower = S.toLowerCase();
	let deleteLetter = 0;

	// create an empty object
	let countObj = {};

	for (let letter of lower) {
		if (countObj[letter]) {
			countObj[letter]++;
		} else {
			countObj[letter] = 1;
		}
	}

	// check for odd elements
	for (let letter in countObj) {
		if (countObj[letter] % 2 !== 0) {
			deleteLetter++;
		}
	}

	return deleteLetter;
}

console.log(solution('acbcbbbba'));
console.log(solution('axxaxa'));
console.log(solution('aaaa'));
console.log(solution('addbbbcccc'));
console.log(solution('aaaa'));

/* 

{
a : 2,
b: 4,
c:2
}

letterMap.set(
		letter,
		letterMap.get(letter) ? letterMap.get(letter) + 1 : 1
	);
	console.log(letterMap);
    
*/
