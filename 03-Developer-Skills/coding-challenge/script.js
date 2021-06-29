console.log('Problem Solving Challenge');

/*
// Understanding the problem
my answer
-takes in array
-prints the answer in a single line
-index+1 = days

joans answer
--array transformed into string, sperated by ...
-- what is x days? => index + 1

//sub-problems
my answer
-looping values + days
-store it an varaible
-console log in single line

joans answer
--transform array into string
--transafor eact element to string with *C
--strings need to contain (index + 1) days
--strings needs ... at end and begining and ... between each elememt

*/
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
	let forecast = '...';
	for (let i = 0; i < arr.length; i++) {
		forecast = forecast + ` ${arr[i]}*C in ${i + 1} days ...`;
	}

	return forecast;
};

console.log(printForecast(data1));
console.log(printForecast(data2));
