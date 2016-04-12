var Player = require("../player.js")
var Turn = require("../turn.js")

describe("Turn", function(){
  var player;

  beforeEach(function(){
    player = new Player("Valerie");
  })

  it("should have player", function(){
    turn = new Turn(player);
    expect(turn.player).toEqual(player);
  })

});

