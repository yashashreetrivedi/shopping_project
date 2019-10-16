import React from 'react';
import Enzyme from 'enzyme';
import Kids from '../../domain/kids/Kids.jsx';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store/store.jsx';

Enzyme.configure({ adapter: new Adapter() });

test('The slideshow component displays', () => {
	expect(shallow(<Provider store={store}><Kids /></Provider>).exists()).toBe(true);
});
