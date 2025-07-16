/* eslint-disable no-unused-vars */
function forEach(arr, callback) {
  for (i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
function callback(value) {
  console.log(value);
}
function map(arr, callback) {
  let arrFinal = [];
  for (i = 0; i < arr.length; i++) {
    arrFinal.push(callback(arr[i]));
  }
  return arrFinal;
}
function doubler(val) {
  return val * 2;
}

function filter(arr, callback) {
  let finalResult = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      finalResult.push(arr[i]);
    }
  }
  return finalResult;
}
const evenFilter = (element) => element % 2 === 0;
const oddFilter = (element) => !evenFilter(element);
// const oddFilter = (element) => element % 2 === 1

function includes(collection, checkingValue) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (collection[i] === checkingValue) {
        return true;
      }
    }
  } else if (typeof collection === "object" && collection !== null) {
    for (let key in collection) {
      if (collection[key] === checkingValue) {
        return true;
      }
    }
  }
  return false;
}
function reduce(arr, start, combiner) {
  let result = start;
  for (i = 0; i < arr.length; i++) {
    result = combiner(result, arr[i]);
  }
  return result;
}
function countWords(total, sentence) {
  const wordCount = sentence.split(" ").filter((word) => word !== "").length;
  return total + wordCount;
}
function sum(arr) {
  return reduce(arr, 0, (a, b) => a + b);
}
function every(arr, callback) {
  for (i = 0; i < arr.length; i++) {
    if (!callback(arr[i])) {
      return false;
    }
  }
  return true;
}
function some(array, test) {
  if (typeof test !== "function") return false;

  for (let i = 0; i < array.length; i++) {
    if (test(array[i])) {
      return true;
    }
  }
  return false;
}
