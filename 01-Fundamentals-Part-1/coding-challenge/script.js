// apparently, if else was supposed to be usedn in the second coding challenge but used it in first itself
console.log('BMI Coding Challenge');

//weight is in kilograms and height is in meters

const bmiCalulator = (mass, height) => {
	const bmi = mass / height ** 2;
	return bmi;
};

const markWeightData1 = 78;
const markHeighttData1 = 1.69;
const markBMIData1 = bmiCalulator(markWeightData1, markHeighttData1);

const johnWeightData1 = 92;
const johnHeighttData1 = 1.95;
const johnBMIData1 = bmiCalulator(johnWeightData1, johnHeighttData1);

console.log("Data 1: Mark's BMI", markBMIData1, ", John's BMI", johnBMIData1);

let markHigherBMIData1;
if (markBMIData1 > johnBMIData1) {
	markHigherBMIData1 = 'Mark';
} else {
	markHigherBMIData1 = 'John';
}

const markWeightData2 = 95;
const markHeighttData2 = 1.88;
const markBMIData2 = bmiCalulator(markWeightData2, markHeighttData2);

const johnWeightData2 = 85;
const johnHeighttData2 = 1.76;
const johnBMIData2 = bmiCalulator(johnWeightData2, johnHeighttData2);

console.log("Data 2: Mark's BMI", markBMIData2, ", John's BMI", johnBMIData2);

let markHigherBMIData2;
if (markBMIData2 > johnBMIData2) {
	markHigherBMIData2 = 'Mark';
} else {
	markHigherBMIData2 = 'John';
}

console.log('Higher BMI in');
console.log('Data1:', markHigherBMIData1);
console.log('Data2:', markHigherBMIData2);
