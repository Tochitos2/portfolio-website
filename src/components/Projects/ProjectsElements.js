import React from 'react';
import styled, { css } from 'styled-components';

class Project extends React.Component {

    render() {
        return (
            <ProjectCard className= { this.props.className } onClick={ () => window.open( this.props.href ) }>
                <Title float={ this.props.float }> { this.props.title } </Title>
                <Description float={ this.props.float }> { this.props.description } </Description>
                <Icon float={ this.props.float } src={`./icons/${this.props.iconPath}`} alt={this.props.altText} />
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
    position: relative;
    
    ::before {
        content: "";
        position: absolute;
        top: 0; 
        left: 0;
        width: 100%; 
        height: 100%;  
        opacity: 55%; 
        z-index: -1;
        background-color: ${ props => props.theme.primary };
    }
`;

const Title = styled.h3`
    font-family: ${ props => props.theme.fontFamily };
    font-weight: ${ props => props.theme.fontWeight };
    font-size: 1.5rem;
    grid-row: 1 / 2;
    grid-column: ${ props => props.float === "left" ? "1 / 2" : "2 / 3" };
    text-align: ${ props => props.float };
    margin-${props => props.float}: 1rem;
    margin-top: 1rem;
    margin-bottom: 0;    
`;

const Description = styled.p`
    font-family: ${ props => props.theme.fontFamily };
    font-weight: ${ props => props.theme.fontWeight };
    grid-row: 2 / 3;
    grid-column: ${ props => props.float === "left" ? "1 / 2" : "2 / 3" };
    text-align: ${ props => props.float };
    margin-${props => props.float}: 1rem;   
    margin-top: 0.5rem;
    margin-bottom: 1rem;
`;

const Icon = styled.img`
    display: block;
    align-self: center;
    grid-row: 1 / 3;
    grid-column: ${ props => props.float === "left" ? "2 / 3" : "1 / 2" };
    margin-${props => props.float}: auto;
    margin-${props => (props.float === "left") ? "right" : "left"}: 1rem;
    src: ${props => props.src};
`;

export const SectionTitle = styled.h2`
    text-align: center;
    font-family: ${ props => props.theme.fontFamily };
    font-weight: ${ props => props.theme.fontWeight };
    font-size: 2rem;
    margin-top: 3rem;

    // Psuedo-elements to create seperator lines to each side of section title.
    ::before {
        content: "";
        display: inline-block;
        margin-bottom: 0.4rem;
        margin-right: 0.5rem;
        height: 0;
        width: 30%;
        border-bottom: 2px solid ${props => props.theme.borderColour};

        @media(max-width: 350px) {
            width: 20%;
        }
    }
    ::after {
        content: "";
        display: inline-block;
        margin-bottom: 0.4rem;
        margin-left: 0.5rem;
        height: 0;
        width: 30%;
        border-bottom: 2px solid ${props => props.theme.borderColour};

        @media(max-width: 350px) {
            width: 20%;
        }
    }
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