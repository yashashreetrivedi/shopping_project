import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as ProductsActions from '../../../Products/ProductsActions';
import AllProducts from '../../../Products/AllProducts';
import PopularProducts from '../../../Products/PopularProducts';
import NewProducts from '../../../Products/NewProducts';
import kidPants from '../../../assets/kidPants.jpg';
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
class KPants extends Component {

	componentDidMount() {
		this.props.dispatch(ProductsActions.getNewProductsDemographicType('kids', 'pants'));
		this.props.dispatch(ProductsActions.getPopularProductsDemoTypeSaga('kids', 'pants'));
		this.props.dispatch(ProductsActions.getAllProductsDemographicAndTypeSaga('kids', 'pants'));
	}

	render() {
		return (

			<div style={container}>
				<h1> Kid's Pants</h1>
				<img style={img} src={kidPants} />
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
})(KPants);