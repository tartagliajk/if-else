/*Största siffran
Programmet tar in en tre siffror och skriver ut det största talet
*/
var ps = require("prompt-sync");
var prompt = ps();
console.log("Write your first number");
let firstNumber = prompt(">");
console.log("Write your second number");
let secondNumber = prompt(">");
console.log("Write your third numebr");
let thirdNumber = prompt(">");
//&& - tittar ifall båda fallen stämmer
if (firstNumber > secondNumber && firstNumber > thirdNumber){
    console.log(firstNumber,"is the biggest number")
}if (secondNumber > firstNumber && secondNumber > thirdNumber){
    console.log(secondNumber,"is the biggest numebr")
}if (thirdNumber > firstNumber && thirdNumber > secondNumber){
    console.log(thirdNumber,"is the biggest number")
}