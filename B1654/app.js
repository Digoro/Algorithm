// algorithm: binary search

let fs = require('fs');
let input = fs.readFileSync(process.platform == 'linux' ? '/dev/stdin' : './input.txt').toString().split('\n');

let [k, n] = input[0].split(" ").map(Number);
let arr = [];
for(let i=1;i<=k;i++) {
    arr.push(+input[i]);
}

let start = 1;
let end = arr.reduce((a,b)=>Math.max(a,b));
let result = 0;
while(start <= end) {
    let mid = parseInt((start+end)/2);
    let total = 0;
    for(v of arr) {
        total += parseInt(v / mid);
    }
    if(total < n) {
        end = mid - 1;
    } else {
        result = mid;
        start = mid + 1;
    }
}
console.log(result);