var DiceCollection = require('./diceCollection.js');
var Die = require('./die.js');

class Approach {
  
  constructor(options){
    this.chickenPen = options.chickenPen;
    this.diceCollection = options.diceCollection;
    this.die = options.die;
  }

  step(){
    var result = this.approachRoll();
    
    if(result.isEven()){
      this.diceCollection.addCaptureDie();
      return true;
    }
    this.chickenPen.scareChickens();
    return false;
    // var result = approachStrategy.
  }

  approachRoll(){
    var times = this.diceCollection.approachDice;
    return this.die.rollAndReduce(times);
  }

  reset(){
    this.diceCollection.captureDice = 0;
  }
} 

module.exports = Approach;