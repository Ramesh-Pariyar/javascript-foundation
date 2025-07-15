/* eslint-disable no-unused-vars */
function repeat(string, number) {
  let finalString = "";
  for (i = 0; i < number; i++) {
    finalString += string;
  }

  return finalString;
}

function sum(Arr) {
  let arraySum = 0;

  for (let i = 0; i < Arr.length; i++) {
    arraySum += Arr[i];
  }
  return arraySum;
}

function join(arr, delimiter = "") {
  let finalString = "";
  for (let i = 0; i < arr.length; i++) {
    finalString += arr[i];
    if (i < arr.length - 1) finalString += delimiter;
  }
  return finalString;
}
function gridGenetor(number) {
  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      c;
    }
  }
}
