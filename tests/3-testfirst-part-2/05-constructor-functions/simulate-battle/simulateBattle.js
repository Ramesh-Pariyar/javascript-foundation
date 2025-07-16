/* eslint-disable no-unused-vars, no-throw-literal*/
function Pokemon(name, health, attackBonus) {
  this.name = name;
  this.health = health;
  this.attackBonus = attackBonus;
}

Pokemon.prototype.biteAttack = function () {
  return this.attackBonus + 2;
};

Pokemon.prototype.isDefeated = function () {
  if (this.health > 0) {
    return false;
  } else {
    return true;
  }
};
function simulateBattle(Pokemon1, Pokemon2, pokemonName) {
  let attacker, defender;
  if (Pokemon1.name === pokemonName) {
    attacker = Pokemon1;
    defender = Pokemon2;
  } else {
    attacker = Pokemon2;
    defender = Pokemon1;
  }

  while (true) {
    defender.health -= attacker.biteAttack();

    if (defender.isDefeated()) {
      return `${attacker.name} Wins!`;
    }

    // Swap roles
    [attacker, defender] = [defender, attacker];
  }
}
