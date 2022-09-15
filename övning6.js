/*Växande eller avtagande
Programmet tar in tre siffror och skriver om de ökar eller minskar. Annars skriver den neutral
*/
var ps = require("prompt-sync");
var prompt = ps();
console.log("Write your first number");
let firstNumber = prompt(">");
let num1 = parseInt(firstNumber);
console.log("Write your second number");
let secondNumber = prompt(">");
let num2 = parseInt(secondNumber);
console.log("Write your third number");
let thirdNumber = prompt(">");
let num3 = parseInt(thirdNumber);
if (num1 < num2 && num2 < num3){
    console.log(num1,"ökar",num2,"ökar",num3);
}if (num1 < num2 && num2 > num3){
    console.log(num1,"ökar",num2,"minskar",num3);
}if (num1 > num2 && num2 > num3){
    console.log(num1,"minskar",num2,"minskar",num3);
}if (num1 > num2 && num2< num3){
    console.log(num1,"minskar",num2,"ökar",num3);
}if (num1 == num2 && num2 == num3){
    console.log(num1,"neutral",num2,"neutral",num3);
}if (num1 < num2 && num2 == num3){
    console.log(num1,"ökar",num2,"neutral",num3);
}if (num1 > num2 && num2 == num3){
    console.log(num1,"minskar",num2,"neutral",num3);
}if (num1 == num2 && num2 > num3){
    console.log(num1,"neutral",num2,"minskar",num3);
}if (num1 == num2 && num2< num3){
    console.log(num1,"neutral",num2,"ökar",num3);
}