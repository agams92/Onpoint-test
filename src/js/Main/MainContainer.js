import React from 'react';
import Main from './Main';
import PropTypes from 'prop-types';

class MainContainer extends React.Component {
    render() {
        const {activePageIndex} = this.props;
        return(
            <Main activePageIndex={activePageIndex}/>
        );
    }
}

MainContainer.propTypes = {
    activePageIndex: PropTypes.number
};

export default MainContainer;