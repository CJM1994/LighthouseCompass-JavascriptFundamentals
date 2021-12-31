const urlEncode = function (text) {
  let trimmedText = text.trim();
  let finalString = '';
  for (let i = 0; i < trimmedText.length; i++) {
    if (trimmedText.codePointAt(i) === 32) {
      finalString += '%20';
    }
    else finalString += trimmedText.charAt(i);
  }
  return finalString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
