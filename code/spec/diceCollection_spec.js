require("babel-register");
var DiceCollection = require('../diceCollection.js')

describe("Dice Collection", function() {

  var diceCollection;

  beforeEach(function(){
    diceCollection = new DiceCollection();
  });

  it("should start with no capture dice", function() {
    expect(diceCollection.captureDice).toBe(0);
  });

  it("should default to 2 approach dice", function() {
    expect(diceCollection.captureDice).toBe(0);
  });

  it("should start with 4 approach dice", function() {
    diceCollection = new DiceCollection(4);
    expect(diceCollection.approachDice).toBe(4);
  });

  it("should add a capture die", function() {
    diceCollection.addCaptureDie();
    expect(diceCollection.captureDice).toBe(1);
  });
});