require("./extensions/number.js")

class CaptureTurn {

  constructor(options){
    this.player = options.player;
    this.approach = options.approach;
    this.capture = options.capture;

    this.finished = false;
  }

  approachChicken(){
    return approach.step();
  }

  attemptCapture(chicken){
    return capture.attempt();
  }

}

module.exports = CaptureTurn;