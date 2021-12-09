const ageCalculator = function (name, birthYear, currentYear) {
  return `${name} is ${currentYear - birthYear} years old.`;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));