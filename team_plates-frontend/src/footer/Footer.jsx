import React from 'react';
import Logo from '../assets/logo.png';
import * as FooterActions from './FooterActions.jsx';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Style = {
	display: 'flex',
	justifyContent: 'space-between',
	flexDirection: 'row',
	alignItems: 'center',
	overflow: 'hidden',
	backgroundColor:'#333',
	border: 'none',
	position: 'fixed',
	bottom: 0,
	height: '60px',
	width: '100%'
};

const LogoStyle = {
	height: '45',
	width: '160px',
	bottom: '10px',

};

const FormStyle = {
	bottom: '20px',
	right: 0,
	justifyContent: 'flex-end ',
};

const TextStyle = {
	color: 'white',
	margin: 0,
	bottom: '20px',
	marginLeft: '20px'
};

const InputStyle = {
	height: '20px',
};

const EmailSubStyle = {
	display: 'flex',
	flexFlow: 'row',
	alignItems: 'stretch',
	marginRight: '20px',
};

const buttonStyle = {
	marginRight: '5px'
};

/** 
 * @class Footer This class holds all the footer
 * */
class Footer extends React.Component {
	
	
	constructor(props) {
		super(props);
		this.state = {
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	
	}

	/** @function sets the props of the email address to the same as what the user submits
	 *  @param{object} e the event of the user typing in the form
	 */
	handleChange(e) {
		this.props.dispatch(FooterActions.handleChange(e.target.name, e.target.value));
	}

	/** 
	 * @function submits the email address of the customer to the registration form
	*/
	handleSubmit() {
		this.props.dispatch(FooterActions.handleSubmit({
			emailAddress: this.props.footer.emailAddress
			
		}));

		const postInputs = document.getElementById('footerEmailId');
		postInputs.value='';
	}

	render() {
		return (
			<div>
				<div style={Style}>
					<p style={TextStyle}> Copyright 2017 Sports Apparel Inc </p>
					<img style={LogoStyle} alt="Logo" src={Logo}/>
					<form style={FormStyle}>
						<div className="emailsubmit" style={EmailSubStyle}>
							<input onChange={this.handleChange} type="text" name="emailAddress"  placeholder="Email Address" style={InputStyle} id="footerEmailId" />
							<Link to='/signup'><button type='button' onClick={this.handleSubmit}> Sign Up</button></Link> </div>
							
						
					</form>
				</div>
			</div>);
	}

}


Footer.propTypes = {
	footer: PropTypes.object,
	dispatch: PropTypes.func

};

export default connect((state)=>{
	return {
		footer: state.footer,
	
	};
})(Footer);
