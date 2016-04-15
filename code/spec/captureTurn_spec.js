require("babel-register");

var ChickenData = require("./data/chickenData.js")
var Player = require("../player.js")
var CaptureTurn = require("../captureTurn.js")
var Chicken = require("../chicken.js")
var ChickenPen = require("../chickenPen.js")
var ChickenPen = require("../chickenPen.js")
var Die = require("../die.js")
var Approach = require("../approach.js")
var DiceCollection = require("../diceCollection.js")

describe("Capture Turn", function(){
  var player;
  var data;
  var turn;
  var approach;

  beforeEach(function(){
    player = new Player("Valerie");
    approach = new Approach();
    turn = new CaptureTurn(player, approach);
  });

  it("should have an approach", function(){
    expect(turn.approach).toEqual(approach);
  });

  it("should have player", function(){
    expect(turn.player).toEqual(player);
  });


  it("does not start finished", function(){
    expect(turn.finished).toBe(false);
  });

});

