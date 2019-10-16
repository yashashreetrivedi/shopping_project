import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Women from './Women.jsx';
import WAthletic from './categories/WAthletic.jsx';
import WCasual from './categories/WCasual.jsx';
import WFormal from './categories/WFormal.jsx';
import WShirts from './types/WShirts.jsx';
import WPants from './types/WPants.jsx';
import WShoes from './types/WShoes.jsx';

/** 
 * @class Women This class holds all the women domains
 * */

class WomenSwitch extends React.Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path='/women' component={Women} />
					<Route path='/women/categories/athletic' component={WAthletic} />
					<Route path='/women/categories/casual' component={WCasual} />
					<Route path='/women/categories/formal' component={WFormal} />
					<Route path='/women/types/shirts' component={WShirts} />
					<Route path='/women/types/pants' component={WPants} />
					<Route path='/women/types/shoes' component={WShoes} />

				</Switch>
			</div>

		);
	}
}

export default WomenSwitch;