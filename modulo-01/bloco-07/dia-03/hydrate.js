function hydrate(drinks) {
  const amount = [...drinks.matchAll(/\d+/g)].reduce((a, b) => parseInt(a) + parseInt(b));
  return `${amount} copo${amount > 1 ? 's' : ''} de água` ;
}

module.exports = hydrate;
