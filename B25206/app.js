let fs = require('fs');
let input = fs.readFileSync(process.platform == 'linux' ? '/dev/stdin' : './input.txt').toString().split('\n');

let arr = [];
for(let i=0; i<20; i++) {
  arr.push(input[i]);
}
const list = {
  'A+': 4.5,
  'A0': 4.0,
  'B+': 3.5,
  'B0': 3.0,
  'C+': 2.5,
  'C0': 2.0,
  'D+': 1.5,
  'D0': 1.0,
  'F': 0.0,
};

let scoreSum = 0;
let result = [];
arr.forEach(v => {
  const splited = v.split(" ");
  const score = +splited[1];
  const a = splited[2];
  if(a != 'P') {
    scoreSum += score;
    result.push(score * list[a]);
  }
})

console.log(result.reduce((a,b)=>a+b,0)/scoreSum);