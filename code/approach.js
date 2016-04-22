var DiceCollection = require('./diceCollection.js');
var Die = require('./die.js');

class Approach {
  
  constructor(options){
    this.chickenPen = options.chickenPen;
    this.captureDice = 0;
    this.strategies = options.strategies;
    this.strategy = this.strategies["basic"];
  }

  step(player){
    var result = this.strategy.approach(this.approachDice, player);

    if(result == true){
      this.captureDice++;
    }
    this.chickenPen.scareChickens();
  }

  setStrategy(key){
    this.strategy = this.strategies[key];
  }

  reset(){
    this.captureDice = 0;
  }
} 

module.exports = Approach;