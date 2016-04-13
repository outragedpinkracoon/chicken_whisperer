require("./extensions/number.js")
var Dice = require("./die.js")

class Turn {

  constructor(player, chickenPen, diceCollection){
    if (player === undefined) throw new Error("Turn must have player");
    if (chickenPen === undefined) throw new Error("Turn must have chicken pen");
    
    this.player = player;
    this.chickenPen = chickenPen;
    this.finished = false;
    this.diceCollection = diceCollection;
  }

  approachChicken(){
    var result = this.approachRoll();
    
    if(result.isEven()){
      this.diceCollection.addCaptureDie();
      return;
    }
    //scare chickens
  }

  approachRoll(){
    var result = 0;
    var limit = this.diceCollection.approachDice;

    for(var i = 0; i < limit; i++) {
      result += this.diceCollection.die.roll();
    }

    return result;
  }

}

module.exports = Turn;