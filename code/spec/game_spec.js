var Game = require('../game.js')
var PlayerTracker = require('../playerTracker.js')
var Player = require('../player.js')

describe("Game", function() {

  var game;

  beforeEach(function() {

    player1 = new Player("Valerie");
    player2 = new Player("Jay");

    players = [player1, player2];

    playerTracker = new PlayerTracker(players);

    game = new Game(playerTracker);

  });

  it("should have player selection", function() {
    expect(game.playerTracker).not.toBe(null);
    expect(game.playerTracker).not.toBeUndefined;
  });

});