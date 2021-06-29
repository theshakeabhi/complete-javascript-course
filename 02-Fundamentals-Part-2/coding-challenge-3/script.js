'use strict';
console.log('Challenge 3: Objects');

const john = {
	fullName: 'John Smith',
	mass: 78,
	height: 1.69,

	// calcBMI: () => this.mass / this.height ** 2
	// arrow function doesn't have 'this'

	calcBMI: function () {
		this.BMI = this.mass / this.height ** 2;
		return this.BMI;
	},
};

const mark = {
	fullName: 'Mark Miller',
	mass: 92,
	height: 1.95,

	calcBMI: function () {
		this.BMI = this.mass / this.height ** 2;
		return this.BMI;
	},
};

const compareBMI = () => {
	john.calcBMI();
	mark.calcBMI();
	if (john.BMI > mark.BMI) {
		return `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})`;
	} else if (mark.BMI > john.BMI) {
		return `${john.firstName + john.lastName}'s BMI (${john.BMI}) is higher than ${
			mark.firstName + mark.lastName
		}'s BMI (${mark.BMI})`;
	}

	// I initally used just else, but that doesn not give full coverage to the question and the different cases there use else if also
};

console.log(compareBMI());

//out of curitosity

console.log(`
I just got curios because in previous lectures if a
object has a method and when we call it through the
objectName.methodName, Jonas did mention that the
'this' in the function would refer to the objectName
and I thought that we are repeating the code of BMI
calculation here and I did the following code (check
file).
Apparently it yeilds error.

Edit: Oh damn, I am thinking like a programmer now, in
the lecture he did mention the same and to excute the
follwing code you would need to learn concepts of
OBject oriented programming.

Good Job abhi!
`);

const calcBMIOutside = function () {
	this.BMI = this.mass / this.height ** 2;
	return this.BMI;
};

const abhi = {
	fullName: 'Abhishek Chandrasenan',
	mass: 85,
	height: 1.82,
};

console.log(abhi.calcBMIOutside());
