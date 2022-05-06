import { getUser } from '../../base/05-funciones';

describe('Pruebas 05', () => {
	test('getUser debe retornar un objeto', () => {
		const userTest = {
			uid: 'ABC123',
			username: 'El_Papi1502'
		};
		const user = getUser();

		// El toEqual va a validar que el objeto tenga las mismas propiedades
		expect(user).toEqual(userTest);
	});
});
