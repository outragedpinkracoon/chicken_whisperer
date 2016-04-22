var ApproachStrategy = require('./approachStrategy');

class WhispererApproachStrategy extends ApproachStrategy {

  approach(player){
    var results = this.approachRoll();
    this.whispererChecker.update(results, player);
    var index = results.indexOf(1);
    return index == -1;
  }

}

module.exports = WhispererApproachStrategy;