const calculateChange = function (total, cash) {

  let remainingAmount = cash - total;
  let output = [];
  const change = [{ denomination: "twenty", value: 2000 }
    , { denomination: "ten", value: 1000 }
    , { denomination: "five", value: 500 }
    , { denomination: "twoonie", value: 200 }
    , { denomination: "loonie", value: 100 }
    , { denomination: "quarter", value: 25 }
    , { denomination: "dime", value: 10 }
    , { denomination: "nickel", value: 5 }
    , { denomination: "penny", value: 1 }]

  for (type of change) {
    if (remainingAmount >= type.value) {
      output.push(`${type.denomination}: ${Math.floor(remainingAmount / type.value)}`)
      remainingAmount -= Math.floor(remainingAmount / type.value) * type.value;
    }
  }

  return output;

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
