"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  
  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
    arr.push();
    return arr;
  } else if (d === 0) {
    let root = -b / (2 * a);
    arr.push(root);
    return arr;
  } else {
    let root1 = (-b + Math.sqrt(d)) / (2 * a);
    let root2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(root1, root2);
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12;
  let S = amount - contribution;
  let n = countMonths;

  let monthlyPayment = S * (P + (P / (((1 + P) ** n) - 1)));
  let totalPayment = monthlyPayment * n;

  totalPayment = Number(totalPayment.toFixed(2));

  return totalPayment;
}