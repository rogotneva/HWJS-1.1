function compareArrays(arr1, arr2) {
  let result;
  result = (arr1.length === arr2.length && arr1.every((item, idx) => item === arr2[idx]));

  return result; // boolean
}


function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter((num) => num > 0).filter((num) => num % 3 === 0).map((num) => num * 10);

  return resultArr; // array
}
