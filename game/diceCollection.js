class DiceCollection {

  constructor(numberOfApproachDice = 2) {
    this.approachDice = numberOfApproachDice
    this.captureDice = 0
  }

  addCaptureDie(){
    this.captureDice++;
  }
  
}

module.exports = DiceCollection;