import React from 'react';
import Footer from './Footer';

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
            glukagon: 12
        };
        const firstSlidePoints =[], secondSlidePoints = [], thirdSlidePoints =[];
        slidePoints.forEach(point => {
            const {name, caption, icon} = point;
            if (firstSlidePointsNumbers[point.name]) {
                const number = firstSlidePointsNumbers[point.name];
                firstSlidePoints.push(
                    <SlidePoint 
                        slide='first' 
                        name={name} 
                        caption={caption} 
                        icon={icon} 
                        number ={number}
                    />
                );
            }
            if (secondSlidePointsNumbers[point.name]) {
                const number = secondSlidePointsNumbers[point.name];
                if (name === 'inkret' || name === 'alpha') {
                    secondSlidePoints.push(
                        <SlidePoint 
                            slide='second' 
                            name={name} 
                            caption={caption} 
                            icon={icon} 
                            number={''}
                        />
                    );
                } else {
                    secondSlidePoints.push(
                        <SlidePoint 
                            slide='second' 
                            name={name} 
                            caption={caption} 
                            icon={icon} 
                            number ={number}
                        />
                    );
                }
            }if (thirdSlidePointsNumbers[point.name]) {
                const number = thirdSlidePointsNumbers[point.name];
                thirdSlidePoints.push(
                    <SlidePoint 
                        slide='third' 
                        name={name} 
                        caption={caption} 
                        icon={icon} 
                        number ={number}
                    />
                );
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
                        <h3 className='third-slide__table-title'>Инсулинорезистентость</h3>
                        {thirdSlidePoints}
                    </div>
                    
                </div>
            </Footer>
        );
    }
}

function SlidePoint({slide, name, caption, icon, number}) {
    const template = `${slide}-slide__${name}`;
    return (
        <div className={`${template}`}>
            <p className={`${template}-number`}>{number}</p> 
            <p className={`${template}-caption`}>{caption}</p>
            <p className={`${template}-icon`}>{icon}</p>
        </div>
    );
}

export default FooterContainer;