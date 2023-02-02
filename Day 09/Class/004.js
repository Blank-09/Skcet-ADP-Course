process.stdin.on("data", (number) => {

  /* Code Starts From here */

  let fact = 1;

  for (let i = 1; i <= number; i++) {
    fact *= i;
  }

  console.log(fact);

  /* Code Ends here */

  process.exit();
});
