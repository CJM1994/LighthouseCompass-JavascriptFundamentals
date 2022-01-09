const calculateChange = function (total, cash) {

  let remainingChange = cash - total;
  let output = '';

  if (remainingChange >= 2000) {
    let twenties = Math.floor(remainingChange / 2000);
    remainingChange -= (twenties * 2000)
    output += `twenties: ${twenties}, `;
  }

  if (remainingChange >= 1000) {
    let tens = Math.floor(remainingChange / 1000);
    remainingChange -= (tens * 1000)
    output += `tens: ${tens}, `;
  }

  if (remainingChange >= 500) {
    let fives = Math.floor(remainingChange / 500);
    remainingChange -= (fives * 500)
    output += `fives: ${fives}, `;
  }

  if (remainingChange >= 200) {
    let toonies = Math.floor(remainingChange / 200);
    remainingChange -= (toonies * 200)
    output += `toonies: ${toonies}, `;
  }

  if (remainingChange >= 100) {
    let loonies = Math.floor(remainingChange / 100);
    remainingChange -= (loonies * 100)
    output += `loonies: ${loonies}, `;
  }

  if (remainingChange >= 25) {
    let quarters = Math.floor(remainingChange / 25);
    remainingChange -= (quarters * 25)
    output += `quarters: ${quarters}, `;
  }

  if (remainingChange >= 10) {
    let dimes = Math.floor(remainingChange / 10);
    remainingChange -= (dimes * 10)
    output += `dimes: ${dimes}, `;
  }

  if (remainingChange >= 5) {
    let nickels = Math.floor(remainingChange / 5);
    remainingChange -= (nickels * 5)
    output += `nickels: ${nickels}, `;
  }

  if (remainingChange >= 1) {
    let pennies = Math.floor(remainingChange / 1);
    remainingChange -= (pennies * 1)
    output += `pennies: ${pennies}, `;
  }

  output = output.slice(0, output.length - 2)
  return output;

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
