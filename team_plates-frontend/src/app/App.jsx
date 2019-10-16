import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Content from './Content';
import Footer from '../footer/Footer.jsx';
import Navbar from '../navbar/Navbar.jsx';


class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Content />
				<Footer/>
				
			</div>
		);
	}
}

export default App;
