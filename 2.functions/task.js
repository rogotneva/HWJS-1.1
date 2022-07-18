// Задание 1
function getArrayParams(arr) {
  let min = max = arr[0];
  let sum = count = 0;
  let avg;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    else if (arr[i] > max) max = arr[i];
    sum += arr[i];
    count += 1;
  }
  
  avg = Number((sum / count).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  let arrSum;
  for (let i = 0; i < arrOfArr.length; i++) {
    arrSum = func(arrOfArr[i]);
    if (arrSum > max) max = arrSum;
  }

  return max;
} 

// Задание 3
function worker2(arr) {
  let max = arr[0];
  let min = arr[0];
  let diff;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    else if (arr[i] > max) max = arr[i];
  }
  diff = Math.abs(max - min);
  
  return diff;
}
