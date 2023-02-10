function factorial(num: number): number {
  let fact: number = 1;
  do fact *= num;
  while (--num);
  return fact;
}

console.log(factorial(5));