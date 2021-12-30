const instructorWithLongestName = function (instructors) {

  let mostLetters = 0;
  let instructorIndex;

  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i]['name'].length > mostLetters) {
      mostLetters = instructors[i]['name'].length;
      instructorIndex = i;
    }
  }

  return instructors[instructorIndex];

};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));