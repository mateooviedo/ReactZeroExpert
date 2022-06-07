import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('GifGridItem component', () => {
	const title = 'un titulo';
	const url = 'url image';
	const wrapper = shallow(<GifGridItem title={title} url={url} />);

	test('Should show the component correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Should it has a paragraph in the title', () => {
		const p = wrapper.find('p');
		expect(p.text()).toBe(title);
	});
});
