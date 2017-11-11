// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, M, X, Y) {
    // write your code in JavaScript (Node.js 6.4.0)
    // Number of Peoples
    const nop = A.length;
    let numberOfStops = 0;
    let weightInLift = 0;
    let peoplesInLift = 0;
    let destinations = [];
    console.log('Number of Peoples: ', nop);
    console.log('Lifts capacity ' + X + ' Peoples');
    console.log('Lifts weight capacity ' + Y);
    let i = 0;
    while(weightInLift <= Y && peoplesInLift <= X && i < nop) {
      if (A[i] <= Y || (weightInLift + A[i] <= Y)) {
        weightInLift = weightInLift + A[i];
        peoplesInLift++;
        destinations.push(B[i]);
        i++;
      } else {
        // lift moves - count numberOfStops
        const uniqueDestinations = destinations.unique();
        numberOfStops = numberOfStops + uniqueDestinations.length + 1;
        // rset lift items
        weightInLift = 0;
        destinations = [];
        peoplesInLift = 0;
      }
    }
    console.log('No of total Stops: ', numberOfStops);
    return numberOfStops;
}

Array.prototype.contains = function(v) {
    for(let i = 0; i < this.length; i++) {
        if(this[i] === v) return true;
    }
    return false;
};

Array.prototype.unique = function() {
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        if(!arr.contains(this[i])) {
            // donot add ground floor to destinations
            if(this[i] !== 0) {
              arr.push(this[i]);
            }            
        }
    }
    return arr; 
}