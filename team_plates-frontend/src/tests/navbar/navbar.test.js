import React from 'react';
import Enzyme from 'enzyme';
import Navbar from '../../navbar/Navbar.jsx';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });


test('The slideshow component displays', () => {
	expect(shallow(<Navbar />).exists()).toBe(true);

	it('should render 1 <div />', () => {
		expect(wrapper.find('div').length).toEqual(1);
	});
});
