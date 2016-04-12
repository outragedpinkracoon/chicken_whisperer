var Player = require("../player.js")
var Turn = require("../turn.js")
var Chicken = require("../chicken.js")
var ChickenPen = require("../chickenPen.js")
var Die = require("../die.js")

describe("Turn", function(){
  var player;

  beforeEach(function(){
    player = new Player("Valerie");

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

    chicken_1 = new Chicken(chicken1_options);
    var chicken_2 = new Chicken(chicken2_options);
    var chicken_3 = new Chicken(chicken3_options);
    var chicken_4 = new Chicken(chicken4_options);

    chickens = [chicken_1, chicken_2, chicken_3, chicken_4]

    chickenPen = new ChickenPen(chickens);

    turn = new Turn(player, chickenPen, new Die());
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
    expect(turn.dice.capture).toEqual([]);
  });

  it("starts with 2 approach dice", function(){
    expect(turn.dice.approach.length).toBe(2);
  });

  // it("gains a capture dice on even roll", function(){
  //   expect(turn.captureDice).toEqual([]);
  // });

});

