require("babel-register");
var ChickenData = require("./data/chickenData.js")
var Chicken = require("../chicken.js")
var ChickenPen = require("../chickenPen.js")


describe("Chicken Pen", function() {
  var data;
  
  beforeEach(function() {
    data = new ChickenData();
  });

  it("should have 4 chickens", function() {
    expect(data.chickenPen.count()).toBe(4);
  });

  it("should add a chicken", function() {
    var chicken = new Chicken({name:"Shiny"});
    data.chickenPen.add(chicken);
    expect(data.chickenPen.count()).toBe(5);
  });

  it("should remove a chicken", function() {
    data.chickenPen.remove(data.chicken1);
    expect(data.chickenPen.count()).toBe(3);
  });

  it("should have Chickens", function() {
    expect(data.chickenPen.hasChickens()).toBe(true);
  });

  it("should not have Chickens", function() {
    data.chickenPen.chickens[0].speed = 0;
    data.chickenPen.chickens[1].speed = 0;
    data.chickenPen.chickens[2].speed = 0;
    data.chickenPen.chickens[3].speed = 0;
    expect(data.chickenPen.hasChickens()).toBe(false);
  });

  it("should refresh Chickens", function() {
    data.chickenPen.chickens[0].speed = 0;
    data.chickenPen.chickens[1].speed = 0;
    data.chickenPen.chickens[2].speed = 0;
    data.chickenPen.chickens[3].speed = 0;

    data.chickenPen.chickens[0].scare = 0;
    data.chickenPen.chickens[1].scare = 0;
    data.chickenPen.chickens[2].scare = 0;
    data.chickenPen.chickens[3].scare = 0;


    data.chickenPen.refresh();

    expect(data.chickenPen.chickens[0].speed).toBe(5);
    expect(data.chickenPen.chickens[1].speed).toBe(14);
    expect(data.chickenPen.chickens[2].speed).toBe(10);
    expect(data.chickenPen.chickens[3].speed).toBe(8);

    expect(data.chickenPen.chickens[0].scare).toBe(3);
    expect(data.chickenPen.chickens[1].scare).toBe(1);
    expect(data.chickenPen.chickens[2].scare).toBe(2);
    expect(data.chickenPen.chickens[3].scare).toBe(2);

  });

  it("should scare all chickens", function() {
    data.chickenPen.scareChickens();
    
    expect(data.chickenPen.chickens[0].scare).toBe(2);
    expect(data.chickenPen.chickens[1].scare).toBe(0);
    expect(data.chickenPen.chickens[2].scare).toBe(1);
    expect(data.chickenPen.chickens[3].scare).toBe(1);
  });

});