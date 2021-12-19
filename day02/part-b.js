const loadTxt = require('../file-loader');

const data = loadTxt();

let horizontalPos = 0;
let depth = 0;
let aim = 0;

for (const instruction of data) {
  let [ direction, value ] = instruction.split(' ');
  value = parseInt(value, 10);

  switch (direction) {
    case 'forward':
      horizontalPos += value;
      depth += (aim * value);
      break;

    case 'down':
      aim += value;
      break;

    case 'up':
      aim -= value;
      break;
  }
}

const result = horizontalPos * depth;

console.log(result);