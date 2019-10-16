import React from 'react';
import Enzyme from 'enzyme';
import Slideshow from '../../Products/NewProducts.jsx';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store/store.jsx';
import NewProducts from '../../Products/NewProducts.jsx';
import wrapper from 'jest';

Enzyme.configure({ adapter: new Adapter() });


test('The New Product component displays', () => {

	const wrapper = mount(
		<Provider store={store}><NewProducts /></Provider>
	);

	it('should render 1 <div />', () => {
		expect(wrapper.find('div').length).toEqual(1);
	});
	it('should render 2 images', () => {
		expect(wrapper.find('.image').length).toEqual(2);
	});
	it('should render 2 new products', () => {
		expect(wrapper.find('.NewProducts').length).toEqual(2);
	});
	wrapper.unmount();
});