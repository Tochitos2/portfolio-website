import React from 'react';
import styled from 'styled-components';

class ThemeToggleButton extends React.Component {

    render() {
        return (
            <ToggleContainer onClick={this.props.OnClick}>
                <Icon src={`./icons/${this.props.toggleIcon}`}/>
            </ToggleContainer>
        );
    }
    
}

export default ThemeToggleButton;

const ToggleContainer = styled.div`
    position: sticky;
    position: -webkit-sticky;
    right: 0;
    bottom: 5vh;
    float: right;
    z-index: 3;

    display:grid;
    place-items: center;

    width: min(7rem, 17vw);
    height: 4rem;
    background-color: ${ props => props.theme.primary };
    border-top: 1.5px solid ${ props => props.theme.borderColour };
    border-bottom: 1.5px solid ${ props => props.theme.borderColour };
    border-left: 1.5px solid ${ props => props.theme.borderColour };
    cursor: pointer;
`;

const Icon = styled.img`
    display: block;
    width: auto;
    height: 70%;
`;