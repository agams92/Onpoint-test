import React from 'react';
import HeaderContainter from './js/Header/HeaderContainter';
import MainContainer from './js/Main/MainContainer';
import FooterContainer from './js/Footer/FooterContainer';
import Pagination from './js/Pagination';
import {hot} from 'react-hot-loader';
import NextBlock from './js/NextBlock';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.changeActivePage = this.changeActivePage.bind(this);
		this.handleTouchStart = this.handleTouchStart.bind(this);
		this.handleTouchEnd = this.handleTouchEnd.bind(this);
		this.state = {
			activePageIndex: 0
		};
	}

	changeActivePage(newIndex) {
		this.setState({activePageIndex: newIndex});
	}

	handleTouchStart(event) {
        const touchObjects = event.nativeEvent.targetTouches;
        const sliderHandler = document.querySelector('.slider-handler__handle');
		if (touchObjects[0].target === sliderHandler) {
            this.sliderTouched = true;
        } else {
            this.sliderTouched = false;
        }
		this.touchStartPoint = event.nativeEvent.changedTouches[0].screenY;
	}

	handleTouchEnd(event) {
        if (this.sliderTouched) return;
		const touchEndPoint = event.nativeEvent.changedTouches[0].screenY;
		const direction = this.touchStartPoint - touchEndPoint;
		const currentPage = this.state.activePageIndex;
		const nextPage = currentPage + 1;
		const previousPage = currentPage - 1;
		if (previousPage >= 0 && direction < 0) {
			window.scrollTo({
				top: 768 * previousPage,
				left: 0,
				behavior: 'smooth'
			});
			this.changeActivePage(previousPage);
		} else if (nextPage <= 2 && direction > 0) {
			window.scrollTo({
				top: 768 * nextPage,
				left: 0,
				behavior: 'smooth'
			});
			this.changeActivePage(nextPage);
		}
	}

    render() {
		return (
			<div className='app' onTouchStart={this.handleTouchStart} onTouchEnd={this.handleTouchEnd} >
				<HeaderContainter />
				<NextBlock activePageIndex={this.state.activePageIndex} />
				<MainContainer />
				<FooterContainer />
				<Pagination activePageIndex={this.state.activePageIndex} />
			</div>  
		);
	}
}

export default hot(module)(App);