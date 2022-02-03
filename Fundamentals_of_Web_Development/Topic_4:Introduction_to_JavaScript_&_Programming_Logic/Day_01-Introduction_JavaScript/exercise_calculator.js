const num1 = 10;
const num2 = 10;
const operator = '1';

switch (operator) {
    case '+':
        console.log(num1 + num2);
        break;
    case '-':
        console.log(num1 - num2);
        break;
    case '*':
        console.log(num1 * num2);
        break;
    case '/':
        console.log(num1 / num2);
        break;
    case '%':
        console.log(num1 % num2);
        break;
    default:
        console.log("Operador Inválido!");
        break;
}