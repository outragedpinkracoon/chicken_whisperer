"use strict"
var Dice = require("./die.js")
require("./extensions/number.js")

class Turn {
  constructor(player, chickenPen, die){
    if (!player) throw new Error("Turn must have player");
    if (!chickenPen) throw new Error("Turn must have chicken pen");
    
    this.player = player;
    this.chickenPen = chickenPen;
    this.finished = false;
    this.die = die;
    this.captureDice = 0;
    this.approachDice = 2;
  }

  approachChicken(){
    var result = this.approachRoll();
    if(result.isEven()){
      this.captureDice++;
    }
    else{
      //scare chickens
    }
  }

  approachRoll(){
    var result = 0;

    for(var i = 0; i < this.approachDice; i++)
    {
      result += this.die.roll();
    }
  
    return result;
  }

}

module.exports = Turn;