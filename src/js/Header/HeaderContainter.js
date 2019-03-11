import React from 'react';
import Header from './Header';

class HeaderContainter extends React.Component {
    render() {
        const pointValues = [['Цель по HbA1c', 'first'], ['Гипогликемия', 'second'], 
                            ['Осложнения СД', 'third'], ['СС риски', 'fourth']];
        const pointsToRender = [];
        for (let i = 0; i < pointValues.length; i++) {
            const text = pointValues[i][0];
            const number = pointValues[i][1];
            const point = (
                <div className={`first-screen__point first-screen__point_${number}`} key={i}>
                    <div className="circle" style={{animationDelay: 0 + 's'}}></div>
                    <div className="circle1" style={{animationDelay: 1 + 's'}}></div>
                    <div className="circle" style={{animationDelay: 2 + 's'}}></div>
                    <div className="circle2" style={{animationDelay: -1 + 's'}}></div>
                    <p className={`first-screen__point_text first-screen__point_text_${number}`}>{text}</p>
                </div>
            );
            pointsToRender.push(point);
        }
        return (
            <Header>{pointsToRender}</Header>   
        );
    }
}

export default HeaderContainter;