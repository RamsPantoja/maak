import styled from 'styled-components';

export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 1500px;
    width: 100%;
`

export const NavbarLogo = styled.div`
    position: relative;
    width: 250px;
    height: 55px;
    &:hover {
        cursor: pointer;
    }
`

export const NavbarLinks = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 350px;
    width: 100%;
`

export const NavbarLink = styled.a`
    color: var(--secondary-text-color);
    font-weight: 600;
    transition: 0.3s ease;
    cursor: default;
    &:hover {
        color: var(--primary-text-color);
        cursor: pointer;
    }
`
export const NavbarSignLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 330px;
    width: 100%;
`

export const NavbarLinkSignIn = styled.a`
    color: var(--primary-text-color);
    cursor: default;
    &:hover {
        cursor: pointer;
    }
`

export const NavbarLinkSignUp = styled.a`
    padding: 0.5em 1em;
    background-color: var(--primary-button-color);
    border-radius: 0.3em;
    color: var(--primary-text-color);
    transition: 0.3s ease;
    &:hover {
        background-color: var(--primary-button-color-hover);
        cursor: pointer;
    }
`