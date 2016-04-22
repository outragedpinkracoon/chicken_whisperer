class DefaultApproachStrategy {
  constructor(die){
    this.approachDice = 2;
    this.die = die;
  }
  approach(approachDice){
    var result = this.approachRoll();
    return result.isEven();
  }

  approachRoll(){
    return this.die.rollAndReduce(this.approachDice);
  }
}

module.exports = DefaultApproachStrategy;