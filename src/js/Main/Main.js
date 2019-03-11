import React from 'react';
import PropTypes from 'prop-types';

function Main ({activePageIndex}) {
    const translateValue = activePageIndex === 0 ? 350 :
                           activePageIndex === 1 ? 0 : -350;
    return(
        <div className='screen second-screen'>
            <div className='parallax-wrapper'
                style={{
                    transform: `translateY(${translateValue}px)`
            }}>
                <p className='second-screen__title'>Основа терапии — патогенез СД2</p>
            </div>
            
        </div>
    );
}

Main.propTypes = {
    activePageIndex: PropTypes.number
};

export default Main;
