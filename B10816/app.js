// algorithm: binary search

let fs = require('fs');
let input = fs.readFileSync(process.platform == 'linux' ? '/dev/stdin' : './input.txt').toString().split('\n');

let n = +input[0];
let cards = input[1].split(" ").map(Number).sort((a,b)=>a-b);
let m = +input[2];
let numbers = input[3].split(" ").map(Number);

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

function upperBound(arr, target, start, end) {
    while(start < end) {
        let mid = parseInt((start+end)/2);
        if(arr[mid] > target) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return end;
}

function countByRange(arr, leftValue, rightValue) {
    let rightIndex = upperBound(arr, rightValue, 0, arr.length);
    let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
    return rightIndex - leftIndex;
}

const result = numbers.map(n => countByRange(cards, n, n)).join(" ")
console.log(result);