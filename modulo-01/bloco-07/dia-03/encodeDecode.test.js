const { encode, decode } = require('./encodeDecode');

describe('function "encode" test suite', () => {
  it('exists as a function', () => {
    expect(typeof(encode)).toEqual('function');
  });

  it('returns the passed argument with all of the vowels replaced by numbers, and all other characters unchanged', () => {
    expect(encode('questionably')).toEqual('q52st34n1bly');
  });

  it('returns a string with the same amount of characters as the passed argument', () => {
    expect(encode('supercalifragilisticexpialidocious').length).toEqual(34);
  });
});

describe('function "decode" test suite', () => {
  it('exists as a function', () => {
    expect(typeof(decode)).toEqual('function');
  });

  it('returns the passed argument with all of the numbers replaced by vowels, and all other characters unchanged', () => {
    expect(decode('3nst1nt1n245sly')).toEqual('instantaneously');
  });

  it('returns a string with the same amount of characters as the passed argument', () => {
    expect(decode('ll1nf13rpwllgwyngyllg4g2rychwyrndr4bwllll1ntys3l34g4g4g4ch').length).toEqual(58);
  });
});
