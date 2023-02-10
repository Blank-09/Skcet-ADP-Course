function passFail(marks: number): string {
  return marks >= 40 ? "Pass" : "Fail";
}

const input = prompt("Enter a number:");

if (input) {
  console.log(passFail(parseInt(input)));
}
