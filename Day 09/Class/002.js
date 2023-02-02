process.stdin.on("data", (cash) => {

  /* Code Starts From here */

  const notes = [1, 2, 5, 10, 50, 100];
  cash = +cash;

  let count = 0;

  for (var i = notes.length - 1; cash && i >= 0; i--) {
    while (cash >= notes[i]) {
      count++;
      cash -= notes[i];
    }
  }

  console.log(count);

  /* Code Ends here */

  process.exit();
});
