import React from 'react';
import styled, { css } from 'styled-components';

class Container extends React.Component {
    render() {
        return (
            <StyledContainer>
                {this.props.children}
            </StyledContainer>        
        );
    } 

    componentDidMount() {
        // Fix for body rendering with 8px margin.
        document.body.style.margin = 0;
    }
}


const StyledContainer = styled.div`
    // Background image is handled in a psuedo-element to ensure the   
    // filter is only applied to the image and no other elements.
    :before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background-image: url('background.jpg');
        background-repeat: no-repeat;
        background-size: cover;

        // Theme handling
        transition-duration: 0.5s;
        transition-timing-function: ease-in-out;
        filter: invert(${ props => props.theme.backgroundInvert });
    }   
`;

export default Container;

export const SectionTitle = styled.h2`
text-align: center;
font-family: ${ props => props.theme.fontFamily };
font-weight: ${ props => props.theme.fontWeight };
color: ${ props => props.theme.textColour };
font-size: 2rem;
margin-top: 3rem;

// Psuedo-elements to create seperator lines to each side of section title.
::before {
    content: "";
    display: inline-block;
    margin-bottom: 0.4rem;
    margin-right: 0.5rem;
    height: 0;
    width: 30%;
    border-bottom: 2px solid ${props => props.theme.borderColour};

    @media(max-width: 350px) {
        width: 20%;
    }
}
::after {
    content: "";
    display: inline-block;
    margin-bottom: 0.4rem;
    margin-left: 0.5rem;
    height: 0;
    width: 30%;
    border-bottom: 2px solid ${props => props.theme.borderColour};

    @media(max-width: 350px) {
        width: 20%;
    }
}
`;