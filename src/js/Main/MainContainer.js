import React from 'react';
import Main from './Main';

class MainContainer extends React.Component {
    render() {
        const {changePage} = this.props;
        return(
            <Main changePage={changePage} />
        );
    }
}

export default MainContainer;