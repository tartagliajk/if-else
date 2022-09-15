/*Beräkna elkostnad
Programmet tar in hur mycket el som är förbrukad i kW och beräknar kostnaden eller reglerna nedan:
- För första 50 kW är priset 0.5kr/kW
- För nästa 100kW är priset 0.77kr/kW
- För nästa 100kW är priset 1.3kr/kW
- För mer än 250kW är priset 1.7kr/kW + 20% av totala priset
*/
var ps = require("prompt-sync");
var prompt = ps();
console.log("Write how much electricity you have used");
let electricityUsage = parseInt(prompt(">"));
if(electricityUsage <= 50){
    let price50Mark = electricityUsage * 0.5
    console.log("You need to pay:", price50Mark,"kr");
}else if(electricityUsage > 50 && electricityUsage <= 150){
    let price150Mark = electricityUsage * 0.77
    console.log("You need to pay:", price150Mark,"kr");
}else if(electricityUsage > 150 && electricityUsage <= 250){
    let price250Mark = electricityUsage * 1.3
    console.log("You need to pay:",price250Mark,"kr");
}else{
    let priceOver250 = (electricityUsage * 1.7) * 1.2
    console.log("You need to pay",priceOver250,"kr");
};