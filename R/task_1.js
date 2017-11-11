// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let isNegative = true;
    let previousSum = 0;
    let currentSum = 0;

    const arrayLength = A.length;
    for (let i = 0; i < arrayLength; i++) {
        if(A[i] > 0) {
            isNegative = false;
            currentSum = A[i];
            previousSum = whoIsGreater(currentSum, previousSum);
            currentSum = getNextTotalSum(A, i);
            previousSum = whoIsGreater(currentSum, previousSum);
        }
    }
    if (isNegative) {
        return -1;
    } else {
        return previousSum;
    }
}

function whoIsGreater (currentSum, previousSum) {
    return currentSum > previousSum ? currentSum : previousSum;
}

function getNextTotalSum(A, index) {
    let sum = 0;
    while (A[index] >= 0) {
        sum = sum + A[index];
        index++;
    }
    return sum;
}
