// algorithm: dfs

function isCycle(x, prev) {
    visited[x] = true;
    for(let y of graph[x]) {
        if(!visited[y]) {
            if(isCycle(y, x)) return true;
        } else if (y != prev) return true;
    }
    return false;
}

let fs = require('fs');
let input = fs.readFileSync(process.platform == 'linux' ? '/dev/stdin' : './input.txt').toString().split('\n');

let line = 0;
let tcs = 1;

while(true) {
    let [n, m] = input[line].split(" ").map(Number);
    if(n == 0 && m == 0) break;
    graph = [];
    for(let i=0; i<=n; i++) graph[i]=[];
    for(let i=1; i<=m; i++) {
        let [x, y] = input[line+i].split(" ").map(Number);
        graph[x].push(y);
        graph[y].push(x);
    }
    visited = new Array(n+1).fill(false);
    let cnt = 0;
    for(let i=1; i<=n; i++) {
        if(!visited[i]) {
            if(!isCycle(i, 0)) cnt += 1;
        }
    }
    if(cnt == 0) console.log(`Case ${tcs}: No trees.`);
    else if(cnt == 1) console.log(`Case ${tcs}: There is one tree.`);
    else console.log(`Case ${tcs}: A forest of ${cnt} trees.`)
    line += m+1;
    tcs++;
}