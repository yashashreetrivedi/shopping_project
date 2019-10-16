import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slideshow from '../slideshow/Slideshow.jsx';
import NewProducts from '../Products/NewProducts.jsx';
import PopularProducts from '../Products/PopularProducts';
import * as ProductsActions from '../Products/ProductsActions';

/** 
 * @class Home This class holds the home page
 * */

const homeStyle = {
	marginTop: 'auto',
	marginRight: 'auto',
	marginBottom: '60px',
	marginLeft: 'auto',
	textAlign: 'center',
};
const hr = {
	width: '40%'
};
class Home extends Component {

	// use this lifecycle method to make a fetch call to get the general popular products
	componentDidMount() {
		this.props.dispatch(ProductsActions.getPopularProductsSaga());
		this.props.dispatch(ProductsActions.getNewProducts());
	}

	render() {
		return (
			
			<div style={homeStyle}>
				<br />
				<br />
				<div><Slideshow /></div>
				<hr style={hr} />
				<div><NewProducts products={this.props.products.newProducts} /></div>
				<hr style={hr} />
				<div><PopularProducts products={this.props.products.popularProducts} error={this.props.products.error} /></div>
			</div>

		);
	}
}

export default connect((state) => {
	return {
		products: state.products
	};
})(Home);