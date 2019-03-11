import React from 'react';
import { th } from 'date-fns/esm/locale';

class SliderHandler extends React.Component {
    constructor(props) {
        super(props);
        this.handleTouch = this.handleTouch.bind(this);
        this.state = {
            translateValue: 0
        };
    }

    componentDidMount() {
        const sliderBounds = document.querySelector('.slider-handler').getBoundingClientRect();
        const sliderStart = sliderBounds.left, sliderEnd = sliderBounds.right;
        const sliderLength = sliderEnd - sliderStart;
        this.middlePoint = sliderLength / 2;
        this.oneThird = sliderLength / 3;
        this.twoThird = sliderLength / 3 * 2;
        this.setState({sliderStart: sliderStart, sliderEnd: sliderEnd});
    }

    handleTouch(event) {
        const {goToSlide, currentSlideIndex} = this.props;
        const touchPoint = event.nativeEvent.changedTouches[0].screenX;
        const type = event.nativeEvent.type;

        if (touchPoint < this.state.sliderStart || touchPoint > this.state.sliderEnd - 14) return;

        const newTranslateValue = touchPoint - this.state.sliderStart - 11;

        const handlerInTheMiddle = newTranslateValue > this.oneThird && newTranslateValue < this.twoThird;
        const handlerInTheBeginning = newTranslateValue < this.oneThird;
        const handlerInTheEnd = newTranslateValue > this.twoThird;

        const sliderEndPoint = this.middlePoint * 2 - 25;

        if (type === 'touchmove') {
            if (handlerInTheMiddle && currentSlideIndex !== 1) {
                goToSlide(1);
            } else if (handlerInTheEnd && currentSlideIndex !== 2) {
                goToSlide(2);
            } else if (handlerInTheBeginning && currentSlideIndex !== 0) {
                goToSlide(0);
            }
            this.setState({translateValue: newTranslateValue});
        } else if (type === 'touchend') {
            if (handlerInTheMiddle) {
                this.setState({translateValue: this.middlePoint});
            } else if (handlerInTheEnd) {
                this.setState({translateValue: sliderEndPoint});
            } else if (handlerInTheBeginning) {
                this.setState({translateValue: 0});
            }
        }
    }

    render() {
        return (
            <div className='slider-handler'>
                <div className='slider-handler__handle' 
                    onTouchMove={this.handleTouch} 
                    onTouchEnd={this.handleTouch}
                    style={{
                        transform: `translateX(${this.state.translateValue - 5}px)`
                }}/>
                <div className='slider-handler__track-wrapper'>
                    <div className='slider-handler__track' 
                        style={{
                            transform: `translateX(${this.state.translateValue - 646}px)`
                    }}/>
                </div>
                <div className='slider-handler__points-wrapper'>
                    <p className='slider-handler__point'>1988</p>
                    <p className='slider-handler__point'>2009</p>
                    <p className='slider-handler__point'>2016</p>
                </div>
            </div>
        );
    }
}

export default SliderHandler;