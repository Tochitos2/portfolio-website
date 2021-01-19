import React from 'react';
import Project, {ProjectsContainer} from './ProjectsElements';
import {SectionTitle} from '../Container';

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            // Array holding the details of each project to be displayed, used for automatic JSX generation.
            projects: [
                { title: "First", description: "test", href: "", iconPath: "code.svg", altText: "" },
                { title: "Second", description: "test", href: "", iconPath: "react.svg", altText: "" },
                { title: "Third", description: "test", href: "", iconPath: "java.svg", altText: "" },
                { title: "Fourth", description: "test", href: "", iconPath: "javascript.svg", altText: "" },
                { title: "fifth", description: "test", href: "", iconPath: "c-sharp.svg", altText: "" },
                { title: "sixth", description: "test", href: "", iconPath: "code.svg", altText: "" },
                { title: "seventh", description: "test", href: "", iconPath: "php.svg", altText: "" },
                { title: "eighth", description: "test", href: "", iconPath: "code.svg", altText: "" },
            ]
        };    
    }

    render() {
        return (
            <div>
                <SectionTitle>Projects</SectionTitle>

                <ProjectsContainer>
                    {this.state.projects.map((project) => {
                        return (<Project className=    "project-card" 
                                         key=          {project.title}
                                         title=        {project.title} 
                                         description=  {project.description} 
                                         href=         {project.href} 
                                         iconPath=     {project.iconPath}
                                         altText=      {project.altText}
                                         float=        {project.float} />);
                    })}
                </ProjectsContainer>               
            </ div>
        );
    }

    componentDidMount() {
        this.setAlignment();

        // Recalculate and update card alignment when window size changes.
        window.addEventListener('resize', this.setAlignment.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setAlignment);
    }

    /**
     * Updates state to correct project card alignment.
     */
    setAlignment() {
        // Get the number of columns at current render (on a full row).
        let columnCount = 0;
        let currentTop = 0, prevTop = 0;
        const items = document.getElementsByClassName("project-card");
        for(let i=0; i < items.length; i++) {
            currentTop = items[i].getBoundingClientRect().top;
            if(i !==0 && currentTop !== prevTop) break;
            columnCount++;
            prevTop = currentTop;
        }

        // Create a copy of the project array from state with updated floats
        let newProjects = this.state.projects;
        // Get the width of the final row, as this may be smaller than the rest.
        let finalRowWidth = this.state.projects.length % columnCount;
        
        for(let i = 0; i < this.state.projects.length; i++) {
            // Find the x value in the grid, i.e. the column number at current rendering.
            let column = (i + 1) % columnCount;
            // Is the card on the final row?
            let isOnFinalRow = i + 1 > this.state.projects.length - finalRowWidth;
            // If card is on final row, use that row width instead.
            let cardsOnRow = isOnFinalRow ? finalRowWidth : columnCount;

            // Pass the appropriate float prop for that card's position.
            newProjects[i].float = ((column !== 0 || columnCount === 1) && column <= Math.ceil(cardsOnRow / 2) ) ? "left" : "right";
        }
        // Update state to hold revised projects array.
        this.setState({ projects: newProjects });
    }

}

export default Projects;