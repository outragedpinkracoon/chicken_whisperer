var Die = require('./die.js')
var WhispererChecker = require('./whispererChecker');
class Capture{

  constructor(options) {
    this.chickenPen = options.chickenPen;
    this.die = options.die;
    this.whispererChecker = options.whispererChecker;
  }

  attempt(player, chicken, chickenPen, captureDice){
    var roll = this.captureRoll(captureDice);
    var result;
    if(this.successfulRoll(roll, chicken)) {
      result = this.success(chickenPen, player, chicken);
    } else {
      result =  this.failure(chicken)
    }
    return result;
  }

  successfulRoll(result, chicken){
    return result >= chicken.speed
  }

  failure(chicken){
    chicken.reduceSpeed();
    return false;
  }

  success(chickenPen, player, chicken){
    chickenPen.remove(chicken);
    player.addChicken(chicken);
    return true;
  }

  captureRoll(captureDice) {
    var times = captureDice;
    return this.die.rollMultiple(times);
  }
}

module.exports = Capture;