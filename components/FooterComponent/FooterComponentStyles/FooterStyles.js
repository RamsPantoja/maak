import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: grid;
    max-width: 1200px;
    width: 100%;
    align-items: flex-start;
    grid-template-columns: repeat(3, 1fr);
`

export const FooterCard = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1em;
    flex-direction: column;

    p {
        color: ${
            props => props.theme === 'dark' ? 'var(--primary-text-color)' 
            : props.theme === 'light' ? 'var(--primary-text-color-white-theme)' : 'var(--primary-text-color-white-theme)'
        };
        font-weight: 400;
    }
`

export const FooterList = styled.ul`
    display: flex;
    gap: 1em;
    flex-direction: column;
    padding: 0;
`

export const FooterListItem = styled.li`
    display: block;
    color: var(--secondary-text-color);
    font-weight: 300;
    font-size: 0.9rem;
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