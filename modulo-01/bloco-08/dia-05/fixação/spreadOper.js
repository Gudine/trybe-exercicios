const specialFruit = ['Apple', 'Orange', 'Banana'];

const additionalItens = ['Melon', 'Plum', 'Pear'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));
