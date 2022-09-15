/*Finns talet i givna intervallet
Skapa ett program som tar in ett tal och ett intervall. 
Om talet finns i intervallet skriv ‘Inom intervall” annars skriv “Utanför intervall”.
*/

//får in data genom terminalen
var ps = require("prompt-sync");
var prompt = ps();
console.log("Give a number");
let number = prompt(">");
//ändrar typen från string till int för att kunna jämföra med array
let num = parseInt(number);
console.log("Give the first number of the interval");
let startInterval = prompt(">");
let lowNumber = parseInt(startInterval);
console.log("Give the second number of the interval");
let endInterval = prompt(">");
let interval = [];
//första num blir startvärdet som plusas på med 1 till man lika med största värdet
for (let i = lowNumber; i <= endInterval; i++){
    interval.push(i);
}
if (interval.includes(num)){
    console.log("Within the interval")
}else{
    console.log("Outside the interval")
}