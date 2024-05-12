// algorithm: greedy

let fibo = [];
fibo.push(0);
fibo.push(1);
while(fibo[fibo.length-1] < 100000000) {
  fibo.push(fibo[fibo.length-2] + fibo[fibo.length-1]);
}

let fs = require('fs');
let input = fs.readFileSync(process.platform == 'linux' ? '/dev/stdin' : './input.txt').toString().split('\n');

let n = +input[0];
let list = [];
for(let i=1; i<=n; i++) {
  list.push(+input[i]);
}

list = list.map((v,i) => {
  let result = [];
  while(v > 0) {
    const a = fibo.filter(a => a <= v);
    const max = a[a.length -1];
    v -= max;
    result.push(max);
  }
  return result.sort((a,b)=>a-b).join(" ");
}).join("\n")

console.log(list)