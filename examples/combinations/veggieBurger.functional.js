const ingredients = require('../../fixtures/ingredients.json');
const R = require('ramda');

// portable, encapsulated, useful in other reduce fns
const join = (total, ingredient) => total.concat(ingredient.name + '\n');

const isMeat = (ingredient) => ingredient.type === 'meat';

const veggie = R.reduce(join, '\n', R.reject(isMeat, ingredients));

console.log('Veggie burger:', veggie);