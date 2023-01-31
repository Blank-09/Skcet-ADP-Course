process.stdin.on("data", (number) => {
  var armstrongNumber = number
    .toString()
    .split("")
    .reduce((a, b) => a + Math.pow(b, 3), 0);

  if (armstrongNumber == number)
    console.log(number + " is an Armstrong number");
  else
    console.log(number + " is not an Armstrong number.");

  process.exit();
});
