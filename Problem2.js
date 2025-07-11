//Print first a odd numbers

function printOddSeries(a) {
  let num = 1;
  let result = [];

  for (let i = 0; i < a; i++) {
    result.push(num);
    num += 2;
  }

  console.log(result.join(", "));
}


printOddSeries(4); 
