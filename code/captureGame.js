require("./extensions/array.js")
var CaptureTurn = require("./captureTurn.js")

class CaptureGame {

  constructor(options) {
    this.players = options.players;
    this.chickenPen = options.chickenPen;
    this.turn = null;
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
    var options = {
      player: this.currentPlayer,
      chickenPen: this.chickenPen
    }
    this.turn = new CaptureTurn(options);
  }

  approachChicken(){
    if(chickenPen.hasChickens())
    {
      this.turn.approachChicken();
    }
  }

}

module.exports = CaptureGame;