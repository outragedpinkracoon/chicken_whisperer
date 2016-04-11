"use strict"

class Game {

  constructor(players) {
    if (!players)
      throw new Error("Game must have players");
    this.players = players;
  }

  playerCount() {
    return this.players.length;
  }

}

module.exports = Game;