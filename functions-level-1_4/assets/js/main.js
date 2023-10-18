"use strict";

// ===================================================
//     Functions-Vertiefung – Functions-Level-1_4
// ===================================================

console.log("%c JS-Einführung – Functions-Level-1_4", "color: tomato");


function hero(heroName, heroPower, heroEnemy) {
    const name = 'Mein Lieblingsheld ist: ' + heroName + '.';
    const power = 'Er hat die Fähigkeit: ' + heroPower + '.';
    const enemy = 'Sein größter Gegner ist: ' + heroEnemy + '.';

    console.log(`${name} ${power} ${enemy}`);
}

hero('Superman', 'Mit unglaublicher Geschwindigkeit zu fliegen', 'Lex Luthor' );