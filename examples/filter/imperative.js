// we specify instructions (how)
// more verbose, and therefore more prone to error
// harder to reuse and to maintain

const ingredients = require('../../fixtures/ingredients.json');

const vegetables = [];

for (let i=0; i<ingredients.length; i++) {
    if (ingredients[i].type === 'vegetable') {
        vegetables.push(ingredients[i]);
    }
};

console.log('Vegetables: ', vegetables);