// // algorithm: backtracking

// let n = 4;
// let queens = [];

// function possible(x, y) {
//   for(let [a, b] of queens) {
//     if(a == x || b == y) return false;
//     if(Math.abs(a - x) == Math.abs(b - y)) return false;
//   }
//   return true;
// }

// let cnt = 0;
// function dfs(row) {
//   if(row == n) cnt += 1;
//   for(let i=0; i<n; i++) {
//     if(possible(row, i)) {
//       queens.push([row, i]);
//       console.log(queens);
//       dfs(row+1);
//       queens.pop();
//     }
//   }
// }
// dfs(0);
// console.log(cnt);


function fibo(x) {
  if(x === 1 || x === 2) {
    return 1;
  }
  return fibo(x-1)+fibo(x-2);
}

// d = new Array(100).fill(0);
// function fibo(x) {
//   if(x === 1 || x === 2) {
//     return 1;
//   }
//   if(d[x] != 0) {
//     return d[x];
//   }
//   d[x] = fibo(x-1)+fibo(x-2);
//   return d[x];
// }

console.log(fibo(59))