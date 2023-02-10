let prev: number = 0;
let curr: number = 1;
let a: number = 5;

while (a--) {
  console.log(prev);

  const sum = prev + curr;
  prev = curr;
  curr = sum;
}
