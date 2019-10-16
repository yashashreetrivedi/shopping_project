import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Kids from './Kids.jsx';
import KAthletic from './categories/KAthletic.jsx';
import KCasual from './categories/KCasual.jsx';
import KFormal from './categories/KFormal.jsx';
import KShirts from './types/KShirts.jsx';
import KPants from './types/KPants.jsx';
import KShoes from './types/KShoes.jsx';
/** 
 * @class KidSwitch This class holds all the kids domains
 * */

class KidSwitch extends React.Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path='/kids' component={Kids} />
					<Route path='/kids/categories/athletic' component={KAthletic} />
					<Route path='/kids/categories/casual' component={KCasual} />
					<Route path='/kids/categories/formal' component={KFormal} />
					<Route path='/kids/types/shirts' component={KShirts} />
					<Route path='/kids/types/pants' component={KPants} />
					<Route path='/kids/types/shoes' component={KShoes} />

				</Switch>
			</div>

		);
	}
}

export default KidSwitch;