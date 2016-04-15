require("babel-register");
var ChickenData = require('./data/chickenData.js')
var Game = require('../game.js')
var Player = require('../player.js')
var Chicken = require('../chicken.js')
var ChickenPen = require('../chickenPen.js')

describe("Game", function() {

  var game;
  var data;

  beforeEach(function() {

    var player1 = new Player("Valerie");
    var player2 = new Player("Jay");

    var players = [player1, player2];

    data = new ChickenData();

    game = new Game(players, data.chickenPen);

  });

  it("should have chicken pen", function() {
    expect(game.chickenPen).not.toBe(null);
    expect(game.chickenPen).not.toBeUndefined;
  });

  it("should throw error with no players", function() {
    expect(function(){ new Game(); }).toThrow(new Error("Game must have players"));
  });

  it("should throw error with no chicken pen", function() {
    expect(function(){ new Game([]); }).toThrow(new Error("Game must have chicken pen"));
  });


  it("should have 2 players", function() {
    expect(game.playerCount()).toBe(2);
  });

  it("should have player1 as first player", function() {
    expect(game.currentPlayer.name).toBe("Valerie");
  });

  it("should update player", function() {
    game.updateCurrentPlayer()
    expect(game.currentPlayer.name).toBe("Jay");
  });

  it("should start with player 1 turn", function() {
    expect(game.currentTurn().player.name).toBe("Valerie");
  });

});