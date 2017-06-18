// we specify WHAT, not how (declarative)
// fewer lines of code

const ingredients = require('../../fixtures/ingredients.json');

const justVeggies = (ingredient) => ingredient.type === 'vegetable';

const vegetables = ingredients.filter(justVeggies);

console.log('Vegetables: ', vegetables);