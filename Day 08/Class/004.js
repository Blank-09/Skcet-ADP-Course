process.stdin.on("data", (number) => {
  console.log("The number is", number % 2 ? "odd." : "even.");
  process.exit();
});
