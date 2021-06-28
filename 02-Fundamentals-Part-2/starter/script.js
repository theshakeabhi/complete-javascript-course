//Fundamentals Part-2
//1 Strict Mode
//=============
'use strict';
console.log('1 Strict Mode');
console.log(
	`when strict mode is used, then a lot of bugs can be identified especially with variable names and reserved names.
  const interface = "this"; 
  this would give an error, but if 'use strict is not used it won't'`
);

console.log('\n');

//2 Functions
//=============
console.log('2 Functions');
console.log("DRY: Don't Repeat yourself");

function logger() {
	console.log('This is a function call');
}
//this does not return function

//calling / invoking / running a function
logger();
logger();

function fruitShake(noOfApples, noOfOranges) {
	console.log(noOfApples, noOfOranges);
	const shake = `This shake is made up of ${noOfApples} Apples and ${noOfOranges} Oranges`;
	return shake;
}

const lastShake = fruitShake(3, 5);
console.log(lastShake);
console.log(fruitShake(2, 9));

console.log(`
console.log() is a function
Number('23') is also a function.
These are called built-in functions`);

console.log('\n');

//3 Function Declaration and Expression
//=============
console.log('3 Function Declaration and Expression');
console.log('Function Declaration');

const age1_1 = calcAge1(1997.5);
console.log(
	age1_1,
	'when you use function declaration you call call the function before the functin definition.'
);

function calcAge1(birthYear) {
	return 2021 - birthYear;
}
const age1 = calcAge1(1997);
console.log(age1, 'Function Declaration');

console.log('Function Expression');

const calcAge2 = function (birthYear) {
	return 2021 - birthYear;
};
const age2 = calcAge2(1998);
console.log(
	age2,
	'Function Expression on the otherhand can be only called after the function definition'
);

let calcAge3 = function (random) {
	return random - 69;
};
let age3 = calcAge3(69);
console.log(age3, 'Just checked if we could use let instead of const');

console.log(
	'Here functions works also as values therefore it can be assigned to variables'.toUpperCase()
);

console.log('\n');

//4 Arrow Function
//=============
console.log('4 Arrow Function');
console.log(`const calcAge4 = (birthYear) => 2021 - birthYear;
This is an arrow function where the return statement is implicit when there is only one line to return. If you have to write more then {} should be used.
${'This is mostly preffered when there is only one line to return.'.toUpperCase()}`);

const calcAge4 = (birthYear) => 2021 - birthYear;
console.log(calcAge4(2000));

console.log('\n');

//5. Functions calling other functions
//=============
console.log('5. Functions calling other functions');

const fruitCutter = (fruits) => fruits * 4;

function fruitJuicer(noOfApples, noOfOranges) {
	const noOfApplesPieces = fruitCutter(noOfApples);
	const noOfOrangesPieces = fruitCutter(noOfOranges);

	const shake = `This shake was made using ${noOfApples} ${
		noOfApples > 1 ? 'Apples' : 'Apple'
	} and ${noOfOranges} ${
		noOfOranges > 1 ? 'Oranges' : 'Orange'
	} where these Apples were cut into ${noOfApplesPieces} pieces and Oranges were cut into ${noOfOrangesPieces} pieces`;

	return shake;
}

console.log(fruitJuicer(2, 1));
console.log('Check Code for a surpriseee!!!'.toUpperCase());

console.log('\n');

//6. Funtion Review
//=============
console.log('6. Funtion Review ');
console.log('When a return keyword is encountered it immediatly exits from the funtion');
console.log('For more details check the snapshots in the images folder.');

console.log('\n');

//6 Arrays
//=============
console.log('6 Arrays');

const numberArray = [1, 2, 3, 4, 5, 8];
console.log('[] initialisation', numberArray);

const friendsArray = new Array('abc', 'cds', 'dsd');
console.log('new Array() intialisation', friendsArray);

const mixedArray = ['Abhi', 23, fruitJuicer(2, 1), 'Home'];
console.log(mixedArray);

console.log(numberArray.length, mixedArray.length);
console.log(numberArray[0], mixedArray[mixedArray.length - 1]);

console.log('Access first element with 0 and last element with arrayName.length-1');

const someShit = [
	calcAge1(numberArray[0]),
	calcAge1(numberArray[1]),
	calcAge1(numberArray[numberArray.length - 1]),
];
console.log(someShit);
console.log(
	'This was basically created using another array where it was used to call a function which was initialied int the new array!'
);

