const camelCase = function (input) {

  let newString = '';

  for (i = 0; i < input.length; i++) {
    if (input[i] == ' ') {
      newString += input[i + 1].toUpperCase();
      i++;
    }
    else newString += input[i];
  }

  return newString;

};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
