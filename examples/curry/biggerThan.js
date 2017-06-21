const R = require('ramda');

const biggerThan = R.curry((ref, num) => num > ref);

const biggerThan6 = biggerThan(6);

const items = [ 3, 5, 7, 8, 9, 12, 1, 0 ];

const isBiggerThan6 = R.filter(biggerThan6); // filter is curried as well

const big = isBiggerThan6(items);

console.log(big);
