import React from 'react';
import { connect } from 'react-redux';

// Styling
const popDivStyling = {
	width: '100%'
};
const popProductStyling = {
	display: 'inline-block',
	border: '1px solid #fff',
	width: '20%',
	margin: '1%',
};

const imageDivStyling = {
	maxWidth: '100%',
	overflow: 'hidden',
	backgroundColor:'white',
	height: '200px',

};

const imgsz = {
	maxWidth: '300px',
	maxHeight: '200px',
};

const infoDivStyling = {
	backgroundColor: '#333',
	color: '#fff',
	height: '40%',
	width: '100%'
};

const infoTextStylingC1 = {
	display: 'inline-block',
	fontSize: '13px',
	margin: '2.5% auto',
	width: '30%'
};
const infoTextStylingC2 = {
	display: 'inline-block',
	margin: '2.5% auto',
	width: '70%'
};


class PopularProducts extends React.Component {
	
	
	constructor(props) {
		super(props);
		this.state = {
		};

	}


	render() {
		let popProductsHTML = this.props.products.popularProducts.map(product => {
			return (
				<div className="popularProduct" style={popProductStyling} key={product.id}>
					<div className="productImage" style={imageDivStyling}><img src={product.image}  style={imgsz} alt={product.name}/></div>
					<div className="productInfo" style={infoDivStyling}>
						<h4 style={infoTextStylingC1}>{product.demographic}</h4>
						<h4 style={infoTextStylingC2}>{product.description}</h4>
						<h4 style={infoTextStylingC1}>{product.category}</h4>
						<h4 style={infoTextStylingC2}></h4>
					</div>
				</div>
			);
		});
		let errorHTML = <div id="errorDiv"><h4>{this.props.error}</h4></div>;
		return (
			<div>
				<h1>Popular Products</h1>
				{errorHTML}
				<div id="popularProducts" style={popDivStyling}>
					{popProductsHTML}
				</div>
			</div>);
	}
}

export default connect((state)=>{
	return {
		products: state.products
	};
})(PopularProducts);