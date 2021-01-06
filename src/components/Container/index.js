import React from 'react';
import NavBar from '../NavBar';
import Projects from '../Projects';
import About from '../About';
import CV from '../CV';
import Contact from '../Contact';
import styled, { css } from 'styled-components';

class Container extends React.Component {
    render() {
        return (
            <StyledContainer>
                <NavBar />
                <Projects />
                <About />
                <CV />
                <Contact />
            </StyledContainer>
            
        );
    } 

    componentDidMount() {
        // Fix for body rendering with 8px margin.
        document.body.style.margin = 0;
    }
}

const StyledContainer = styled.div`
    // Background image is handled in a psuedo-element to ensure the filter  
    // is only applied to the image and no other elements.
    :before {
        content: "";
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background-image: url('background.jpg');
        background-repeat: no-repeat;
        // Size the image to fit width to 100% and allow length to overflow.
        background-size: 100% auto; 

        // Theme handling
        transition-duration: 0.5s;
        transition-timing-function: ease-in-out;
        filter: invert(${ props => props.theme.darkMode });
    }   
`;

export default Container;