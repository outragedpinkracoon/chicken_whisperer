"use strict"
var Turn = require("./turn.js")

class Game {

  constructor(players, chickenPen) {
    if (!players)
      throw new Error("Game must have players");
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
    this.turn = new Turn(this.currentPlayer);
  }

}

module.exports = Game;