import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
		console.log(current);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
		console.log(current);
	};

	if (!Array.isArray(slides) || length <= 0) {
		return null;
	}

	return (
		<section className='slider'>
			<FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
			<FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
			{SliderData.map((pic_link, index) => {
				return (
					<div
						className={index === current ? 'slide active' : 'slide'}
						key={index}
					>
						{index === current && (
							<img src={pic_link.image} alt='pic' className='image' />
						)}
					</div>
				);
			})}
		</section>
	);
};

export default ImageSlider;
