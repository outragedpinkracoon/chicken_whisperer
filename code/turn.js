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
    this.dice = {
      capture: [],
      approach: [die, die]
    }
  }

  approachChicken(){
    var result = rollDice();
    // if(result.isEven()){
    //   this.captureDice.push(dice);
    // }
    // else{
      //scare chickens
    // }
  }

  rollDice(){
    var result;
    dice.forEach(function(){
      result += dice.roll();
    })
    return result;
  }

}

module.exports = Turn;