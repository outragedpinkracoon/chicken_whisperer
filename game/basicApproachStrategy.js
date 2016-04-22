var ApproachStrategy = require('./approachStrategy');

class BasicApproachStrategy extends ApproachStrategy {

  name(){
    return "BasicApproachStrategy";
  }

  approach(player){
    var results = this.approachRoll();
    this.whispererChecker.update(results, player);

    var reduced = results.reduce((prev,curr) => prev +curr);
    return reduced.isEven();
  }
}

module.exports = BasicApproachStrategy;