import React from 'react';
import PropTypes from 'prop-types';

function Pagination ({activePageIndex}) {
    const pagesToRender = [];
    for (let i = 0; i < 3; i++) {
        const active = activePageIndex === i ? 'pagination__page_active' : '';
        const page = (
            <span className={`pagination__page ${active}`} key={i} />
        );
        pagesToRender.push(page);
    }
    return(
        <div className='pagination'>
            {pagesToRender}
        </div>
    );
}

Pagination.propTypes = {
    activePageIndex: PropTypes.number
};

export default Pagination;