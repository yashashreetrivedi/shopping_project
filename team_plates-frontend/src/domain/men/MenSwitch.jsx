import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Men from './Men.jsx';
import MAthletic from './categories/MAthletic.jsx';
import MCasual from './categories/MCasual.jsx';
import MFormal from './categories/MFormal.jsx';
import MShirts from './types/MShirts.jsx';
import MPants from './types/MPants.jsx';
import MShoes from './types/MShoes.jsx';
/** 
 * @class MenSwitch This class holds all the men domains
 * */

class MenSwitch extends React.Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path='/men' component={Men} />
					<Route path='/men/categories/athletic' component={MAthletic} />
					<Route path='/men/categories/casual' component={MCasual} />
					<Route path='/men/categories/formal' component={MFormal} />
					<Route path='/men/types/shirts' component={MShirts} />
					<Route path='/men/types/pants' component={MPants} />
					<Route path='/men/types/shoes' component={MShoes} />

				</Switch>
			</div>

		);
	}
}

export default MenSwitch;