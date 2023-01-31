process.stdin.on("data", (data) => {
  console.log(parseInt(data) + 5);
  process.exit();
});
