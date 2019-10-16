import { put , takeEvery } from 'redux-saga/effects';
import * as LoginAction from '../domain/login/LoginAction';
import * as ProductsActions from '../Products/ProductsActions';
import LoginConstants from '../domain/login/LoginConstants';
import *as SignUpAction from '../domain/signUp/SignUpAction';
import SignUpConstants from '../domain/signUp/SignUpConstants'; 
import ProductsConstants from '../Products/ProductsConstants';

export function* WatchAll() {
	yield [
		// All Products
		takeEvery(ProductsConstants.GET_ALL_PRODUCTS_BY_DEMOGRAPHIC_SAGA, getAllDemographic),
		takeEvery(ProductsConstants.GET_ALL_PRODUCTS_BY_DEMOGRAPHIC_AND_TYPE_SAGA, getAllDemographicAndType),
		takeEvery(ProductsConstants.GET_ALL_PRODUCTS_BY_DEMOGRAPHIC_AND_CATEGORY_SAGA, getAllDemographicAndCategory),

		takeEvery(LoginConstants.HANDLESUBMIT_SAGA, setLogin),
		// Popular Products Sagas
		takeEvery(ProductsConstants.GET_POPULAR_PRODUCTS_SAGA, getPopularProducts),
		takeEvery(ProductsConstants.GET_POPULAR_PRODUCTS_BY_DEMOGRAPHIC_SAGA, getPopularDemographic),
		takeEvery(ProductsConstants.GET_POPULAR_PRODUCTS_BY_DEMO_AND_CATEGORY_SAGA, getPopularDemoCategory),
		takeEvery(ProductsConstants.GET_POPULAR_PRODUCTS_BY_DEMO_AND_TYPE_SAGA, getPopularDemoType),
		// New Product Sagas
		takeEvery(ProductsConstants.GET_NEW_PRODUCTS , getNewProducts),
		takeEvery(ProductsConstants.GET_NEW_PRODUCTS_DEMOGRAPHIC, getNewProductsDemographic),
		takeEvery(ProductsConstants.GET_NEW_PRODUCTS_DEMOGRAPHIC_TYPE, getNewProductsDemographicType),
		takeEvery(LoginConstants.HANDLESUBMIT_SAGA , setLogin),
		takeEvery(SignUpConstants.SIGNUP_CUSTOMERSAGA , insertCustomer),
		takeEvery(ProductsConstants.GET_NEW_PRODUCTS_CATEGORY, getNewProductsCategory),

	];
}

export function* setLogin(action) {
	let myHeaders = new Headers({
		'Content-Type': 'application/json',
		'mode': 'cors'
	});
	let payload = yield fetch('http://localhost:8080/login', {
		method: 'POST', 
		headers: myHeaders,
		body: JSON.stringify(
			{
				emailAddress: action.email,
				password: action.password
			}
		) 
	})
		.then(res =>  {
			if(!res.ok) {
				throw Error(res.statusText);
			}
			
			return res.headers.get('Authorization');
		})
		.then(data => {
			
			return data;
		}).catch(err => {
			
		});
	if(payload !== undefined) {
		console.log(payload);
		yield put(LoginAction.handleToken(payload));
	} else {
		yield put(LoginAction.handleError('Incorrect Email or Password'));
	}
	
}


function * insertCustomer(action) {
	let myHeaders = new Headers({
		'Content-Type': 'application/json'
	});

	let payload = yield fetch('http://localhost:8080/customers/sign-up', {
		method: 'POST', 
		headers: myHeaders,
		body: JSON.stringify(action.customer) 
		
		
	})
		.then(res =>  {
			if(!res.ok) {
				throw Error(res.statusText);
			}
			return res.json();
		})
		.then(data => {
			
			return data;
		}).catch(err => console.log(err));
	

	if(payload !== undefined ) {
		
		yield put(SignUpAction.SignUpCustomer(payload));
		
	}
	else {
		yield put(SignUpAction.handleSignupError('All fields are required')); 
	}
	
}

//Popular Products
export function* getPopularProducts() {
	let myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');
	myHeaders.append('mode', 'cors');

	let payload = yield fetch('http://localhost:8080/products/popular', {
		method: 'GET',
		headers: myHeaders
	})
		.then(res => {
			if(!res.ok) {
				throw Error(res.statusText);
			}
			return res.json();
		})
		.then(data => data)
		.catch(err => console.log(err));
	if(payload !== undefined) {
		yield put(ProductsActions.getPopularProducts(payload));
	} else {
		yield put(ProductsActions.handleError('Popular Products not displayed. Server error'));
	}
}

export function* getPopularDemographic(action) {
	let myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');
	myHeaders.append('mode', 'cors');
	let payload = yield fetch(`http://localhost:8080/products/popular_demographic?demographic=${action.demographic}`, {
		method: 'GET',
		headers: myHeaders
	})
		.then(res => {
			if(!res.ok) {
				throw Error(res.statusText);
			}
			return res.json();
		})
		.then(data => data)
		.catch(err => console.log(err));
	if(payload !== undefined) {
		yield put(ProductsActions.getPopularProductsDemographic(payload));
	} else {
		yield put(ProductsActions.handleError('Popular Products not displayed. Server error'));
	}
}

export function* getNewProductsDemographicType(action) {
	let answer = '';
	let myHeaders = new Headers({
		'Content-Type': 'application/json',
		'mode': 'cors'
	});
	let data = yield fetch(`http://localhost:8080/products/new/${action.demographic}/${action.ptype}`, {		
		method: 'GET',
		headers: myHeaders
	} ).then((response) => {
		console.log(response);
		if (!response.ok) { throw response; }
		return response.json();
	}).then((data)  => {
		console.log(data);
		return data;
	}).catch( err => {
		answer = `There was an error ${err}` ;	
	});
	yield put(ProductsActions.getResponse(answer));
	yield put(ProductsActions.getData(data));
}

