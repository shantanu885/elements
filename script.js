'use strict';

const modal = document.querySelector('.modal');
const ovefrlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
const openModal = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  ovefrlay.classList.remove('hidden');
};
console.log(btnOpenModal);
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

const closemodal = function () {
  modal.classList.add('hidden');
  ovefrlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closemodal);
ovefrlay.addEventListener('click', closemodal);

document.addEventListener('keydown', function (e){
   if (e.key ==='Escape'){
    if(!modal.classList.contains('hidden')){
        closemodal();
    }
   }
}
);