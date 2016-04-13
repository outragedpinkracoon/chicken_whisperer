"use strict"

class DiceCollection {
  constructor(die, numberOfApproachDice) {
    this.die = die;
    if(numberOfApproachDice === undefined)
      this.approachDice = 2
    else
      this.approachDice = numberOfApproachDice
    this.captureDice = 0
  }

  addCaptureDie(){
    this.captureDice++;
  }
  
}

module.exports = DiceCollection;