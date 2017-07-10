const R = require('ramda');
const ingredients = require('../../fixtures/ingredients.json');

// used already
const join = (total, ingredient) => total.concat(ingredient.name + '\n');
const changeState = R.curry((state, ingredient) => R.merge(ingredient, { state }));
const toCook = changeState('cook');

// These 2 could be generalised with the function below (byType)
// const isMeat = (ingredient) => ingredient.type === 'meat';
// const isDairy = (ingredient) => ingredient.type === 'dairy';

const byType = R.curry((type, ingredient) => ingredient.type === type);

// only composing them
const cook = R.pipe(
    R.map(toCook),
    R.reduce(join, '\n')
);

const cookRegular = cook;

// Equivalent below
// const cookVeggie = R.pipe(
//     R.reject(isMeat),
//     cook
// );

const cookVeggie = R.pipe(
    R.reject(byType('meat')),
    cook
);

// Equivalent below
// const cookVegan = R.pipe(
//     R.reject(isMeat),
//     R.reject(isDairy),
//     cook
// );

const cookVegan = R.pipe(
    R.reject(byType('dairy')),
    cookVeggie
);


console.log('Regular burger:', cookRegular(ingredients));
console.log('Veggie burger:', cookVeggie(ingredients));
console.log('Vegan burger:', cookVegan(ingredients));