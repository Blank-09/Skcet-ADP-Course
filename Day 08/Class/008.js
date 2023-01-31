process.stdin.on("data", (number) => {
  let prev = 0;
  let curr = 1;

  while (number--) {
    console.log(prev);
    var sum = prev + curr;
    prev = curr;
    curr = sum;
  }

  process.exit();
});
