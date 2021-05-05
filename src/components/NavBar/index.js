import React from 'react';
import { animateScroll as scroll, Link } from 'react-scroll';
import { Container, Button, TitleWrapper, Title, Subtitle } from './NavBarElements';

class NavBar extends React.Component {

    render() {
        return (
            
        <Container>                  
            <Button span={[2,3]}>
                <Link to="projects" smooth={true} duration={500} offset={-150}>Projects</Link>
            </Button>
            
            <Button span={[3,4]}>
                <Link to="about" smooth={true} duration={500} offset={-150}>About</Link>
            </Button>

            <TitleWrapper span={[4,5]} onClick={scroll.scrollToTop}>
                <Title>Tom Angus</Title>
                <Subtitle>Comp-Sci Student</Subtitle>
            </TitleWrapper>

            <Button  span={[5,6]}>
                <Link to="cv" smooth={true} duration={500} offset={-150}>CV</Link>
            </Button>

            <Button span={[6,7]}>
                <Link to="contact" smooth={true} duration={500} offset={-150}>Contact</Link>
            </Button>
        </Container>
            
        );
    }
    
}

export default NavBar;