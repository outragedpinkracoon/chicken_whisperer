var ApproachStrategy = require('./approachStrategy');

class BasicApproachStrategy extends ApproachStrategy {
  approach(approachDice, player){
    var results = this.approachRoll();
    this.whispererChecker.update(results, player);

    var reduced = results.reduce((prev,curr) => prev +curr);
    return reduced.isEven();
  }
}

module.exports = BasicApproachStrategy;