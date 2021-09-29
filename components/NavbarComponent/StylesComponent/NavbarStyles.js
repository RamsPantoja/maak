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
        color: ${
            props => props.theme === 'dark' ? 'var(--primary-text-color)' 
            : props.theme === 'light' ? 'var(--primary-text-color-white-theme)' : 'var(--primary-text-color-white-theme)'
        };
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

export const SwitchContainer = styled.label`
    display: flex;
    align-items: center;
    max-width: 60px;
    width: 100%;
    height: 27px;
    border-radius: 1em;
    background-color: var(--secondary-text-color);
    position: relative;
    cursor: pointer;
    padding: 2px;
    &:hover > span {
        box-shadow: ${
            props => props.theme === 'dark' ? '0 0 3px 4px #ffffff'
            : props.theme === 'light' ? '0 0 3px 4px #000000' : '0 0 3px 4px #000000'
        };
        border: 1px solid #000000;
    }

    & .icon-light {
        margin-left: 3px;
        position: absolute;
        left: 0;
    }

    & .icon-dark {
        margin-right: 3px;
        position: absolute;
        right: 0;
    }
`

export const InputCheckBox = styled.input`
    opacity: 0;
    &:checked + span {
        -webkit-transform: translateX(32px);
        -ms-transform: translateX(32px);
        transform: translateX(32px);
    }
    cursor: pointer;
`
export const Slider = styled.span`
    position: absolute;
    background-color: var(--primary-text-color);
    height: 25px;
    width: 25px;
    transition: 0.3s ease;
    border-radius: 2em;
    z-index: 1;
`