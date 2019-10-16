import React, { Component } from 'react';
import { connect } from 'react-redux';
import PopularProducts from '../../../Products/PopularProducts';
import * as ProductsActions from '../../../Products/ProductsActions';
import AllProducts from '../../../Products/AllProducts';
import NewProducts from '../../../Products/NewProducts';
import menFormal from '../../../assets/menFormal.jpg';

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
class MFormal extends Component {
	componentDidMount() {
		this.props.dispatch(ProductsActions.getPopularProductsDemoCategorySaga('men', 'formal'));
		this.props.dispatch(ProductsActions.getAllProductsDemographicAndCategorySaga('men', 'formal'));
		this.props.dispatch(ProductsActions.getNewProductsCategory('men', 'formal'));
	}

	render() {
		return (
			<div style={container}>
				<h1>Men's Formal Wear</h1>
				<img style={img} src={menFormal} />
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
})(MFormal);