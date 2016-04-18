require("./extensions/number.js")
var Approach = require('./approach.js');
var Capture = require('./capture.js');

class CaptureTurn {

  constructor(options){
    this.player = options.player;
    this.approach = new Approach( {chickenPen: this.chickenPen} );
    this.capture = new Capture();

    this.finished = false;
  }

  approachChicken(){
    return this.approach.step();
  }

  attemptCapture(chicken){
    return this.capture.attempt();
  }

}

module.exports = CaptureTurn;