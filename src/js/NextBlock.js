import React from 'react';

class NextBlock extends React.Component {
    render() {
        const hidden = this.props.activePageIndex === 0 ? '' : 'element_hidden';
        return(
            <div className={`next-section ${hidden}`}>
                <p className='next-section__title'>Листайте вниз</p>
                <span className='next-section__arrow-down'/>
            </div>
        );
    }
}

export default NextBlock;