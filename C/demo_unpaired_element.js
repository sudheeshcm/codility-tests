A = [1, 4, 5, 1, 7, 1, 5, 1, 4]

function solution(A) {
  console.log('A: ', A);
  
  const objMap = {}
  const len = A.length
  for (let i = 0; i < len; i++) {
    if (objMap[A[i]]) {
      objMap[A[i]]++
    } else {
      objMap[A[i]] = 1
    }
  }
  for (let key in objMap) {
    if (objMap[key] % 2 !== 0) {
      console.log('Answer: ', key)
      return key
    }
  }
}

solution(A)