import styled, { css } from 'styled-components';
import React from 'react';
import { SectionTitle } from '../Container';

class CV extends React.Component {
render() {
    return (
        <>
            <SectionTitle id="cv">CV</SectionTitle>
            <CVContainer>
                <PDFPanel src='./CV.pdf' width='60vw' height='40vw' type='application/pdf'/>
            </CVContainer>
        </>
    );
}
}

export default CV;

const CVContainer = styled.div`
    margin: 2rem 20vw 8rem 20vw;
    width: auto;
    height: 70vh;
    display: grid;
    place-items: center;

    @media (max-width: 650px) {
        margin: 2rem 10vw;
    }
`;

const PDFPanel = styled.iframe`
    align-self: center;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    width: 100%;   
`;