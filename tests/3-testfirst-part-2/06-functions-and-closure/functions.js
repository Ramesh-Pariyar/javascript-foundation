/* eslint-disable no-unused-vars */
function concatString() {
  const result = Array.from(arguments);
  return result
    .filter((item) => {
      if (item !== " ") {
        return true;
      } else {
        return false;
      }
    })
    .join(" ");
}
function yourFunctionRunner() {
  let result = "";
  for (let i = 0; i < arguments.length; i++) {
    let currentFunction = arguments[i];
    result += currentFunction();
  }
  return result;
}
function makeAdder(num1) {
  return function (num2) {
    return num1 + num2;
  };
}

function once(fn) {
  let called = false;

  return function () {
    if (!called) {
      called = true;
      return fn();
    } else {
      return "the function has already been called...";
    }
  };
  // return function (...args) {
  //   if (!called) {
  //     result = fn.apply(this, args);
  //     called = true;
  //     return result;
  //   } else {
  //     // Match the spec that wants this exact string
  //     return "the function has already been called...";
  //   }
  // };
}
function createObjectWithClosures() {
  let value = 0;

  return {
    oneIncrementer: function () {
      value += 1;
    },
    tensIncrementer: function () {
      value += 10;
    },
    getValue: function () {
      return value;
    },
    setValue: function (newValue) {
      value = newValue;
    },
  };
}

function dontSpillTheBeans(secret) {
  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (newSecret) {
      secret = newSecret;
    },
  };
}
