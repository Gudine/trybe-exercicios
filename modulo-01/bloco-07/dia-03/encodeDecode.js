function lookupTable(input, table) {
  if (input in table) {
    return table[input];
  }
  return input;
}

function encode(sentence) {
  let table = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let outString = '';

  for (let x of sentence) {
    outString += lookupTable(x, table);
  }

  return outString;
}

function decode(sentence) {
  let table = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  let outString = '';

  for (let x of sentence) {
    outString += lookupTable(x, table);
  }

  return outString;
}

module.exports = { encode, decode };
