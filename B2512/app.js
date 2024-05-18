// algorithm: binary search

let fs = require('fs');
let input = fs.readFileSync(process.platform == 'linux' ? '/dev/stdin' : './input.txt').toString().split('\n');

let n = +input[0];
let arr = input[1].split(" ").map(Number);
let m = +input[2];

let start = 1;
let end = arr.reduce((a,b)=>Math.max(a,b));

let result = 0;
while(start <= end) {
    let mid = parseInt((start+end)/2);
    let total = 0;
    for(v of arr) {
        total += Math.min(mid, v);
    }
    if(total <= m) {
        result = mid;
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}
console.log(result)