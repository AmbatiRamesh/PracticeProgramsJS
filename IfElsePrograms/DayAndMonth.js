// Get day and month from command line arguments
"use strict";
  
const ps = require("prompt-sync");
const prompt = ps();

const day = parseInt(process.argv[2]);
const month = parseInt(process.argv[3]);

// Check if the day is between March 20 and June 20
if ((month === 3 && day >= 20) || (month === 4) || (month === 5) || (month === 6 && day <= 20)) {
  console.log(true);
} else {
  console.log(false);
}

