var Chicken = require("../chicken.js")

describe("Chicken", function() {

  var chicken;

  beforeEach(function() {
    options = {
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
});