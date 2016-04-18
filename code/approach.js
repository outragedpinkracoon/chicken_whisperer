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