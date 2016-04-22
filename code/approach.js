var DiceCollection = require('./diceCollection.js');
var Die = require('./die.js');

class Approach {
  
  constructor(options){
    this.chickenPen = options.chickenPen;
    this.captureDice = 0;
    this.die = options.die;
    this.strategy = options.strategy;
    this.approachDice = 2;
  }

  step(){
    var result = this.approachRoll();
    
    if(result.isEven()){
      this.captureDice++;
      return true;
    }
    this.chickenPen.scareChickens();
    return false;
    // var result = approachStrategy.run(this.diceCollection.approachDice);
    // if(result == true){
    //   this.diceCollection.addCaptureDie();
    //       return true;
    // }
    // this.chickenPen.scareChickens();
    // return false;
  }

  approachRoll(){
    return this.die.rollAndReduce(this.approachDice);
  }

  reset(){
    this.captureDice = 0;
  }
} 

module.exports = Approach;