import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as ProductsActions from '../../../Products/ProductsActions';
import AllProducts from '../../../Products/AllProducts';
import PopularProducts from '../../../Products/PopularProducts';
import NewProducts from '../../../Products/NewProducts';
import womenShoes from '../../../assets/womenShoes.jpg';


/** 
 * @class Kids This class holds the kids shirts page
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

class WShoes extends Component {

	componentDidMount() {
		this.props.dispatch(ProductsActions.getNewProductsDemographicType('women', 'shoe'));
		this.props.dispatch(ProductsActions.getPopularProductsDemoTypeSaga('women', 'shoe'));
		this.props.dispatch(ProductsActions.getAllProductsDemographicAndTypeSaga('women', 'shoe'));

	}


	render() {
		return (

			<div style={container}>
				<h1> Women's Shoes</h1>
				<img style={img} src={womenShoes} />
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
})(WShoes);