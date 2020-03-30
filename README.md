# Largest Remainder Round
Add a `spread`  function to the array object to scale the number array in such way that the total amount is exact and the percentage of each element is unchanged using the [Largest Remainder Method](https://en.wikipedia.org/wiki/Largest_remainder_method). It's helpful when you want to convert to percentage the number array and want to keep the total sum at 100.


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
