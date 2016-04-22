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
    data = new ChickenData();

    var captureOptions = {
      chickenPen: data.chickenPen, 
      die: new Die()
    }

    capture = new Capture(captureOptions);
    player = new Player("Valerie");
  })

  it("should have a die", function(){
    expect(capture.die).not.toBe(undefined);
  });

  it("should have a chickenPen", function(){
    expect(capture.die).not.toBe(undefined);
  });
  
  it("should be a successful roll", function(){
    var result = capture.successfulRoll([5,5], data.chicken1);
    expect(result).toBe(true);
  });

  it("should be an unsuccessful roll", function(){
    var result = capture.successfulRoll([1,1], data.chicken1);
    expect(result).toBe(false);
  });

  it("should reduce chicken's speed on failure", function(){
    spyOn(capture.die, "roll").and.returnValues(1,1);
    var result = capture.failure(data.chicken1);
    
    expect(result).toBe(false);
    expect(data.chicken1.speed).toBe(4);
  });


  it("should invoke failure", function(){
    spyOn(capture.die, "roll").and.returnValues(1,1);
    spyOn(capture, "failure").and.returnValues(1,1);

    var result = capture.attempt(player, data.chicken1, data.chickenPen, 1);
    
    expect(capture.failure.calls.count()).toBe(1);
  });

  it("should not alter chicken speed on success", function(){
    var result = capture.success(data.chickenPen, player, data.chicken1);

    expect(result).toBe(true);
    expect(data.chicken1.speed).toBe(5);
  });

  it("should add chicken to player on success", function(){
    spyOn(capture.die, "roll").and.returnValues(10);
    var result = capture.success(data.chickenPen, player, data.chicken1);

    expect(result).toBe(true);
    expect(player.chickens[0]).toEqual(data.chicken1);
  });

  it("should remove chicken from chickenPen on success", function(){
    spyOn(capture.die, "roll").and.returnValues(10);
    var result = capture.success(data.chickenPen, player, data.chicken1);

    expect(result).toBe(true);
    expect(data.chickenPen.count()).toEqual(3);
  });

  it("should invoke success", function(){
    spyOn(capture.die, "roll").and.returnValues(10);
    spyOn(capture, "success");
    var result = capture.attempt(player, data.chicken1, data.chickenPen, 1);

    expect(capture.success).toHaveBeenCalled();
  });

})