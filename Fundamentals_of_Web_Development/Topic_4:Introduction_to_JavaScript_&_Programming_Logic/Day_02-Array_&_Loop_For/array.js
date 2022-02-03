let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*  1-)
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}*/

/*  2-)
let sum = 0;
for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(sum);*/

/*  3 & 4)
let sum = 0;
let avg = 0;
for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
avg = (sum / numbers.length);
if (avg > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}*/

/*  5-)
let higherNumber = 0;
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > higherNumber) {
        higherNumber = numbers[i];
    }
}
console.log(higherNumber);*/

/*  6-)
let odd = 0;
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 != 0) {
        odd++;
    }
}
console.log(odd);*/

/*  7-) 
let lowerNumber = numbers[0];
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] < lowerNumber) {
        lowerNumber = numbers[i];
    }
}
console.log(lowerNumber);*/

/*  8 & 9) 
let arrayTest = [];
for (let i = 0; i < 25; i++) {
    arrayTest.push(i+1);
}
for (let i = 0; i < arrayTest.length; i++) {
    console.log(arrayTest[i] / 2);
}*/