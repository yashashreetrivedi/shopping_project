import SignUpConstants from './SignUpConstants.jsx';
export const SignUpCustomer =(payload) => {
	return {
		type:SignUpConstants.SIGNUP_CUSTOMER,
		payload:payload
	};
};

export const SignUpCustomerSaga =(customer) => {
	return {
		type:SignUpConstants.SIGNUP_CUSTOMERSAGA,
		customer:customer
	};
};
export const handleSignupError = (errorMessage) => {
	return {
		type: SignUpConstants.HANDLE_SIGNUP_ERROR,
		errorMessage: errorMessage
	};
};

export const handleRedirect = (bool) => {
	return {
		type: SignUpConstants.HANDLE_REDIRECT,
		bool: bool
	};
};

