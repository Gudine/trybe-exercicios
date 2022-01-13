const updateObject = (obj, newKey, newValue) => {
  obj[newKey] = newValue;
  return obj;
};

console.log(updateObject({}, 'name', 'Guilherme'));

/***************************************************/
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => Object.keys(student).forEach((key) => console.log(`${key}, Nível: ${student[key]}`));

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);

/***************************************************/
const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);

/* for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
}; */

pairKeyValue.forEach(([key, value]) => console.log(`--------
País: ${key}
Capital: ${value}`));

/***************************************************/
const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);
