const cost = 100;
const sale = 200;
const tax = 20;
var totalCost = cost + (cost * (tax / cost));
var profit = sale - totalCost;

if (cost == 0 || sale == 0) {
    console.log("ERROR: Um dos valores de entrada tem seu valor como zero");
} else {
    console.log("O lucro foi de:", profit);
}