// loops
function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return function() {
      return seat;
    };
  }
  students = [];
  for (x = 0; x < numbersOfStudents; ++x) {
    students.push(studentSeat(x + 1));
  }
  return students;
}
const classRoom = createClassRoom(10);
