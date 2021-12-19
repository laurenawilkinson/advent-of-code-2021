const fs = require('fs');

module.exports = () => {
  return fs
    .readFileSync('input.txt', 'utf8')
    .toString()
    .trim()
    .split('\n');
}