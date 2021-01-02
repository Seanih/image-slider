import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = () => {
	const [currentPic, setCurrentPic] = useState(0);
	const picsInArray = SliderData.length;

	const nextSlide = () => {
		setCurrentPic(currentPic === picsInArray - 1 ? 0 : currentPic + 1);
		console.log(currentPic);
	};

	const prevSlide = () => {
		setCurrentPic(currentPic === 0 ? picsInArray - 1 : currentPic - 1);
		console.log(currentPic);
	};

	if (!Array.isArray(SliderData) || picsInArray <= 0) {
		return null;
	}

	return (
		<section className='slider'>
			<FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
			<FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
			{SliderData.map((pic_link, index) => {
				return (
					<div
						className={index === currentPic ? 'slide active' : 'slide'}
						key={index}
					>
						{index === currentPic && (
							<img src={pic_link.image} alt='pic' className='image' />
						)}
					</div>
				);
			})}
		</section>
	);
};

export default ImageSlider;
