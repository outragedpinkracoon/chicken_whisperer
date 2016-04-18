require("./extensions/array.js")
var CaptureTurn = require("./captureTurn.js")

class Game {

  constructor(options) {
    this.players = options.players;
    this.chickenPen = options.chickenPen;

    this.currentPlayer = this.players[0];
    this.turn = null;
  }

  updateCurrentPlayer() {
    this.currentPlayer = this.players.rotate().first();
  }

  playerCount() {
    return this.players.length;
  }

  currentTurn(){
    return this.turn;
  }

  nextTurn(){
    var options = {
      player: this.currentPlayer,
      chickenPen: this.chickenPen
    }
    this.turn = new CaptureTurn(options);
    this.updateCurrentPlayer();
  }

}

module.exports = Game;