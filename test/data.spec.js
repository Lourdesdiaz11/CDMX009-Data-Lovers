import pokemons from '../src/data.js';

describe('pokemons', () => {
  it('should be an object', () => {
    expect(typeof pokemons).toBe('object');
  });
  describe('filterType', () => {
    it('should be a function', () => {
      expect(typeof filterType).toBe('function');
    });
  });
});
