// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./get-pokemon-details");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const testCallback = (err, message) => {
      try {
        expect(err).toEqual(Error('Não temos esse pokémon para você :('));
        done();
      } catch(error) {
        done(error);
      }
    }
    getPokemonDetails((pkmn) => pkmn.name === 'Espeon', testCallback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const testCallback = (err, message) => {
      try {
        expect(message).toBe('Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember');
        done();
      } catch(error) {
        done(error);
      }
    }
    getPokemonDetails((pkmn) => pkmn.ability === 'Ember', testCallback);
  });
});
