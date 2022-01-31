const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Função uppercase retorna um texto com todas as letras maiúsculas', (done) => {
  const testCallback = (str) => {
    try {
      expect(str).toBe('SUPERMAN')
      done();
    } catch(error) {
      done(error);
    }
  }
  uppercase('superman', testCallback);
});
