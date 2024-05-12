// algorithm: greedy
let fs = require('fs');
let input = fs.readFileSync(process.platform == 'linux' ? '/dev/stdin' : './input.txt').toString().split('\n');

let n = +input[0];
let list = input[1].split(" ").map(Number);
let cnt = 0;
let arr = new Array(n).fill(0);
for(let x of list) {
  if(arr[x] > 0) {
    arr[x] -= 1;
    arr[x - 1] += 1;
  } else {
    arr[x - 1] += 1;
    cnt += 1;
  }
}

console.log(cnt);