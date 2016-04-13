require("babel-register");
var DiceCollection = require('../diceCollection.js')
var Die = require('../die.js');

describe("Dice Collection", function() {

  var die;
  var diceCollection;

  beforeEach(function(){
    die = new Die();
    diceCollection = new DiceCollection(die);
  });

  it("should have a die", function() {
    expect(diceCollection.die).toEqual(die);
  });

  it("should start with no capture dice", function() {
    expect(diceCollection.captureDice).toBe(0);
  });

  it("should default to 2 approach dice", function() {
    expect(diceCollection.captureDice).toBe(0);
  });

  it("should start with 4 approach dice", function() {
    diceCollection = new DiceCollection(die, 4);
    expect(diceCollection.approachDice).toBe(4);
  });

  it("should add a capture die", function() {
    diceCollection.addCaptureDie();
    expect(diceCollection.captureDice).toBe(1);
  });
});