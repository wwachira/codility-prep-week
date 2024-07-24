const total = 106;
let name = 'Chuck Norris';
const firstName = 'Zakayo';
const lastName = 'Shuka';
const worth = `Broke with ${total} others`;

console.log(worth);

console.log(name.length);

// the term index
console.log(name[name.length - 1]);

console.log(name.at(5));
const initials = `Your initials are ${firstName[0]}${lastName[0]}`;
console.log(initials);

const word = 'Diabolical';

for (let char of word) {
	console.log(char);
}

for (let i = 0; i < word.length; i++) {
	console.log(word[i]);
}
