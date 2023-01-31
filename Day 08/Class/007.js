process.stdin.on("data", (number) => {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  console.log("The sum of natural numbers:", sum);
  process.exit();
});
