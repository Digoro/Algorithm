// algorithm: greedy
// site: https://www.acmicpc.net/problem/215877

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// s = 200;
let s = +input[0];
let sum = 0;
let count = 0;

while(sum <= s) {
  count += 1;
  sum += count;
}
 
console.log(count-1);