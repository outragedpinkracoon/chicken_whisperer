var Game = require('../game.js')
var Player = require('../player.js')
var Chicken = require('../chicken.js')
var ChickenPen = require('../chickenPen.js')
var Dice = require('../dice.js')

describe("Game", function() {

  var game;

  beforeEach(function() {

    var player1 = new Player("Valerie");
    var player2 = new Player("Jay");

    var players = [player1, player2];

    var chicken1_options = {
      name: "Old Chicken",
      speed: 5,
      scare: 3
    }

    var chicken2_options = {
      name: "Young Chicken",
      speed: 14,
      scare: 1
    }

    var chicken3_options = {
      name: "Anime Chicken",
      speed: 10,
      scare: 2
    }

    var chicken4_options = {
      name: "Average Chicken",
      speed: 8,
      scare: 2
    }

    var chicken_1 = new Chicken(chicken1_options);
    var chicken_2 = new Chicken(chicken2_options);
    var chicken_3 = new Chicken(chicken3_options);
    var chicken_4 = new Chicken(chicken4_options);

    var chickens = [chicken_1, chicken_2, chicken_3, chicken_4]

    var chickenPen = new ChickenPen(chickens);

    game = new Game(players, chickenPen, new Dice());

  });

  it("should have player selection", function() {
    expect(game.playerTracker).not.toBe(null);
    expect(game.playerTracker).not.toBeUndefined;
  });

  it("should have chicken pen", function() {
    expect(game.chickenPen).not.toBe(null);
    expect(game.chickenPen).not.toBeUndefined;
  });

  it("should throw error with no players", function() {
    expect(function(){ new Game(); }).toThrow(new Error("Game must have players"));
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

  it("should start with no turn", function() {
    expect(game.currentTurn()).toBeNull();
  });

});