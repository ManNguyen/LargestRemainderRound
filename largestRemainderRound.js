(function () {
    var getRemainder = (a) => {
        return (a - Math.floor(a)).toFixed(4)
    };

    function spread(totalSeats, decimalNum){
        totalSeats = totalSeats || 100;
        decimalNum = decimalNum || 0;
        
        if (this.length == 0) return [];
        if (this.find(x => (typeof x !== 'number') || (x < 0))) {
            throw new Error("This is not an array of positive numbers");
        }

        if(decimalNum > 0) {
            var multi = Math.pow(10,decimalNum);
            //call the spread no decimal against multi of total seats
            var powSpread = spread.call(this,totalSeats*multi,0);
            return powSpread.map(e=>e/multi);
        }

        var sum = this.reduce((s, i) => s + i, 0);
        //1. distribute default seats and prioritize the party with high remainder
        var seatDistribution = this.map(function (num, index) {
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

    };
    if (typeof Array.prototype[""] !== "function") {
        Array.prototype["spread"] = spread;
    } else {
        throw new Error("Array.prototype.spread(...) already exists");
    }
})();