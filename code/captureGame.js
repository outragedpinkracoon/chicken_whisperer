require("./extensions/array.js")

var Die = require("./die.js")
var DiceCollection = require("./diceCollection.js")
var Approach = require("./approach.js")
var Capture = require("./capture.js")

class CaptureGame {

  constructor(options) {
    this.players = options.players;
    this.chickenPen = options.chickenPen;
    this.capture = options.capture;
    this.approach = options.approach;
    this.finished = false;
  }

  reset(){
    this.chickenPen.refresh();
    this.approach.reset();
  }

  updateCurrentPlayer() {
    if(this.currentPlayer === undefined) {
      this.currentPlayer = this.players[0];
      return;
    }
    this.currentPlayer = this.players.rotate().first();
  }

  playerCount() {
    return this.players.length;
  }

  nextTurn(){
    this.updateCurrentPlayer();
    this.reset();
  }

  approachChicken(){
    if(this.finished) return;
    if(this.chickenPen.hasChickensForCapture()) {
      this.approach.step();
    }
  }

  attemptCapture(chicken){
    if(this.finished) return;
    this.capture.attempt(this.player, 
                         chicken, 
                         this.chickenPen, 
                         this.approach.diceCollection.captureDice);
    this.finished = true;

  }

}

module.exports = CaptureGame;