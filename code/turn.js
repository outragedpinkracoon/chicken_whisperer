"use strict"
var Dice = require("./die.js")
require("./extensions/number.js")

class Turn {

  constructor(player, chickenPen, diceCollection){
    if (!player) throw new Error("Turn must have player");
    if (!chickenPen) throw new Error("Turn must have chicken pen");
    
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
    
  }

  approachRoll(){
    var result = 0;

    for(var i = 0; i < this.diceCollection.approachDice; i++) {
      result += this.diceCollection.die.roll();
    }
    return result;
  }

}

module.exports = Turn;