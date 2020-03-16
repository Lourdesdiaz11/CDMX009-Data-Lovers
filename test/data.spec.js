import pokemons from '../src/data.js';

describe('pokemons', () => {
  it('should be an object', () => {
    expect(typeof pokemons).toBe('object');
  });
  describe('pokemons.filterType', () => {
    it('should be a function', () => {
      expect(typeof pokemons.filterType).toBe('function');
    });
    it('should return "3" for "Type:Dragon"', () => {
      expect(pokemons.filterType('Dragon')).toHaveLength(3);
    });
  });
  describe('pokemons.sortbyNameAZ', () => {
    it('should be a function', () => {
      expect(typeof pokemons.sortbyNameAZ).toBe('function');
    });
  });
});
