const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas, d = 1) {
	if (d === 1) {
		console.log('Data 1');
	} else {
		console.log('Data 2');
	}

	console.log(avgDolphins, avgKoalas);

	/*
  //My Code: Even though the answer would come as same the dumb thing is that I didn't think through it.

	if (avgDolphins > avgKoalas && avgDolphins >= avgKoalas * 2) {
		console.log(`Dolphin wins (${avgDolphins} vs. ${avgKoalas})`);
	} else if (avgKoalas > avgDolphins && avgKoalas >= avgDolphins * 2) {
		console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins})`);
	} else if (avgDolphins === avgKoalas) {
		console.log(`They both have drawed. (${avgKoalas} vs. ${avgDolphins})`);
	}

  */
	if (avgDolphins >= avgKoalas * 2) {
		console.log(`Dolphin wins (${avgDolphins} vs. ${avgKoalas})`);
	} else if (avgKoalas >= avgDolphins * 2) {
		console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins})`);
	} else if (avgDolphins === avgKoalas) {
		console.log(`They both have drawed. (${avgKoalas} vs. ${avgDolphins})`);
	} else {
		console.log('No team wins');
	}
}

//Data 1
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

//Data 2
const avgDolphinsD2 = calcAverage(85, 54, 41);
const avgKoalasD2 = calcAverage(23, 34, 27);

checkWinner(avgDolphins, avgKoalas);
checkWinner(avgDolphinsD2, avgKoalasD2, 2);
