require("babel-register");
var DefaultApproachStrategy = require('../defaultApproachStrategy.js');
var WhispererChecker = require('../whispererChecker.js');
var Die = require('../die');

describe("Default Approach Strategy", function(){

  var strategy;
  beforeEach(function(){
    var options = {
      die: new Die(),
      whispererChecker: new WhispererChecker()
    }
    strategy = new DefaultApproachStrategy(options);
  });

  it("should have a die", function(){
    expect(strategy.die).not.toBe(undefined);
  });

  it("should make approach roll", function(){
    spyOn(strategy.die,"roll").and.returnValues(4,4)
    var result = strategy.approachRoll();
    expect(result).toEqual([4,4]);
  });

  it("should be successful on even roll", function(){
    spyOn(strategy.die,"roll").and.returnValues(4,4)
    var result = strategy.approach();
    expect(result).toBe(true);
  });

  it("should be unsuccessful on odd roll", function(){
    spyOn(strategy.die,"roll").and.returnValues(4,3)
    var result = strategy.approach();
    expect(result).toBe(false);
  });

});