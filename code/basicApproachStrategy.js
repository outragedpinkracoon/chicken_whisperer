class BasicApproachStrategy {
  constructor(options){
    this.approachDice = 2;
    this.die = options.die;
    this.whispererChecker = options.whispererChecker;
  }
  approach(approachDice, player){
    var results = this.approachRoll();
    this.whispererChecker.update(results, player);

    var reduced = results.reduce((prev,curr) => prev +curr);
    return reduced.isEven();
  }

  approachRoll(){
    return this.die.rollMultiple(this.approachDice);
  }
}

module.exports = BasicApproachStrategy;