import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import menHome from '../../assets/menHome.jpg';
import * as ProductsActions from '../../Products/ProductsActions';
import PopularProducts from '../../Products/PopularProducts.jsx';
import AllProducts from '../../Products/AllProducts.jsx';
import NewProducts from '../../Products/NewProducts.jsx';

/** 
 * @class Men This class holds the main men page
 * */

const container = {
	textAlign: 'center',
	marginTop: 'auto',
	marginRight: 'auto',
	marginBottom: '80px',
	marginLeft: 'auto',

};

const img = {
	width: 'auto',
	height: '300px'
};
const hr = {
	width: '40%'
};

class Men extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch(ProductsActions.getPopularProductsDemographicSaga('men'));
		this.props.dispatch(ProductsActions.getAllProductsDemographicSaga('men'));
		this.props.dispatch(ProductsActions.getNewProductsDemographic('men'));
	}

	render() {
		return (
			<div style={container}>
				<h1> Men</h1>
				<img style={img} src={menHome} />
				<NewProducts />

				<hr style={hr} />

				<PopularProducts products={this.props.products.popularProducts} error={this.props.products.error}/>

				<hr style={hr} />

				<AllProducts products={this.props.products.allProducts} />
			</div>);
	}
}


export default connect((state) => {
	return {
		products: state.products
	};
})(Men);