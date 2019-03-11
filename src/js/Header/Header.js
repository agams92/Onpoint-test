import React from 'react';
import PropTypes from 'prop-types';

function Header ({children}) {
    return (
        <div className='screen first-screen'>
            <h1 className='first-screen__title'>Всегда ли цели терапии СД2 на поверхности?</h1>
            {children}
        </div>
    );
}

Header.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
};

export default Header;