const ingredients = require('../../fixtures/ingredients.json');
const R = require('ramda');

const cook = (ingredient) => R.merge(ingredient, { state: 'cooked' });
const cooked = ingredients.map(cook);

console.log('Cooked ingredients: ', cooked);
console.log('Original ingredients (NON mutated): ', ingredients);