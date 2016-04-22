// require("babel-register");

// var ChickenData = require("./data/chickenData.js")
// var Player = require("../player.js")
// var Chicken = require("../chicken.js")
// var ChickenPen = require("../chickenPen.js")
// var ChickenPen = require("../chickenPen.js")
// var Approach = require("../approach.js")
// var Die = require("../die.js")
// var DefaultApproachStrategy = require("../defaultApproachStrategy.js")

// describe("Approach", function(){
//   var data;
//   var approach;

//   beforeEach(function(){
//     data = new ChickenData();

//     var options = {
//       chickenPen: data.chickenPen,
//       die: new Die(),
//       strategy: new DefaultApproachStrategy()
//     }
    
//     approach = new Approach(options);
//   });

//   it("should have a die", function() {
//     expect(approach.die).not.toBe(undefined);
//   });

//   it("should have a chickenPen", function() {
//     expect(approach.chickenPen).not.toBe(undefined);
//   });

//   it("should have an approachStrategy", function() {
//     expect(approach.strategy).not.toBe(undefined);
//   });

//   it("should have a chickenPen", function() {
//     expect(approach.chickenPen).toEqual(data.chickenPen);
//   });

//   it("starts with 0 capture dice", function(){
//     expect(approach.captureDice).toBe(0);
//   });

//   it("returns approach dice roll", function(){
//     spyOn(approach.die, "roll").and.returnValues(1, 1);
//     var result = approach.approachRoll();

//     expect(result).toBe(2);
//   });

//   it("gains a capture dice on even roll", function(){
//     spyOn(approach.die, "roll").and.returnValues(1, 1);
//     var result = approach.step();

//     expect(result).toBe(true);
//     expect(approach.captureDice).toBe(1);
//   });

//   it("scares chickens on odd roll", function(){
//     spyOn(approach.die, "roll").and.returnValues(1, 2);
//     spyOn(approach.chickenPen, "scareChickens");

//     var result = approach.step();
    
//     expect(result).toBe(false);
//     expect(approach.captureDice).toBe(0);
//     expect(approach.chickenPen.scareChickens.calls.count()).toEqual(1);
//   });

// });

