// algorithm: binary search

let fs = require('fs');
let input = fs.readFileSync(process.platform == 'linux' ? '/dev/stdin' : './input.txt').toString().split('\n');

let [n, m] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);


let start = 1;
let end = arr.reduce((a,b)=>Math.max(a,b));
console.log(n,m,arr,start,end);

let result = 0;
while(start <= end) {
    let mid = parseInt((start+end)/2);
    let total = 0;
    for(v of arr) {
        if(v > mid) {
            total += v-mid;
        }
    }
    if(total < m) {
        end = mid - 1;
    } else {
        result = mid;
        start = mid + 1;
    }
}
console.log(result);