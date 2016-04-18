require("./extensions/array.js")
var CaptureTurn = require("./captureTurn.js")
var ApproachStatus = require("./approachStatus.js")
var Die = require("./die.js")
var DiceCollection = require("./diceCollection.js")
var Approach = require("./approach.js")

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
    if(this.chickenPen.hasChickens())
    {
      return {
        message: "You approached the chickens",
        status: ApproachStatus.CHICKEN_PEN_APPROACHED,
        result: this.turn.approachChicken()
      }
    }
    return {
      message: "There are no chickens to approach",
      status: ApproachStatus.NO_CHICKENS_IN_PEN
    }
  }

}

module.exports = CaptureGame;