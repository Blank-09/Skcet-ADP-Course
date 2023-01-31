process.stdin.on("data", (marks) => {
  console.log(`You ${marks >= 40 ? "pass" : "fail"} the exam.`);
  process.exit();
});
