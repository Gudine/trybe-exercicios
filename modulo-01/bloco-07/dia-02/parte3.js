const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addKeyValue = (obj, key, value) => obj[key] = value;
const listKeys = (obj) => Object.keys(obj);
const objectLength = (obj) => Object.keys(obj).length;
const listValues = (obj) => Object.values(obj);

addKeyValue(lesson2, 'turno', 'noite');
console.log(`${lesson2}
${listKeys(lesson2)}
${objectLength(lesson2)}
${listValues(lesson2)}
`);

const allLessons = {
  lesson1: Object.assign({}, lesson1),
  lesson2: Object.assign({}, lesson2),
  lesson3: Object.assign({}, lesson3),
}

console.log(allLessons);

const totalStudents = (lessons) => {
  let result = 0;
  for (let lesson of Object.values(lessons)) {
    result += lesson.numeroEstudantes;
  }
  return result;
}

console.log(totalStudents(allLessons));

const getValueByNumber = (obj, index) => Object.values(obj)[index];

console.log(getValueByNumber(lesson1, 0));

const verifyPair = (obj, key, value) => Object.keys(obj).includes(key) && obj[key] === value;

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
