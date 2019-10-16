// import React from 'react';
// import Enzyme from 'enzyme';
// import PopularProducts from '../../Products/PopularProducts';
// import Adapter from 'enzyme-adapter-react-16';
// import { mount, shallow } from 'enzyme';
// import { Provider } from 'react-redux';
// import store from '../../store/store.jsx';

// Enzyme.configure({ adapter: new Adapter() });
// test('The PopularProducts renders', () => {
// 	const wrapper = mount(<Provider store={store}><PopularProducts /></Provider>);
// 	expect(shallow(<Provider store={store}><PopularProducts /></Provider>).exists()).toBe(true);

// 	it('should render the component', () => {
// 		expect(wrapper.find('#popularProducts'));
// 	});
// });