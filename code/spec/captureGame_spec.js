require("babel-register");
var ChickenData = require('./data/chickenData.js')
var CaptureGame = require('../captureGame.js')
var Player = require('../player.js')
var Chicken = require('../chicken.js')
var ChickenPen = require('../chickenPen.js')
var Capture = require('../capture.js')
var Approach = require('../approach.js')
var Die = require('../die.js')

describe("Game", function() {

  var game;
  var data;

  beforeEach(function() {

    var player1 = new Player("Valerie");
    var player2 = new Player("Jay");

    var players = [player1, player2];

    data = new ChickenData();
    var approach = new Approach(data.chickenPen);

    var captureOptions = {
      chickenPen: data.chickenPen, 
      die: new Die()
    }

    var capture = new Capture(captureOptions);

    var options = {
      players: players,
      chickenPen: data.chickenPen,
      capture: capture,
      approach: approach
    }


    game = new CaptureGame(options);

  });

  it("should have chicken pen", function() {
    expect(game.chickenPen).toEqual(data.chickenPen);
  });

  it("should have 2 players", function() {
    expect(game.playerCount()).toBe(2);
  });

  it("should have player1 as first player", function() {
    game.nextTurn();
    expect(game.currentPlayer.name).toBe("Valerie");
  });

  it("should update player", function() {
    game.updateCurrentPlayer();
    game.updateCurrentPlayer();
    expect(game.currentPlayer.name).toBe("Jay");
  });

  it("should have an approach", function() {
    expect(game.approach).not.toBe(undefined);
  });

  it("should new up a capture", function() {
    expect(game.capture).not.toBe(undefined);
  });

  it("should start with player 1 turn", function() {
    game.nextTurn();
    expect(game.currentPlayer.name).toBe("Valerie");
  });

  it("should reset approach", function() {
    game.nextTurn();
    game.approach.diceCollection.captureDice = 2;
    game.approach.chickenPen = [];
    
    game.nextTurn();
    expect(game.approach.diceCollection.captureDice).toBe(0);
    expect(game.approach.chickenPen).toBe(data.chickenPen);
  });

});