var Chicken = require("../chicken.js")
var ChickenPen = require("../chickenPen.js")

describe("Chicken Pen", function() {

  var chickenPen;
  var chickens;

  beforeEach(function() {

    chicken1_options = {
      name: "Old Chicken",
      speed: 5,
      scare: 3
    }

    chicken2_options = {
      name: "Young Chicken",
      speed: 14,
      scare: 1
    }

    chicken3_options = {
      name: "Anime Chicken",
      speed: 10,
      scare: 2
    }

    chicken4_options = {
      name: "Average Chicken",
      speed: 8,
      scare: 2
    }

    chicken_1 = new Chicken(chicken1_options);
    chicken_2 = new Chicken(chicken2_options);
    chicken_3 = new Chicken(chicken3_options);
    chicken_4 = new Chicken(chicken4_options);

    chickens = [chicken_1, chicken_2, chicken_3, chicken_4]
 
  });

  it("should throw error with no chickens", function() {
    expect(function() { new ChickenPen() }).toThrow(new Error("Must have chickens"));
  });

});