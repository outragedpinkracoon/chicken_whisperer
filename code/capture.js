var Die = require('./die.js')
var WhispererChecker = require('./whispererChecker');
class Capture {

  constructor(options) {
    this.chickenPen = options.chickenPen;
    this.die = options.die;
    this.whispererChecker = options.whispererChecker;
  }

  attempt(player, chicken, chickenPen, captureDice){

    var rolls = this.die.rollMultiple(captureDice);
    var result;
    
    if(this.successfulRoll(rolls, chicken)) {
      result = this.success(chickenPen, player, chicken);
      //this.whispererChecker.update(player, rolls);
    } else {
      result =  this.failure(chicken)
    }

    return result;

  }

  successfulRoll(result, chicken){
    var sum = result.reduce((prev,curr) => prev + curr);
    return sum >= chicken.speed
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

}

module.exports = Capture;