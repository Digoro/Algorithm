// algorithm: dynamic programming

let fs = require('fs');
let input = fs.readFileSync(process.platform == 'linux' ? '/dev/stdin' : './input.txt').toString().split('\n');

let n = +input[0];
let arr = [];
for(let i=1; i<=n; i++) {
  arr.push(+input[i]);
}

const fibo = [];
fibo[0] = 0;
fibo[1] = 1;

for(let i=2; i<=40; i++) {
  fibo[i] = fibo[i-1] + fibo[i-2];
}

arr.forEach(v => {
  if(v == 0) console.log(1, 0);
  else console.log(fibo[v-1], fibo[v])
})