"use strict"

class PlayerTracker {

  constructor(players) {
    if (!players)
      throw new Error("Game must have players");
    this.players = players;
    this.currentPlayer = players[0];
  }

  updateCurrentPlayer() {
    this.currentPlayer = this.players[this.nextPlayerIndex()];
  }

  nextPlayerIndex() {
    var nextPlayerIndex = this.currentPlayerIndex() + 1;

    if(this.reachedLastPlayer(nextPlayerIndex))
      nextPlayerIndex = 0;

    return nextPlayerIndex;
  }

  reachedLastPlayer(nextPlayerIndex){
    return nextPlayerIndex >= this.playerCount();
  }

  currentPlayerIndex() {
    return this.players.indexOf(this.currentPlayer);
  }

  playerCount() {
    return this.players.length;
  }
}

module.exports = PlayerTracker; 