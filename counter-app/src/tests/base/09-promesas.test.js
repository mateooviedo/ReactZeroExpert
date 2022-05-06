import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {
	test('getHeroeByIdAsync debe de retornar un Heroe Async', (done) => {
		const id = 1;
		getHeroeByIdAsync(id).then((heroe) => {
			expect(heroe).toEqual(heroes[0]);
			done();
		});
	});

	test('Debe de obtener un error si el heroe por id no existe', (done) => {
		const id = 10;
		getHeroeByIdAsync(id).catch((err) => {
			expect(err).toBe('No se pudo encontrar el héroe');
			done();
		});
	});
});
