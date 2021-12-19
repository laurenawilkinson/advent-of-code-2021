const loadTxt = require('../file-loader');

const data = loadTxt().map(num => parseInt(num, 10));

// Calculate the increases
const result = data.reduce((noOfIncreases, num, index) => {

  const previousNum = data[index - 1];

  if (index !== 0 && num > previousNum)
    noOfIncreases += 1;

  return noOfIncreases;

}, 0)

console.log(result);