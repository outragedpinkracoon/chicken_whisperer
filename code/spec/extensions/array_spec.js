require("babel-register");
require('../../extensions/array.js')

describe("Array", function() {

  it("should rotate the elements with populated array", function() {
    var result = [1,2,3].rotate();
    expect(result).toEqual([2,3,1]);
  });

  it("should do nothing with empty array", function() {
    var result = [].rotate();
    expect(result).toEqual([]);
  });

  it("should return the first item in the array", function() {
    expect([1,2,3].first()).toBe(1);
  });

});