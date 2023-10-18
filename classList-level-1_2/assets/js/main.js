"use strict";

// ===================================================
//     JS-Einführung – Classlist-Level-1_2
// ===================================================

console.log("%c JS-Einführung – Classlist-Level-1_2", "color: tomato");

const list = document.querySelector('#bucket__list');
list.classList.add('bucket__list');


const headline = document.querySelector('#headline');

function changeHeadline() { 
    headline.classList.add('headline');
}

function resetHeadline() {
    headline.classList.remove('headline');
}