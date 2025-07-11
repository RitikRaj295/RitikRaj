//Print a odd numbers even if they go beyond the value.

function printOddUntilCount(a) {
  let count = 0;
  let num = 1;
  let result = [];

  while (count < a) {
    result.push(num);
    num += 2;
    count++;
  }

  console.log(result.join(", "));
}


printOddUntilCount(5);
