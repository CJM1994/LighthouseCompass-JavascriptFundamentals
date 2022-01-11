const squareCode = function (message) {

  const messageNoSpace = message.replace(/\s/g, '');
  const squareArray = createSquareArray(messageNoSpace);
  const squareCode = invertArrayAndToString(squareArray, messageNoSpace.length);

  return squareCode;

};

function createSquareArray(message) {

  const columns = Math.ceil(Math.sqrt(message.length));
  let charCount = 0;
  let squareArray = [];
  let arrayRow = '';

  for (let i = 0; i <= message.length; i++) {
    if (i === message.length) {
      squareArray.push(arrayRow);
      break;
    }
    if (charCount === columns) {
      squareArray.push(arrayRow);
      arrayRow = '';
      charCount = 0;
    }
    arrayRow += message[i];
    charCount++;
  }

  return squareArray;

};

function invertArrayAndToString(array, chars) {
  let stringInArray = 0;
  let charInString = 0;
  let output = '';
  for (let i = 0; i < chars; i++) {
    if (stringInArray === array.length || array[stringInArray][charInString] == null) {
      output += ' ';
      stringInArray = 0;
      charInString++;
    }
    output += array[stringInArray][charInString];
    stringInArray++;
  }
  return output;
}

// console.log(createSquareArray('ThisIsWhatTheArraysLookLikeFromTheHelperFunction', 7))
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));