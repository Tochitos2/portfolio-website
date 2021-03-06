import React from 'react';
import styled, { css } from 'styled-components';
import { SectionTitle } from '../Container';

export default class About extends React.Component{

    render() {
        return(
            <>
                <SectionTitle id="about">About</SectionTitle>  


                <AboutContainer>
                <StandOut>Hi! </StandOut>
                <Paragraph>{text[0]}</Paragraph>
                <br/> <br/>
                <Paragraph>{text[1]}</Paragraph>
                <br/> <br/>
                <Paragraph>{text[2]}</Paragraph>
                </AboutContainer>
            </>
        );
    }
}
const AboutContainer = styled.div`
    margin: 3rem 20vw 8rem 20vw;

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

    @media (max-width: 650px) {
        font-size: 1rem;
    }
`;

const StandOut = styled(Paragraph)`
    display: inline;
    font-size: 4rem;
    font-weight: normal;
    font-style: italic;
    padding-right: 1.5rem;

    @media (max-width: 650px) {
        font-size: 2.5rem;
        padding-right: 1rem;
    }
`;

const text = ["I'm a second year Computer Science student with an interest in Cyber Security, Web Design, Reverse Engineering, Game Modding, and using computer science to advance our climate change response and create a positive social impact.", 
"In 2020 I was the vice president of the Kent University Cybersecurity Society, where I focused on providing educational hands-on sessions on security practices, threats, and responsible penetration testing.", 
"I'm currently looking for a Year in Industry placement, so please check out some of my work and my CV below!"];
