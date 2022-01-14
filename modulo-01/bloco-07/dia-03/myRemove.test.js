const myRemove = require('./myRemove');

describe('function "myRemove" test suite', () => {
  it('returns [1, 2, 4] if it receives ([1, 2, 3, 4], 3) as arguments', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('does not return [1, 2, 3, 4] if it receives ([1, 2, 3, 4], 3) as arguments', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('returns [1, 2, 3, 4] if it receives ([1, 2, 3, 4], 5) as arguments', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
