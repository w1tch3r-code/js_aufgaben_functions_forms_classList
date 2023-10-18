"use strict";

// ===================================================
//     JS-Einführung – Forms + JS Level-1_1
// ===================================================

console.log("%c JS-Einführung – Forms + JS Level-1_1", "color: tomato");

function double() {
    const input = document.querySelector('form input[type="number"]');
    const output = document.querySelector('#output');
    output.style.display = 'block';
    const erg = input.value * 2;

    output.innerHTML = erg;
}