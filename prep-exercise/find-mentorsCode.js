// import {
//     modules,
//     students,
//     mentors,
//     classes,
//   } from "../../../Week1/prep-exercises/1-objects-and-arrays/hyf";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
const { mentors } = require("./find-mentors");

// console.log(mentors);

const possibleMentorsForModule = (moduleName) => {
  mentors.forEach((moduleName) => {
    return [moduleName.name];
  });
  return moduleName;
};
// You can uncomment out this line to try your function
console.log(possibleMentorsForModule("using-apis"));
// console.log(possibleMentorsForModule(mentors));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */

const findMentorForModule = (moduleName) => {
  let result = [];
  // let randomly = moduleName[Math.floor(Math.random * moduleName.length)];
  mentors.map((mentorName) => {
    result.push(mentorName.name); //?
    console.log(mentorName.name);
  });
  console.log(result);
};
// findMentorForModule(mentors);
// console.log(findMentorForModule(mentors));
console.log(findMentorForModule("javascript"));
