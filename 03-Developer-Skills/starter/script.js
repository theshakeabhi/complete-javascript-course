// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperature1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperature2 = [-10, 22, 16, -10, 'error', 'error', 29, 17, 25, 14, 9, 5];

/*
//1. Understand the problem
-what is amplitude? max - min
-how to calculate max and min values
-what is an error? and what to do when we enclunter it.

//2. Divide the problem into sub-problems
-find max element ^
-find min element ^
-subtrct max and min ^
-figure out erroe and ignore
*/

const calcTempAmplitude = function (temp) {
	let max = temp[0];
	let min = temp[0];

	for (let i = 0; i < temp.length; i++) {
		const currentTemp = temp[i];

		if (typeof currentTemp !== 'number') {
			continue;
		}

		if (currentTemp > max) {
			max = currentTemp;
		}
		if (currentTemp < min) {
			min = currentTemp;
		}
	}

	// we cannot use Math.max(...araay) because the array contains errors also

	console.log(max, min);

	const amplitude = max - min;
	return amplitude;
};

console.log(calcTempAmplitude(temperature1));

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeProblem2 = function (temp1, temp2) {
	let temp = temp1.concat(temp2);

	let max = temp[0];
	let min = temp[0];

	for (let i = 0; i < temp.length; i++) {
		const currentTemp = temp[i];

		if (typeof currentTemp !== 'number') {
			continue;
		}

		if (currentTemp > max) {
			max = currentTemp;
		}
		if (currentTemp < min) {
			min = currentTemp;
		}
	}

	console.log(max, min);

	const amplitude = max - min;
	return amplitude;
};

console.log(calcTempAmplitudeProblem2(temperature1, temperature2));

// Debugging and fixing error
// convert inputted degree celcius to kelvin. K=c+273

const convertTemp = function () {
	const mesurement = {
		type: 'temperature',
		unit: 'celcius',
		// value: Number(prompt('Enter the value of degree celcius')),
		//value taked in is an string therefore conver to number
		//line 97 was //ed out because pop was annoy
		value: 10,
	};

	// console.table(mesurement);

	const kelvin = mesurement.value + 273;
	return kelvin;
};

console.log('Temp', convertTemp());

//using debugger
// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
	const temps = t1.concat(t2);

	let max = 0;
	let min = 0;

	for (let i = 0; i < temps.length; i++) {
		const curTemp = temps[i];
		if (typeof curTemp !== 'number') continue;

		if (curTemp > max) max = curTemp;
		if (curTemp < min) min = curTemp;
	}
	console.log(max, min);
	return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

console.log(amplitudeBug);
