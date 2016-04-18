class Capture{

  constructor(die) {
    this.die = die;
  }

  attempt(player, chicken, captureDice){
    var result = this.captureRoll(captureDice);
    if(result < chicken.speed)
      chicken.scare();
  }

  captureRoll(captureDice) {
    var times = captureDice;
    return this.die.rollMultiple(times);
  }
}

module.exports = Capture;