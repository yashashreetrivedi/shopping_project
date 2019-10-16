import FooterConstants from './FooterConstants';

export const handleChange = (name, value) => {
	return {
		type: FooterConstants.HANDLE_CHANGE,
		name: name,
		value: value
	};
};

export const handleSubmit= (customer) => {
	return {
		type: FooterConstants.HANDLE_SUBMIT,
		payload: customer
	};
};