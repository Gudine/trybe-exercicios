const service = require('./service');

it('is called', () => {
  service.randomNumberGenerator = jest.fn();
  service.randomNumberGenerator();
  expect(service.randomNumberGenerator).toBeCalled();
});

it('returns the expected number', () => {
  service.randomNumberGenerator = jest.fn().mockReturnValue(10);
  expect(service.randomNumberGenerator()).toBe(10);
});

it('is called multiple times', () => {
  service.randomNumberGenerator = jest.fn();
  service.randomNumberGenerator();
  service.randomNumberGenerator();
  service.randomNumberGenerator();
  expect(service.randomNumberGenerator).toBeCalledTimes(3);
});

it('works with another implementation', () => {
  service.randomNumberGenerator = jest.fn().mockReturnValue(10)
    .mockImplementationOnce((a, b) => a / b);
  const result = service.randomNumberGenerator(2, 5);
  expect(service.randomNumberGenerator).toBeCalledTimes(1);
  expect(service.randomNumberGenerator).toBeCalledWith(2, 5);
  expect(result).toBe(0.4);

  const result2 = service.randomNumberGenerator(2, 5);
  expect(result2).toBe(10);
});

it('works with a third implementation', () => {
  service.randomNumberGenerator = jest.fn()
    .mockImplementation((a, b, c) => a * b * c);
  const result = service.randomNumberGenerator(2, 5, 8);
  expect(service.randomNumberGenerator).toBeCalledTimes(1);
  expect(service.randomNumberGenerator).toBeCalledWith(2, 5, 8);
  expect(result).toBe(80);

  service.randomNumberGenerator = jest.fn()
    .mockImplementation((a) => a * 2);
  const result2 = service.randomNumberGenerator(2, 5, 8);
  expect(service.randomNumberGenerator).toBeCalledWith(2, 5, 8);
  expect(result2).toBe(4);
});

it('works with three other functions', () => {
  const mockUpper = jest.spyOn(service, 'toUpper')
    .mockImplementation((str) => str.toLowerCase());
  service.firstLetter = jest.fn()
    .mockImplementation((str) => str[str.length - 1]);
  service.concat = jest.fn()
    .mockImplementation((str1, str2, str3) => str1 + str2 + str3);

  expect(service.toUpper('tEsTe')).toBe('teste');
  expect(service.firstLetter('teste')).toBe('e');
  expect(service.concat('ab', 'ac', 'us')).toBe('abacus');

  service.toUpper.mockRestore();

  expect(service.toUpper('tEsTe')).toBe('TESTE');
});
