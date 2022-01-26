const fs = require('fs');

/*
 * Reading a file synchronously with Node JS
 * @author Yosef Samuel
 * @param {string} path
 * return {void}
 */
function countStudents (path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const fields = {};
    const students = data.split('\n').map((student) => student.split(','));
    students.shift();
    if (students[students.length - 1][0] === '') {
      students.pop();
    }
    console.log(`Number of students: ${students.length}`);

    students.forEach((student) => {
      if (!fields[student[3]]) {
        fields[student[3]] = [];
      }
      fields[student[3]].push(student[0]);
    });
    Object.keys(fields).forEach((key) => {
      console.log(`Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
