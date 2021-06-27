const data1DolphinSubject1 = 96;
const data1DolphinSubject2 = 108;
const data1DolphinSubject3 = 89;
const data1KoalasSubject1 = 88;
const data1KoalasSubject2 = 91;
const data1KoalasSubject3 = 110;

const averageData1Dolphin =
	(data1DolphinSubject1 + data1DolphinSubject2 + data1DolphinSubject3) / 3;

const averageData1Koalas = (data1KoalasSubject1 + data1KoalasSubject2 + data1KoalasSubject3) / 3;

console.log('Data 1');

if (averageData1Dolphin === averageData1Koalas) {
	console.log('Draw');
} else if (averageData1Dolphin > averageData1Koalas) {
	console.log('Dolphins win');
} else {
	console.log('Koalas win');
}

//Bonus 1
const data2DolphinSubject1 = 97;
const data2DolphinSubject2 = 112;
const data2DolphinSubject3 = 101;
const data2KoalasSubject1 = 100;
const data2KoalasSubject2 = 95;
const data2KoalasSubject3 = 106;

const averageData2Dolphin =
	(data2DolphinSubject1 + data2DolphinSubject2 + data2DolphinSubject3) / 3;

const averageData2Koalas = (data2KoalasSubject1 + data2KoalasSubject2 + data2KoalasSubject3) / 3;

console.log('Data 2');
console.log(averageData2Dolphin, averageData2Koalas);

if (averageData2Dolphin > averageData2Koalas && averageData2Dolphin >= 100) {
	console.log('Dlophins win');
} else if (averageData2Dolphin < averageData2Koalas && averageData2Koalas >= 100) {
	console.log('Koalas win');
} else if (averageData2Dolphin === averageData2Koalas) {
	console.log('Draw');
}
//Bonus 2
const data3DolphinSubject1 = 90;
const data3DolphinSubject2 = 99;
const data3DolphinSubject3 = 110;
const data3KoalasSubject1 = 90;
const data3KoalasSubject2 = 99;
const data3KoalasSubject3 = 110;

const averageData3Dolphin =
	(data3DolphinSubject1 + data3DolphinSubject2 + data3DolphinSubject3) / 3;

const averageData3Koalas = (data3KoalasSubject1 + data3KoalasSubject2 + data3KoalasSubject3) / 3;

console.log('Data 3');
console.log(averageData3Dolphin, averageData3Koalas);

if (averageData3Dolphin > averageData3Koalas && averageData3Dolphin >= 100) {
	console.log('Dlophins win');
} else if (averageData3Dolphin < averageData3Koalas && averageData3Koalas >= 100) {
	console.log('Koalas win');
} else if (
	averageData3Dolphin === averageData3Koalas &&
	averageData3Dolphin >= 100 &&
	averageData3Koalas >= 100
) {
	console.log('Draw');
}
