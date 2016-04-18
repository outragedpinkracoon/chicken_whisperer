var DiceCollection = require('./diceCollection.js');
var Die = require('./die.js');

class Approach {
  
  constructor(options){
    this.chickenPen = options.chickenPen;
    this.diceCollection = new DiceCollection();
    this.die = new Die();
  }

  step(){
    var result = this.approachRoll();
    
    if(result.isEven()){
      this.diceCollection.addCaptureDie();
      return true;
    }
    this.chickenPen.scareChickens();
    return false;
  }

  approachRoll(){
    var times = this.diceCollection.approachDice;
    return this.die.rollMultiple(times);
  }
} 

module.exports = Approach;