/* eslint-disable no-unused-vars */
class Mammal {
  constructor(name) {
    this.name = name;
    this.offspring = [];
  }

  sayHello() {
    return `My name is ${this.name}, I'm a ${this.constructor.name}`;
  }

  haveBaby() {
    const baby = new this.constructor(`Baby ${this.name}`);
    this.offspring.push(baby);
    return baby;
  }
}

class Dog extends Mammal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    return "RUFF RUFF";
  }

  haveBaby(breed) {
    const baby = new Dog(`Baby ${this.name}`, breed);
    this.offspring.push(baby);
    return baby;
  }
}
class Cat extends Mammal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  meow() {
    return "meow";
  }
}
