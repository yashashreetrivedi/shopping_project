import FooterConstants from './FooterConstants';

const initState = {

	customer: {
		emailAddress: '',
	},
	emailAddress: '',
};
	


const FooterReducer = (state=initState, action) => {
	switch(action.type) {
		case FooterConstants.HANDLE_CHANGE: {
			return { ...state, [action.name]: action.value, class: action.className  };
		}
		case FooterConstants.HANDLE_SUBMIT: {
			return { ...state, customer: action.payload };
		}
	}
	return state;
};

export default FooterReducer;