export function* getPopularDemoCategory(action) {
	let myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');
	myHeaders.append('mode', 'cors');

	let payload = yield fetch(`http://localhost:8080/products/popular_demographic_category?demographic=${action.demographic}&category=${action.category}`, {
		method: 'GET',
		headers: myHeaders
	})
		.then(res => {
			if(!res.ok) {
				throw Error(res.statusText);
			}
			return res.json();
		})
		.then(data => data)
		.catch(err => console.log(err));
	if(payload !== undefined) {
		yield put(ProductsActions.getPopularProductsDemoCategory(payload));
	} else {
		yield put(ProductsActions.handleError('Popular Products not displayed. Server error'));
	}
}



export function* getPopularDemoType(action) {
	let myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');
	myHeaders.append('mode', 'cors');
	let payload = yield fetch(`http://localhost:8080/products/popular_demographic_type?demographic=${action.demographic}&type=${action.productType}`, {
		method: 'GET',
		headers: myHeaders
	})
		.then(res => {
			if(!res.ok) {
				throw Error(res.statusText);
			}
			return res.json();
		})
		.then(data => data)
		.catch(err => console.log(err));
	if(payload !== undefined) {
		yield put(ProductsActions.getPopularProductsDemoType(payload));
	} else {
		yield put(ProductsActions.handleError('Popular Products not displayed. Server error'));
	}
}

	
// New Products
export function* getNewProducts() {
	let answer = '';
	let myHeaders = new Headers({
		'Content-Type': 'application/json',
		'mode': 'cors'
	});
	let data = yield fetch('http://localhost:8080/products/new', {		
		method: 'GET',
		headers: myHeaders
	} ).then((response) => {
		if (!response.ok) { throw response; }
		return response.json();
	}).then((data)  => {
		console.log(data);
		return data;
	}).catch( err => {
		answer = `There was an error ${err}` ;	
	});
	yield put(ProductsActions.getResponse(answer));
	yield put(ProductsActions.getData(data));
}

export function* getNewProductsDemographic(action) {
	let answer = '';
	let myHeaders = new Headers({
		'Content-Type': 'application/json',
		'mode': 'cors'
	});
	let data = yield fetch(`http://localhost:8080/products/new/${action.demographic}`, {		
		method: 'GET',
		headers: myHeaders
	} ).then((response) => {
		if (!response.ok) { throw response; }
		return response.json();
	}).then((data)  => {
		console.log(data);
		return data;
	}).catch( err => {
		answer = `There was an error ${err}` ;	
	});
	yield put(ProductsActions.getResponse(answer));
	yield put(ProductsActions.getData(data));
}

//All Products

export function* getAllDemographic(action) {
	let answer = '';
	let myHeaders = new Headers({
		'Content-Type': 'application/json',
		'mode': 'cors'
	});
	let data = yield fetch(`http://localhost:8080/products/all_product_demographic?demographic=${action.demographic}`, {
		method: 'GET',
		headers: myHeaders
	}).then((response) => {
		console.log(response);
		if (!response.ok) {
			throw response;
		}
		return response.json();
	}).then((data) => {
		console.log(data);
		return data;
	}).catch(err => {
		answer = `There was an error ${err}`;
	});
	yield put(ProductsActions.getResponse(answer));
	yield put(ProductsActions.getAllProductsByDemographic(data));
}



export function* getNewProductsCategory(action) {
	let answer = '';
	let myHeaders = new Headers({
		'Content-Type': 'application/json',
		'mode': 'cors'
	});
	let data = yield fetch(`http://localhost:8080/products/new/category/${action.demographic}/${action.category}`, {
		method: 'GET',
		headers: myHeaders
	}).then((response) => {
		if (!response.ok) {
			throw response;
		}
		return response.json();
	}).then((data) => {
		console.log(data);
		return data;
	}).catch(err => {
		answer = `There was an error ${err}`;
	});
	yield put(ProductsActions.getResponse(answer));
	yield put(ProductsActions.getData(data));
}



export function* getAllDemographicAndType(action) {
	let answer = '';
	let myHeaders = new Headers({
		'Content-Type': 'application/json',
		'mode': 'cors'
		});
	let data = yield fetch(`http://localhost:8080/products/all_product_type?demographic=${action.demographic}&type=${action.productType}`, {
		method: 'GET',
		headers: myHeaders
	}).then((response) => {
		console.log(response);
		if (!response.ok) {
			throw response;
		}
		return response.json();
	}).then((data)  => {
		console.log(data);
		return data;
	}).catch( err => {
		answer = `There was an error ${err}` ;	
	});
	yield put(ProductsActions.getAllProductsByDemographicAndType(data));
}




export function* getAllDemographicAndCategory(action) {
	let answer = '';
	let myHeaders = new Headers({
		'Content-Type': 'application/json',
		'mode': 'cors'
	});
	let data = yield fetch(`http://localhost:8080/products/all_product_category?demographic=${action.demographic}&category=${action.category}`, {
		method: 'GET',
		headers: myHeaders
	}).then((response) => {
		console.log(response);
		if (!response.ok) {
			throw response;
		}
		return response.json();
	}).then((data) => {
		console.log(data);
		return data;
	}).catch(err => {
		answer = `There was an error ${err}`;
	});
	yield put(ProductsActions.getAllProductsByDemographicAndCategory(data));
}