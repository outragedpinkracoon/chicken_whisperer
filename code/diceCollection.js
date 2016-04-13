"use strict"

class DiceCollection {
  constructor(die, numberOfApproachDice) {
    this.die = die;
    this.approachDice = numberOfApproachDice ? numberOfApproachDice : 2;
    this.captureDice = 0
  }

  addCaptureDie(){
    this.captureDice++;
  }
  
}

module.exports = DiceCollection;