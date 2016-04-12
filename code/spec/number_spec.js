require("../extensions/number.js")

describe("Number", function(){

  it("should be even", function(){
    var result = (1).isEven();
    expect(result).toBe(false);
  });

});