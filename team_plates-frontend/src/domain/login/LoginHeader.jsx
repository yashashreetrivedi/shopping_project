import React from 'react';
import * as LoginAction from './LoginAction.jsx';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../navbar/Navbar.css';

const headerStyle = {
	display: 'flex',
	flexDirection: 'column',

};
const btnstyleheader = {
	display: 'flex',
	fontSize: '16px',
	border: 'none',
	outline: 'none',
	color: 'white',
	backgroundColor: 'inherit',
	font: 'inherit',
	margin: '0',
};



class LoginHeader extends React.Component {
	constructor(props) {
		super(props);

		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout(e) {
		this.props.dispatch(LoginAction.handleLogout());
	}

	render() {
		
		let authHTML;
		if(this.props.login.isLoggedIn !== true) {
			authHTML =
				<div>
					<Link to='/login' style={btnstyleheader}>Login</Link>	
				</div>;
			
		}
		else {
			authHTML =
				<div style={headerStyle}>
					<p style={btnstyleheader}> {this.props.login.login.email}</p>
					<Link to='/' style={btnstyleheader} onClick={this.handleLogout}>Logout</Link>
				</div>;
		}
		

		return(
			<div className='login'>

				{authHTML}
				
								
			</div>
		);
	}
}



export default connect((state)=>{
	return {
		login: state.login,
		
	};
})(LoginHeader);