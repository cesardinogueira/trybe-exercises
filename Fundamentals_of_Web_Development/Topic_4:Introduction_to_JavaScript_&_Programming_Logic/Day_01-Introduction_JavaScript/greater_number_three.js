const num1 = 20;
const num2 = 20;
const num3 = 10;

if (num1 > num2 && num1 > num3) {
    console.log("O número", num1, "é maior que o número", num2, "e que o número", num3);
} else if (num2 > num1 && num2 > num3) {
    console.log("O número", num2, "é maior que o número", num1, "e que o número", num3);
} else if (num3 > num1 && num3 > num2) {
    console.log("O número", num3, "é maior que o número", num1, "e que o número", num2);
} else {
    console.log("Os números são iguais");
}