// Demo js test - circles
const A = [11, -2, 3, 1, -1];

function solution(A) {
  // const sortedA = A.sort()
  // const len = sortedA.length
  len = A.length
  let res = 1
  let found = false
  while(!found) {
    if (sortedA[len-1] < 1) {
      return 1
    }
    for (let i = 0; i < len; i++) {

      if (res === sortedA[i]) {
        i = -1
        res++
      }
    }
    return res
  }
}

solution(A);
