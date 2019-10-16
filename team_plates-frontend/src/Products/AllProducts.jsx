
import React from 'react';

// Styling
const allDivStyling = {
	width: '100%'
};
const allProductStyling = {
	display: 'inline-block',
	border: '1px solid #fff',
	width: '20%',
	margin: '1%',
};

const imageDivStyling = {
	maxWidth: '100%',
	overflow: 'hidden',
	backgroundColor: 'white',
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
	margin: '2.5% auto',
	width: '30%'
};
const infoTextStylingC2 = {
	display: 'inline-block',
	margin: '2.5% auto',
	width: '70%'
};


class AllProducts extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
		};

	}


	render() {
		let allProductsHTML = this.props.products.map(product => {
			return (
				<div className="allProduct" style={allProductStyling} key={product.id}>
					<div className="productImage" style={imageDivStyling}><img src={product.image} alt={product.name} style={imgsz} /></div>
					<div className="productInfo" style={infoDivStyling}>
						<h4 style={infoTextStylingC1}>{product.demographic}</h4>
						<h4 style={infoTextStylingC2}>{product.description}</h4>
						<h4 style={infoTextStylingC1}>{product.category}</h4>
						<h4 style={infoTextStylingC2}></h4>
					</div>
				</div>
			);
		});
		return (
			<div>
				<h1>All Products</h1>
				<div id="allProducts" style={allDivStyling}>
					{allProductsHTML}
				</div>
			</div>);
	}
}

export default AllProducts;