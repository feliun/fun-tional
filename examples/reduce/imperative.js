const ingredients = require('../../fixtures/ingredients.json');

let burger = '\n';

for (let i=0; i<ingredients.length; i++) {
    burger += ingredients[i].name + '\n';
};

console.log('Burger:', burger);