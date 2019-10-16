import LoginConstants from './LoginConstants.jsx';

const initState = {

	login: { 
		email: '',
		password: ''
	},
	isLoggedIn: false,
	errorMessage: '',
	
};


const LoginReducer = (state=initState, action) => {
	switch(action.type) {

		case LoginConstants.HANDLE_LOGIN: {

			
			return { ...state, 
				login:{
					...state.login,
					[action.name]: action.value }
			};
               
		}
		
        
		case LoginConstants.HANDLE_TOKEN: {
			window.sessionStorage.auth = action.payload;
			
			return { ...state, isLoggedIn: true, errorMessage: '' };
		}

		case LoginConstants.HANDLE_ERROR: {
			return { ...state, errorMessage: action.errorMessage };
		}

		case LoginConstants.HANDLE_LOGOUT: {
			
			window.sessionStorage.clear();
			return { ...state, 
				isLoggedIn: false,
				login:{
					...state.login , 
					email:'',
					password:''
				}
			};
		}
	}
	return state;
};

export default LoginReducer;