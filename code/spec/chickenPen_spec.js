var Chicken = require("../chicken.js")
var ChickenPen = require("../chickenPen.js")

describe("Chicken Pen", function() {

  var chickenPen;
  var chickens;

  beforeEach(function() {

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

    var chicken_1 = new Chicken(chicken1_options);
    var chicken_2 = new Chicken(chicken2_options);
    var chicken_3 = new Chicken(chicken3_options);
    var chicken_4 = new Chicken(chicken4_options);

    chickens = [chicken_1, chicken_2, chicken_3, chicken_4]
 
  });

  it("should throw error with no chickens", function() {
    expect(function() { new ChickenPen() }).toThrow(new Error("Must have chickens"));
  });

  it("should have 4 chickens", function() {
    chickenPen = new ChickenPen(chickens);
    expect(chickenPen.chickenCount()).toBe(4);
  });

});