class Approach {
  constructor(die,diceCollection,chickenPen){
    this.chickenPen = chickenPen;
    this.diceCollection = diceCollection;
    this.die = die;
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
    var times = this.diceCollection.approachDice;
    return this.die.rollMultiple(times);
  }
} 

module.exports = Approach;