function calculateCircleArea(r) {
  return (r < 0) ? undefined : Math.PI * Math.pow(r, 2);
}

function calculateRectangleArea(length, width) {
  return (length < 0 || width < 0) ? undefined : length * width;
}

function calculateTriangleArea(base, height) {
  return (base < 0 || height < 0) ? undefined : (base * height) / 2;
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined