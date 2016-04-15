require("./extensions/array.js")
var CaptureTurn = require("./captureTurn.js")

class Game {

  constructor(players, chickenPen) {
    if (players === undefined) {
      throw new Error("Game must have players");
    }

    if (chickenPen === undefined) {
      throw new Error("Game must have chicken pen");
    }

    this.players = players;
    this.chickenPen = chickenPen;
    this.currentPlayer = players[0];
    this.turn = null;
    this.nextTurn();
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
    if(this.turn !== null)
      this.updateCurrentPlayer();
    this.turn = new CaptureTurn(this.currentPlayer, this.chickenPen);
  }

}

module.exports = Game;