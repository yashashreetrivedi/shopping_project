import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import womenHome from '../../assets/womenHome.jpg';
import * as ProductsActions from '../../Products/ProductsActions';
import PopularProducts from '../../Products/PopularProducts.jsx';
import AllProducts from '../../Products/AllProducts.jsx';
import NewProducts from '../../Products/NewProducts.jsx';

/** 
 * @class Women This class holds the main women page
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

class Women extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch(ProductsActions.getPopularProductsDemographicSaga('women'));
		this.props.dispatch(ProductsActions.getAllProductsDemographicSaga('women'));
		this.props.dispatch(ProductsActions.getNewProductsDemographic('women'));
		

	}

	render() {

		return (
			<div style={container}>
				<h1> Women</h1>
				<img style={img} src={womenHome} />
				<NewProducts />
				<hr style={hr} />
				<PopularProducts products={this.props.products.popularProducts} />
				<hr style={hr} />
				<AllProducts products={this.props.products.allProducts} />
			</div>);

	}
}


export default connect((state) => {
	return {
		products: state.products
	};
})(Women);