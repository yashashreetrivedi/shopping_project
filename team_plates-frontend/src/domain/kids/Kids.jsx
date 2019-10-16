import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import PopularProducts from '../../Products/PopularProducts';
import * as ProductsActions from '../../Products/ProductsActions';
import NewProducts from '../../Products/NewProducts';
import kidHome from '../../assets/kidHome.jpg';
import AllProducts from '../../Products/AllProducts';
/** 
 * @class Kids This class holds the main kids page
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

class Kids extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch(ProductsActions.getNewProductsDemographic('kids'));
		this.props.dispatch(ProductsActions.getPopularProductsDemographicSaga('kids'));
		this.props.dispatch(ProductsActions.getAllProductsDemographicSaga('kids'));
	}
	

	render() {
		return (
			
			<div style={container}>
				<h1> Kids</h1>
				<img style={img} src={kidHome} />
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
})(Kids);