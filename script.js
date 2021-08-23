const menuButtonn = document.querySelector('.button-menu');
const wrap = document.querySelector('.menu-box');
const closeButtonn = document.querySelector('.menu-button-exit');

let toggleAddClass = function() {
	wrap.classList.toggle('menu-open');
} 

menuButtonn.addEventListener('click', toggleAddClass);
closeButtonn.addEventListener('click', toggleAddClass);
