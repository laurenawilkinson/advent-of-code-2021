const loadTxt = require('../file-loader');

const data = loadTxt();

const bitLength = data[0].length;
const gammaRateArr = []; 
const epsilonRateArr = []; 

for (let i = 0; i < bitLength; i++) {

  // Get all bits at this index
  const bits = data.map(d => d[i]);
  // Get the amount of 1s and 0s
  const ones = bits.filter(b => parseInt(b, 10) === 1).length;
  const zeros = bits.filter(b => parseInt(b, 10) === 0).length;

  gammaRateArr[i] = ones > zeros ? 1 : 0; // Most common
  epsilonRateArr[i] = ones > zeros ? 0 : 1; // Least common

}

// Convert binary strings to integers
const gammaRate = parseInt(gammaRateArr.join(''), 2);
const epsilonRate = parseInt(epsilonRateArr.join(''), 2);

const result = gammaRate * epsilonRate;

console.log(result);