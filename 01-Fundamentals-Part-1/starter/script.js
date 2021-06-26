// 1
//======
let js = 'amazing';
// if (js === 'amazing') alert('javascript is FUN');
console.log(40 + 8 + 23 - 10);

// 2
//======
console.log('Jonas');
console.log(23);

let firstName = 'Jonas';
console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// camelCase is the convetion for nameing variables
// a-z, 0-9, _ and $ are allowed for variable naming.
// function is not allowed but _function/$function is.

let PI = 3.14;
//when a varible is all caps then it is used when constant that are recogoned by pi or stuff liked that.

// 3 DataType
//======
console.log('DATA TYPES');
let javascriptIsFun = true;
console.log('Javascript is Fun:', javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 'Abhishek');
console.log(typeof 23);
console.log(typeof NaN);
console.log(typeof null); //this is a BUG in JS. null is null and not an object.
console.log(typeof undefined);

//basically in JS, variables don't hold dataypes but values does. very very important thing to understand.
//because you can store another value of another datatype to the same varible diclared earlier in JS

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);
//JS uses dynamic typing

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

// 4 let, var, const
//======
// var and let eventhough they seem similar they are not, more in section 7.

// 5 Operator
//======
const currentYear = 2037;
const ageAbhi = currentYear - 1997;
const ageAis = currentYear - 2000;
console.log(ageAbhi, ageAis);

console.log(ageAbhi ** 2);
//2 ** 3 means 2 to the power of 3

console.log(firstName + ' ' + javascriptIsFun);

//assignment operator
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++;
x--;
x--;
console.log(x);

//comparison operator
console.log(ageAbhi > ageAis); // > < <= >=
console.log(ageAis >= 19);

// 6 Operator Preccende
//======

console.log(currentYear - 1997 > currentYear - 2000);
//checkout MDN reference

// 7 strings and template litreals
//======
const fullName = 'Abhishek Chandrasenan';
const job = 'software engineer';
const birthYear = 1997;
const yearCurrent = 2021;

const abhishek = "I'm " + fullName + ', a ' + (yearCurrent - birthYear) + ' years old ' + job + '!';
console.log(abhishek);

const abhishekNew = `I'm ${fullName}, a ${yearCurrent - birthYear} years old ${job} !`;
console.log(abhishekNew);

console.log(`just a regular string`);

//old multiline stuff
console.log('hey this is \n\
a multiline \n\
console log');

// now with ES6 ``
console.log(`hey this
is somehow
fucking amazing, and lot 
less \\n\\ `);

//8 taking decison, if else if
//======

// 1. const ageNew = 19; //new age
const ageNew = 15;

if (ageNew >= 18) {
	console.log('Sarah can start driving.');
} else {
	const yearLeft = 18 - ageNew;
	console.log(`Sarah is too young. Wait for another ${yearLeft} years :))`);
}
// else is optional

const birthYearNew = 1997;
let century;

if (birthYear <= 2000) {
	console.log('He was born in 20th century');
} else {
	console.log('He was born in 21th century');
}

//
//======

//
//======

//
//======
