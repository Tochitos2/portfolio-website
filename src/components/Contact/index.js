import styled, { css } from 'styled-components';
import React from 'react';
import Recaptcha from 'react-recaptcha';
import { SectionTitle } from '../Container';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { isVerified: false };
    }

    render() {
        const captchaOnResponse = (response) => {
            if(response){
                console.log("verified");
                this.setState({isVerified: true});
            }
        };

        const StyledCaptcha = styled(Recaptcha)`
            padding: 0;
            display: inline-block;            
        `;

        const VerifyBody = (
            <div style={{textAlign: "center"}}>
                <Paragraph>Please use the Recaptcha below to access contact information.</Paragraph>
                <StyledCaptcha
                    style={{alignSelf: "center"}}
                    sitekey="6Lev1sgaAAAAAGhZsRK5QTmV-hAzZS9pL7k9m4RB"
                    render="explicit"
                    verifyCallback={captchaOnResponse}
                />
            </div>
        );
        
        return (
            <>
                <SectionTitle id="contact">Contact</SectionTitle>
                {this.state.isVerified ? ContactBody : VerifyBody}
            </>
        );
    }
}

export default Contact;

// email is written backwards to deter bots from scraping it from the repo.
const email = "ku.ca.tnek@725at".split("").reverse("").join("");

const ContactContainer =  styled.div`
margin: 3rem 35vw 1rem 35vw;
place-items: center;
border: 1px solid ${ props => props.theme.borderColour };

@media (max-width: 650px) {
    margin: 2rem 10vw;
}
`;

const Paragraph = styled.p`
    font-family: ${props => props.theme.fontFamily};
    font-weight: ${props => props.theme.fontWeight};
    font-size: 1.5rem;
    color: ${props => props.theme.textColour};
    display: block;
    text-align: center;
`;

const Header = styled(Paragraph)`
    font-size: 2rem;
    margin-top: 1rem;
    margin-bottom: 4rem;
`;

const UnstyledAnchor  = styled.a`
text-decoration: none;
color: inherit;

&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
`;

const ContactBody = (
    <ContactContainer>
        <Header>You can find me at: </Header>
        <Paragraph>{email}</Paragraph>
        <Paragraph><UnstyledAnchor href="Github.com/Tochitos2">Github.com/Tochitos2</UnstyledAnchor></Paragraph>
        <Paragraph>LinkedIn</Paragraph>
    </ContactContainer>
);
