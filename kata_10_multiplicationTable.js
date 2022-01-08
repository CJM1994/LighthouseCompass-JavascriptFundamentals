const multiplicationTable = function (maxValue) {
  let output = '';
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      output += (i * j) + ' ';
    }
    output += '\n';
  }
  return output;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
