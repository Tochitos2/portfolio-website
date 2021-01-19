import styled, { css } from 'styled-components';

const fontFamily = props => props.theme.fontFamily;
const fontWeight = props => props.theme.fontWeight;

export const Container = styled.div`
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 2;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr auto 1fr 1fr 2fr;
    width: 100%;
    align-items: center;
    text-transform: uppercase;
    font-family: ${ fontFamily };
    font-weight: ${ fontWeight };
    border-bottom: 1px solid ${ props => props.theme.borderColour };
    background-color: ${ props => props.theme.primary };
    opacity: 90%;

    @media (max-width: 750px) {
        grid-template-columns: 0 0 0 auto 0 0 0;
    }
`;

export const Button = styled.a`
    color: ${props => props.theme.text};
    grid-column: ${props => props.span[0] + "/" + props.span[1]};
    text-align: center;
    align-self: flex-end; 
    font-family: ${ fontFamily };
    font-weight: ${ fontWeight };
    cursor: pointer;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;

    // Underline on hover animation using psuedo elements to allow custom width borders.  
    ::after {
        content: "";
        display: block;
        width: 0;
        margin-left: 50%;
        padding-top: 0.3rem;
        border-bottom: 2px solid ${ props => props.theme.borderColour };

        transition-duration: 0.1s;
        transition-timing-function: ease-in-out;
    }
    :hover::after {
        margin-left: 15%;
        width: 70%;
    }

    @media (max-width: 750px) {
        display: none;
    }

`;

export const TitleWrapper = styled.div`
    grid-column: ${props => props.span[0] + "/" + props.span[1]};
    text-align: center;
    font-family: ${ fontFamily };
    font-weight: ${ fontWeight };
    margin: 0.5rem 4rem 0.5rem 4rem;

    @media (max-width: 850px) {
        margin: 0.5rem 1rem;
    }
    `;

export const Title = styled.h1`
    text-align: center;
    font-family: ${ fontFamily };
    font-weight: ${ fontWeight };
    margin: 0;
    font-size: 3rem;

    @media (max-width: 350px) {
        font-size: 2rem;
    }
    `;

export const Subtitle = styled.p`
    text-align: center;
    font-family: ${ fontFamily };
    font-weight: ${ fontWeight };
    margin: 0;
    text-transform: none;
    font-style: italic;
    font-size: 1.1rem;

    @media (max-width: 350px) {
        font-size: 0.7rem;
    }
    `;