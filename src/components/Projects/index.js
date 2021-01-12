import React from 'react';
import {Project, SectionContainer} from './ProjectsElements';

class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SectionContainer>
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
            </SectionContainer>
        );
    }
}

export default Projects;