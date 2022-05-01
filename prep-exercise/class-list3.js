const modules = [
  { name: "html-css", displayName: "HTML/CSS" },
  { name: "javascript", displayName: "JavaScript" },
  { name: "browsers", displayName: "Browsers" },
  { name: "using-apis", displayName: "Using APIs" },
  { name: "node", displayName: "Node.js" },
  { name: "databases", displayName: "Databases" },
  { name: "react", displayName: "React" },
  { name: "project", displayName: "Project" },
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

// 1. Find all students who have graduated.
/**
 * We would like to have a list of everyone that is currently participating in a class.
 * This means the students, but also the mentors that are currently teaching the class.
 * The students should be self explanatory, but to find the mentors you will need to follow these steps:
 * - Check what the `currentModule` of the class is
 * - Find the mentor(s) that are `nowTeaching` that module
 *
 * Should return the list of names and their roles. So something like:
 *
 *  [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }]
 */
// const getPeopleOfClass = (className) => {
//   const classObj = classes.find((c) => c.name === className);
//   const currentModule = classObj.currentModule;
//   const nowTeaching = mentors.find((m) => m.nowTeaching === currentModule);
//   const studentsOfClass = students.filter((s) => s.class === className);
//   const mentorsOfClass = mentors.filter((m) =>
//     m.canTeach.includes(currentModule)
//   );
//   const allPeople = [...studentsOfClass, nowTeaching, ...mentorsOfClass];
//   return allPeople.map((p) => ({ name: p.name, role: "mentor" }));
// };
// // You can uncomment out this line to try your function
// console.log(getPeopleOfClass("class34"));

/**
 * We would like to have a complete overview of the current active classes.
 * First find the active classes, then for each get the people of that class.
 *
 * Should return an object with the class names as properties.
 * Each class name property contains an array identical to the return from `getPeopleFromClass`. So something like:
 *
 *  {
 *    class34: [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }],
 *    class35: [{ name: 'Jane', role: 'student' }, { name: 'Steve', role: 'mentor' }]
 *  }
 */
