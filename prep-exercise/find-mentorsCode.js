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

console.log(mentors);

const possibleMentorsForModule = (moduleName) => {
  // TODO complete this function
  const mentorsName = mentors.forEach((moduleName) => {
    return [moduleName.name];
  });
};
// You can uncomment out this line to try your function
// console.log(possibleMentorsForModule('using-apis'));
console.log(possibleMentorsForModule(mentors));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
  moduleName[Math.floor(Math.random * moduleName.length)];
  mentors.forEach((mentorName) => {
    return `Hello ${mentorName.name}, you're to teach the giving module`; // ?
  });
};
findMentorForModule(mentors);
// console.log(findMentorForModule(mentors));
// console.log(findMentorForModule("javascript"));
