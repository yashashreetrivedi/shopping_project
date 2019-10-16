import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/Home.jsx';
import WomenSwitch from '../domain/women/WomenSwitch.jsx';
import Login from '../domain/login/Login.jsx';
import MenSwitch from '../domain/men/MenSwitch.jsx';
import KidSwitch from '../domain/kids/KidSwitch.jsx';
import NotFound from '../domain/NotFound.jsx';
// import test from '../domain/signUp/test.jsx';
import SignUp from '../domain/signUp/SignUp';

class Content extends React.Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/login' component={Login} />
					<Route path='/women' component={WomenSwitch} />
					<Route path='/men' component={MenSwitch} />
					<Route path='/kids' component={KidSwitch} />
					<Route path='/signup' component={SignUp}/>
					<Route component={NotFound} />
				</Switch>
			</div>

		);
	}
}

export default Content;