'use strict';

/* 
In previous folder I mentioned that saving the document.querySelector was 
not wokring apparaently, it does but I think theres a specific way to do it.
But for now we can save those document.querySelector(CSS-selector) in
a variable, hence we would be able to stop writing document.querySelector(CSS-selector) every time we wanna access or manipulate variable.
*/

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

console.log(btnOpenModal);
//it is a nodeList, similar to array but not same but for now, consider as one

/* 
//////DOCUMENT.QUERYSELECTORALL//////////

const btnOpenModalAll = document.querySelectorAll('.show-modal');
querySelectorAll is used to selecct all the elemtns with same class name

const btnOpenModal = document.querySelector('.show-modal');
i earlier did mention that querySelector when fed with class name which has
multiple elements it only returns the first element with that class name 

*/

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);

  // console.log(btnOpenModal[i].textContent);
  // we can see how it can be accessed
  /* 
  this was the before refactoring

  btnOpenModal[i].addEventListener('click', function () {
    //this is an anonymous function expression, the resaon we can use
    //this type of function is it acts as a value/expression

    console.log(btnOpenModal[i].textContent);
    modal.classList.remove('hidden'); // don't pass .className we are not selcting anymore. we are just passing the name
    overlay.classList.remove('hidden');
  }); 
  */
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

/* 
//////////IMPORTANT////////////
The reason we are not adding () to openModal and closeModal is basically
because when you add (), it calles it immedialty without waiting for the
click. So we are just passing the function name.
when a () is added to the funcation name it means that we are invoking 
the funcition
*/

//escape button eventListner

document.addEventListener('keyup', function (e) {
  console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/* 
There are a few things to note here:
1. When we are trying to have keypress event, it is a global event,
therefore document.addEventListener() is used directly instead of
having querySelector in between them.
2. the e as a parameter is passed by the addEventListner, so e
has all the values of the key (more detail in future sessions)
3. there are 3 keyboard events:
  i. keydown: whena key has been pressed
  ii. keyup: when a key has been relased
  iii. keypress: this is obselete

*/
