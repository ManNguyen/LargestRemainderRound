require('../largestRemainderRound.js');
describe("A suite", function () {
  console.log("Spec Run Correctly");
  it("test test", function () {

    expect(true).toBe(true);
  });
});

describe("Testing the Array.spread function when input is array of number", function () {
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

  var arrB = arr.spread(1000).map(e => e / 10);
  var arrC = arr.spread(10000).map(e => e / 100);

  it("spread correct to decimal 1", function () {
    expect(arr.spread(100, 1)).toEqual(arrB);
    expect(arr.spread(undefined, 1)).toEqual(arrB);
  });

  it("spread correct to decimal 2", function () {
    expect(arr.spread(100, 2)).toEqual(arrC);
  });

});


console.log("test Obj Arr");
describe("Testing the Array.spread function when input is an array of object", function () {
  it("check prop and add to configured new prop 1", function () {
    var arr = [
      {
        name: "Batman",
        vote: 1000
      },
      {
        name: "Superman",
        vote: 1000
      },
      {
        name: "Wonder Woman",
        vote: 5000
      },
      {
        name: "The Flash",
        vote: 1000
      }];
    expect(arr.spread({ prop: "vote" })).toEqual([
      {
        name: "Batman",
        vote: 1000,
        vote_spread: 13
      },
      {
        name: "Superman",
        vote: 1000,
        vote_spread: 13
      },
      {
        name: "Wonder Woman",
        vote: 5000,
        vote_spread: 62
      },
      {
        name: "The Flash",
        vote: 1000,
        vote_spread: 12
      }]);
  });
  it("check prop and add to configured new prop 2", function () {
    var arr = [
      {
        name: "Batman",
        vote: 1000
      },
      {
        name: "Superman",
        vote: 1000
      },
      {
        name: "Wonder Woman",
        vote: 5000
      },
      {
        name: "The Flash",
        vote: 1000
      }];
    expect(arr.spread({ prop: "vote", spreadTo: "percentage" })).toEqual([
      {
        name: "Batman",
        vote: 1000,
        percentage: 13
      },
      {
        name: "Superman",
        vote: 1000,
        percentage: 13
      },
      {
        name: "Wonder Woman",
        vote: 5000,
        percentage: 62
      },
      {
        name: "The Flash",
        vote: 1000,
        percentage: 12
      }]);
  });
  var arr = [
    {
      name: "Batman",
      
      vote: 1000
    },
    {
      name: "Superman",
      vote: 1000
    },
    {
      name: "Wonder Woman",
      vote: 5000
    },
    {
      name: "The Flash",
      vote: 1000
    }];

  it("check prop and add to configured new prop 3", function () {
    var arr = [
      {
        name: "Batman",
        vote: 1000
      },
      {
        name: "Superman",
        vote: 1000
      },
      {
        name: "Wonder Woman",
        vote: 5000
      },
      {
        name: "The Flash",
        vote: 1000
      }];
    expect(arr.spread({ prop: "vote", spreadTo: "percentage",seats:50, decimals:2 })).toEqual([ 
      { name: 'Batman', vote: 1000, percentage: 6.25 },
      { name: 'Superman', vote: 1000, percentage: 6.25 },
      { name: 'Wonder Woman', vote: 5000, percentage: 31.25 },
      { name: 'The Flash', vote: 1000, percentage: 6.25 }
    ]);
  });
});