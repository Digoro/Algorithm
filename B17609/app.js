// algorithm: greedy

let fs = require('fs');
let input = fs.readFileSync(process.platform == 'linux' ? '/dev/stdin' : './input.txt').toString().split('\n');

let n = +input[0]
let list = [];
for(let i=1; i<=n; i++) {
    list.push(input[i]);
}

function check(v) {
    return v == v.split("").reverse().join("")
}

list = list.map(v =>{
    if(check(v)) return 0;
    else {
        let result = 2;
        let n = v.length;
        for(let i=0; i<parseInt(n/2); i++) {
            if(v[i] != v[n - 1 - i]) {
                if(check(v.slice(0,i)+v.slice(i+1, n))) result = 1;
                if(check(v.slice(0,n - 1 - i)+v.slice(n - i,n))) result = 1;
                break;
            }
        }
        return result;
    }
}).join("\n")

console.log(list)