import React from 'react';
import Enzyme from 'enzyme';
import Footer from '../../footer/Footer.jsx';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store/store.jsx';


Enzyme.configure({ adapter: new Adapter() });

test('Footer Component calls handleSubmit when sign up buttton is clicked', () => {
	const handleSubmit = jest.fn();
	const wrapper = mount(
		<Provider store={store}><Footer handleSubmit={handleSubmit} /></Provider>
	);
	const p = wrapper.find('#button');
	p.simulate('click');
	expect(handleSubmit).toHaveBeenCalled;
});

test('Footer Component calls handleChange when input is added to signup', () => {
	const handleChange = jest.fn();
	const wrapper = mount(
		<Provider store={store}><Footer handleChange={handleChange} /></Provider>
	);
	const p = wrapper.find('#emailInput');
	p.simulate('change');
	expect(handleChange).toHaveBeenCalled;
});

