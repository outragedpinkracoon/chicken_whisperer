require('../extensions/array.js')

describe("Array", function() {

  it("should rotate the elements with populated array", function() {
    result = [1,2,3].rotate();
    expect(result).toEqual([2,3,1]);
  });

  it("should do nothing with empty array", function() {
    result = [].rotate();
    expect(result).toEqual([]);
  });

});