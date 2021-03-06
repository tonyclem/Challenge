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

const modules = require("./find-mentorsData").modules;
const mentors = require("./find-mentorsData").mentors;
const students = require("./find-mentorsData").students;
const classes = require("./find-mentorsData").classes;

const getPeopleOfClass = (className) => {
  const studentsName = students.map((className) => {
    if (className.graduated === false) {
      return `[the current Student name is: { ${className.name} at ${className.class} }]`;
    }
    return ` ${className.graduated}`;
  });

  const mentorsName = mentors.forEach((mentor) => {
    if (mentor.nowTeaching === "javascript") {
      return `The teacher is ${mentor.name} and is teaching ${mentor.nowTeaching}`;
    }
    if (mentor.nowTeaching === "react") {
      return `The teacher name is ${mentor.name} and is teaching ${mentor.nowTeaching}`;
    }
  });

  return studentsName, mentorsName;
};
// console.log(getPeopleOfClass("class34"));
console.log(getPeopleOfClass(students, mentors));

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
const getActiveClasses = () => {
  students.forEach((student) => {
    if (student.graduated === false) {
      return `[{ name: ${student.name} role: ${student.class} }]`;
    }
    return true;
  });
  classes.map((classe) => {
    if (classe.active === true) {
      return `The active student is: ${classe.name} `;
    }
  });
};
// You can uncomment out this line to try your function
console.log(getActiveClasses());
