(function () {
    var getRemainder = (a) => {
        return (a - Math.floor(a)).toFixed(4)
    };

    function spreadNumberArr(numArr, totalSeats, decimalNum) {

        totalSeats = totalSeats || 100;
        decimalNum = decimalNum || 0;

        if (numArr.find(x => (typeof x !== 'number') || (x < 0))) {
            throw new Error("This is not an array of positive numbers");
        }

        if (decimalNum > 0) {
            var multi = Math.pow(10, decimalNum);
            //call the spread no decimal against multi of total seats
            var powSpread = spreadNumberArr(numArr, totalSeats * multi, 0);
            return powSpread.map(e => e / multi);
        }

        var sum = numArr.reduce((s, i) => s + i, 0);
        //1. distribute default seats and prioritize the party with high remainder
        var seatDistribution = numArr.map(function (num, index) {
            var seats = (num / sum) * totalSeats;
            return {
                seats: Math.floor(seats),
                remainder: getRemainder(seats),
                index: index
            };
        }).sort(function (a, b) {
            return b.remainder - a.remainder;
        });

        //2. get the total remain seats
        var takenSeats = seatDistribution.reduce((sum, current) => (sum + current.seats), 0);
        var totalRemains = totalSeats - takenSeats;

        // the total remains alway smaller tnan total parties
        for (var i = 0; i < totalRemains; i++) {
            seatDistribution[i].seats++;
        }

        return seatDistribution.sort((a, b) => (a.index - b.index)).map(a => a.seats);
    }

    function spreadObjArr(objArr, config) {
        var prop = config["prop"];
        var spreadTo = config["spreadTo"] || (prop + "_spread");

        var seats = config["seats"];
        var decimals = config["decimals"];


        var numArr_spread = spreadNumberArr(objArr.map(x => x[prop]), seats, decimals)

        return objArr.map((val, i) => {
            val[spreadTo] = numArr_spread[i];
            return val;

        });
    }

    // function getConfig(arg){
    //     if (typeof arg[0] === "string"){
    //         var propIndex = arg.findIndex( x => typeof x === "string");
    //         var prop = arg.splice(propIndex,1);





    //     }else{
    //         //if 1st arg is config object
    //         return arg[0];
    //     }
    // }
    function spread(...arg) {
        if (this.length == 0) return [];

        if (isNaN(arg[0]) && arg[0] != undefined) {


            //if 1st arg is config object
            return spreadObjArr(this, arg[0]);

        } else {
            return spreadNumberArr(this, arg[0], arg[1]);
        }


    };

    if (typeof Array.prototype[""] !== "function") {
        Array.prototype["spread"] = spread;
    } else {
        throw new Error("Array.prototype.spread(...) already exists");
    }
})();