import '@testing-library/jest-dom'; // to get all test auto
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02', () => {
	test('Prueba en el metodo getSaludo', () => {
		const nombre = 'Fernando';

		const saludo = getSaludo(nombre);

		expect(saludo).toBe(`Hola ${nombre}`);
	});

	test('getSaludo debe retornal Hola Carlos, si no hay argumento nombre', () => {
		const saludo = getSaludo();

		expect(saludo).toBe(`Hola Carlos`);
	});
});
