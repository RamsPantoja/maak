import styled, { keyframes } from 'styled-components';

const animate = keyframes`
    0% {
        transform: scale(0) translateY(0) rotate(0deg);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: scale(1) translateY(-500%) rotate(360deg);
        opacity: 0;
    }
`

export const BackgroundAnimationContainer = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${
        props => props.theme === 'dark' ? 'var(--secondary-color)' 
        : props.theme === 'light' ? 'var(--secondary-color-white-theme)' : 'var(--secondary-color-white-theme)'
    };
    
    & > span {
        position: absolute;
        pointer-events: none;
        animation: ${animate} 5s linear infinite;
    }
`