import ProductsConstants from './ProductsConstants';

const initState = {
	popularProducts: [],
	allProducts: [],
	newProductsArr: [],
	return: '',
	error: ''
};

const ProductsReducer = (state = initState, action) => {
	switch(action.type) {
		// Popular Products Swtich Cases
		case ProductsConstants.GET_POPULAR_PRODUCTS: {
			return { ...state, popularProducts: action.payload, error: '' };
		}

		case ProductsConstants.GET_POPULAR_PRODUCTS_BY_DEMOGRAPHIC: {
			return { ...state, popularProducts: action.payload, error: '' };
		}	

		case ProductsConstants.GET_POPULAR_PRODUCTS_BY_DEMO_AND_CATEGORY: {
			return { ...state, popularProducts: action.payload, error: '' };
		}

		case ProductsConstants.GET_POPULAR_PRODUCTS_BY_DEMO_AND_TYPE: {
			return { ...state, popularProducts: action.payload, error: '' };
		}

		case ProductsConstants.HANDLE_ERROR: {
			return { ...state, popularProducts: [], error: action.error };
		}

		// All Products
		case ProductsConstants.GET_ALL_PRODUCTS_BY_DEMOGRAPHIC: {
			return { ...state, allProducts: action.payload };
		}

		case ProductsConstants.GET_ALL_PRODUCTS_BY_DEMOGRAPHIC_AND_TYPE: {
			return { ...state, allProducts: action.payload };
		}
		case ProductsConstants.GET_ALL_PRODUCTS_BY_DEMOGRAPHIC_AND_CATEGORY: {
			return { ...state, allProducts: action.payload };
		}

		//New Products
		case ProductsConstants.GET_NEW_PRODUCTS: {
			return { ...state,  };
		}
		case ProductsConstants.GET_DATA: {
			return { ...state, newProductsArr: action.payload };
		}
		case ProductsConstants.GET_RESPONSE: {
			return { ...state, return: action.payload };
		}
		case ProductsConstants.GET_NEW_PRODUCTS_DEMOGRAPHIC: {
			return { ...state,  };
		}
		case ProductsConstants.GET_NEW_PRODUCTS_DEMOGRAPHIC_DATA: {
			return { ...state, newProductsArr: action.payload };
		}
		case ProductsConstants.GET_NEW_PRODUCTS_DEMOGRAPHIC_TYPE: {
			return { ...state,  };
		}
		case ProductsConstants.GET_NEW_PRODUCTS_DEMOGRAPHIC_TYPE_DATA: {
			return { ...state, newProductsArr: action.payload };
		}
		case ProductsConstants.GET_NEW_PRODUCTS_CATEGORY: {
			return { ...state,  };
		}
		case ProductsConstants.GET_NEW_PRODUCTS_CATEGORY_DATA: {
			return { ...state, newProductsArr: action.payload };
		}
		
	}
    
	return state;
};

export default ProductsReducer;