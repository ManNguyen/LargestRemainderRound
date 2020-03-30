(function () {

    if (typeof Array.prototype[""] !== "function") {
        Array.prototype["spread"] = function (totalSeat) {
            totalSeat = totalSeat || 100;
            if (this.length == 0) return [];
            if (this.find(x => (typeof x !== 'number') || (x < 0))

            ) {
                throw new Error("This is not an array of positive numbers");
            }

            var sum = this.reduce((s, i) => s + i, 0);

            var getRemainder = (a) => (a - Math.floor(a)).toFixed(4);

            var result = this.map(function (num, index) {
                var seats = (num / sum) * totalSeat;
                return {
                    floor: Math.floor(seats),
                    remainder: getRemainder(seats),
                    index: index
                };
            }).sort(function (a, b) {
                return b.remainder - a.remainder;
            });

            var lowerSum = result.reduce(function (sum, current) {
                return sum + current.floor;
            }, 0);

            var delta = totalSeat - lowerSum;
            for (var i = 0; i < delta; i++) {
                result[i].floor++;
            }

            return result.sort(function (a, b) {
                return a.index - b.index;
            }).map(function (result) {
                return result.floor;
            });
        };
    } else {
        throw new Error("Array.prototype.spread(...) already exists");
    }
})();