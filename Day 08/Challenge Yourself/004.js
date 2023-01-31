process.stdin.on("data", (number) => {

  /* Code Starts From here */

  for (let i = 1; i <= 20; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
  }

  /* Code Ends here */

  process.exit();
});
