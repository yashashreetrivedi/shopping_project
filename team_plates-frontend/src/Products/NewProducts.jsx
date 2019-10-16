import React from 'react';
import { connect } from 'react-redux';
import * as ProductsActions from './ProductsActions.jsx';

// Styling
const popDivStyling = {
	width: '100%'
};
const popProductStyling = {
	display: 'inline-block',
	border: '1px solid #fff',
	width: '42%',
	height: '40%',
	margin: '1%',
};

const imageDivStyling = {
	maxWidth: '100%',
	overflow: 'hidden',
	backgroundColor: 'white',
	height: '300px'
};

const infoDivStyling = {
	backgroundColor: '#333',
	color: '#fff',
	height: '40%',
	width: '100%'
};

const infoTextStylingC1 = {
	display: 'inline-block',
	margin: '2.5% auto',
	width: '30%'
};
const infoTextStylingC2 = {
	display: 'inline-block',
	margin: '2.5% auto',
	width: '70%'
};

const imgsz = {
	maxWidth: '600px',
	maxHeight: '300px',
};

/** 
 * @class NewProductsThis class holds all the for the home page
 * */
class NewProducts extends React.Component {
	
	
	constructor(props) {
		super(props);
		this.state = {
		};

	}

	/** 
 * @function componentDidMount gets the two newest products when the homepage mounts and displays them.
 * */
	componentDidMount() {
		this.props.dispatch(ProductsActions.getNewProducts());

	}


	render() {
		let information = this.props.products.newProductsArr.map((pro, i) => { 
			<div key={i}> <img src={pro.image}/> Demographic {pro.demographic} Description {pro.description} Category {pro.category}</div>;
			return (<div className="NewProduct" style={popProductStyling} key={pro.id}>
				<div className="image" style={imageDivStyling}> <img style={imgsz} src={pro.image} height='auto' width='auto'/></div>
				<div className="productInfo" style={infoDivStyling}>
					<h4 style={infoTextStylingC1}>{pro.demographic}</h4>
					<h4 style={infoTextStylingC2}>{pro.description}</h4>
					<h4 style={infoTextStylingC1}>{pro.category}</h4>
					<h4 style={infoTextStylingC2}></h4>
				</div>
			</div>
			);
		});

		return (
			<div style={popDivStyling}>
				<h1> New Products </h1>
				{information}
	

			</div>);
	}
}

export default connect((state)=>{
	return {
		products: state.products
	};
})(NewProducts);
