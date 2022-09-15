/*Bokstav, tal eller specialtecken
Programmet tar in ett tecken. Om tecknet är en bokstav skriver programmet ut om bokstaven är konstant eller vokal och om det är stor eller liten bokstav.

Om det är en siffra skriver den om det är positivt eller negativt och om det är udda eller jämnt.

Om det är ett specialtecken skriver den “specialtecken”.

Annars skriver den “Ogiltig input”.
*/
var ps = require("prompt-sync");
var prompt = ps();
let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","å","ä","ö"];
let specialCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]","|","/",":",";",'"',"'","<",">",",",".","?","\\"]
console.log("Write your letter, number or special character");
let object = prompt(">");
if (parseInt(object)){
    console.log("number");
}else if(letters.includes(object)){
    console.log("letter");
}else if(specialCharacters.includes(object)){
    console.log("special character");
}else{
    console.log("unvalid input");
}