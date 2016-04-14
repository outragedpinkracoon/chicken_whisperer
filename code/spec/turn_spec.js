require("babel-register");

var ChickenData = require("./data/chickenData.js")
var Player = require("../player.js")
var Turn = require("../turn.js")
var Chicken = require("../chicken.js")
var ChickenPen = require("../chickenPen.js")
var Die = require("../die.js")
var DiceCollection = require("../diceCollection.js")

describe("Turn", function(){
  var player;
  var data;
  var turn;

  beforeEach(function(){
    player = new Player("Valerie");

    var diceCollection = new DiceCollection(new Die());

    var data = new ChickenData();

    turn = new Turn(player, data.chickenPen, diceCollection);
  })

  it("should have player", function(){
    expect(turn.player).toEqual(player);
  })

  it("should have chicken pen", function(){
    expect(turn.player).toEqual(player);
  })

  it("should throw error with no players", function() {
    expect(function(){ new Turn(); }).toThrow(new Error("Turn must have player"));
  });

  it("should throw error with no chicken pen", function() {
    expect(function(){ new Turn(player); }).toThrow(new Error("Turn must have chicken pen"));
  });

  it("does not start finished", function(){
    expect(turn.finished).toBe(false);
  });

  it("starts with 0 capture dice", function(){
    expect(turn.diceCollection.captureDice).toEqual(0);
  });

  it("starts with 2 approach dice", function(){
    expect(turn.diceCollection.approachDice).toBe(2);
  });

  it("returns approach dice roll", function(){
    spyOn(turn.diceCollection.die, "roll").and.returnValues(1, 1);
    var result = turn.approachRoll();
    expect(result).toBe(2);
  });

  it("gains a capture dice on even roll", function(){
    spyOn(turn.diceCollection.die, "roll").and.returnValues(1, 1);
    turn.approachChicken();
    expect(turn.diceCollection.captureDice).toBe(1);
  });

  it("scares chickens on odd roll", function(){
    spyOn(turn.diceCollection.die, "roll").and.returnValues(1, 2);
    spyOn(turn.chickenPen, "scareChickens");

    turn.approachChicken();

    expect(turn.diceCollection.captureDice).toBe(0);

    expect(turn.chickenPen.scareChickens).toHaveBeenCalled();
  });

});

