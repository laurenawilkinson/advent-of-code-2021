const loadTxt = require('../file-loader');

const data = loadTxt().map(num => parseInt(num, 10));

const windows = [];

for (let i = 0; i < data.length; i++) {

  const currentNum = data[i];

  // Make new array starting with current num
  windows[i] = [ currentNum ];

  // Add num to previous 2 arrays
  const previousWindow1 = windows[i - 1];
  const previousWindow2 = windows[i - 2];

  if (previousWindow1)
    previousWindow1.push(currentNum);
    
  if (previousWindow2)
    previousWindow2.push(currentNum);

}

// Total up numbers in each window
const sums = windows.map(arr => arr.reduce((prev, curr) => prev += curr));

// Calculate the increases
const result = sums.reduce((noOfIncreases, num, index) => {

  const previousNum = sums[index - 1];

  if (index !== 0 && num > previousNum)
    noOfIncreases += 1;

  return noOfIncreases;

}, 0)

console.log(result);