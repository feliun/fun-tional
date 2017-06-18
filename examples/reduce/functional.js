const ingredients = require('../../fixtures/ingredients.json');

// portable, encapsulated, useful in other reduce fns
const join = (total, ingredient) => total.concat(ingredient.name + '\n');

const burger = ingredients.reduce(join, '\n');

console.log('Burger:', burger);