/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
// const { mentors } = require("./find-mentors");

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

const possibleMentorsForModule = (moduleName) => {
  moduleName.map(({ modules }) => {
    modules.name;
  });
  return moduleName;
};
// You can uncomment out this line to try your function
// console.log(possibleMentorsForModule("using-apis"));
console.log(possibleMentorsForModule(mentors));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */

// const findMentorForModule = (moduleName) => {
//   let result = [];
//   // let randomly = moduleName[Math.floor(Math.random * moduleName.length)];
//   mentors.map((mentorName) => {
//     result.push(mentorName.name);
//     console.log(mentorName.name);
//   });
//   console.log(result);
// };
// findMentorForModule(mentors);
// console.log(findMentorForModule(mentors));
// console.log(findMentorForModule("javascript"));
