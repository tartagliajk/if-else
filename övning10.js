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
