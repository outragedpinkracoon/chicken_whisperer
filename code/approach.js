var DiceCollection = require('./diceCollection.js');
var Die = require('./die.js');

class Approach {
  
  constructor(options){
    this.chickenPen = options.chickenPen;
    this.captureDice = 0;
    this.strategy = options.strategy;
  }

  step(player){
    var result = this.strategy.approach(this.approachDice);
    
    if(result == true){
      this.captureDice++;
    }
    this.chickenPen.scareChickens();
  }

  reset(){
    this.captureDice = 0;
  }
} 

module.exports = Approach;