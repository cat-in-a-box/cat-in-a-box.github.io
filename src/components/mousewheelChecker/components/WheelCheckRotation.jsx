import React from 'react';
import mouseUp from '../files/mouseUp.png'
import mouseDown from '../files/mouseDown.png'

class WheelCheckRotation extends React.Component {

    componentDidMount() {
        // Preload для картинок
        let images = [mouseUp, mouseDown]
        images.forEach(() => {
            new Image().src = mouseUp;
            new Image().src = mouseDown
        });

        let mouseArea = document.querySelector('.WheelCheckArea');
        let mouseUpCooldown;
        let mouseDownCooldown;

        mouseArea.addEventListener('wheel', function (a) {
            if (a.deltaY > 0) {
                document.getElementById('Wheel').classList.add('Down');
                window.clearTimeout(mouseDownCooldown);
                mouseDownCooldown = window.setTimeout(function () {
                    document.getElementById('Wheel').classList.remove('Down')
                }, 550);
            } else if (a.deltaY < 0) {
                document.getElementById('Wheel').classList.add('Up');
                window.clearTimeout(mouseUpCooldown);
                mouseUpCooldown = window.setTimeout(function () {
                    document.getElementById('Wheel').classList.remove('Up')
                }, 550);
            }

        });
    }

    render() {
        return <div/>;
    }
}

export default WheelCheckRotation;