// algorithm: dynamic programming

let fs = require('fs');
let input = fs.readFileSync(process.platform == 'linux' ? '/dev/stdin' : './input.txt').toString().split('\n');

let n = +input[0];
let arr = [];
for(let i=1; i<=n; i++) {
  arr.push(+input[i]);
}

let dp = [];
dp[0] = arr[0];
dp[1] = arr[0] + arr[1];
dp[2] = Math.max(arr[0]+arr[1], arr[1]+arr[2], arr[0]+arr[2]);

for(let i=3; i<n; i++) {
  dp[i] = Math.max(dp[i-1], arr[i]+dp[i-2], arr[i]+arr[i-1]+dp[i-3])
}

console.log(dp[n-1])