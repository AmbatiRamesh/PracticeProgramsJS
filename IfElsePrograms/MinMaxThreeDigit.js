// create an array to store the random values
let values = [];

// generate 5 random 3-digit values and store them in the array
for (let i = 0; i < 5; i++) {
  let randomValue = Math.floor(Math.random() * 900) + 100;
  values.push(randomValue);
}

// find the minimum and maximum values in the array
let minValue = Math.min(...values);
let maxValue = Math.max(...values);

// output the results to the console
console.log("Random Values: " + values);
console.log("Minimum Value: " + minValue);
console.log("Maximum Value: " + maxValue);
