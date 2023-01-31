process.stdin.on("data", (number) => {

  /* Code Starts From here */

  console.log(Math.pow(2, number));

  /* Code Ends here */

  process.exit();
});
