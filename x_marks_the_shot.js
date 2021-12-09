const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

const finalPosition = function (moves) {
  const returnPosition = [0, 0];
  for (let direction of moves) {
    switch (direction) {
      case 'north': returnPosition[1]++
        break;
      case 'south': returnPosition[1]--
        break;
      case 'east': returnPosition[0]++
        break;
      case 'west': returnPosition[0]--
        break;
      default:
        break;
    }
  }
  return returnPosition;
}

console.log(finalPosition(moves));