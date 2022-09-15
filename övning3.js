/*Skriv antalet dagar i en månad
Programmet tar in en månad och ett år skriver ut antalet dagar i månaden
*/

var ps = require("prompt-sync");
var prompt = ps();
console.log("Write a month");
let month = prompt(">")
let monthLower = month.toLowerCase();
if (monthLower == "january"){
    console.log("31");
}if (monthLower == "february"){
    console.log("28 or 29 (depending on leap year or not)")
}if (monthLower == "march"){
    console.log("31");
}if (monthLower == "april"){
    console.log("30");
}if (monthLower == "may"){
    console.log("31");
}if (monthLower == "june"){
    console.log("30");
}if (monthLower == "july"){
    console.log("31");
}if (monthLower == "august"){
    console.log("31");
}if (monthLower == "september"){
    console.log("30");
}if (monthLower == "october"){
    console.log("31");
}if (monthLower == "november"){
    console.log("30");
}if (monthLower == "december"){
    console.log("31");
}