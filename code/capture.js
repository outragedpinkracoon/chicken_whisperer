class Capture{

  constructor(die) {
    this.die = die;
  }

  attempt(player, chicken, chickenPen, captureDice){
    var result = this.captureRoll(captureDice);

    if(this.successfulRoll(result, chicken)) {
      return this.success(chickenPen, player, chicken);
    } else {
      return this.failure(chicken)
    }
  }

  successfulRoll(result, chicken){
    return result >= chicken.speed
  }

  failure(chicken){
    chicken.scare();
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