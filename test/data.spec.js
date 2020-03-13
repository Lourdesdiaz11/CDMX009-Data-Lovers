import pokemons from '../src/data.js';

describe('pokemons', () => {
  it('should be an object', () => {
    expect(typeof pokemons).toBe('object');
  });
  describe('pokemons.filterType', () => {
    it('should be a function', () => {
      expect(typeof pokemons.filterType).toBe('function');
    });
  });
  describe('pokemons.sortbyNameAZ', () => {
    it('should be a function', () => {
      expect(typeof pokemons.sortbyNameAZ).toBe('function');
    });
  });
});
