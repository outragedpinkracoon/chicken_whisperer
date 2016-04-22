require("babel-register");
var WhispererApproachStrategy = require('../whispererApproachStrategy.js');
var WhispererChecker = require('../whispererChecker.js');
var Die = require('../die');

describe("Whisperer Approach Strategy", function(){

  var strategy;

  beforeEach(function(){
    var options = {
      die: new Die(),
      whispererChecker: new WhispererChecker()
    }
    strategy = new WhispererApproachStrategy(options);
  });

  it("should be successful on a roll without a 1", function(){
    spyOn(strategy.die,"roll").and.returnValues(4,3)

    var result = strategy.approach({});

    expect(result).toBe(true);
  });

  it("should be unsuccessful on a roll containing a 1", function(){
    spyOn(strategy.die,"roll").and.returnValues(4,1)

    var result = strategy.approach({});

    expect(result).toBe(false);
  });

  it("should call whispererChecker", function(){
    spyOn(strategy.die,"roll").and.returnValues(4,3)
    spyOn(strategy.whispererChecker,"update");

    strategy.approach({});

    expect(strategy.whispererChecker.update).toHaveBeenCalled();
  });
});