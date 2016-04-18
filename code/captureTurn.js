require("./extensions/number.js")

class CaptureTurn {

  constructor(player, approach, capture){
    this.player = player;
    this.approach = approach;
    this.finished = false;
    this.capture = capture;
  }

  approachChicken(){
    return approach.step();
  }

  attemptCapture(chicken){
    return capture.attempt();
  }

}

module.exports = CaptureTurn;