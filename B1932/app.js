// algorithm: dynamic programming

let fs = require('fs');
let input = fs.readFileSync(process.platform == 'linux' ? '/dev/stdin' : './input.txt').toString().split('\n');

let n = +input[0];
let dp = [];

for(let i=1; i<=n; i++) {
  dp.push(input[i].split(" ").map(Number));
}

for(let i=1; i<n; i++) {
  for(let j=0;j<=i;j++){
    let upLeft = 0;
    if(j != 0) upLeft = dp[i-1][j-1];
    let up = 0;
    if(j != i) up = dp[i-1][j];
    dp[i][j] = dp[i][j] + Math.max(upLeft, up);
  }
}

console.log(Math.max(...dp[n-1]))