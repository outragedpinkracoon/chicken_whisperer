var PlayerTracker = require('../playerTracker.js')
var Player = require('../Player.js')

describe("Player Selection", function() {

  var players;
  var playerTracker;

  beforeEach(function() {
    player1 = new Player("Valerie");
    player2 = new Player("Jay");

    players = [player1, player2];
  });

  it("should throw error with no players", function() {
    expect(function(){ new PlayerTracker(); }).toThrow(new Error("Game must have players"));
  });

  it("should have 2 players", function() {
    playerTracker = new PlayerTracker(players);
    expect(playerTracker.playerCount()).toBe(2);
  });

  it("should have player1 as first player", function() {
    playerTracker = new PlayerTracker(players);
    expect(playerTracker.currentPlayer.name).toBe("Valerie");
  });

  it("should return index of current player", function() {
    playerTracker = new PlayerTracker(players);
    expect(playerTracker.currentPlayerIndex()).toBe(0);
  });

  it("should have reached last player", function() {
    playerTracker = new PlayerTracker(players);
    expect(playerTracker.reachedLastPlayer(2)).toBe(true);
  });

  it("should not have reached last player", function() {
    playerTracker = new PlayerTracker(players);
    expect(playerTracker.reachedLastPlayer(0)).toBe(false);
    expect(playerTracker.reachedLastPlayer(1)).toBe(false);
  });

  it("should return index of next player", function() {
    playerTracker = new PlayerTracker(players);
    expect(playerTracker.nextPlayerIndex()).toBe(1);
  });

  it("should update current player", function() {
    playerTracker = new PlayerTracker(players);
    playerTracker.updateCurrentPlayer();
    expect(playerTracker.currentPlayer.name).toBe("Jay");
    playerTracker.updateCurrentPlayer();
    expect(playerTracker.currentPlayer.name).toBe("Valerie");
  });

});