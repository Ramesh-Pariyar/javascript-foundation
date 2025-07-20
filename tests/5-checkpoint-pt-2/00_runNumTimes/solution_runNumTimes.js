/* eslint-disable no-unused-vars */
function runNumTimes(func, num) {
  let myString = "";
  let myArray = [];
  let count = 1;

  for (let i = 1; i <= num; i++) {
    myString += func();
    myArray.push(i);
    count++;
  }
}
function func() {
  return "hello";
}
