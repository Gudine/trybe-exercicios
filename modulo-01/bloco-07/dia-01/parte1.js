const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  //console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}

testingScope(true);

/**********************************************/

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const manualSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = 0; j < arr.length - 1 - i; j += 1) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
};

// console.log(`Os números ${manualSort(oddsAndEvens).join()} se encontram ordenados de forma crescente!`);

console.log(`Os números ${oddsAndEvens.sort((a,b) => a-b).join()} se encontram ordenados de forma crescente!`);