"use strict"

class Game {

  constructor(players, chickenPen, dice) {
    if (!players)
      throw new Error("Game must have players");
    this.players = players;
    this.dice = dice;
    this.chickenPen = chickenPen;
    this.currentPlayer = players[0];
  }

  updateCurrentPlayer() {
    this.currentPlayer = this.players.rotate().first();
  }

  playerCount() {
    return this.players.length;
  }

}

module.exports = Game;