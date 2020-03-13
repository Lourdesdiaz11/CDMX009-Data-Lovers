// importamos la función `example`
import pokemons from '../src/data.js';

describe('pokemons.filterType', () => {

    it('should be a function', () => {
      expect(typeof pokemons.filterType).toBe('function');
    });
}
