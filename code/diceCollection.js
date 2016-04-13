"use strict"

class DiceCollection {
  constructor(die, numberOfApproachDice) {
    this.die = die;
    if(!numberOfApproachDice) {
      this.approachDice = 2
    } else {
      this.approachDice = numberOfApproachDice
    }
    this.captureDice = 0
  }
}

module.exports = DiceCollection;