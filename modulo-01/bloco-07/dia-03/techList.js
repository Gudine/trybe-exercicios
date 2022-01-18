const techList = (array, name) => array.length === 0 ? 'Vazio!' : array.slice().sort().map((tech) => ({tech, name}));

module.exports = techList;
