const organizeInstructors = function (instructors) {
  const organizedInstructors = {};
  for (const instructor of instructors) {
    organizedInstructors[instructor.course] = [];
  }
  for (const instructor of instructors) {
    organizedInstructors[instructor.course].push(instructor.name);
  }
  return organizedInstructors;
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));
