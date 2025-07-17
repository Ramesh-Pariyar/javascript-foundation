/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
// What is ASCIIART? Check the README.md or Workshop to see why ASCIIART is defined in your file.
const ASCIIART = [
  `

  O   
 /|\\\  
 / \\\  

=========`,
  `

  O      
 /|\\\   
 /       


=========`,
  `

  O      
 /|\\\   


=========`,
  `

  O      
 /|      


=========`,
  `

  O      
  |      


=========`,
  `

  O      



=========`,
  `





=========`,
];

class VanishingMan {
  constructor(word) {
    this.secretWord = word.toLowerCase().split("");
    this.remainingGuesses = 6;
    this.lettersGuessed = [];
    this.gameState = "playing";
  }

  submitGuess(char) {
    // console.log("submitting guess:", char);
    if (this.gameState !== "playing") return;
    const guess = char.toLowerCase();

    if (this.lettersGuessed.includes(guess)) return;

    this.lettersGuessed.push(guess);

    if (!this.secretWord.includes(guess)) {
      this.remainingGuesses--;
    }
  }

  computeGameState() {
    if (this.remainingGuesses === 0) {
      this.gameState = "lost";
      return;
    }

    const allLettersGuessed = this.secretWord.every(
      (char) => char === " " || this.lettersGuessed.includes(char)
    );

    if (allLettersGuessed) {
      this.gameState = "won";
    }
  }

  getSecretWordPuzzle() {
    return this.secretWord
      .map((char) =>
        char === " " ? " " : this.lettersGuessed.includes(char) ? char : "#"
      )
      .join("");
  }

  getGameStateMessage() {
    if (this.gameState === "won") {
      return "Winner Winner Chicken Dinner, you won!";
    }

    if (this.gameState === "lost") {
      return `Game Over, the word was "${this.secretWord.join("")}":\n${
        ASCIIART[0]
      }`;
    }

    return `There is a total of ${this.remainingGuesses} guesses remaining:\n${
      ASCIIART[this.remainingGuesses]
    }`;
  }
}

function simulateVanishingMan(word) {
  const game = new VanishingMan(word);
  const allLetters = "abcdefghijklmnopqrstuvwxyz".split("");

  while (game.gameState === "playing") {
    const randomIndex = Math.floor(Math.random() * 26);
    const guess = allLetters[randomIndex];

    game.submitGuess(guess);
    game.computeGameState();
  }

  return game.getGameStateMessage();
}

// console.log(simulateVanishingMan("a"));
