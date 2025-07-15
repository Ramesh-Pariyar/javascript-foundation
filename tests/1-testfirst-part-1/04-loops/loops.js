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
function gridGenerator(number) {
  let grid = "";
  for (let i = 0; i < number; i++) {
    let line = "";
    for (let j = 0; j < number; j++) {
      if ((i + j) % 2 === 0) {
        line += "#";
      } else {
        line += " ";
      }
    }
    grid += line + "\n";
  }
  return grid;
}

function paramify(obj) {
  let Arr = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      Arr.push(`${key}=${obj[key]}`);
    }
  }
  return Arr.join("&");
}

function paramifyObjectKeys(obj) {
  let pairs = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      pairs.push(`${key}=${obj[key]}`);
    }
  }
  pairs.sort();

  return pairs.join("&");
}

function sort(array) {
  let arr = array.splice();

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]; // swapping the value
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
