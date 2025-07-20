/* eslint-disable no-unused-vars */
function reject(arr, func) {
  let listOfWord = [];

  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      listOfWord.push(arr[i]);
    }
  }
  return listOfWord;
}

function testWord(word) {
  return word.length <= 3;
}

function isNegNum(num) {
  return num < 0;
}
reject(arr, testWord);
reject(arr, isNegNum);
