const urlDecode = function (text) {
  let convertedObject = {};
  let convertedSections = [];

  // Separates text into parts that break at each & symbol
  while (text.includes('&') === true) {
    for (let i = 0; i < text.length; i++) {
      if (text[i] === '&') {
        convertedSections.push(text.slice(0, i));
        text = text.slice(i + 1);
      }
    }
  }
  convertedSections.push(text);

  // Converts %20 into spaces for each item in the array
  for (let i = 0; i < convertedSections.length; i++) {
    convertedSections[i] = convertedSections[i].replace(/%20/g, ' ');
  }

  // Assigns sections from array into key value pairs for output object
  for (const section of convertedSections) {
    for (let i = 0; i < section.length; i++) {
      if (section[i] === '=') {
        convertedObject[section.slice(0, i)] = section.slice(i + 1);
      }
    }
  }

  return convertedObject;

};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);