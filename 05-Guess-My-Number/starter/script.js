'use strict';

////////////////////////REFACTORED CODE////////////////////////////
////////////////NON REFACTORED CODE FROM LINE   //////////////////

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
};

const changeBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const changeBoxWidth = function (size) {
  document.querySelector('.number').style.width = size;
};

// DUDE this is some insanely COOL Stuff! You basically made a
//generic textContent changing function
const generalChange = function (className, value) {
  document.querySelector(className).textContent = value;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When no input
  if (!guess) {
    displayMessage('Enter a Number!');
  }
  // When guess is correct
  else if (guess === secretNumber) {
    displayMessage('You have Wonn!!!');
    highScore = highScore > score ? highScore : score;
    document.querySelector('.highscore').textContent = highScore;
    displayNumber(secretNumber);
    changeBackgroundColor('#60b347');
    changeBoxWidth('30rem');
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low!');
      score--;
      // document.querySelector('.score').textContent = score;
      generalChange('.score', score);
    } else {
      displayMessage('You have Lost');
      score = 0;
      document.querySelector('.score').textContent = score;
      changeBackgroundColor('red');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  if (document.querySelector('.guess').value) {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    changeBackgroundColor('#222');
    changeBoxWidth('15rem');

    displayNumber('?');
    displayMessage('Start guessing again...');
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
  }
});

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////SELECT THE CODE BELOW AND CTRL+/ ///////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// /*
// This was just to learn the basics of DOM acessing and manipulation

// ////////////////////////////////
// console.log(document.querySelector('.message').textContent);
// // document.querySelector('$css-selector') this statement is used to caputure the  element with the class name
// //document.querySelector('$css-selector').textContent is used to capture the text content of the selected element

// ////////////////////////////////
// //trying out myself to get the element with classes number(div element), message(p element), score(span element) and guess(input element) and change their value

// document.querySelector('.number').textContent = 23;
// document.querySelector('.score').textContent = 23;

// //I thought of storing document.querySelector('.message').textContent to a variable becuase I remember seeing similar code but it doesn't work
// let messageElement = document.querySelector('.message').textContent;
// messageElement = 'This is the answer';

// document.querySelector('.message').textContent =
//   'This is the answer that works';

// //Input fields values are acessed through document.querySelector('.$css-selector').value
// document.querySelector('.guess').value = 1;
// console.log(document.querySelector('.guess').value);

//  */
// ////////////////////////////////
// //handling event

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// // console.log(secretNumber);

// let score = 20;
// let highScore = 0;
// let won = false;

// document.querySelector('.check').addEventListener('click', function () {
//   const guessOld = document.querySelector('.guess').value;

//   console.log('Old Guess Variable:', guessOld, typeof guessOld);
//   /*
//   /////////////IMPORTANT////////////
//   any input that we get from browser is a string and we have to
//   convert it into number, otherwise it would give a lot of headache
//  */

//   const guess = Number(document.querySelector('.guess').value);
//   //we always convert it to number from the begining, so that we can save it as a const, otherwise we will have to change it to let and it can be messy
//   console.log('New Guess Variable:', guess, typeof guess);

//   ///////////////////The Game Logic////////////////
//   // When no input
//   if (!guess) {
//     document.querySelector('.message').textContent = 'Enter a Number!';
//   }
//   // When guess is correct
//   else if (guess === secretNumber) {
//     if (!won) {
//       document.querySelector('.message').textContent = 'You have Wonn!!!';
//       highScore = highScore > score ? highScore : score;
//       document.querySelector('.highscore').textContent = highScore;
//       document.querySelector('.number').textContent = secretNumber;
//       document.querySelector('body').style.backgroundColor = '#60b347';
//       document.querySelector('.number').style.width = '30rem';
//       won = true;
//     }
//   }
//   // When guess is bigger than the number
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You have Lost';
//       score = 0;
//       document.querySelector('.score').textContent = score;
//       document.querySelector('body ').style.backgroundColor = 'red';
//     }
//   }
//   // When guess is smaller than the number
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too Low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You have Lost!!!';
//       score = 0;
//       document.querySelector('.score').textContent = score;
//     }
//   }

//   //this was just to try out a small experiment
//   // document.querySelector('.message').textContent = 'Correct Answer';
// });

// /*
// document.querySelector("$css-selector") returns the element and
// .addEventListener() function is used to handle events(one of the many
// ways).
// It takes two arguments,
// 1. the event that it has to listen to in this case it was 'click'
// 2. function expression (function expression should be considered as a
//   value).
// Now it it intresting to note that we are not calling any functions but the
// function automatically gets called when the event happens

// Now my doubt is that can we write a function outside and just write the
// function invokation here.
// */

// /////////CODING CHALLENGE///////////////
// //Write the reset function

// document.querySelector('.again').addEventListener('click', function () {
//   if (document.querySelector('.guess').value) {
//     // console.log('Yes');
//     secretNumber = Math.trunc(Math.random() * 20) + 1;
//     // console.log(secretNumber);
//     score = 20;
//     document.querySelector('body').style.backgroundColor = '#222';
//     document.querySelector('.number').style.width = '15rem';

//     document.querySelector('.number').textContent = '?';
//     document.querySelector('.message').textContent = 'Start guessing again...';
//     document.querySelector('.guess').value = '';
//     document.querySelector('.score').textContent = score;
//     won = false;
//   }
// });
