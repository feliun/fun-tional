const R = require('ramda');

const ingredients = require('../../fixtures/ingredients.json');

const changeState = R.curry((state, ingredient) => R.merge(ingredient, { state }));

const toExpire = changeState('expire'); // highly reusable!
const toRaw = changeState('raw');
const toCook = changeState('cooked');

const expire = R.map(toExpire); // map curried as well
const create = R.map(toRaw);
const cook = R.map(toCook);

// Super easy to mix and match!
console.log('Raw ingredients: ', create(ingredients));
console.log('Cooked ingredients: ', cook(ingredients));
console.log('Expired ingredients: ', expire(ingredients));
console.log('Original ingredients (NON mutated): ', ingredients);