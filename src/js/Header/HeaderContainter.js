import React from 'react';
import Header from './Header';

class HeaderContainter extends React.Component {
    render() {
        const {changePage} = this.props;
        return (
            <Header changePage={changePage} />
        );
    }
}

export default HeaderContainter;