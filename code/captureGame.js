require("./extensions/array.js")

var Die = require("./die.js")
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
    this.finished = false;
    this.resetPlayers();
  }

  resetPlayers(){
    this.players.forEach(function(player, index){
      player.isWhisperer = false;
    });
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
    if(this.lastTurn()) {
      this.chickenPen.chickens.first().reduceSpeed();
    }
    this.updateCurrentPlayer();
    this.reset();
  }

  gameOver(){
    return !this.chickenPen.hasChickensForCapture();
  }

  lastTurn(){
    return this.chickenPen.count() == 1;
  }

  approachChicken(){
    if(this.finished || this.gameOver()) return;
      this.approach.step();
  }

  attemptCapture(chicken){
    if(this.finished) return;
    this.capture.attempt(this.player, 
                         chicken, 
                         this.chickenPen, 
                         this.approach.captureDice);
    this.finished = true;

  }

}

module.exports = CaptureGame;