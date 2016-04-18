class Capture{

  constructor(die) {
    this.die = die;
  }

  attempt(player, chicken, captureDice){
    var result = captureRoll(captureDice);
  }

  captureRoll(captureDice) {
    var result = 0;
    for(var i = 0; i < captureDice; i++)
    {
      result += this.die.roll();
    }
    return result;
  }
}

module.exports = Capture;