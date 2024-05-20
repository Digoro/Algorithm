// algorithm: dynamic programming

let fs = require('fs');
let input = fs.readFileSync(process.platform == 'linux' ? '/dev/stdin' : './input.txt').toString().split('\n');

let n = +input[0];
let dp = [];
for(let i=1; i<=n; i++) {
  dp.push(+input[i]);
}

for(let i=1; i<n; i++) {
  dp[i] = Math.max(dp[i], dp[i-1]*dp[i])
}

console.log(Math.max(...dp).toFixed(3));