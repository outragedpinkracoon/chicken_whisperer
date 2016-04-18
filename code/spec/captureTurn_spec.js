require("babel-register");

var ChickenData = require("./data/chickenData.js")
var Player = require("../player.js")
var CaptureTurn = require("../captureTurn.js")
var Capture = require("../capture.js")
var Chicken = require("../chicken.js")
var ChickenPen = require("../chickenPen.js")
var Die = require("../die.js")
var Approach = require("../approach.js")
var DiceCollection = require("../diceCollection.js")

describe("Capture Turn", function(){
  var player;
  var data;
  var turn;
  var approach;
  var capture;

  beforeEach(function(){
    player = new Player("Valerie");
    approach = new Approach({});
    capture = new Capture();
    data = new ChickenData();

    var options = {
      player: player,
      approach: approach,
      capture: capture
    }

    turn = new CaptureTurn(options);
  });

  it("should have an approach", function(){
    expect(turn.approach).toEqual(approach);
  });

  it("should have player", function(){
    expect(turn.player).toEqual(player);
  });

  it("should have capture", function(){
    expect(turn.capture).toEqual(capture);
  });
  
  it("does not start finished", function(){
    expect(turn.finished).toBe(false);
  });

  it("should make an approach", function(){
    spyOn(turn.approach,"step");
    turn.approachChicken();
    expect(turn.approach.step.calls.count()).toBe(1);
  });

  it("should attempt a capture", function(){
    spyOn(turn.capture,"attempt");
    turn.attemptCapture(player,data.chicken1, data.chickenPen, 2);
    expect(turn.capture.attempt.calls.count()).toBe(1);
  });



});

