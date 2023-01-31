process.stdin.on("data", (operator) => {

  /* Code Starts From here */

  const n1 = 209;
  const n2 = 3;

  let result;

  switch (String(operator)) {
    case "+":
      result = n1 + n2;
      break;
    case "-":
      result = n1 - n2;
      break;
    case "*":
      result = n1 * n2;
      break;
    case "/":
      result = n1 / n2;
      break;
  }

  console.log(`${n1} ${operator} ${n2} = ${result}`);

  /* Code Ends here */

  process.exit();
});
