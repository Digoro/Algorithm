// algorithm: dfs

let fs = require('fs');
let input = fs.readFileSync(process.platform == 'linux' ? '/dev/stdin' : './input.txt').toString().split('\n');

let n = +input[0];
let link = +input[1];
let graph = [[]];
for(let i=1; i<=n; i++) graph[i] = [];
for(let i=2; i<=link+1; i++) {
    let [x, y] = input[i].split(" ").map(Number);
    graph[x].push(y)
    graph[y].push(x)
}

let cnt = 0;
const visited = Array(n).fill(false)
function dfs(graph, v, visited) {
    visited[v] = true;
    cnt += 1;
    for(i of graph[v]) {
      if(!visited[i]) {
        dfs(graph, i, visited)
      }
    }
}
dfs(graph, 1, visited);
console.log(cnt - 1);