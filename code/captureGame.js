require("./extensions/array.js")

var ApproachStatus = require("./approachStatus.js")
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

  resetApproach(){
    this.chickenPen.refresh();
    this.approach = new Approach( {chickenPen: this.chickenPen} );
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
    this.resetApproach();
  }

  approachChicken(){
    if(!turn.finished) this.approach.step()
  }

  attemptCapture(){
    this.capture.attempt(this.player, 
                         chicken, 
                         this.chickenPen, 
                         this.approach.diceCollection.captureDice)
  }

}

module.exports = CaptureGame;