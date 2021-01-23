import React from 'react';
import styled, { css } from 'styled-components';
import { SectionTitle } from '../Container';

export default class About extends React.Component{

    render() {
        return(
            <>
                <SectionTitle>About</SectionTitle>

                <AboutContainer>
                <StandOut>Hi! </StandOut>
                <Paragraph>{ text }</Paragraph>
                </AboutContainer>
            </>
        );
    }
}
const AboutContainer = styled.div`
    margin: 2rem 20vw;

    @media (max-width: 650px) {
        margin: 2rem 10vw;
    }
`;

const Paragraph = styled.p`
    font-family: ${props => props.theme.fontFamily};
    font-weight: ${props => props.theme.fontWeight};
    font-size: 1.5rem;
    color: ${props => props.theme.textColour};
    display: inline;
`;

const StandOut = styled(Paragraph)`
    display: inline;
    font-size: 4rem;
    font-weight: normal;
    font-style: italic;
    padding-right: 1.5rem;
`;

const text = "I'm a second year Computer Science student with an interest in Cyber Security, Web Design, Reverse Engineering, Game Modding, and using Computer Science to advance our climate response and create a positive impact.";
