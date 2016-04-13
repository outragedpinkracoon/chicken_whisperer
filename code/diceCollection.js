class DiceCollection {

  constructor(die, numberOfApproachDice = 2) {
    this.die = die;
    this.approachDice = numberOfApproachDice
    this.captureDice = 0
  }

  addCaptureDie(){
    this.captureDice++;
  }
  
}

module.exports = DiceCollection;