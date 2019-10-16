import React from 'react';
import* as LoginAction from './LoginAction.jsx';
import { connect } from 'react-redux';
import FormErrors from './FormErrors';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';



const textarea= {
	width: '200px'
};

const titleStyle= {
	width: '500px',
	padding: '10px',
	marginTop: '30px',
	marginLeft: 'auto',
	marginRight: 'auto',
	backgroundColor:'#333',
	color:'white',
	fontWeight: 'bold',
	fontSize:'30px'
  
};

const formstyle ={
	width: '320px',
	padding: '100px',
	margin: 'auto',
	backgroundColor:'#ddd',
	
};

const btncolor ={
	backgroundColor: 'light blue',
	color:'light blue',
	width:'100px',
	position: 'relative',
	marginLeft: '15px',
	

};

const errorStyle = {
	
	color: 'red'
};

const signup ={
	position: 'static',
	top: 'px',
	left: '95px',
};


class Login extends React.Component {	
	constructor(props) {
		super(props);
		this.state ={
			formErrors: { email:'' , password:'' },
			emailValid:false,
			passwordValid: false,
			fornValid:false
		};

		this.handleLogin = this.handleLogin.bind(this);
		this.validateField = this.validateField.bind(this);
		this.validateForm = this.validateForm.bind(this);
		
	}

	handleLogin(e) {
		const name=e.target.name;
		const value= e.target.value;
		this.validateField(name , value);
		this.props.dispatch(LoginAction.handleLogin(e.target.name, e.target.value ));
	}

	
	
	handleSubmitSaga() {
	
		this.props.dispatch(LoginAction.handleSubmitSaga( this.props.login.login.email, this.props.login.login.password));
	}


	validateField( fieldName , value) {
		let fieldValidationErrors = this.state.formErrors;
		let emailValid;
		let passwordValid=this.state.passwordValid;
	
		switch(fieldName) {
			case 'email':
				emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
				
				fieldValidationErrors.Email = emailValid ? '' : 'is invalid';
				
				break;
			default:
				break;
		}

		this.setState({ formErrors: fieldValidationErrors, emailValid: emailValid, passwordValid:passwordValid  }, this.validateForm );

	}

	
	validateForm() {
		if (this.state.emailValid  && this.state.passwordValid) {
			this.setState({
				formValid: true,
				
			});}
	}

	

	render() {
		let errorHtml;
		if(this.props.login.errorMessage === '') {
			errorHtml = '';
		} else {
			errorHtml = <div style={errorStyle}>
				<h3>{this.props.login.errorMessage}</h3>
			</div>;
		}
		return (
			
        
			<div>
				
				<div style={titleStyle}> Login </div>
				<div style={formstyle}>
					<form>
						<div style={errorStyle} >
							<FormErrors formErrors={this.state.formErrors} />
						</div>
						<input onBlur={this.handleLogin} type="text" name="email" placeholder="Enter Email...." style={ textarea} id="email" /> <br/><br/>
						
						<input  onBlur= {this.handleLogin} type="password" name="password"  placeholder="Password..." style={ textarea} id="myInput" />
						
						<br/>
						{errorHtml}
						<br/><br/>
						<Link to='/signup' style={signup} >signup here </Link>
						
						<input type="button"  value="Login" style={btncolor} onClick={() => this.handleSubmitSaga()}/>
						
						{this.props.login.isLoggedIn &&  
							< Redirect to = {'/'}/>}
					</form>
				</div>
			</div>
		);

	}
}



export default connect((state)=>{
	return {
		login: state.login,
		
	};
})(Login);
