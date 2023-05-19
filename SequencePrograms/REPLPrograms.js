//Question 1: Use REPL to find Random Function to get Single Digit
console.log(Math.floor(Math.random() * 10));

//Question 2: Use REPL to use Random to get dice number between 1 to 6
console.log(Math.floor(Math.random() * 6 + 1));

//Question 3: Use REPL to Add 2 random dice number and print result
let firstNumber = Math.floor(Math.random() * 6 + 1)
console.log("First random number : " + firstNumber);

let secondNumber = Math.floor(Math.random() * 6 + 1)
console.log("Second random number : " + secondNumber);

let sum = firstNumber + secondNumber;
console.log("The sum is : " + sum);