/*Veckonummer
Programmet tar in ett datum (dag och månad) och skriver ut veckonumret för datumet.
*/
var ps = require("prompt-sync");
var prompt = ps();
console.log("write the day");
let day = parseInt(prompt(">"));
console.log("write the month");
let month = parseInt(prompt(">"));
if (month == 1){
    if(day == 1 || day == 2){
        console.log("week 52");
    }else if(day == 3 || day == 4 || day == 5 || day == 6 || day == 7 || day == 8 || day == 9){
        console.log("week 1")
    }else if(day == 10 || day == 11 || day == 12 || day == 13 || day == 14 || day == 15 || day == 16){
        console.log("week 2");
    }else if(day == 17 || day == 18 || day == 19 || day == 20 || day == 21 || day == 22 || day == 23){
        console.log("week 3");
    }else if(day == 24 || day == 25 || day == 26 || day == 27 || day == 28 || day == 29 || day == 30){
        console.log("week 4");
    }else if(day == 31){
        console.log("week 5");
    }
}else if (month == 2){
    if(day == 1 || day == 2 || day == 3 || day == 4 || day == 5 || day == 6){
        console.log("week 5");
    }else if(day == 7 || day == 8 || day == 9 || day == 10 || day == 11 || day == 12 || day == 13){
        console.log("week 6");
    }else if(day == 14 || day == 15 || day == 16 || day == 17 || day == 18 || day == 19 || day == 20){
        console.log("week 7");
    }else if(day == 21 || day == 22 || day == 23 || day == 24 || day == 25 || day == 26 || day == 27){
        console.log("week 8");
    }else if(day == 28){
        console.log("week 9");
    }
}else if (month == 3){
    if(day == 1 || day == 2 || day == 3 || day == 4 || day == 5 || day == 6){
        console.log("week 9");
    }else if(day == 7 || day == 8 || day == 9 || day == 10 || day == 11 || day == 12 || day == 13){
        console.log("week 10");
    }else if(day == 14 || day == 15 || day == 16 || day == 17 || day == 18 || day == 19 || day == 20){
        console.log("week 11");
    }else if(day == 21 || day == 22 || day == 23 || day == 24 || day == 25 || day == 26 || day == 27){
        console.log("week 12");
    }else if(day == 28 || day == 29 || day == 30 || day == 31){
        console.log("week 13");
    }
}else if (month == 4){
    if(day == 1 || day == 2 || day == 3){
        console.log("week 13");
    }else if(day == 4 || day == 5 || day == 6 || day == 7 || day == 8 || day == 9 || day == 10){
        console.log("week 14");
    }else if(day == 11 || day == 12 || day == 13 || day == 14 || day == 15 || day == 16 || day == 17){
        console.log("week 15");
    }else if(day == 18 || day == 19 || day == 20 || day == 21 || day == 22 || day == 23 || day == 24){
        console.log("week 16");
    }else if(day == 25 || day == 26 || day == 27 || day == 28 || day == 29 || day == 30){
        console.log("week 17");
    }
}else if (month == 5){
    if(day == 1){
        console.log("week 17");
    }else if(day == 2 || day == 3 || day == 4 || day == 5 || day == 6 || day == 7 || day == 8){
        console.log("week 18");
    }else if(day == 9 || day == 10 || day == 11 || day == 12 || day == 13 || day == 14 || day == 15){
        console.log("week 19");
    }else if(day == 16 || day == 17 || day == 18 || day == 19 || day == 20 || day == 21 || day == 22){
        console.log("week 20");
    }else if(day == 23 || day == 24 || day == 25 || day == 26 || day == 27 || day == 28 || day == 29){
        console.log("week 21");
    }else if(day == 30 || day == 31){
        console.log("week 22");
    }
}else if (month == 6){
    if(day == 1 || day == 2 || day == 3 || day == 4 || day == 5){
        console.log("week 22");
    }else if(day == 6 || day == 7 || day == 8 || day == 9 || day == 10 || day == 11 || day == 12){
        console.log("week 23");
    }else if(day == 13 || day == 14 || day == 15 || day == 16 || day == 17 || day == 18 || day == 19){
        console.log("week 24");
    }else if(day == 20 || day == 21 || day == 22 || day == 23 || day == 24 || day == 25 || day == 26){
        console.log("week 25");
    }else if(day == 27 || day == 28 || day == 29 || day == 30){
        console.log("week 26");
    }
}else if (month == 7){
    if(day == 1 || day == 2 || day == 3){
        console.log("week 26");
    }else if(day == 4 || day == 5 || day == 6 || day == 7 || day == 8 || day == 9 || day == 10){
        console.log("week 27");
    }else if(day == 11 || day == 12 || day == 13 || day == 14 || day == 15 || day == 16 || day == 17){
        console.log("week 28");
    }else if(day == 18 || day == 19 || day == 20 || day == 21 || day == 22 || day == 23 || day == 24){
        console.log("week 29");
    }else if(day == 25 || day == 26 || day == 27 || day == 28 || day == 29 || day == 30 || day == 31){
        console.log("week 30");
    }
}else if (month == 8){
    if(day == 1 || day == 2 || day == 3 || day == 4 || day == 5 || day == 6 || day == 7){
        console.log("week 31");
    }else if(day == 8 || day == 9 || day == 10 || day == 11 || day == 12 || day == 13 || day == 14){
        console.log("week 32");
    }else if(day == 15 || day == 16 || day == 17 || day == 18 || day == 19 || day == 20 || day == 21){
        console.log("week 33");
    }else if(day == 22 || day == 23 || day == 24 || day == 25 || day == 26 || day == 27 || day == 28 ){
        console.log("week 34");
    }else if(day == 29 || day == 30 || day == 31){
        console.log("week 35");
    }
}else if (month == 9){
    if(day == 1 || day == 2 || day == 3 || day == 4){
        console.log("week 35");
    }else if(day == 5 || day == 6 || day == 7 || day == 8 || day == 9 || day == 10 || day == 11){
        console.log("week 36");
    }else if(day == 12 || day == 13 || day == 14 || day == 15 || day == 16 || day == 17|| day == 18){
        console.log("week 37");
    }else if(day == 19 || day == 20 || day == 21 || day == 22 || day == 23 || day == 24 || day == 25 ){
        console.log("week 38");
    }else if(day == 26 || day == 27 || day == 28 || day == 29 || day == 30){
        console.log("week 39");
    }
}else if (month == 10){
    if(day == 1 || day == 2){
        console.log("week 39");
    }else if(day == 3 || day == 4 || day == 5 || day == 6 || day == 7 || day == 8 || day == 9){
        console.log("week 40");
    }else if(day == 10 || day == 11 || day == 12 || day == 13 || day == 14 || day == 15 || day == 16){
        console.log("week 41");
    }else if(day == 17 || day == 18 || day == 19 || day == 20 || day == 21 || day == 22 || day == 23){
        console.log("week 42");
    }else if(day == 24 || day == 25 || day == 26 || day == 27 || day == 28 || day == 29 || day == 30){
        console.log("week 43");
    }else if(day == 31){
        console.log("week 44");
    }
}else if (month == 11){
    if(day == 1 || day == 2 || day == 3 || day == 4 || day == 5 || day == 6){
        console.log("week 44");
    }else if(day == 7 || day == 8 || day == 9 || day == 10 || day == 11 || day == 12 || day == 13){
        console.log("week 45");
    }else if(day == 14 || day == 15 || day == 16 || day == 17 || day == 18 || day == 19 || day == 20){
        console.log("week 46");
    }else if(day == 21 || day == 22 || day == 23 || day == 24 || day == 25 || day == 26 || day == 27){
        console.log("week 47");
    }else if(day == 28 || day == 29 || day == 30){
        console.log("week 48");
    }
}else if (month == 12){
    if(day == 1 || day == 2 || day == 3 || day == 4){
        console.log("week 48");
    }else if(day == 5 || day == 6 || day == 7 || day == 8 || day == 9 || day == 10 || day == 11){
        console.log("week 49");
    }else if(day == 12 || day == 13 || day == 14 || day == 15 || day == 16 || day == 17|| day == 18){
        console.log("week 50");
    }else if(day == 19 || day == 20 || day == 21 || day == 22 || day == 23 || day == 24 || day == 25 ){
        console.log("week 51");
    }else if(day == 26 || day == 27 || day == 28 || day == 29 || day == 30 || day == 31){
        console.log("week 52");
    }
};