var PlayerSelection = require('../playerSelection.js')
var Player = require('../Player.js')

describe("Player Selection", function() {

  var players;
  var playerSelection;

  beforeEach(function() {
    player1 = new Player("Valerie");
    player2 = new Player("Jay");

    players = [player1, player2];
  });

  it("should throw error with no players", function() {
    expect(function(){ new PlayerSelection(); }).toThrow(new Error("Game must have players"));
  });


  it("should have 2 players", function() {
    playerSelection = new PlayerSelection(players);
    expect(playerSelection.playerCount()).toBe(2);
  });

  it("should have player1 as first player", function() {
    playerSelection = new PlayerSelection(players);
    expect(playerSelection.currentPlayer.name).toBe("Valerie");
  });

  it("should return index of current player", function() {
    playerSelection = new PlayerSelection(players);
    expect(playerSelection.currentPlayerIndex()).toBe(0);
  });

  it("should have reached last player", function() {
    playerSelection = new PlayerSelection(players);
    expect(playerSelection.reachedLastPlayer(2)).toBe(true);
  });

  it("should not have reached last player", function() {
    playerSelection = new PlayerSelection(players);
    expect(playerSelection.reachedLastPlayer(0)).toBe(false);
    expect(playerSelection.reachedLastPlayer(1)).toBe(false);
  });

  it("should return index of next player", function() {
    playerSelection = new PlayerSelection(players);
    expect(playerSelection.nextPlayerIndex()).toBe(1);
  });

  it("should udate current player", function() {
    playerSelection = new PlayerSelection(players);
    playerSelection.updateCurrentPlayer();
    expect(playerSelection.currentPlayer.name).toBe("Jay");
  });

});