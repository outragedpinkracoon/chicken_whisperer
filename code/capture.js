var Die = require('./die.js')
class Capture{

  constructor(chickenPen) {
    this.chickenPen = chickenPen;
    this.die = new Die();
  }

  attempt(player, chicken, chickenPen, captureDice){
    var roll = this.captureRoll(captureDice);
 
    if(this.successfulRoll(roll, chicken)) {
      return this.success(chickenPen, player, chicken);
    } else {
      return this.failure(chicken)
    }
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