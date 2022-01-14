const sum = require('./sum');

describe('function "sum" test suite', () => {
  it('returns 9 if it receives (4, 5) as arguments', () => {
    expect(sum(4, 5)).toBe(9);
  });
  
  it('returns 0 if it receives (0, 0) as arguments', () => {
    expect(sum(0, 0)).toBe(0);
  });
  
  it('throws an error if it receives (4, "5") as arguments', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });
  
  it('throws an error with the message "parameters must be numbers" if it receives (4, "5") as arguments', () => {
    expect(() => { sum(4, '5') }).toThrow('parameters must be numbers');
  });
});
