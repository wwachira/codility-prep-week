const name = 'Regular Expression';
const sentence = 'My mic is not working and I am currently working';

console.log(name.replace('Regular', 'Irregular'));

name.replace();
console.log(name);

console.log(sentence.replace('working', 'functioning'));
console.log(sentence.replaceAll('nm', '*'));

// maximum length of a string = 10
// replace the rest of the string with an ellipsis (...)

// .slice()
const str = 'Hello';

console.log(str.slice(3));
console.log(str.slice(-1));

// slice()
// slice(index)
// slice(start,end)

console.log(str.slice(1, 3));
console.log(str.slice(0, str.length - 1));
console.log(str.slice(0, -1));

// .includes()

const sentenceII = 'Search for the word Pilot';
const lower = sentenceII.toLowerCase();

console.log(lower.includes('pilot'));

if (lower.includes('pilot')) {
	// do smth
} else {
	// do smth
}
