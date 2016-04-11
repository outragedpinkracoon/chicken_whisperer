var Game = require('../game.js')
var PlayerTracker = require('../playerTracker.js')
var Player = require('../player.js')
var Chicken = require('../chicken.js')
var ChickenPen = require('../chickenPen.js')

describe("Game", function() {

  var game;

  beforeEach(function() {

    var player1 = new Player("Valerie");
    var player2 = new Player("Jay");

    var players = [player1, player2];

    var playerTracker = new PlayerTracker(players);

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

    game = new Game(playerTracker, chickenPen);

  });

  it("should have player selection", function() {
    expect(game.playerTracker).not.toBe(null);
    expect(game.playerTracker).not.toBeUndefined;
  });

  it("should have chicken pen", function() {
    expect(game.chickenPen).not.toBe(null);
    expect(game.chickenPen).not.toBeUndefined;
  });

});