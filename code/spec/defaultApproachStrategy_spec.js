require("babel-register");
var BasicApproachStrategy = require('../basicApproachStrategy.js');
var WhispererChecker = require('../whispererChecker.js');
var Die = require('../die');

describe("Basic Approach Strategy", function(){

  var strategy;
  beforeEach(function(){
    var options = {
      die: new Die(),
      whispererChecker: new WhispererChecker()
    }
    strategy = new BasicApproachStrategy(options);
  });

  it("should have a die", function(){
    expect(strategy.die).not.toBe(undefined);
  });

  it("should have a whispererChecker", function(){
    expect(strategy.whispererChecker).not.toBe(undefined);
  });

  it("should make approach roll", function(){
    spyOn(strategy.die,"roll").and.returnValues(4,4)

    var result = strategy.approachRoll();

    expect(result).toEqual([4,4]);
  });

  it("should be successful on even roll", function(){
    spyOn(strategy.die,"roll").and.returnValues(4,4)

    var result = strategy.approach(2,{});

    expect(result).toBe(true);
  });

  it("should be unsuccessful on odd roll", function(){
    spyOn(strategy.die,"roll").and.returnValues(4,3)

    var result = strategy.approach(2,{});

    expect(result).toBe(false);
  });

  it("should call whispererChecker", function(){
    spyOn(strategy.die,"roll").and.returnValues(4,3)
    spyOn(strategy.whispererChecker,"update");

    strategy.approach(2,{});

    expect(strategy.whispererChecker.update).toHaveBeenCalled();
  });

});