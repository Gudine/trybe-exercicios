const createEmployee = (name) => ({
  nomeCompleto: name,
  email: `${name.toLowerCase().replace(" ", "_")}@trybe.com`,
});

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(createEmployee));

const isWinner = (guess, result) => guess === result;

const lottery = (guess, callback) => {
  const result = Math.floor(Math.random() * 5) + 1;
  return callback(guess, result) ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(lottery(2,isWinner));

const verifyAnswers = (answers, attempts) => {
  let result = 0;
  attempts.forEach((item, i) => {
    if (answers[i] === item) {
      result += 1;
    } else if (item !== 'N.A') {
      result -= .5;
    }
  });
  return result;
}

const totalPoints = (answers, attempts, callback) => {
  return callback(answers, attempts);
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log(totalPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyAnswers));
