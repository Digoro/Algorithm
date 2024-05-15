// algorithm: greedy

let fs = require('fs');
let input = fs.readFileSync(process.platform == 'linux' ? '/dev/stdin' : './input.txt').toString().split('\n');

let balls = +input[0].split(" ")[0];
let buckets = +input[0].split(" ")[1];
let min = 0;
for(let i = 1;i <= buckets; i++){
  min += i
}
if(balls < min) {
  console.log(-1);
} else {
  balls -= min;
  if(balls % buckets === 0) {
    console.log(buckets -1);
  } else {
    console.log(buckets);
  }
}