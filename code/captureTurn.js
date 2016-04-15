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

}

module.exports = CaptureTurn;