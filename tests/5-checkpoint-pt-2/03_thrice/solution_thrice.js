/* eslint-disable no-unused-vars */
function thrice(func) {
  let count = 0;
  return function () {
    if (count < 3) {
      count++;
      return func();
    }
  };
}
