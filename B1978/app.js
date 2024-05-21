let fs = require('fs');
let input = fs.readFileSync(process.platform == 'linux' ? '/dev/stdin' : './input.txt').toString().split('\n');

let n = +input[0];
let arr = input[1].split(" ").map(Number);

const result = arr.filter(v => {
  let flag = true;
  for(let i=2; i<v; i++) {
    if(v % i == 0) {
      flag = false;
      break;
    }
  }
  return v != 1 && flag;
})

console.log(result.length);