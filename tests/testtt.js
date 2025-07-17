var canConstruct = function (ransomNote, magazine) {
  debugger;
  const hashmap = {};
  for (let i = 0; i < magazine.length; i++) {
    if (magazine[i] in hashmap) {
      hashmap[magazine[i]] += 1;
    } else hashmap[magazine[i]] = 1;
  }
  debugger;
  for (let char of ransomNote) {
    if (hashmap[char]) {
      hashmap[char]--;
    } else {
      return false;
    }
  }
  return true;
};
canConstruct("aa", "aab");
