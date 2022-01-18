const myFizzBuzz = require('./myFizzBuzz');

describe('function "myFizzBuzz" test suite', () => {
  it('returns "fizzbuzz" if it receives a number divisible by both 3 and 5', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });

  it('returns "fizz" if it receives a number divisible by 3 and not divisible by 5', () => {
    expect(myFizzBuzz(21)).toEqual('fizz');
  });

  it('returns "buzz" if it receives a number divisible by 5 and not divisible by 3', () => {
    expect(myFizzBuzz(25)).toEqual('buzz');
  });

  it('returns the passed argument if it receives a number divisible by neither 3 nor 5', () => {
    expect(myFizzBuzz(29)).toEqual(29);
  });

  it('returns false if it receives something that is not a number', () => {
    expect(myFizzBuzz('Lambda')).toEqual(false);
  });
});
