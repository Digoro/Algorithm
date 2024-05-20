// algorithm: dynamic programming

let fs = require('fs');
let input = fs.readFileSync(process.platform == 'linux' ? '/dev/stdin' : './input.txt').toString().split('\n');

let n = +input[0];
let m = +input[1];

let d = new Array(50).fill(0);
d[0]=1;
d[1]=1;
d[2]=2;

function dp(x) {
  if(d[x] != 0) return d[x];
  d[x] = dp(x-1) + dp(x-2);
  return d[x];
}

let arr = [];
let start = 0;
for(let i=2; i<m+2; i++) {
  end = +input[i];
  arr.push(end - 1 - start);
  start = end;
}
arr.push(n - start);

console.log(arr.map(v => dp(v)).reduce((a,b)=> a*b,1))