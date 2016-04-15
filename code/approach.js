class Approach {
  constructor(diceCollection,chickenPen){
    this.chickenPen = chickenPen;
    this.diceCollection = diceCollection;
  }

  step(){
    var result = this.approachRoll();
    
    if(result.isEven()){
      this.diceCollection.addCaptureDie();
      return;
    }
    this.chickenPen.scareChickens();
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

module.exports = Approach;