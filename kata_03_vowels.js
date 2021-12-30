const numberOfVowels = function (data) {

  const conditions = ['a', 'e', 'i', 'o', 'u']
  let vowelCount = 0;

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < conditions.length; j++) {
      if (data[i] === conditions[j]) {
        vowelCount++;
      }
    }
  }

  return vowelCount;

};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
