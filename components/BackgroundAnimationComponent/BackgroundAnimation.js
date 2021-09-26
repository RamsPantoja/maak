import { useEffect, useRef } from 'react';
import { BackgroundAnimationContainer } from './BackgroundAnimationStyles/BackgroundAnimationStyles';

const BackgroundAnimation = ({children}) => {
    const backgroundAnimation = useRef(null);

    useEffect(() => {
        const createSquare = () => {
            const square = document.createElement('span');

            const backgroundColors = [
                '#4d54fe',
                '#00e7df',
                '#1a0e92'
            ]

            let size = Math.random() * 10;

            square.style.width = 20 + size + 'px';
            square.style.height = 20 + size + 'px';

            square.style.top = Math.random() * innerHeight + 'px';
            square.style.left = Math.random() * innerWidth + 'px';
            square.style.border = '1px solid'
            const bgColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
            square.style.borderColor = bgColor;
            backgroundAnimation.current.appendChild(square);

            setTimeout(() => {
                square.remove();
            }, 5000);
        }

        setInterval(() => {
            createSquare();
        }, 150);

        return () => {
            clearInterval();
        }
    }, [backgroundAnimation])

    return (
        <BackgroundAnimationContainer ref={backgroundAnimation}>
            {children}
        </BackgroundAnimationContainer>
    )
}

export default BackgroundAnimation;