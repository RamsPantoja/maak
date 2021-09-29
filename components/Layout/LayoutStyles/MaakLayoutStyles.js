import styled from 'styled-components';

//Styles
export const MaakLayoutContainer = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    font-family: var(--font-family);
`

export const Header = styled.header`
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${
        props => props.theme === 'dark' ? 'var(--secondary-color)' 
        : props.theme === 'light' ? 'var(--secondary-color-white-theme)' : 'var(--secondary-color-white-theme)'
    };
    z-index: 20;
`

export const MaakLayoutRelativeContainer = styled.div`
    position: relative;
    top: 70px;
`

export const MaakLayoutMain = styled.main`
    background-color: ${
        props => props.theme === 'dark' ? 'var(--secondary-color)' 
        : props.theme === 'light' ? 'var(--last-color-white-theme)' : 'var(--last-color-white-theme)'
    };
`

export const MaakLayoutFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${
        props => props.theme === 'dark' ? 'var(--last-color)' 
        : props.theme === 'light' ? 'var(--last-color-white-theme)' : 'var(--last-color-white-theme)'
    }
`

