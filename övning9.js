/*Giltig triangel
Programmet tar in tre siffror som representerar sidor av en triangel och skriver om triangeln är giltig eller ogiltig.
*/
var ps = require("prompt-sync");
var prompt = ps();
console.log("Write the first side");
let sideOne = parseInt(prompt(">"));
console.log("Write the second side");
let sideTwo = parseInt(prompt(">"));
console.log("Write the third side");
let sideThree = parseInt(prompt(">"));
if (sideOne + sideThree > sideTwo && sideOne + sideTwo > sideThree && sideTwo + sideThree > sideOne){
    console.log("This is a possible triangle");
}else{
    console.log("This is not a possible triangle");
}