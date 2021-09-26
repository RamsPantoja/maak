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
    background-color: var(--secondary-color);
    z-index: 20;
`

export const MaakLayoutRelativeContainer = styled.div`
    position: relative;
    top: 70px;
`

export const MaakLayoutFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--last-color);
`