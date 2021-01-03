import React from 'react';
import { Container, Button, TitleWrapper, Title, Subtitle } from './NavBarElements';

const NavBar = () => {
    return (
        <Container>
            <Button link="#projects">Projects</Button>
            <Button link="#about">About</Button>
            <TitleWrapper>
                <Title>Tom Angus</Title>
                <Subtitle>Comp-Sci Student</Subtitle>
            </TitleWrapper>
            <Button link="#cv">CV</Button>
            <Button link="#contact">Contact</Button>
        </Container>
    );
};

export default NavBar;