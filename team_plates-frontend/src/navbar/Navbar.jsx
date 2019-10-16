import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import './Navbar.css';
import LoginHeader from '../domain/login/LoginHeader';

/** 
 * @class Navbar This class holds all the navigation
 * */

class Navbar extends React.Component {

	render() {
		return (
			<div className="navbar">
				<Link to='/'><img className="catalytelogo" src={Logo} alt="Catalyte logo" height="45" width="160"></img></Link>
				<span></span>
				<div className="dropdown">
					<button className="dropbtn"><Link to='/men'>Men
						<i className="fa fa-caret-down"></i>
					</Link></button>
					<div className="dropdown-content">
						<div className="column">
							<p>Categories</p>
							<Link to='/men/categories/athletic'>Athletic Wear</Link>
							<Link to='/men/categories/casual'>Casual Wear</Link>
							<Link to='/men/categories/formal'>Formal Wear</Link>
							<p>Types</p>
							<Link to='/men/types/shirts'>Shirts</Link>
							<Link to='/men/types/pants'>Pants</Link>
							<Link to='/men/types/shoes'>Shoes</Link>
						</div>
					</div>
				</div>
				<div className="dropdown">
					<button className="dropbtn"><Link to='/women'>Women
						<i className="fa fa-caret-down"></i>
					</Link></button>
					<div className="dropdown-content">
						<div className="column">
							<p>Categories</p>
							<Link to='/women/categories/athletic'>Athletic Wear</Link>
							<Link to='/women/categories/casual'>Casual Wear</Link>
							<Link to='/women/categories/formal'>Formal Wear</Link>
							<p>Types</p>
							<Link to='/women/types/shirts'>Shirts</Link>
							<Link to='/women/types/pants'>Pants</Link>
							<Link to='/women/types/shoes'>Shoes</Link>
						</div>
					</div>
				</div>
				<div className="dropdown">
					<button className="dropbtn"><Link to='/kids'>Kids
						<i className="fa fa-caret-down"></i>
					</Link></button>
					<div className="dropdown-content">
						<div className="column">
							<p>Categories</p>
							<Link to='/kids/categories/athletic'>Athletic Wear</Link>
							<Link to='/kids/categories/casual'>Casual Wear</Link>
							<Link to='/kids/categories/formal'>Formal Wear</Link>
							<p>Types</p>
							<Link to='/kids/types/shirts'>Shirts</Link>
							<Link to='/kids/types/pants'>Pants</Link>
							<Link to='/kids/types/shoes'>Shoes</Link>
						</div>
					</div>
				</div>
				<span></span>
				<div className="searchlogin">
					<div className="searchbar">
						<input className="textbox" type="text" placeholder="Search.."></input>
						<input src="http://www.stickpng.com/assets/images/585e4ae1cb11b227491c3393.png" alt="magnifying glass" height="15" width="15" className="search" type="image">
						</input></div>
					<LoginHeader />
				</div>
			</div>
		);
	}
}

export default Navbar;