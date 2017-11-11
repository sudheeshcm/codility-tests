const N = 1025

function solution(N) {
  console.log('N: ', N)
  if (N <= 4) {
    return 0
  }
  let bin
  if (N >= 0) {
    bin = N.toString(2)
  } else {
    return 0
  }
  bin = bin.toString()
  console.log('Binary: ', bin);
  
  sIndex = 0
  eIndex = 2
  max = 0
  count = 0
  while(eIndex <= bin.length) {
    if (bin[eIndex - 1] === '0') {
      count++
      eIndex++
    } else {
      if (max <= count) {
        max = count
      }
      count = 0
      sIndex = eIndex - 1
      eIndex++
    }
  }
  console.log('Answer: ', max)
  return max
}

solution(N);