// algorithm: greedy

let fs = require('fs');
let input = fs.readFileSync(process.platform == 'linux' ? '/dev/stdin' : './input.txt').toString().split('\n');

let n = input[0];
let list = [];
for (let i=1;i<=n;i++) list.push(input[i].split(" ").map(Number))

list.sort((a,b) => {
    if(a[1] != b[1]) return a[1] - b[1];
    else return a[0] - b[0];
})

let result = [list[0]];
for(let i=1; i<n; i++) {
  const last  = result[result.length-1];
  if(last[1] <= list[i][0]) {
      result.push(list[i]);
  }
}

console.log(result.length);