// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 6.4.0)
    let billMap = {};
    let i = 0;
    S.split('\n').map((info) => {
        let duration = getDuration(info.split(',')[0]);
        let mobileNumber = getPhoneNumber(info.split(',')[1]);
        if(!billMap[mobileNumber]) {
          billMap[mobileNumber] = {durations: [],promoApplied: false};
        }
        billMap[mobileNumber].durations.push(duration);
    })
    return applyPromoAndBill(billMap);
}

function getPhoneNumber(str) {
  let numbers = str.split('-');
  return numbers[0].concat(numbers[1], numbers[2]);
}

function getDuration(str) {
  let time = str.split(':');
  return parseInt(time[0]) * 3600 + parseInt(time[1]) * 60 + parseInt(time[2]);
}

function applyPromoAndBill(billMap) {
  let keyToApplyPromo = null;
  let finalBill = 0;
  for(const key in billMap) {
    billMap[key]['total'] = 0;
    billMap[key]['totalAmount'] = 0;
    billMap[key].durations.forEach((time) => {
      billMap[key].total = billMap[key].total + time;
      billMap[key].totalAmount = billMap[key].totalAmount + computeBill(time);
    });
    finalBill = finalBill + billMap[key].totalAmount;
    if(!keyToApplyPromo) {
      keyToApplyPromo = key;
    }
    if (billMap[key].total > billMap[keyToApplyPromo].total) {
      keyToApplyPromo = key;
    }
    else if (billMap[key].total === billMap[keyToApplyPromo].total) {
      keyToApplyPromo = key >= keyToApplyPromo ? keyToApplyPromo : key;
    }
  }
  billMap[keyToApplyPromo].promoApplied = true;
  console.log(billMap);
  finalBill = finalBill - billMap[keyToApplyPromo].totalAmount;
  console.log('Final Bill: ', finalBill);
  return finalBill;
}

function computeBill(time) {
  amount = 0;
  if (time < 300) {
    amount = 3 * time;
  } else if (time >= 300) {
    let mins = time / 60;
    if (time % 60 > 0) {
      mins = Math.floor(mins) + 1;
    }
    amount = 150 * mins;
  }
  return amount;
}

solution('00:01:07,400-234-090\n00:05:01,701-080-080\n00:05:00,400-234-090');