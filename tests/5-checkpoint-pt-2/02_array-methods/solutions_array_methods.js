const { use } = require("react");

/* eslint-disable no-unused-vars */

function useMapToUpperCase(str) {
  let arr = str.split(" ");
  return arr.map((element) => element.toUpperCase());
}

function useFilter(arr) {
  return arr.filter((element) => element.includes("@"));
}

function sumWithReduce(arr, startingValue = 0) {
  return arr.reduce((accumulator, ele) => {
    return (accumulator += ele);
  }, startingValue);
}

function filterEvensDoubleAndSum(arr) {
  let filteredArr = arr.filter((ele) => ele % 2 === 0);
  return filteredArr.map((ele) => 2 * ele).reduce((sum, ele) => sum + ele);
}
