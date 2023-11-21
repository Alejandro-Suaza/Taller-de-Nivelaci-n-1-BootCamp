//Punto 1 
const numbers = [5, 10, 3, 8, 2];
let largestNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];
    }
}
console.log("El numero mas grande es: ", largestNumber);

//Punto 2
function sum(a, b) {
    return a + b;
}

const sumArrow = (a, b) => a + b;

console.log("Suma con function:", sum(5, 10));
console.log("Suman con Arrow Function:", sumArrow(5, 10));


//Punto 3 
function sumOfEvenNumbers(numbers) {
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i];
        }
    }
  
    return sum;
}
  
const pairNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Sum of even numbers:", sumOfEvenNumbers(pairNumbers));
  