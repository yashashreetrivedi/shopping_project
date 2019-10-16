import React from 'react';
import Enzyme from 'enzyme';
import Login from '../../domain/login/Login.jsx';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store/store.jsx';



Enzyme.configure({ adapter: new Adapter() });

test('Login Component calls handleLogin when email is input', () => {
	const handleLogin = jest.fn();
	const wrapper = mount(
		<Provider store={store}><Login handleLogin={handleLogin} /></Provider>
	);
	const p = wrapper.find('#email');
	p.simulate('change');
	expect(handleLogin).toHaveBeenCalled;
});

test('The login component displays', () => {
	expect(shallow(<Provider store={store}><Login /></Provider>).exists()).toBe(true);

	it('should render 1 <div />', () => {
		expect(wrapper.find('div').length).toEqual(1);
	});
});