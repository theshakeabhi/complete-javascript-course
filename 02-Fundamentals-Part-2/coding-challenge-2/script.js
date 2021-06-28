// The method I choose but : goto line line 10
// const calcTip = (bill) => {
// 	if (bill >= 50 && bill <= 300) {
// 		return bill * 0.15;
// 	} else {
// 		return bill * 0.2;
// 	}
// };

const calcTip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

const bills = [125, 555, 44];
const tips = [
	calcTip(bills[bills.indexOf(125)]),
	calcTip(bills[1]),
	calcTip(bills[bills.indexOf(44)]),
];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Total:', total);
