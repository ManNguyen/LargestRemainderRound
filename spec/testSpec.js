require('../largestRemainderRound.js');
describe("A suite", function () {
  console.log("Spec Run Correctly");
  it("test test", function () {

    expect(true).toBe(true);
  });
});

describe("Testing the Array.spread function", function () {

  console.log("n");
  var arr = [1000, 1000, 5000, 1000];
  
  it("default spread to 100", function () {
    expect(arr.spread()).toEqual([13, 13, 62, 12]);
  });

  it("spread correct to 50", function () {
    expect(arr.spread(50)).toEqual([7, 6, 31, 6]);
  });

  it("spread correct to 1000", function () {
    expect(arr.spread(1000)).toEqual([125, 125, 625, 125]);
  });

  var arrB = arr.spread(1000).map(e => e/10);
  var arrC = arr.spread(10000).map(e => e/100);

  it("spread correct to decimal 1", function () {
    expect(arr.spread(100,1)).toEqual(arrB);
    expect(arr.spread(undefined,1)).toEqual(arrB);
  });

  it("spread correct to decimal 2", function () {
    expect(arr.spread(100,2)).toEqual(arrC);
  });

});