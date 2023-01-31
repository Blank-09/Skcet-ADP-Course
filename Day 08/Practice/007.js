process.stdin.on("data", (number) => {

  /* Code Starts From here */
  
  for (let i = 2; i <= number; i += 2) {
    console.log(i);
  }

  /* Code Ends here */
  process.exit();
});
