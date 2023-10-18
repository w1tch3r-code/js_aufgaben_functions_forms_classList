"use strict";

// ===================================================
//     JS-Einführung – Classlist-Level-1_1
// ===================================================

console.log("%c JS-Einführung – Classlist-Level-1_1", "color: tomato");

const headline = document.querySelector('#headline');
const list = document.querySelector('#bucket__list');

headline.classList.add('headline');
list.classList.add('bucket__list');