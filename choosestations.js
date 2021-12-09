// Returns all appropriate voting centres
// Stations must have capacity of at least 20 and be a school or community centre

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations) {
  const goodStations = [];
  for (let i = 0; i < stations.length; i++) {
    if (stations[i][1] >= 20 && (stations[i][2] === 'school' || stations[i][2] === 'community centre')) {
      goodStations.push(stations[i][0]);
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));