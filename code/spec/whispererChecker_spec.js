require("babel-register");
var WhispererChecker = require('../whispererChecker.js')
var Player = require('../player.js')

describe("Whisperer Checker", function(){
  
  var checker;
  var player; 

  beforeEach(function(){
    checker = new WhispererChecker();
    player = new Player("Valerie");
  });

  // it("should check if player is whisperer", function(){
  //   var result = checker.update(player, [1,1]);
  //   expect(player.isWhisperer).toBe(true);
  // });

});