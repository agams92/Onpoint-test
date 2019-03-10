import React from 'react';
import Pagination from '../Pagination';

class Main extends React.Component {
    
    render() {
        const {changePage} = this.props;
        return(
            <div className='screen second-screen'>
                <p className='second-screen__title'>Основа терапии — патогенез СД2</p>
            </div>
        );
    }
}

export default Main;