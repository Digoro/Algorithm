// algorithm: greedy

let fs = require('fs');
let input = fs.readFileSync(process.platform == 'linux' ? '/dev/stdin' : './input.txt').toString().split('\n');
let lengthList = input[1].split(" ").map(Number);
let cost = input[2].split(" ").map(Number);
let sum = BigInt(0);
let min = BigInt(0);

lengthList.forEach((length, i)=> {
  if(i == 0) {
    sum += BigInt(length) * BigInt(cost[i]);
    min = BigInt(cost[i])
  } else {
    const a = BigInt(length) * BigInt(cost[i]);
    const b = BigInt(length) * BigInt(min);
    if(b<a) {
      sum += BigInt(b);
    } else {
      sum += BigInt(a);
      min = BigInt(cost[i]);
    }
  }
})

console.log(String(sum))