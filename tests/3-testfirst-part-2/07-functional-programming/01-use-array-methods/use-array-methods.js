/* eslint-disable no-unused-vars */
function indexAndValue(arr) {
  return arr.map((value, index) => {
    return { index, value };
  });
}
function capitalize(str) {
  return str.toUpperCase();
}

function swapCase(sentence) {
  return sentence
    .split(" ")
    .map((word, index) => {
      return index % 2 === 0 ? capitalize(word) : word;
    })
    .join(" ");
}
function extensionSearch(ext, files) {
  return files.filter((filename) => filename.endsWith(`.${ext}`));
}
function getPopulation(countries, selectedCountries) {
  return countries.reduce((total, country) => {
    if (
      selectedCountries.length === 0 ||
      selectedCountries.includes(country.name)
    ) {
      return total + country.population;
    }
    return total;
  }, 0);
}
function keyifyArrayOfObjects(key, array) {
  return array.reduce((acc, obj) => {
    acc[obj[key]] = obj;
    return acc;
  }, {});
}
function powerLevelAverage(superheroes) {
  const totalPower = superheroes.reduce(
    (sum, hero) => sum + hero.powerLevel,
    0
  );
  return Math.round(totalPower / superheroes.length);
}
function mapReduce(array, callback) {
  return array.reduce((accumulator, currentValue, index, originalArray) => {
    accumulator.push(callback(currentValue, index, originalArray));
    return accumulator;
  }, []);
}
function filterReduce(array, callback) {
  return array.reduce((accumulator, currentValue, index, originalArray) => {
    if (callback(currentValue, index, originalArray)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
}
function inYourBudget(maxPrice, items) {
  return items
    .filter((item) => item.price <= maxPrice)
    .map((item) => item.item);
}
function separateAndReturnNames(superheroes, key, maxLength) {
  superheroes.map((hero) => {
    const [firstName, lastName] = hero.name.split(" ");
    hero.firstName = firstName;
    hero.lastName = lastName;
  });

  return superheroes
    .map((hero) => hero[key])
    .filter((name) => name.length <= maxLength);
}
function priorityTodoDuration(todoList) {
  return todoList
    .filter((task) => task.priority === "high")
    .reduce((sum, task) => sum + task.duration, 0);
}
