const ingredients = require('../../fixtures/ingredients.json');

let veggie = '\n';

for (let i=0; i<ingredients.length; i++) {
    if (ingredients[i].type === 'vegetable' 
        || ingredients[i].type === 'other'
        || ingredients[i].type === 'dairy') {
        veggie += ingredients[i].name + '\n';
    }
};

console.log('Veggie burger:', veggie);