/*
< !DOCTYPE html >
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Challenges</title>
  </head>
  <body>
    <h1>Challenges</h1>
    <script src="./10-data.js"></script>
    <script src="./09-array-methods.js"></script>
  </body>
</html>
*/

// have access to students from data.js
console.log(students);

// map
const updatedStudents = students.map(function (student) {
  student.role = "student";
  return student;
});

//console.log(updatedStudents);

// filter
const highScores = students.filter(function (student) {
  //1
  //   if (student.score >= 80) {
  //     return student;
  //     }
  //2
  //  if (student.score >= 80) return student;
  //3
  return student.score >= 80;
});

//console.log(highScores);

// find
const specificID = students.find(function (student) {
  //1
  //   if (student.id === 1) {
  //     return student;
  //   }

  //2
  return student.id === 1;
});

//console.log(specificID);

// reduce
const averageScore =
  students.reduce(function (scoresTotal, student) {
    scoresTotal += student.score;
    return scoresTotal;
  }, 0) / students.length;

//console.log(averageScore);

// square bracket notation
const subject = "math";
const dynamicPropertyInObject = {};

dynamicPropertyInObject[subject] = "Value of property";

//console.log(dynamicPropertyInObject);

// reduce
const survey = students.reduce(function (survey, student) {
  const favSubject = student.favoriteSubject;

  if (survey[favSubject]) {
    survey[favSubject]++;
  } else {
    survey[favSubject] = 1;
  }

  return survey;
}, {});

//console.log(survey);
