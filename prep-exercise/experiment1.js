const students = [
  { name: "Fede", class: "class33", gitHubName: "fedefu", graduated: false },
  { name: "Tjebbe", class: "class32", gitHubName: "Tjebbee", graduated: true },
  { name: "Rob", class: "class34", gitHubName: "robvk", graduated: false },
  {
    name: "Wouter",
    class: "class35",
    gitHubName: "wouterkleijn",
    graduated: false,
  },
];

const classes = [
  {
    name: "class32",
    startDate: "23-3-2021",
    active: false,
    graduationDate: "7-11-2021",
  },
  {
    name: "class33",
    startDate: "28-5-2021",
    active: false,
    graduationDate: "7-11-2021",
  },
  {
    name: "class34",
    startDate: "2-9-2021",
    active: true,
    currentModule: "react",
  },
  {
    name: "class35",
    startDate: "14-11-2021",
    active: true,
    currentModule: "using-apis",
  },
  {
    name: "class36",
    startDate: "5-1-2022",
    active: true,
    currentModule: "javascript",
  },
];

const mentors = [
  {
    name: "Stas",
    canTeach: ["javascript", "browsers", "using-apis"],
    nowTeaching: "javascript",
  },
  {
    name: "Andrej",
    canTeach: ["using-apis", "node"],
  },
  {
    name: "Shriyans",
    canTeach: ["react"],
    nowTeaching: "react",
  },
  {
    name: "Yash",
    canTeach: ["javascript", "using-apis"],
  },
  {
    name: "Rohan",
    canTeach: ["html/css/git", "javascript", "node"],
  },
  {
    name: "Collin",
    canTeach: ["browsers", "using-apis", "node"],
  },
];

const currentStudent = students.filter(function (student) {
  return student.graduated === false;
});
console.log(currentStudent);

const currentMentor = classes.filter(function (classNo) {
  return classNo.active === true;
});
console.log(currentMentor);

const nameOfMentor = mentors.filter(function (mentor) {
  return mentor.nowTeaching === "javascript" || mentor.nowTeaching === "react";
});

console.log(nameOfMentor);
