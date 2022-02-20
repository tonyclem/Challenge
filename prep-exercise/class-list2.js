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

// Get data
const modules = require("./find-mentors").modules;
const mentors = require("./find-mentors").mentors;
const students = require("./find-mentors").students;
const classes = require("./find-mentors").classes;

const getPeopleOfClass = (className) => {
  // list of everyone that is currently participating in a class.
  const currentStudent = className.filter(function (student) {
    return student.graduated === false;
  });

  //   Find the mentor(s) that are `nowTeaching` that module
  const nameOfMentor = mentors.filter(function (mentor) {
    return (
      mentor.nowTeaching === "javascript" || mentor.nowTeaching === "react"
    );
  });
  return currentStudent;
};

console.log(getPeopleOfClass(students));

// Exercise 2
// * We would like to have a complete overview of the current active classes.
//  * First find the active classes, then for each get the people of that class.

const getActiveClasses = () => {
  //  * First find the active classes,
  let currentClasses = classes.filter(function (activeClass) {
    return activeClass.active === true;
  });
  // Check what the `currentModule` of the class
  let getClassName = currentClasses.map(({ name, currentModule }) => ({
    name,
    currentModule,
  }));
  console.log(getClassName);
  //* then for each get the people of that class.
  let getTheNameActive = getPeopleOfClass(students);
  const extractName = getTheNameActive.map(({ name, gitHubName }) => ({
    name,
    gitHubName,
  }));
  console.log(extractName);
  const nameOfMentor = mentors.filter(function (mentor) {
    return (
      mentor.nowTeaching === "javascript" || mentor.nowTeaching === "react"
    );
  });
  const mentorOnWork = nameOfMentor.map(({ name, nowTeaching }) => ({
    name,
    nowTeaching,
  }));
  console.log(mentorOnWork);

  return true;
};

console.log(getActiveClasses());

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
