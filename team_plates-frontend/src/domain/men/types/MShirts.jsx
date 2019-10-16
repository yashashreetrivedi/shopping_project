import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as ProductsActions from '../../../Products/ProductsActions';
import AllProducts from '../../../Products/AllProducts';
import PopularProducts from '../../../Products/PopularProducts';
import NewProducts from '../../../Products/NewProducts';
import menShirts from '../../../assets/menShirts.jpg';

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

class MShirt extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch(ProductsActions.getNewProductsDemographicType('men', 'Shirt'));
		this.props.dispatch(ProductsActions.getPopularProductsDemoTypeSaga('men', 'Shirt'));
		this.props.dispatch(ProductsActions.getAllProductsDemographicAndTypeSaga('men', 'Shirt'));

	}

	render() {
		return (

			<div style={container}>
				<h1> Men's Shirts</h1>
				<img style={img} src={menShirts} />
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
})(MShirt);