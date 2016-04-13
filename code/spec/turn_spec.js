require("babel-register");
var Player = require("../player.js")
var Turn = require("../turn.js")
var Chicken = require("../chicken.js")
var ChickenPen = require("../chickenPen.js")
var Die = require("../die.js")
var DiceCollection = require("../diceCollection.js")

describe("Turn", function(){
  var player;
  var chicken1;
  var chickens;
  var chickenPen;
  var turn;

  beforeEach(function(){
    player = new Player("Valerie");

    var chickenOneOptions = {
      name: "Old Chicken",
      speed: 5,
      maxScare: 3
    }

    var chickenTwoOptions = {
      name: "Young Chicken",
      speed: 14,
      maxScare: 1
    }

    var chickenThreeOptions = {
      name: "Anime Chicken",
      speed: 10,
      maxScare: 2
    }

    var chickenFourOptions = {
      name: "Average Chicken",
      speed: 8,
      maxScare: 2
    }

    chicken1 = new Chicken(chickenOneOptions);
    var chicken2 = new Chicken(chickenTwoOptions);
    var chicken3 = new Chicken(chickenThreeOptions);
    var chicken4 = new Chicken(chickenFourOptions);

    chickens = [chicken1, chicken2, chicken3, chicken4]

    chickenPen = new ChickenPen(chickens);

    var diceCollection = new DiceCollection(new Die());

    turn = new Turn(player, chickenPen, diceCollection);
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

