/* eslint-disable no-unused-vars */

function createCalculator() {
  return {
    total: 0,
    add(num) {
      this.total += num;
    },
    subtract(num) {
      this.total -= num;
    },
    clear() {
      this.total = 0;
    },
    value() {
      return this.total;
    },
  };
}

function addSquareMethod(arrayOfCalculatorInstances) {
  for (let i = 0; i < arrayOfCalculatorInstances.length; i++) {
    let calculatorInstance = arrayOfCalculatorInstances[i];
    calculatorInstance.square = function () {
      return this.total * this.total;
    };
  }

  return arrayOfCalculatorInstances;
}

function createHumanCalculator() {
  let humanCalculator = Object.create(createCalculator());
  humanCalculator.__proto__.total = -10;
  humanCalculator.__proto__.clear = function () {
    this.total = -10;
  };
  return humanCalculator;
}
