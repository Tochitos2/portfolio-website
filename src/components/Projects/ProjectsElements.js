import React from 'react';
import styled, { css } from 'styled-components';

class Project extends React.Component {

    render() {
        return (
            <ProjectCard className= { this.props.className } onClick={ () => window.open( this.props.href ) }>
            <Title float={ this.props.float }> { this.props.title } </Title>
            <Description float={ this.props.float }> { this.props.description } </Description>
            <Icon float={ this.props.float } src={`/icons/${this.props.iconPath}.jpg`} alt={this.props.altText} />
            </ProjectCard>
        );        
    }

}

export default Project;

const ProjectCard = styled.div`
    flex: 0 0 min(30rem, 100%);
    margin: 0 1rem 2rem 1rem;
    border: 1px solid ${ props => props.theme.borderColour };
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`;

const Title = styled.h3`
    font-family: ${ props => props.theme.fontFamily };
    grid-row: 1 / 2;
    grid-column: ${ props => props.float === "left" ? "1 / 2" : "2 / 3" };
    text-align: ${ props => props.float };
`;

const Description = styled.p`
    font-family: ${ props => props.theme.fontFamily };
    grid-row: 2 / 3;
    grid-column: ${ props => props.float === "left" ? "1 / 2" : "2 / 3" };
    text-align: ${ props => props.float };
`;

const Icon = styled.img`
    grid-row: 1 / 3;
    grid-column: ${ props => props.float === "left" ? "2 / 3" : "1 / 2" };
`;

export const SectionTitle = styled.h2`
    text-align: center;
    font-family: ${ props => props.theme.fontFamily };
`;

export const ProjectsContainer = styled.section`
    margin: 2rem 10vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 500px) {
        margin: 2rem 5vw;
    }
`;