/*Sortering
Programmet tar in en tre siffror och sorter dem i storleksordning
*/
var ps = require("prompt-sync");
var prompt = ps();
console.log("Write a number");
let firstNumber = prompt(">");
let num1 = parseInt(firstNumber);
console.log("Write another number");
let secondNumber = prompt(">");
let num2 = parseInt(secondNumber);
console.log("Write your last number");
let thirdNumber = prompt(">");
let num3 = parseInt(thirdNumber);
if (num1 > num2 && num2 > num3){
    console.log(num1,",",num2,",",num3);
}if (num1 > num3 && num3 > num2){
    console.log(num1,",",num3,",",num2);
}if (num2 > num1 && num1 > num3){
    console.log(num2,",",num1,",",num3);
}if (num2 > num3 && num3 > num2){
    console.log(num2,",",num3,",",num1);
}if (num3 > num1 && num1 > num2){
    console.log(num3,",",num2,",",num1);
}

/*
olika combos
f s t 
f t s

s f t
s t f

t f s 
t s f 
*/