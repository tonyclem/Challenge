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
  const currentStudent = className.filter(function (student) {
    return student.graduated === false;
  });
  currentStudent.map(({ name }) => ({ name, role: "student" }));

  const nameOfMentor = mentors.filter(function (mentor) {
    return (
      mentor.nowTeaching === "javascript" || mentor.nowTeaching === "react"
    );
  });
  const mentorCurrentTeacher = nameOfMentor.map(({ name }) => ({
    name,
    role: "Mentor",
  }));
  return { currentStudent, mentorCurrentTeacher };
};

console.log(getPeopleOfClass(students));

// const nameOfMentor = mentors.filter(function (mentor) {
//     return (
//       mentor.nowTeaching === "javascript" || mentor.nowTeaching === "react"
//     );
//   });
