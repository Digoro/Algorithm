// algorithm: greedy
// site: https://www.acmicpc.net/problem/16953

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// a = 100, b = 40021
let [a, b] = input[0].split(" ").map(Number)
let cnt = 0;
let isOk = false;

while(a <= b) {
  if(a === b) {
    isOk = true;
    break;
  }
  if(b % 10 === 1) {
    b = parseInt(b / 10);
    cnt += 1;
  } else if(b % 2 === 0) {
    b = parseInt(b / 2);
    cnt += 1;
  } else {
    break;
  }
}

if(isOk) {
  console.log(cnt+1);
} else {
  console.log(-1);
}