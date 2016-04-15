require("./extensions/number.js")
var Dice = require("./die.js")

class CaptureTurn {

  constructor(player, chickenPen, approach){
    this.player = player;
    this.chickenPen = chickenPen;
    this.finished = false;
    this.approach = approach;
  }

  approachChicken(){
    approach.step();
  }

}

module.exports = CaptureTurn;