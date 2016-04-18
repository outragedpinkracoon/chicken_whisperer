require("./extensions/array.js")
var CaptureTurn = require("./captureTurn.js")

class Game {

  constructor(players, chickenPen) {
    this.players = players;
    this.chickenPen = chickenPen;
    this.currentPlayer = players[0];
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
    this.turn !== null ? this.updateCurrentPlayer() : this.firstTurn();
  }

  firstTurn(){
    var options = {
      player: this.currentPlayer,
      chickenPen: this.chickenPen
    }
    this.turn = new CaptureTurn(options);
  }

}

module.exports = Game;