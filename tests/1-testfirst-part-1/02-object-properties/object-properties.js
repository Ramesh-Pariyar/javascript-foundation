/* eslint-disable no-unused-vars */
function setPropsOnObj(obj) {
  obj.x = 7;
  obj["y"] = 8;
  obj.onePlus = function (num) {
    return num + 1;
  };
}

function setPropsOnArr(Arr) {
  Arr.hello = function () {
    return "Hello!";
  };
  Arr["full"] = "stack";
  Arr[0] = 5;
  Arr.twoTimes = function (number) {
    return 2 * number;
  };
}

function setPropsOnFunc(func) {
  func.year = "20??";
  func.divideByTwo = function (number) {
    return number / 2;
  };
}

function shallowCopy(obj1, obj2) {
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    return [...obj1, ...obj2];
  }
  return { ...obj1, ...obj2 };
}
