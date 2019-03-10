import React from 'react';

function SlidePoint({slide, name, caption, icon, number}) {
    const template = `${slide}-slide__${name}`;
    let numberTag = <p className={`${template}-number`}>{number}</p>,
        captionTag = <p className={`${template}-caption`}>{caption}</p>,
        iconTag = <p className={`${template}-icon`}>{icon}</p>;

    if (slide === 'second' && (name === 'inkret' || name === 'alpha')) {
        numberTag = null;
    }

    if (slide === 'third') {
        if (name === 'inkret' || name === 'alpha') {
            iconTag = null;
            if (name === 'inkret') {
                captionTag = <p className={`${template}-caption`}><i className="fas fa-long-arrow-alt-down" />Инкретинового эффекта</p>;
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

export default SlidePoint;