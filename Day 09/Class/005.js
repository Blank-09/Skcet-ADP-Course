process.stdin.on("data", (mark) => {

  /* Code Starts From here */

  var grade;

  if (mark == 100) grade = "S";
  else if (90 <= mark && mark <= 99) grade = "A";
  else if (80 <= mark && mark <= 89) grade = "B";
  else if (70 <= mark && mark <= 79) grade = "C";
  else if (60 <= mark && mark <= 69) grade = "D";
  else if (50 <= mark && mark <= 59) grade = "E";
  else grade = "F";

  console.log(grade);

  /* Code Ends here */

  process.exit();
});
