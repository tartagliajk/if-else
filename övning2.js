/*Kontrollera om året är skottår eller inte
Programmet tar in ett år och skriv om det är skottår eller inte.
delbart med 4 eller 400
*/
var ps = require("prompt-sync");
var prompt = ps();
console.log("Write a year");
let year = prompt(">");
//tittar ifall det inte finns några decimaler
if (year%4==0 || year%400==0){
    console.log("Leap year")
}else{
    console.log("Not a leap year")
}