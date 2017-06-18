// encourages data mutation

const ingredients = require('../../fixtures/ingredients.json');

const cooked = [];

for (let i=0; i<ingredients.length; i++) {
    const current = ingredients[i];
    current.state = 'cooked';
    cooked.push(current);
};

console.log('Cooked ingredients: ', cooked);
console.log('Original ingredients (mutated): ', ingredients);