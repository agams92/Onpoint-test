import React from 'react';
import Footer from './Footer';
import SlidePoint from './SlidePoint';

class FooterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.goToNextSlide = this.goToNextSlide.bind(this);
        this.goToPrevSlide = this.goToPrevSlide.bind(this);
        this.state = {
            currentIndex: 0,
            translateValue: 0
        };
    }

    goToPrevSlide() {
        console.log(1);
        if(this.state.currentIndex === 0)
          return;
        
        this.setState(prevState => ({
          currentIndex: prevState.currentIndex - 1,
          translateValue: prevState.translateValue + 1024
        }));
    }

    goToNextSlide () {
        console.log(2);
        if(this.state.currentIndex === 2) {
          return;
        }

        this.setState(prevState => ({
          currentIndex: prevState.currentIndex + 1,
          translateValue: prevState.translateValue - 1024
        }));
    }

    render() {
        const slidePoints = [
            {
                name: 'beta',
                caption: 'ß-клетки',
                icon: 'ß'
            },
            {
                name: 'muscle',
                caption: 'Мышцы',
                icon: null
            },
            {
                name: 'liver',
                caption: 'Печень',
                icon: null
            },
            {
                name: 'inkret',
                caption: 'Инкретиновый эффект',
                icon: '2'
            },
            {
                name: 'alpha',
                caption: 'Дефект α-клеток',
                icon: '3'
            },
            {
                name: 'fat',
                caption: 'Жировые клетки',
                icon: null
            },
            {
                name: 'brain',
                caption: 'Головной мозг',
                icon: null
            },
            {
                name: 'kidneys',
                caption: 'Почки',
                icon: null
            },
            {
                name: 'amilin',
                caption: 'амилин',
                icon: null
            },
            {
                name: 'glukagon',
                caption: 'глюкагон',
                icon: null
            },
            {
                name: 'infection',
                caption: 'Нарушение имунной регуляции/воспаление',
                icon: null
            },
            {
                name: 'bowels',
                caption: 'Микрофлора кишечника',
                icon: null
            },
            {
                name: 'stomach',
                caption: 'Желудок',
                icon: null
            }
        ];
        const firstSlidePointsNumbers = {
            beta: 1, 
            muscle: 2, 
            liver: 3
        };
        const secondSlidePointsNumbers = {
            beta: 1,
            inkret: 2,
            alpha: 3,
            fat: 4,
            muscle: 5,
            liver: 6,
            brain: 7,
            kidneys: 8
        };
        const thirdSlidePointsNumbers = {
            beta: 1,
            inkret: 2,
            alpha: 3,
            fat: 4,
            muscle: 5,
            liver: 6,
            brain: 7, 
            bowels: 8,
            infection: 9,
            stomach: 10,
            kidneys: 11,
            glukagon: 12, 
            amilin: 13
        };
        const firstSlidePoints =[], secondSlidePoints = [], thirdSlidePoints =[];

        function fillSlidesWithPoints (slideNumber, name, caption, number, icon) {
            const slide = slideNumber === 'first' ? firstSlidePoints : slideNumber === 'second' ? secondSlidePoints : thirdSlidePoints;
            slide.push(
                <SlidePoint 
                    slide={slideNumber} 
                    name={name} 
                    caption={caption} 
                    icon={icon} 
                    number={number}
                />
            );
        }

        slidePoints.forEach(point => {
            const {name, caption, icon} = point;
            if (firstSlidePointsNumbers[point.name]) {
                const number = firstSlidePointsNumbers[point.name];
                fillSlidesWithPoints('first', name, caption, number, icon);
            }
            if (secondSlidePointsNumbers[point.name]) {
                const number = secondSlidePointsNumbers[point.name];
                fillSlidesWithPoints('second', name, caption, number, icon);
            }
            if (thirdSlidePointsNumbers[point.name]) {
                const number = thirdSlidePointsNumbers[point.name];
                fillSlidesWithPoints('third', name, caption, number, icon);
            }
        });

        return(
            <Footer goToNextSlide={this.goToNextSlide} goToPrevSlide={this.goToPrevSlide} translateValue={this.state.translateValue} >
                <div className='slider__screen-slide first-slide'>
                    <h2 className='first-slide__title'>Звенья патогенеза СД2</h2>
                    <p className='first-slide__glycemia'>Гипергликемия</p>
                    {firstSlidePoints}
                </div>
                <div className='slider__screen-slide second-slide'>
                    <h2 className='second-slide__title'>Смертельный октет</h2>
                    <p className='second-slide__glycemia'>Гипергликемия</p>
                    {secondSlidePoints}
                </div>
                <div className='slider__screen-slide third-slide'>
                    <h2 className='third-slide__title'>Звенья патогенеза СД2</h2>
                    <p className='third-slide__glycemia'>Гипергликемия</p>
                    <div className='third-slide__table'>
                        <h3 className='third-slide__table-title'>Инсулинорезистентность</h3>
                    </div>
                    {thirdSlidePoints}
                </div>
            </Footer>
        );
    }
}

export default FooterContainer;