require("babel-register");

var Capture = require("../capture.js")
var Die = require("../die.js")
var Player = require("../player.js")
var ChickenData = require("./data/chickenData.js")

describe("Capture", function(){

  var capture;
  var die;
  var player;
  var data;

  beforeEach(function(){
    die = new Die();
    capture = new Capture(die);
    player = new Player("Valerie");
    data = new ChickenData();
  })

  it("should have a die", function(){
    expect(capture.die).toEqual(die);
  });

  it("should make a capture roll", function(){
    spyOn(capture.die, "roll").and.returnValues(2,2);
    var result = capture.captureRoll(2);
    expect(result).toBe(4);
  });

  it("should reduce chicken's speed on failure", function(){
    spyOn(capture.die, "roll").and.returnValues(1);
    var result = capture.attempt(player, data.chicken1, data.chickenPen, 1);
    
    expect(result).toBe(false);
    expect(data.chicken1.speed).toBe(4);
  });

  it("should not alter chicken speed on success", function(){
    spyOn(capture.die, "roll").and.returnValues(10);
    var result = capture.attempt(player, data.chicken1, data.chickenPen, 1);

    expect(result).toBe(true);
    expect(data.chicken1.speed).toBe(5);
  });

  it("should add chicken to player on success", function(){
    spyOn(capture.die, "roll").and.returnValues(10);
    var result = capture.attempt(player, data.chicken1, data.chickenPen, 1);

    expect(result).toBe(true);
    expect(player.chickens[0]).toEqual(data.chicken1);
  });

  it("should remove chicken from chickenPen on success", function(){
    spyOn(capture.die, "roll").and.returnValues(10);
    var result = capture.attempt(player, data.chicken1, data.chickenPen, 1);

    expect(result).toBe(true);
    expect(data.chickenPen.count()).toEqual(3);
  });

})