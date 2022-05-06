import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {
	let wrapper; // undefined

	beforeEach(() => {
		wrapper = shallow(<CounterApp />);
	});

	test('Debe de mostrar <CounterApp /> correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe de mostrar el valor de 100 enviado por props', () => {
		const wrapper = shallow(<CounterApp value={100} />);

		const textoParrafo = wrapper.find('h2').text();
		expect(textoParrafo).toBe(' 100 ');
	});

	// Test click event
	test('Debe de incrementar con el boton +1', () => {
		wrapper.find('button').at(0).simulate('click');
		const counterText = wrapper.find('h2').text();

		expect(counterText).toBe(' 11 ');
	});

	test('Debe de resetear el valor a 10', () => {
		wrapper.find('button').at(0).simulate('click');

		wrapper.find('button').at(1).simulate('click');
		const counterText = wrapper.find('h2').text();

		expect(counterText).toBe(' 10 ');
	});
});