console.log('\n');

//7 Array Methods
//=============
console.log('7 Array Methods');

const friends = ['Nithin', 'Akshay', 'Yadhu'];
console.log(friends);

//add elements (push and unshift)
console.log('\nAdd elements\n');
console.log('push function');
friends.push('Athul');
console.log(friends);

const whatsPush = friends.push('Sree');
console.log(whatsPush, 'basically .push return the new length of the array');
console.log(friends);

console.log('unshift funtion');
friends.unshift('Mukul');
console.log(friends);
console.log('What unshift does is, it adds the element to the begining of the array');

//remove element
console.log('\nRemove elements\n');
console.log('pop function');
const popped = friends.pop();
console.log(friends);
console.log(
	popped,
	"'pop function doesn't take any argument as it pops the last element but it returns the popped element'"
);

console.log('shift function');
const poppedShift = friends.shift();
console.log(friends);
console.log(poppedShift, "'shift function removes the first element'");

//find element
console.log('\nFind elements\n');
console.log('indexOf function');
console.log(
	'indexOf function returns the index of the element in th array if present otherwise return -1'
);

console.log(friends.indexOf('Yadhu'));
console.log(friends.indexOf('Abhishek'));
friends.push(23);
console.log(friends.indexOf('23'));

console.log('includes function');
console.log(
	'include function is bascailly a modern type of indexOf(), instead of returning values it return true/false values which can be used in conditional statements'
);

console.log(friends.includes('Akshay'));
console.log(friends.includes('23'));

console.log(
	'Both indexOf() and includes() does STRICT eqaulity ie ===, therefore note it'.toUpperCase()
);

console.log('\n');

//8 Objects
//=============
console.log('8 Objects');

const abhiArray = [
	'Abhishek',
	'Chandrasenan',
	2021 - 1997,
	'Software Engineer',
	['Vyshak', 'Ebi', 'Sujith'],
];
console.log('Array', abhiArray);

const abhiObj = {
	firstName: 'Abhishek',
	lastName: 'Chandrasenan',
	age: 2021 - 1997,
	Job: 'Software Engineer',
	friends: ['Vyshak', 'Ebi', 'Sujith'],
};
console.log(abhiObj);

console.log('In object it is key value pair');
console.log(
	'The main diffferrnce between array and object is that, in object order doesnt matter but in array it does. Therefore when you use these try to think of this also.'
);

console.log('\n');

//9 Retrive Data from Object using dot and bracket notation
//=============
console.log('9 Retrive Data from Object using dot and bracket notation');

console.log(abhiObj);

console.log('dot . operator');
console.log('abhiObj.firstName:', abhiObj.firstName);

console.log('\nbracker [] operator');
console.log("abhiObj['age']:", abhiObj['age']);
console.log('Please do note that in [], we have a key which has to a string.');
console.log('and inside [] we can have expression ');

const nameKey = 'Name';
console.log("abhiObj['first' + nameKey]", abhiObj['first' + nameKey]);
console.log("abhiObj['last' + nameKey]", abhiObj['last' + nameKey]);

console.log('\nin . operator we cannot use expression  i.e'.toUpperCase());
console.log("abhiObj.'first'+nameKey; would yeild error");

abhiObj.native = 'Kottayam';
abhiObj['motherTounge'] = 'Malayalam';

console.log('After Updattion', abhiObj);

/*
commenting this as promt is annoying;

const intrestedIn = prompt(
	'What do you wanna know about Abhishek: firstName, lastName, age, Job, friends,native, moterTounge'
);

// abhiObj.intrestedIn would yeild error as promt would give a string and . operator doesnt accept string.

if (abhiObj[intrestedIn]) {
	console.log(abhiObj[intrestedIn]);
} else {
	alert(`Enter a valid input and not ${intrestedIn}`);
}
*/

console.log('\n');

//Challenge
//=============
console.log('CHALLENGE');
console.log(
	`${abhiObj.firstName} has ${abhiObj.friends.length} friends, and his best friend is ${abhiObj.friends[0]}`
);

console.log('\n');

//10 Object Methods
//=============
console.log('10 Object Methods');

console.log('\n');

// //
// //=============
// console.log('');

// console.log('\n');

// //
// //=============
// console.log('');

// console.log('\n');

// //
// //=============
// console.log('');

// console.log('\n');
