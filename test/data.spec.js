// importamos la función `example`
import pokemons from '../src/data.js';

describe('pokemons', () => {

  it('should be an object', () => {
    expect(typeof pokemons).toBe('object');
  });
}
