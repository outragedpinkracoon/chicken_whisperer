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

describe("Approach", function(){
  var data;
  var approach;

  beforeEach(function(){
    var diceCollection = new DiceCollection(new Die());
    data = new ChickenData();
    approach = new Approach(diceCollection, data.chickenPen);
  });

  it("starts with 0 capture dice", function(){
      expect(approach.diceCollection.captureDice).toEqual(0);
    });

    it("starts with 2 approach dice", function(){
      expect(approach.diceCollection.approachDice).toBe(2);
    });

    it("returns approach dice roll", function(){
      spyOn(approach.diceCollection.die, "roll").and.returnValues(1, 1);
      var result = approach.approachRoll();
      expect(result).toBe(2);
    });

    it("gains a capture dice on even roll", function(){
      spyOn(approach.diceCollection.die, "roll").and.returnValues(1, 1);
      approach.step();
      expect(approach.diceCollection.captureDice).toBe(1);
    });

    it("scares chickens on odd roll", function(){
      spyOn(approach.diceCollection.die, "roll").and.returnValues(1, 2);
      spyOn(approach.chickenPen, "scareChickens");

      approach.step();

      expect(approach.diceCollection.captureDice).toBe(0);

      expect(approach.chickenPen.scareChickens).toHaveBeenCalled();
    });

});

