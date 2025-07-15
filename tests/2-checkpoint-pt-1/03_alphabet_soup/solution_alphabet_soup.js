/* eslint-disable no-unused-vars, no-prototype-builtins */
function soup(phrase, characterBank) {
  const charCount = {};

  // Count characters in characterBank
  for (let char of characterBank) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Check if phrase can be built from characterBank
  for (let char of phrase) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}
