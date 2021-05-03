/* eslint-disable no-useless-constructor */
import React from 'react';
import { Container, Button, TitleWrapper, Title, Subtitle } from './NavBarElements';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Button link="#about"span={[2,3]}>About</Button>
                <Button link="#projects" span={[3,4]}>Projects</Button>
                <TitleWrapper span={[4,5]}>
                    <Title>Tom Angus</Title>
                    <Subtitle>Comp-Sci Student</Subtitle>
                </TitleWrapper>
                <Button link="#cv" span={[5,6]}>CV</Button>
                <Button link="#contact" span={[6,7]}>Contact</Button>
            </Container>
        );
    }
    
}

export default NavBar;