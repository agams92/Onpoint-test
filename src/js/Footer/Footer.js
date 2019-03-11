import React from 'react';
import SliderHandler from './SliderHandler';
import PropTypes from 'prop-types';

function Footer ({goToSlide, translateValue, currentSlideIndex, children}) {
    return (
        <div className='screen third-screen'>
            <div className="slider__screen">
                <div className="slider__screen-wrapper"
                    style={{
                        transform: `translateX(${translateValue}px)`,
                        transition: 'transform ease-out 0.4s'
                    }}>
                    {children}
                </div>
            </div>
            <SliderHandler goToSlide={goToSlide} currentSlideIndex={currentSlideIndex} />
        </div>
    );
}

Footer.propTypes = {
    goToSlide: PropTypes.func,
    translateValue: PropTypes.number,
    currentSlideIndex: PropTypes.number,
    children: PropTypes.arrayOf(PropTypes.element)
};

export default Footer;