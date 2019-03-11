import React from 'react';
import PropTypes from 'prop-types';
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
        const touchPoint = event.nativeEvent.changedTouches[0].clientX;
        const type = event.nativeEvent.type;

        // Если тач-событие происходит за пределами слайдера (с поправкой в 14 пикселей ради корректного 
        // отображения кнопки слайдера), то метод ничего не делает
        if (touchPoint < this.state.sliderStart || touchPoint > this.state.sliderEnd - 14) return;

        // Вычисление нового значения для сдвига кнопки слайдера (с поправкой в 11 пикселей для отображения кнопки 
        // в месте касания)
        const newTranslateValue = touchPoint - this.state.sliderStart - 11;

        // Определение, где на слайдере находится кнопка
        const handlerInTheMiddle = newTranslateValue > this.oneThird && newTranslateValue < this.twoThird;
        const handlerInTheBeginning = newTranslateValue < this.oneThird;
        const handlerInTheEnd = newTranslateValue > this.twoThird;

        // Конец слайдера, чтобы можно было его сочетать со значением сдвига (и поправка с учетом 14 и 11 пикселей)
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

SliderHandler.propTypes = {
    goToSlide: PropTypes.func, 
    currentSlideIndex: PropTypes.number
};

export default SliderHandler;