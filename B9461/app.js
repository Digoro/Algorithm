// algorithm: dynamic programming

let fs = require('fs');
let input = fs.readFileSync(process.platform == 'linux' ? '/dev/stdin' : './input.txt').toString().split('\n');

let n = +input[0];
for(let i=1; i<=n; i++) {
  let arr = [];
  arr[0] = 1;
  arr[1] = 1;
  arr[2] = 1;
  const index = +input[i];
  for(let j=3; j<index; j++) {
    arr[j] = arr[j-2] + arr[j-3];
  }
  console.log(arr[index-1])
}

