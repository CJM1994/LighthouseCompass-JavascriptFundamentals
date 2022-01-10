const makeCase = function (input, letterCase) {

  const precedenceOne = ['camel', 'pascal', 'snake', 'kebab', 'title'];
  const precedenceTwo = ['vowel', 'consonant'];
  const precedenceThree = ['upper', 'lower'];
  const executeOrder = { one: '', two: '', three: '' };
  let output = input;

  if (typeof letterCase === 'string') {
    if (precedenceOne.includes(letterCase)) {
      executeOrder.one = letterCase;
    }
    else if (precedenceTwo.includes(letterCase)) {
      executeOrder.two = letterCase;
    }
    else if (precedenceThree.includes(letterCase)) {
      executeOrder.three = letterCase;
    }
  }
  else if (typeof letterCase === 'object') {
    for (const thisCase of letterCase) {
      if (precedenceOne.includes(thisCase)) {
        executeOrder.one = thisCase;
      }
      else if (precedenceTwo.includes(thisCase)) {
        executeOrder.two = thisCase;
      }
      else if (precedenceThree.includes(thisCase)) {
        executeOrder.three = thisCase;
      }
    }
  }

  switch (executeOrder.one) {
    case 'camel': output = camelCase(output);
      break;
    case 'pascal': output = pascalCase(output);
      break;
    case 'snake': output = snakeCase(output);
      break;
    case 'kebab': output = kebabCase(output);
      break;
    case 'title': output = titleCase(output);
      break;
  }

  switch (executeOrder.two) {
    case 'vowel': output = vowelCase(output);
      break;
    case 'consonant': output = consonantCase(output);
      break;
  }

  switch (executeOrder.three) {
    case 'upper': output = upperCase(output);
      break;
    case 'lower': output = lowerCase(output);
      break;
  }

  return output;

}

function camelCase(input) {
  let output = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      i++;
      output += input[i].toUpperCase();
    }
    else output += input[i];
  }
  return output;
}

function pascalCase(input) {
  let output = input[0].toUpperCase();
  for (let i = 1; i < input.length; i++) {
    if (input[i] === ' ') {
      i++;
      output += input[i].toUpperCase();
    }
    else output += input[i];
  }
  return output;
}

function snakeCase(input) {
  let output = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      output += '_';
    }
    else output += input[i];
  }
  return output;
}

function kebabCase(input) {
  let output = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      output += '-';
    }
    else output += input[i];
  }
  return output;
}

function titleCase(input) {
  let output = input[0].toUpperCase();
  for (let i = 1; i < input.length; i++) {
    if (input[i] === ' ') {
      output += ' ';
      i++;
      output += input[i].toUpperCase();
    }
    else output += input[i];
  }
  return output;
}

function vowelCase(input) {
  output = '';
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (const letter of input) {
    if (vowels.includes(letter)) {
      output += letter.toUpperCase();
    }
    else output += letter.toLowerCase();
  }
  return output;
}

function consonantCase(input) {
  output = '';
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (const letter of input) {
    if (vowels.includes(letter)) {
      output += letter.toLowerCase();
    }
    else output += letter.toUpperCase();
  }
  return output;
}

function upperCase(input) {
  output = input.toUpperCase();
  return output;
}

function lowerCase(input) {
  output = input.toLowerCase();
  return output;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));