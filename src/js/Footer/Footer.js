import React from 'react';

class Footer extends React.Component {
    render() {
        const {goToPrevSlide, goToNextSlide, translateValue} = this.props;
        return (
            <div className='screen thrid-screen'>
                <div className="slider__screen">
                    <div className="slider__screen-wrapper"
                        style={{
                            transform: `translateX(${translateValue}px)`,
                            transition: 'transform ease-out 0.4s'
                        }}>
                        {this.props.children}
                    </div>
                </div>
                <div className='slider__handler'
                    style={{width: '100px', height: '100px', background: 'black', position:'relative', display: 'inline-block'}}
                    onClick={goToPrevSlide}>

                </div>
                <div className='slider__handler'
                    style={{width: '100px', height: '100px', background: 'orange', position:'relative', display: 'inline-block'}}
                    onClick={goToNextSlide}>

                </div>
            </div>
        );
    }
}

export default Footer;