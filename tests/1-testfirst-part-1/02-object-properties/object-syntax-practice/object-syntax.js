/* eslint-disable no-unused-vars */
let name = "Cody";
let loud = "loud";
let bark = "ruff ruff!";

let dog = {
  bark() {
    return bark;
  },
  name,
  [loud + "Bark"]() {
    return "RUFF RUFF!";
  },
};
