const repeatNumbers = function (data) {
  let outputArray = [];
  let arrayString = '';
  for (i = 0; i < data.length; i++) {
    arrayString = '';
    for (j = 0; j < data[i][1]; j++) {
      arrayString += data[i][0];
    }
    outputArray.push(arrayString);
  }
  return outputArray;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));