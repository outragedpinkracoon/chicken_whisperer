require("./extensions/number.js")

class CaptureTurn {

  constructor(player, approach, capture){
    this.player = player;
    this.approach = approach;
    this.finished = false;
    this.capture = capture;
  }

  approachChicken(){
    approach.step();
  }

  // attemptCapture(chicken){
  //   var captureDice = this.approach.diceCollection.captureDice;
  //   if (this.capture.tryToCatch(chicken, captureDice)){
  //     // yay you caught a chicken
  //   }
  //   else {
  //     // oh no your turn is ended
  //   }

  // }

}

module.exports = CaptureTurn;