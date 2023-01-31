process.stdin.on("data", (celsius) => {

  /* Code Starts From here */

  const fahrenheit = celsius * 1.8 + 32;
  console.log(
    `${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`
  );

  /* Code Ends here */

  process.exit();
});
