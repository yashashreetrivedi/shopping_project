import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as ProductsActions from '../../../Products/ProductsActions';
import AllProducts from '../../../Products/AllProducts';
import PopularProducts from '../../../Products/PopularProducts';
import NewProducts from '../../../Products/NewProducts';
import womenShirts from '../../../assets/womenShirts.jpg';
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

class WShirts extends Component {

	componentDidMount() {
		this.props.dispatch(ProductsActions.getNewProductsDemographicType('women', 'Shirt'));
		this.props.dispatch(ProductsActions.getPopularProductsDemoTypeSaga('women', 'Shirt'));
		this.props.dispatch(ProductsActions.getAllProductsDemographicAndTypeSaga('women', 'Shirt'));

	}
		


	render() {
		console.log(this.props.products.newProductsDemTypeArr)
		return (

			<div style={container}>
				<h1> Women's Shirts</h1>
				<img style={img} src={womenShirts} />
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
})(WShirts);