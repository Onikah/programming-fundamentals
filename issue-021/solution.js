// implement your solution here
function oldAndYoung(students) {
 var oldest = youngest = students[0].yearOfBirth;
 var obj = {};

 students.forEach((student) => {
  oldest = (oldest > student.yearOfBirth) ? student.yearOfBirth: oldest;
  youngest = (youngest < student.yearOfBirth) ? student.yearOfBirth: youngest;

  if (student.yearOfBirth === oldest) { obj.oldest = student.name; }
  if (student.yearOfBirth === youngest) { obj.youngest = student.name; }
 });

 return obj;
}
