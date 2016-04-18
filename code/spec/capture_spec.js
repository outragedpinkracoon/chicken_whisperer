require("babel-register");

var Capture = require("../capture.js")
var Die = require("../die.js")
var ChickenData = require("./data/chickenData.js")

describe("Capture", function(){

  var capture;
  var die;
  var player;
  var data;

  beforeEach(function(){
    die = new Die();
    capture = new Capture(die);
    player = {};
    data = new ChickenData();
  })

  it("should have a die", function(){
    expect(capture.die).toEqual(die);
  });

  it("should make a capture roll", function(){
    spyOn(capture.die, "roll").and.returnValues(2,2);
    var result = capture.captureRoll(2);
    expect(result).toBe(4);
  })

  it("should reduce chicken's speed on failure", function(){
    spyOn(capture.die, "roll").and.returnValues(1);
    capture.attempt(player, data.chicken1, 1);
    expect(data.chicken1.speed).toBe(4);
  });

})