/* eslint-disable no-unused-vars, no-prototype-builtins */
function findObjPropsHasOwn(obj) {
  let result = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(key);
    }
  }

  return result.join(", ");
}
function findObjKeys(obj) {
  return Object.keys(obj).join(", ");
}
