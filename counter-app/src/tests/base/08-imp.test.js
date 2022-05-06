import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('08 test', () => {
	test('Debe retornar un herore por id', () => {
		const id = 1;
		const heroe = getHeroeById(id);

		const heroesData = heroes.find((h) => h.id === id);
		expect(heroe).toEqual(heroesData);
	});

	test('Debe retornar undefined si un herore no existe', () => {
		const id = 10;
		const heroe = getHeroeById(id);

		expect(heroe).toEqual(undefined);
	});

	test('Debe retornar un arreglo con los heroes de DC', () => {
		const dcOwner = 'DC';
		const dcHeroes = getHeroesByOwner(dcOwner);
		const dcDataHeroes = heroes.filter(h => h.owner === dcOwner);

		expect(dcHeroes).toEqual(dcDataHeroes);
	});

	test('Debe retornar un arreglo con los heroes de Marvel', () => {
		const marvelOwner = 'Marvel';
		const marvelHeroes = getHeroesByOwner(marvelOwner);

		expect(marvelHeroes.length).toBe(2);
	});
});
