require("./extensions/number.js")

var Approach = require('./approach.js');
var Capture = require('./capture.js');

class CaptureTurn {

  constructor(options){

    this.player = options.player;
    this.chickenPen = options.chickenPen;

    this.approach = new Approach( {chickenPen: this.chickenPen} );
    this.capture = new Capture();

    this.finished = false;
  }

  approachChicken(){
    if(this.valid())
    {
      this.approach.step();
    }
  }

  valid(){
    return this.chickenPen.hasChickens() && !this.finished
  }

  attemptCapture(chicken){
    if(!this.valid()) return false;
    return this.capture.attempt(this.player, 
                                chicken, 
                                this.chickenPen, 
                                this.approach.diceCollection.captureDice);
  }

}

module.exports = CaptureTurn;