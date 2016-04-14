require("babel-register");
var ChickenData = require("./data/chickenData.js")
var Chicken = require("../chicken.js")
var ChickenPen = require("../chickenPen.js")


describe("Chicken Pen", function() {

  beforeEach(function() {
    data = new ChickenData();
  });

  it("should throw error with no chickens", function() {
    expect(function() { new ChickenPen() }).toThrow(new Error("Must have chickens"));
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

  it("should scare all chickens", function() {
    data.chickenPen.scareChickens();
    
    expect(data.chickenPen.chickens[0].speed).toBe(4);
    expect(data.chickenPen.chickens[1].speed).toBe(13);
    expect(data.chickenPen.chickens[2].speed).toBe(9);
    expect(data.chickenPen.chickens[3].speed).toBe(7);
  });

});