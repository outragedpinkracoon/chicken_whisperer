var Game = require('../game.js')
var PlayerSelection = require('../playerSelection.js')
var Player = require('../player.js')

describe("Game", function() {

  var game;

  beforeEach(function() {

    player1 = new Player("Valerie");
    player2 = new Player("Jay");

    players = [player1, player2];

    playerSelection = new PlayerSelection(players);

    game = new Game(playerSelection);

  });

  it("should have player selection", function() {
    expect(game.playerSelection).not.toBe(null);
    expect(game.playerSelection).not.toBeUndefined;
  });

});