import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as ProductsActions from '../../../Products/ProductsActions';
import AllProducts from '../../../Products/AllProducts';
import PopularProducts from '../../../Products/PopularProducts';
import NewProducts from '../../../Products/NewProducts';
import kidShirts from '../../../assets/kidShirts.jpg';
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

class KShirts extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch(ProductsActions.getNewProductsDemographicType('kids', 'Shirt'));
		this.props.dispatch(ProductsActions.getPopularProductsDemoTypeSaga('kids', 'Shirt'));
		this.props.dispatch(ProductsActions.getAllProductsDemographicAndTypeSaga('kids', 'Shirt'));
		
	}

	render() {
		return (

			<div style={container}>
				<h1> Kid's Shirts</h1>
				<img style={img} src={kidShirts} />
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
})(KShirts);
