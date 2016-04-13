require("babel-register");
var Chicken = require("../chicken.js")
var ChickenPen = require("../chickenPen.js")

describe("Chicken Pen", function() {

  var player;
  var chicken1;
  var chickens;
  var chickenPen;

  beforeEach(function() {

    var chickenOneOptions = {
      name: "Old Chicken",
      speed: 5,
      maxScare: 3
    }

    var chickenTwoOptions = {
      name: "Young Chicken",
      speed: 14,
      maxScare: 1
    }

    var chickenThreeOptions = {
      name: "Anime Chicken",
      speed: 10,
      maxScare: 2
    }

    var chickenFourOptions = {
      name: "Average Chicken",
      speed: 8,
      maxScare: 2
    }

    chicken1 = new Chicken(chickenOneOptions);
    var chicken2 = new Chicken(chickenTwoOptions);
    var chicken3 = new Chicken(chickenThreeOptions);
    var chicken4 = new Chicken(chickenFourOptions);

    chickens = [chicken1, chicken2, chicken3, chicken4]

    chickenPen = new ChickenPen(chickens);
 
  });

  it("should throw error with no chickens", function() {
    expect(function() { new ChickenPen() }).toThrow(new Error("Must have chickens"));
  });

  it("should have 4 chickens", function() {
    var chickenPen = new ChickenPen(chickens);
    expect(chickenPen.count()).toBe(4);
  });

  it("should add a chicken", function() {
    var chickenPen = new ChickenPen(chickens);
    var chicken = new Chicken({name:"Shiny"});
    chickenPen.add(chicken);
    expect(chickenPen.count()).toBe(5);
  });

  it("should remove a chicken", function() {
    var chickenPen = new ChickenPen(chickens);

    chickenPen.remove(chicken1);
    expect(chickenPen.count()).toBe(3);
  });

  it("should scare all chickens", function() {
    var chickenPen = new ChickenPen(chickens);

    chickenPen.scareChickens();
    
    expect(chickenPen.chickens[0].speed).toBe(4);
    expect(chickenPen.chickens[1].speed).toBe(13);
    expect(chickenPen.chickens[2].speed).toBe(9);
    expect(chickenPen.chickens[3].speed).toBe(7);
  });

});