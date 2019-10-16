import { combineReducers } from 'redux';
import LoginReducer from '../domain/login/LoginReducers.jsx';
import FooterReducer from '../footer/FooterReducer.jsx';
import SignUpReducer from '../domain/signUp/SignUpReducers.jsx';
import ProductsReducer from '../Products/ProductsReducer';
const defaultReducers = combineReducers({
	login: LoginReducer,
	footer: FooterReducer,
	customer:SignUpReducer,
	products: ProductsReducer
	
});

export default defaultReducers;