class Capture{

  constructor(die) {
    this.die = die;
  }

  attempt(player, chicken, chickenPen, captureDice){
    var result = this.captureRoll(captureDice);
    
    if(result < chicken.speed) {
      chicken.scare();
      return false;
    }

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