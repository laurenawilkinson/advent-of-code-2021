const loadTxt = require('../file-loader');

const data = loadTxt();

let horizontalPos = 0;
let depth = 0;

for (const instruction of data) {
  let [ direction, value ] = instruction.split(' ');
  value = parseInt(value, 10);

  switch (direction) {
    case 'forward':
      horizontalPos += value;
      break;

    case 'down':
      depth += value;
      break;

    case 'up':
      depth -= value;
      break;
  }
}

const result = horizontalPos * depth;

console.log(result);