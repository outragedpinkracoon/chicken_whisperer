require("babel-register");
var WhispererChecker = require('../whispererChecker.js')

describe("Whisperer Checker", function(){
  
  var checker;
  beforeEach(function(){
    checker = new WhispererChecker();
  });

  // it("should check if player is whisperer", function(){
  //   var result = checker.update(player, roll);
  //   expect(player.isWhisperer).toBe(true);
  // });

});