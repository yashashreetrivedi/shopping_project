import React from 'react';
import* as SignUpAction from './SignUpAction.jsx';
import { connect } from 'react-redux';
import FormErrors from './FormErrors';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

const titleStylesignUp= {
	width: '500px',
	padding: '5px',
	marginTop: '30px',
	marginLeft: 'auto',
	marginRight: 'auto',
	backgroundColor:'#333',
	color:'white',
	fontWeight: 'bold',
	fontSize:'20px'
  
};

const formstylesignup ={
	width: '320px',
	paddingTop: '10px',
	paddingRight: '95px',
	paddingBottom: '50px',
	paddingLeft: '95px',
	margin: 'auto',
	backgroundColor:'#ddd',
	height:'auto',
	
	
};

const btncolor ={
	
	
	width:'120px',
	height:'30px'

};

const textarea= {
	width: '300px'
};

const errorStyleSignup= {
	
	color: 'red'
};

class SignUp extends React.Component {	
	constructor(props) {
		super(props);
		this.state ={
			formErrors: { email:'' , zip:'', password:'' },
			emailVaild:false,
			Zipvalid:false,
			passwordValid:false,
			formValid:false,
			
		
		};
		this.validateField = this.validateField.bind(this);
		this.validateForm = this.validateForm.bind(this);
		this.handleValidation= this.handleValidation.bind(this);
		this.handleonBlur = this.handleonBlur.bind(this);
		
	}

	handleValidation(e) {
		const name = e.target.name;
		const value = e.target.value;
		this.validateField(name, value);
	}
	
	handleonBlur(e) {
		let x = document.getElementById('pwd');
		if (x.type === 'text') {
			x.type = 'Password';
		}	
	}
	
	SignUpCustomer() {
 
		let isRedirect=true;
		
		const postInputs = document.getElementById('postInputs');
		const forms = postInputs.querySelectorAll('input[type=text],input[type=password]');
			
		let formInputs = Array.from(forms);
		formInputs.forEach(element => {
			if(element.value === '' || element.value === undefined)
			{
				isRedirect= false;
			}
			
		});

		let customer = {
			firstName: formInputs[0].value,
			lastName:formInputs[1].value,
			emailAddress:formInputs[2].value,
			password:formInputs[3].value,
			
			address:{
				streetAddress: formInputs[4].value,
				city:formInputs[5].value,
				state:formInputs[6].value,
				zipCode:formInputs[7].value
			}
	
		};
		
		
		this.props.dispatch(SignUpAction.SignUpCustomerSaga(customer));
		formInputs.forEach(input => {
			input.value = '';
			
		}
		
		);

		this.props.dispatch(SignUpAction.handleRedirect(isRedirect));
	}

	validateField(fieldName , value) {
		let fieldValidationErrors = this.state.formErrors;
		let emailValid=this.state .emailValid;
		let passwordValid= this.state.passwordValid;

		switch (fieldName) {
			case 'email':
				emailValid = value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i);
				fieldValidationErrors.Email =emailValid  ? '' : ' is invalid';
				break;
			case 'password':
				passwordValid = value.match(/[0-9a-zA-Z](?=.*[@#$%]){8,}/);
				fieldValidationErrors.Password = passwordValid ? '' : 'must be 8 char long and have one special char';
				break;

		}
		this.setState({ formErrors: fieldValidationErrors, emailValid: emailValid , passwordValid:passwordValid }, this.validateForm );

	}

	validateForm() {
		if (this.state.emailValid  && this.state.zipValid && this.state.passwordValid) {
			this.setState({
				formValid: true,
				
			});}
	}

	componentWillUnmount() {
		let isRedirect=false;
		this.props.dispatch(SignUpAction.handleRedirect(isRedirect));
	}

	render() {
		let errorHtml;
		if(this.props.customer.errorMessage  === '') {
			errorHtml = '';
		} else {
			errorHtml = <div >
				<h3>{this.props.customer.errorMessage}</h3>
			</div>;
		}
		
		
		return(
			<div >

				<div style={titleStylesignUp}>Create your account</div>
				<div style={formstylesignup} >
					<form id="postInputs"    >
						<div style={errorStyleSignup } >
							<FormErrors formErrors={this.state.formErrors}    />
							<div  style={errorStyleSignup }>{errorHtml} </div>
						
						</div>
					
					First Name: <br/>
						<input
							type = "text"
							name = "firstName"
							placeholder = "Firstname"
							classes = "form-control signup-input" style={ textarea} required
						/> <br/> <br/>
					Last Name:<br/>
						<input
							type = "text"
							name = "lastName"
							placeholder = "Lastname"
							classes = "form-control signup-input" style={ textarea} required
						/><br/><br/>
					Email:<br/>
						<input
							type = "text"
							name = "emailAddress"
							defaultValue = { this.props.footer.emailAddress}
							placeholder = "Email" 
							classes = "form-control signup-input" style={ textarea} required
							onBlur={this.handleValidation}  
						/><br/><br/>

					Password: <br/>
						<input
							type = "password"
							name = "password"
							placeholder = "Password"
							id="pwd"
							classes = "form-control signup-input" style={ textarea} required
							onChange={this.handleValidation} 
						/><br/><br/>
					
                
                Street: <br/>
						<input
							type = "text"
							name = "street"
							placeholder = "street"
							classes = "form-control signup-input" style={ textarea} required
						/><br/><br/>
              City: <br/>
						<input
							type = "text"
							name = "city"
							placeholder = "city"
							classes = "form-control signup-input" style={ textarea} required
						/><br/><br/>
                State: <br/>
						<input
							type = "text"
							name = "state"
							placeholder = "state"
							classes = "form-control signup-input" style={ textarea} required
						/><br/><br/>
                  ZipCode <br/>
						<input
							type = "text"
							name = "zip"
							placeholder = "zipcode"
							classes = "form-control signup-input" style={ textarea} required
						/><br/><br/>

						<button
							
							type = "button"
							classes = "btn btn-primary btn-signup float-right"
							id = "btn-register"
							onClick={() => this.SignUpCustomer()}  
							
						>Submit</button>
						
						{this.props.customer.isSignup &&  
						< Redirect to = {'/login'}/> }
							
					</form>
				</div>
			</div>
			
		);
	}
}

export default connect((state)=>{
	
	return {
	
		 customer: state.customer,
		footer: state.footer
		
	};
})(SignUp);



