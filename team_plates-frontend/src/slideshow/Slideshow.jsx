import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Slide } from 'react-slideshow-image';
import Pants from '../assets/pants.jpg';
import Shirt from '../assets/shirt.jpg';
import Shoes from '../assets/shoes.jpg';
import './slideShow.css';

const imgArr = [
	Pants,
	Shirt,
	Shoes,
];

/** 
 * @class Slideshow This class holds slideshow
 * */
class SlideShow extends React.Component {
	

	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className= 'container'>

				<Slide 
					images={imgArr}
					duration={5000}
					transistionDuration={1000}
				/> 
					
			</div>
		);
	}

}


SlideShow.propTypes = {
	footer: PropTypes.object,
	dispatch: PropTypes.func,

};

export default connect((state)=>{
	return {
		slideshow: state.slideshow,
	};
})(SlideShow);
