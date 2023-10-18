"use strict";

// ===================================================
//     JS-Einführung – Forms + JS Level-1_3
// ===================================================

console.log("%c JS-Einführung – Forms + JS Level-1_3", "color: tomato");

function differenceAge() {
    const age1 = document.querySelector('form input[name="age1"]');
    const age2 = document.querySelector('form input[name="age2"]');
    const output = document.querySelector('#output');
    output.style.display = 'block';

    const erg = age1.value - age2.value;

    output.innerHTML = `Die Differenz beträgt ${erg} Jahre.`;
}