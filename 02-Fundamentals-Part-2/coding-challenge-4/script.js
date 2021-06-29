'use strict';

console.log('Final Coding Challenge of Javascript Fundamentals');

const calcTip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
	tips.push(calcTip(bills[i]));
	total.push(bills[i] + tips[i]);
	console.log(
		`Bill ${i + 1} was $${bills[i]} with a tip of $${tips[i]} and total bill is ${total[i]}`
	);
}

const calcAverage = (arr) => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	const average = sum / arr.length;
	return average;
};

console.log('The total average bill', calcAverage(bills));
console.log('The total average tips', calcAverage(tips));
console.log('The total average Total', calcAverage(total));
