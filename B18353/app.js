// algorithm: binary search

let fs = require('fs');
let input = fs.readFileSync(process.platform == 'linux' ? '/dev/stdin' : './input.txt').toString().split('\n');

let n = +input[0];
let arr = input[1].split(" ").map(Number);
arr.reverse();

function lowerBound(arr, target, start, end) {
    while(start < end) {
        let mid = parseInt((start+end)/2);
        if(arr[mid] >= target) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return end;
}

let d = [0];
for(x of arr) {
    if(d[d.length-1] < x) {
        d.push(x);
    } else {
        let index = lowerBound(arr, x, 0, d.length);
        d[index] = x;
    }
}

console.log(d);
console.log(n - (d.length - 1));