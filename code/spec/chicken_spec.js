require("babel-register");
var Chicken = require("../chicken.js")

describe("Chicken", function() {

  var chicken;

  beforeEach(function() {
    var options = {
      name: "Old Chicken",
      speed: 5,
      scare: 3
    }
    chicken = new Chicken(options);
  });

  it("should have a name", function() {
    expect(chicken.name).toBe("Old Chicken");
  });

  it("should have a speed", function() {
    expect(chicken.speed).toBe(5);
  });

  it("should have a scare", function() {
    expect(chicken.scare).toBe(3);
  });

  it("should decrease speed by 1", function() {
    chicken.decreaseSpeed();
    expect(chicken.speed).toBe(4);
  });

  it("should decrease speed by 2", function() {
    chicken.decreaseSpeed(2);
    expect(chicken.speed).toBe(3);
  });

  it("should not decrease speed below 0", function() {
    chicken.speed = 0;
    chicken.decreaseSpeed();
    expect(chicken.speed).toBe(0);
  });
});