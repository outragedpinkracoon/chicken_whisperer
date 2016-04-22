require("babel-register");

var ChickenData = require("./data/chickenData.js")
var Player = require("../player.js")
var Chicken = require("../chicken.js")
var ChickenPen = require("../chickenPen.js")
var ChickenPen = require("../chickenPen.js")
var Approach = require("../approach.js")
var Die = require("../die.js")
var WhispererChecker = require("../whispererChecker.js")
var BasicApproachStrategy = require("../basicApproachStrategy.js")

describe("Approach", function(){
  var data;
  var approach;

  beforeEach(function(){

    data = new ChickenData();

    var strategyOptions = {
      die: new Die(),
      whispererChecker: new WhispererChecker()
    }

    var options = {
      chickenPen: data.chickenPen,
      strategies: {
        basic: new BasicApproachStrategy(strategyOptions)
      }
    }
    
    approach = new Approach(options);
  });

  it("should have a chickenPen", function() {
    expect(approach.chickenPen).not.toBe(undefined);
  });

  it("should have an approachStrategy", function() {
    expect(approach.strategy).not.toBe(undefined);
  });

  it("should have a chickenPen", function() {
    expect(approach.chickenPen).toEqual(data.chickenPen);
  });

  it("starts with 0 capture dice", function(){
    expect(approach.captureDice).toBe(0);
  });

  it("gains a capture dice on even roll", function(){
    spyOn(approach.strategy.die, "roll").and.returnValues(1, 1);
    approach.step({});
    expect(approach.captureDice).toBe(1);
  });

  it("scares chickens on odd roll", function(){
    spyOn(approach.strategy.die, "roll").and.returnValues(1, 2);
    spyOn(approach.chickenPen, "scareChickens");
    
    approach.step({});

    expect(approach.captureDice).toBe(0);
    expect(approach.chickenPen.scareChickens.calls.count()).toEqual(1);
  });

});

