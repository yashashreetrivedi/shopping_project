import ProductConstants from './ProductsConstants';

// Popular Products Actions
export const getPopularProducts = (payload) => {
	return {
		type: ProductConstants.GET_POPULAR_PRODUCTS,
		payload: payload
	};
};

export const getPopularProductsDemographic = (payload) => {
	return {
		type: ProductConstants.GET_POPULAR_PRODUCTS_BY_DEMOGRAPHIC,
		payload: payload
	};
};

export const getPopularProductsType = (payload) => {
	return {
		type: ProductConstants.GET_POPULAR_PRODUCTS_BY_TYPE,
		payload: payload
	};
};

export const getPopularProductsCategory = (payload) => {
	return {
		type: ProductConstants.GET_POPULAR_PRODUCTS_BY_CATEGORY,
		payload: payload
	};
};


export const getPopularProductsDemoType = (payload) => {
	return {
		type: ProductConstants.GET_POPULAR_PRODUCTS_BY_DEMO_AND_TYPE,
		payload: payload
	};
};

export const getPopularProductsDemoCategory = (payload) => {
	return {
		type: ProductConstants.GET_POPULAR_PRODUCTS_BY_DEMO_AND_CATEGORY,
		payload: payload
	};
};

export const getPopularProductsSaga = () => {
	return {
		type: ProductConstants.GET_POPULAR_PRODUCTS_SAGA
	};
};

export const getPopularProductsDemographicSaga = (demographic) => {
	return {
		type: ProductConstants.GET_POPULAR_PRODUCTS_BY_DEMOGRAPHIC_SAGA,
		demographic: demographic
	};
};

export const getPopularProductsTypeSaga = (productType) => {
	return {
		type: ProductConstants.GET_POPULAR_PRODUCTS_BY_TYPE_SAGA,
		productType: productType
	};
};

export const getPopularProductsCategorySaga = (category) => {
	return {
		type: ProductConstants.GET_POPULAR_PRODUCTS_BY_CATEGORY_SAGA,
		category: category
	};
};

// New Products Actions
export const getNewProducts = () => {
	return {
		type: ProductConstants.GET_NEW_PRODUCTS,
	};
};

export const getData= (newProductsArr) => {
	return {
		type: ProductConstants.GET_DATA,
		payload: newProductsArr
	};
};

export const getNewProductsDemographic = (demographic) => {
	return {
		type: ProductConstants.GET_NEW_PRODUCTS_DEMOGRAPHIC,
		demographic: demographic
	};
};


export const getNewProductsDemographicType = (demographic, type) => {
	return {
		type: ProductConstants.GET_NEW_PRODUCTS_DEMOGRAPHIC_TYPE,
		demographic: demographic,
		ptype: type
	};
};



export const getPopularProductsDemoCategorySaga = (demographic, category) => {
	return {
		type: ProductConstants.GET_POPULAR_PRODUCTS_BY_DEMO_AND_CATEGORY_SAGA,
		demographic: demographic,
		category: category
	};
};

export const getNewProductsCategory = (demographic, category) => {
	return {
		type: ProductConstants.GET_NEW_PRODUCTS_CATEGORY,
		demographic: demographic,
		category: category
	};
};


export const getPopularProductsDemoTypeSaga = (demographic, productType) => {
	return {
		type: ProductConstants.GET_POPULAR_PRODUCTS_BY_DEMO_AND_TYPE_SAGA,
		demographic: demographic,
		productType: productType
	};
};

export const handleError = (error) => {
	return {
		type: ProductConstants.HANDLE_ERROR,
		error: error
	};
};
export const getAllProductsByDemographic = (allProductsArr) => {
	return {
		type: ProductConstants.GET_ALL_PRODUCTS_BY_DEMOGRAPHIC,
		payload: allProductsArr
	};
};
export const getAllProductsDemographicSaga = (demographic) => {
	return {
		type: ProductConstants.GET_ALL_PRODUCTS_BY_DEMOGRAPHIC_SAGA,
		demographic: demographic
	};
};

export const getAllProductsByDemographicAndType = (allProductsArr) => { 
	return {
		type: ProductConstants.GET_ALL_PRODUCTS_BY_DEMOGRAPHIC_AND_TYPE,
		payload: allProductsArr
	};
};

export const getAllProductsDemographicAndTypeSaga = (demographic, productType) => {
	return {
		type: ProductConstants.GET_ALL_PRODUCTS_BY_DEMOGRAPHIC_AND_TYPE_SAGA,
		demographic: demographic,
		productType: productType
	};
};

export const getAllProductsByDemographicAndCategory = (allProductsArr) => {
	return {
		type: ProductConstants.GET_ALL_PRODUCTS_BY_DEMOGRAPHIC_AND_CATEGORY,
		payload: allProductsArr
	};
};

export const getAllProductsDemographicAndCategorySaga = (demographic, category) => {
	return {
		type: ProductConstants.GET_ALL_PRODUCTS_BY_DEMOGRAPHIC_AND_CATEGORY_SAGA,
		demographic: demographic,
		category: category
	};
};

export const getResponse = (response) => {
	return {
		type: ProductConstants.GET_RESPONSE,
		payload: response
	};
};

