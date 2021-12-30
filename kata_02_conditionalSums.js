const conditionalSum = function (values, condition) {

  const returnArray = [];
  let finalSum = 0;

  if (condition === 'even') {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        returnArray.push(values[i]);
      }
    }
  }

  if (condition === 'odd') {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 !== 0) {
        returnArray.push(values[i]);
      }
    }
  }

  for (i = 0; i < returnArray.length; i++) {
    finalSum = finalSum + returnArray[i];
  }

  return finalSum;

};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
