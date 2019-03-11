import React from 'react';
import PropTypes from 'prop-types';

function SlidePoint({slide, name, caption, icon, number}) {
    const template = `${slide}-slide__${name}`;
    let numberTag = <p className={`${template}-number`}>{number}</p>,
        captionTag = <p className={`${template}-caption`}>{caption}</p>,
        iconTag = <p className={`${template}-icon`}>{icon}</p>;

    // В зависимости от слайда и пункта убирается или меняется тэг с номером, описанием или иконкой
    if (slide === 'second' && (name === 'inkret' || name === 'alpha')) {
        numberTag = null;
    }

    if (slide === 'third') {
        if (name === 'inkret' || name === 'alpha') {
            iconTag = null;
            if (name === 'inkret') {
                captionTag = <p className={`${template}-caption`}><i className="fas fa-long-arrow-alt-down" />инкретинового эффекта</p>;
            }
        }
        if (name === 'glukagon' || name === 'amilin') {
            numberTag = null;
            iconTag = null;
            if (name === 'amilin') {
                captionTag = <p className={`${template}-caption`}><i className="fas fa-long-arrow-alt-down"></i>{caption}</p>;
            } else {
                captionTag = <p className={`${template}-caption`}><i className="fas fa-long-arrow-alt-up"></i>{caption}</p>;                
            }
        }
    }

    return (
        <div className={`${template}`}>
            {numberTag}
            {captionTag}
            {iconTag}
        </div>
    );
}

SlidePoint.propTypes = {
    slide: PropTypes.string,
    name: PropTypes.string,
    caption: PropTypes.string,
    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    number: PropTypes.number
};

export default SlidePoint;