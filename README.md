# Largest Remainder Round
Add a `spread`  function to the array object which "spread" the number array in such way that the total amount is exact without changing the percentage of each element. The "spread" action uses the [Largest Remainder Method](https://en.wikipedia.org/wiki/Largest_remainder_method). 

`spread` is useful when you want to get the percentage of a number array and keep the total percentage at 100.


## Installation

a) Use the Node package manager [npm](https://www.npmjs.com/package/largest-remainder-round) to install.

```bash
npm i largest-remainder-round
```


b) Use CDN

`<script src="https://unpkg.com/largest-remainder-round"></script>`

## Usage

```javascript
require ('largest-remainder-round');

var arr = [1000,1000,5000,1000]

arr.spread() // returns [13, 13, 62, 12]
arr.spread(50) // returns [7, 6, 31, 6]
arr.spread(1000) // returns [125, 125, 625, 125]

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
