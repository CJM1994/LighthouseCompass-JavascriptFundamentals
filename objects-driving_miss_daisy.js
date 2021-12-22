const carPassing = function (cars, speed) {
  cars.push({ time: Date.now(), speed: speed })
  return cars;
}