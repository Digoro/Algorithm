// algorithm: greedy

let fs = require('fs');
let input = fs.readFileSync(process.platform == 'linux' ? '/dev/stdin' : './input.txt').toString().split('\n');
let s = +input[0];
let sum = 0;
let count = 0;

while(sum <= s) {
  count += 1;
  sum += count;
}
 
console.log(count-1);