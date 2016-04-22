class DefaultApproachStrategy {
  constructor(die){
    this.approachDice = 2;
    this.die = die;
  }
  approach(approachDice){
    var results = this.approachRoll();
    var reduced = results.reduce((prev,curr) => prev +curr);
    return reduced.isEven();
  }

  approachRoll(){
    return this.die.rollMultiple(this.approachDice);
  }
}

module.exports = DefaultApproachStrategy;