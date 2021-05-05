import styled, { css } from 'styled-components';
import React from 'react';
import { SectionTitle } from '../Container';

class Contact extends React.Component {
    render() {
        return (
            <>
                <SectionTitle id="contact">Contact</SectionTitle>
                <Paragraph>hullo pls ring</Paragraph>
            </>
        );
    }
}

export default Contact;

const Paragraph = styled.p`
    font-family: ${props => props.theme.fontFamily};
    font-weight: ${props => props.theme.fontWeight};
    font-size: 1.5rem;
    color: ${props => props.theme.textColour};
    display: inline;
`;