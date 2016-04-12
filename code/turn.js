"use strict"
var Dice = require("./die.js")
require("./extensions/number.js")

class Turn {
  constructor(player, chickenPen, dice){
    if (!player) throw new Error("Turn must have player");
    if (!chickenPen) throw new Error("Turn must have chicken pen");
    
    this.player = player;
    this.chickenPen = chickenPen;
    this.finished = false;
    this.captureDice = [];
    this.dice = dice;
  }

  approachChicken(){
    result = dice.roll();
    if(result.isEven()){
      this.captureDice.push(dice);
    }
    else{
      //scare chickens
    }
  }

}

module.exports = Turn;