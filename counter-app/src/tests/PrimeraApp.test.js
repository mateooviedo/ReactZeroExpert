import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
// import { render } from '@testing-library/react';

import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraAPP />', () => {
	// test('Demostrar el mensaje hola soy goku', () => {
	// 	const saludo = 'Hola soy goku';
	// 	const { getByText } = render(<PrimeraApp saludo={saludo} />);
	//
	// 	expect(getByText(saludo)).toBeInTheDocument();
	// });
	test('Debe de mostrar <PrimeraApp /> correctamente', () => {
		const wrapper = shallow(<PrimeraApp saludo="Hola soy goku" />);

		expect(wrapper).toMatchSnapshot();
	});

	test('Debe de mostrar el subtitulo enviado por props', () => {
		const wrapper = shallow(
			<PrimeraApp saludo="Hola soy goku" subtitulo="Soy un subtitulo" />
		);

		// find = querySelector
		const textoParrafo = wrapper.find('p').text();
		expect(textoParrafo).toBe("Soy un subtitulo");
	});
});
