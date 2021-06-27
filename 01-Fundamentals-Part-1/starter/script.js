// 1
//======
let js = 'amazing';
// if (js === 'amazing') alert('javascript is FUN');
console.log(40 + 8 + 23 - 10);

console.log('\n');

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

console.log('\n');

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

console.log('\n');

// 4 let, var, const
//======
// var and let eventhough they seem similar they are not, more in section 7.

console.log('\n');

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

console.log('\n');

// 6 Operator Preccende
//======

console.log(currentYear - 1997 > currentYear - 2000);
//checkout MDN reference

console.log('\n');

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

console.log('\n');

//8 taking decison, if else if
//======

// const ageNew = 19; //new age
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

console.log('\n');

//9 type conversion and coercion
//======
console.log('9: Type conversion and coercion');
//Genrally all the input are strings when taken in from forms.
//therefore:

//type conversion(manual)
const inputYear = '1997';
console.log(typeof inputYear);
console.log(
	inputYear +
		'18' +
		' basically we tried to add values but it got concatinated instead of adding because inputYear was a string'
);

console.log(Number(inputYear) + 18 + ', we changed the inputYear to number');

console.log(Number('Abhis'));
console.log(
	"so basically when we try to convert a not valid number or when its not valid, it just returns 'NaN', it means it's not a valid number, and NaN is actually a number"
);
console.log(typeof NaN);
console.log(String(23), 23);

//type coercion
console.log('23' + 3 + '12', 'here numbers are converted to strings when + is used');
console.log('23' - 10 - '2', 'here strings are convered to number when - is used');
console.log(
	'23' - 10 - '2' - 'Abhi',
	"here strings are convered to number that is why when a string 'abhi' was used it became Nan when - is used"
);
console.log('23' * '2', 'here strings are converted to numbers when * is used');
console.log('34' / '4', 'here strings are converted to numbers when / is used');
console.log('34' > '4', 'here strings are converted to numbers when > or < is used');

let n = '1' + 1;
n = n - 1;
console.log(n);

console.log('\n');

//10 truthy and false Value
//======
console.log('10 truthy and Falsy Values');

console.log('\n');

//
//======
console.log('10 truthy and Falsy Values');
console.log("There are only 5 falsy values, '0', ''(empty string), 'undefined', 'null', 'NaN' ");
console.log('This means ki when you try to convert these values to boolen they will be false');
console.log('0', Boolean(0));
console.log("''", Boolean(''));
console.log('undefined', Boolean(undefined));
console.log('null', Boolean(null));
console.log('Nan', Boolean(NaN));
console.log('Abhi', Boolean('Abhi'));
console.log('{}(Object)', Boolean({}));

console.log('\n');

//11 Equality
//======
console.log('11 Equality');
console.log(
	" '==' is loose equality and '===' is strict equality, in the later datatype and the value has to be same."
);

console.log("'18' === 18:", '18' === 18);
console.log("'18' == 18:", '18' == 18, 'here the == does type coercion.');
console.log('=== should be used as default as == creates problems');
console.log('\n');

//12 Logical Operator
//======
console.log('12 Logical Operator');
console.log("'&&': and");
console.log("'||': or");
console.log("'!': not, invertes the values");

console.log('\n');

// 13 Switch Statements
//======
console.log('13 Switch Statements');

const day = 'saturday';
const checkDay = 'saturday';

switch (day) {
	case 'monday':
		console.log("It's monday blueees");
		break;
	case 'friday':
		console.log("It's friiiidayy");
		break;
	case checkDay:
		console.log('Just checking if varibales can be used in switch');
	case 'saturday':
	case 'sunday':
		console.log("It's the fucking weekend");
		break;
	case 'tuesday':
		console.log("Oh shit, it's tuesday now");
		break;
	default:
		console.log('Not a fucking dayy!!!');
}

const dayNew = 'friday';

switch (dayNew) {
	case 'monday': // day === 'monday'
		console.log('Plan course structure');
		console.log('Go to coding meetup');
		break;
	case 'tuesday':
		console.log('Prepare theory videos');
		break;
	case 'wednesday':
	case 'thursday':
		console.log('Write code examples');
		break;
	case 'friday':
		console.log(dayNew, ':');
		console.log('Record videos');
		break;
	case 'saturday':
	case 'sunday':
		console.log('Enjoy the weekend :D');
		break;
	default:
		console.log('Not a valid day!');
}

console.log('\n');

//14 Statements and Expresssion
//======
console.log('14 Statements and Expresssion');
console.log("Expression will give a value no matter what, but a statment won't");

console.log('\n');

//15 Conditional Statements (Ternary)
//======
console.log('15 Conditional Statements (Ternary)');
console.log(
	'expression ? statement1 : statement2, here the statement1 represents the if block and statement2 represent else, and here statment2 is compulsory therefore this becomes a EXPRESSION '
);

const currentAge = 24;
currentAge < 30 ? console.log('you are fucking young') : console.log('You are still young');

const feedback =
	currentAge < 30
		? `you are fucking young man, just ${currentAge}`
		: `You are still young man, just ${currentAge}`;
console.log(feedback);

console.log(
	'Ternary operator/Condtional statement are basically expressions therefore it can be used in ``, therefore the same effect of if-else can be attained there'
);

console.log(`Hey, I can drink ${currentAge > 18 ? 'Alcohol' : 'Water'}`);

console.log(
	"The above value was obtained by console.log(`Hey, I can drink ${currentAge > 18 ? 'Alcohol' : 'Water'}`);"
);

console.log('\n');
