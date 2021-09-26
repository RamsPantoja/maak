import styled from "styled-components";

export const Slogan = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    justify-content: center;

    h1 {
        font-size: 5rem;
        font-weight: 600;
        color: var(--primary-text-color);
        text-align: center; 
    }

    p {
        text-align: center;
        color: var(--primary-text-color);
        font-weight: 600;
        font-size: 2rem;
        max-width: 700px;
    }

    span {
        color: var(--secondary-text-color);
        font-weight: 400;
        font-size: 1.1rem;
    }
`

export const About = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const AboutWidthView = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 1000px;
    width: 100%;
`

export const AboutInf = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-left: 1em;

    h2 {
        color: var(--primary-text-color);
        font-size: 2rem;
        font-weight: 600;
    }

    p {
        color: var(--secondary-text-color);
        font-size: 1.1rem;
        font-weight: 400;
    }
`

export const CreateXSell = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 7em 0;
`

export const CreateXSellWidthView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1500px;
    width: 100%;

    h2 {
        color: var(--primary-text-color);
        font-size: 2rem;
        font-weight: 600;
    }
`

export const CreateXSellGrid = styled.div`
    display: grid;
    width: 100%;
    gap: 1.5em;
    grid-template-columns: repeat(4, 1fr);
`

export const CreateXSellGridItem = styled.div`
    display: flex;
    gap: 1em;
    margin-top: 1em;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background-color: var(--card-color);
    padding: 2em;
    border-radius: 0.3em;

    p {
        margin: 0;
        color: var(--primary-text-color);
        font-size: 1.1rem;
        font-weight: 600;
        text-align: center;
    }

    span {
        color: var(--secondary-text-color);
        text-align: center;
        font-weight: 400; 
    }
`