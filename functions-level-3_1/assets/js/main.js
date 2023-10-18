"use strict";

// ===================================================
//     JS-Einführung – Functions-Level-3_1
// ===================================================

console.log("%c JS-Einführung – Functions-Level-3_1", "color: tomato");

const body = document.body;
const headline = document.querySelector('.headline');

function changeColor(textColor, backgroundColor) {
    headline.style.color = textColor;
    body.style.backgroundColor = backgroundColor;
}


// function changeColor1() {
//     headline.classList.remove(...headline.classList)
//     body.classList.remove(...body.classList);
//     headline.classList.add('text__color1')
//     body.classList.add('background__color1');
// }

// function changeColor2() {
//     headline.classList.remove(...headline.classList)
//     body.classList.remove(...body.classList);
//     headline.classList.add('text__color2')
//     body.classList.add('background__color2');
// }

// function changeColor3() {
//     headline.classList.remove(...headline.classList)
//     body.classList.remove(...body.classList);
//     headline.classList.add('text__color3')
//     body.classList.add('background__color3');
// }

// function changeColor4() {
//     headline.classList.remove(...headline.classList)
//     body.classList.remove(...body.classList);
//     headline.classList.add('text__color4')
//     body.classList.add('background__color4');
// }