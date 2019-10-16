import React from 'react';
import Enzyme from 'enzyme';
import Home from '../../home/Home.jsx';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import wrapper from 'jest';
import store from '../../store/store.jsx';


Enzyme.configure({ adapter: new Adapter() });

test('The Home component displays', () => {

	expect(shallow(<Provider store={store}><Home /></Provider>).exists()).toBe(true), 

	it('should render 1 <div />', () => {
		expect(wrapper.find('div').length).toEqual(1);
	});
});