import React from 'react';
import SliderHandler from './SliderHandler';

class Footer extends React.Component {
    render() {
        const {goToSlide, translateValue, currentSlideIndex} = this.props;
        return (
            <div className='screen third-screen'>
                <div className="slider__screen">
                    <div className="slider__screen-wrapper"
                        style={{
                            transform: `translateX(${translateValue}px)`,
                            transition: 'transform ease-out 0.4s'
                        }}>
                        {this.props.children}
                    </div>
                </div>
                <SliderHandler goToSlide={goToSlide} currentSlideIndex={currentSlideIndex} />
            </div>
        );
    }
}

export default Footer;