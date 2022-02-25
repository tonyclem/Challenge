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

// [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }]

const getPeopleOfClass = (className) => {
  const hackYourFu = classes.find((s) => (s.name = className));
  const currentHack = hackYourFu.currentModule;
  console.log(currentHack);
  //   const mentorName = mentors.filter(
  //     (mentor) => mentor.nowTeaching === hackYourFu.currentModule
  //   );
  //   console.log(mentorName);

  //   const studentName = students
  //     .filter((student) => student.name === className)
  //     .map((student) => ({ name: student.name, role: "student" }));
  //   return mentorName;
  return hackYourFu;
};
// console.log(getPeopleOfClass(mentors));

console.log(getPeopleOfClass("class 35"));
