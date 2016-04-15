require("./extensions/number.js")
var Dice = require("./die.js")

class CaptureTurn {

  constructor(player, approach){
    this.player = player;
    this.approach = approach;
    this.finished = false;
  }

  approachChicken(){
    approach.step();
  }

  attemptCapture(){
    capture.attempt(approach.die,diceCollection.captureDice)
  }

}

module.exports = CaptureTurn;