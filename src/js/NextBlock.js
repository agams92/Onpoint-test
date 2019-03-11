import React from 'react';
import PropTypes from 'prop-types';

function NextBlock ({activePageIndex}) {
    const hidden = activePageIndex === 0 ? '' : 'element_hidden';
    return(
        <div className={`next-section ${hidden}`}>
            <p className='next-section__title'>Листайте вниз</p>
            <span className='next-section__arrow-down'/>
        </div>
    );
}

NextBlock.propTypes = {
    activePageIndex: PropTypes.number
};

export default NextBlock;