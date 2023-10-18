"use strict";

// ===================================================
//     JS-Einführung – Forms + JS Level-1_2
// ===================================================

console.log("%c JS-Einführung – Forms + JS Level-1_2", "color: tomato");

function yourAge() {
    const input = document.querySelector('form input[type="number"]');
    const output = document.querySelector('#output');
    output.style.display = 'block';

    const datum = new Date();
    const jahr = datum.getFullYear();
    const erg = jahr - input.value;

    output.innerHTML = `Du bist ${erg} Jahre alt.`;
}