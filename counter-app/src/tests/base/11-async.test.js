import { getImagen } from '../../base/11-async-await';

describe('Pruebas con async-await fetch', () => {
	test('Debe de retornar el url con la imagen', async () => {
		const url = await getImagen();

		expect(url.includes('https://')).toBe(true);
	});
});
