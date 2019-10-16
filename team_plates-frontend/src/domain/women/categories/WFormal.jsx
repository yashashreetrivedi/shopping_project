import React, { Component } from 'react';
import { connect } from 'react-redux';
import PopularProducts from '../../../Products/PopularProducts';
import * as ProductsActions from '../../../Products/ProductsActions';
import AllProducts from '../../../Products/AllProducts';
import NewProducts from '../../../Products/NewProducts';
import womenFormal from '../../../assets/womenFormal.jpg';

/** 
 * @class Home This class holds the home page
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
class WFormal extends Component {
	componentDidMount() {
		this.props.dispatch(ProductsActions.getPopularProductsDemoCategorySaga('women', 'formal'));
		this.props.dispatch(ProductsActions.getAllProductsDemographicAndCategorySaga('women', 'formal'));
		this.props.dispatch(ProductsActions.getNewProductsCategory('women', 'formal'));
	}

	render() {
		return (
			<div style={container}>
				<h1>Women's Formal Wear</h1>
				<img style={img} src={womenFormal} />
				<NewProducts />
				<hr style={hr} />
				<PopularProducts products={this.props.products.popularProducts} error={this.props.products.error} />
				<hr style={hr} />
				<AllProducts products={this.props.products.allProducts} />

			</div>

		);
	}
}

export default connect((state) => {
	return {
		products: state.products
	};
})(WFormal);