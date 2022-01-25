/*
 * Reading a file synchronously with Node JS
 * @author Yosef Samuel
 * @param {string} path
 * @return {void}
 */
const fs = require('fs');

module.exports = async function countStudents (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const fields = {};
      const students = data.split('\n').map((student) => student.split(','));
      students.shift();
      students.pop();
      const log = [];

      log.push(`Number of students: ${students.length}`);
      students.forEach((student) => {
        if (!fields[student[3]]) fields[student[3]] = [];
        fields[student[3]].push(student[0]);
      });
      Object.keys(fields).forEach((key) => {
        log.push(`Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`);
      });
      const result = log.join('\n');
      console.log(result);
      resolve(result);
    });
  });
};
