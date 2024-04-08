const input = require('sync-input');

console.log("Hello! My name is Aid.");
console.log("I was created in 2020.");
console.log("Please, remind me your name.");

let name = input();

console.log("What a great name you have, " + name + "!");
console.log("Let me guess your age.");
console.log("Enter remainders of dividing your age by 3, 5 and 7.");

// reading all remainders
const r3 = input();
const r5 = input();
const r7 = input();
const your_age = (r3 * 70 + r5 * 21 + r7 * 15) % 105;

console.log(`Your age is ${your_age}; that's a good time to start programming!`);
