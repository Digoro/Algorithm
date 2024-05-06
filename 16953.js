// algorithm: greedy
// site: https://www.acmicpc.net/problem/16953

let n = [100, 40021];
let first = +n[0];
let last = +n[1];
let cnt = 0;
let flag = false;

while(first <= last){
  if(first == last) {
    flag = true;
    break;
  }
  if(last%2 == 0) {
    last = parseInt(last / 2);
    cnt += 1;
  } else if(last % 10 == 1) {
    last = parseInt((last-1)/10);
    cnt += 1;
  } else {
    break;
  }
}

if(!flag) {
  console.log(-1)
} else {
  console.log(cnt + 1);
}