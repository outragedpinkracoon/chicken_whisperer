class Capture{

  constructor(die) {
    this.die = die;
  }

  attempt(player, chicken, captureDice){
    var result = captureRoll(captureDice);
  }

  captureRoll(captureDice) {
    var times = captureDice;
    return this.die.rollMultiple(times);
  }
}

module.exports = Capture;