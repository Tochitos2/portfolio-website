import React from 'react';
import styled, { css } from 'styled-components';

class Project extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ProjectContainer>
            <Title> { this.props.title } </Title>
            <Description> { this.props.desc } </Description>
            <Icon src= {`/icons/${this.props.imageName}.jpg`} alt= {this.props.altText} />
            </ProjectContainer>
        );        
    }
}

export default Project;

const ProjectContainer = styled.div`

`;

const Title = styled.h3`

`;

const Description = styled.p`

`;

const Icon = styled.img`

`;

export const SectionContainer = styled.section`
    margin: 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;