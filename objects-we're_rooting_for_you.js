const judgeVegetable = function (vegetables, metric) {

  let highScore = 0;
  let winner = '';

  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > highScore) {
      highScore = vegetables[i][metric];
      winner = vegetables[i]['submitter'];
    }
  }

  return winner;

}