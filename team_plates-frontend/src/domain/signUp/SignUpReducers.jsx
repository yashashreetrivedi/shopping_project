import SignUpConstants from'./SignUpConstants.jsx';
const initState ={

	customer:{
		firstName: '',
		lastName: '',
		emailAddress: '',
		password: '',
		street: '',
		city: '',
		zipCode: ''
	},
	errorMessage: '',
	isSignup: false,
};

const SignUpReducer = (state =initState,action) => {
	switch(action.type) {
		case SignUpConstants.SIGNUP_CUSTOMER: {
			return { ...state, 	customer:{ ...state.customer ,[action.name]: action.value } };
		}
	
		case SignUpConstants.HANDLE_SIGNUP_ERROR: {
			return { ...state, errorMessage: action.errorMessage };
			
		}
		
		case SignUpConstants.HANDLE_REDIRECT: {
		
			return { ...state, isSignup:action.bool };
			
		}
		
	}
	return state;
};


export default SignUpReducer;
