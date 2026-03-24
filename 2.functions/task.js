function getArrayParams(...arr) {

  if (arr.length === 0) {
        return 0;
    }

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }

  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

  if (arr.length === 0) {
        return 0;
    }

  let sum = 0;
  for (let i = 0; i < arr.length; i ++) {
    sum += arr[i];
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {

  if (arr.length === 0) {
        return 0;
    }

  let min = Infinity;
  let max = -Infinity;
  let difference;

  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  difference = max - min;

  return difference;
}

function differenceEvenOddWorker(...arr) {

  if (arr.length === 0) {
        return 0;
    }

  let sumEvenElement = 0;
  let sumOddElement = 0;
  let difference;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
    difference = sumEvenElement - sumOddElement;

    return difference;
}

function averageEvenElementsWorker(...arr) {

  if (arr.length === 0) {
        return 0;
    }

  let sumEvenElement = 0;
  let countEvenElement = 0;
  let averageEvenElements;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  averageEvenElements = Number((sumEvenElement / countEvenElement).toFixed(2));

  return averageEvenElements;
}

function makeWork (arrOfArr, func) {

  if (arrOfArr.length === 0) {
        return 0;
    }

  let maxWorkerResult = -Infinity;
  let workerResult;

  for (let i = 0; i < arrOfArr.length; i++) {
    workerResult = func(...arrOfArr[i]);
    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }

  return maxWorkerResult;
}
