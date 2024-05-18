// algorithm: dynamic programming

let fs = require('fs');
let input = fs.readFileSync(process.platform == 'linux' ? '/dev/stdin' : './input.txt').toString().split('\n');

let n = +input[0];
let arr = [];
arr[0] = 1;
arr[1] = 2;

for(let i=2; i<n; i++) {
  arr[i] = (arr[i-1] + arr[i-2]) % 15746 ;
}

console.log(arr[n-1]);