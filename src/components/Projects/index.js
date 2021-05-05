import React from 'react';
import Project, {ProjectsContainer} from './ProjectsElements';
import {SectionTitle} from '../Container';

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            // Array holding the details of each project to be displayed, used for automatic JSX generation.
            projects: [
                { title: "Portfolio Website", description: "This very site, coded in ReactJS.", href: "https://github.com/Tochitos2/portfolio-website", iconPath: "react.svg", altText: "React Javascript icon" },
                { title: "Text Analyser", description: "A text analyser with additional tools for analysing literature, such as dialogue filtering and blacklists, written in Java.", href: "https://github.com/Tochitos2/TextAnalyser", iconPath: "java.svg", altText: "" },
                { title: "Divine Gifts SV Mod", description: "A Stardew Valley game mod written in C#, using PathosChild's SMAPI modding API.", href: "https://github.com/Tochitos2/Stardew-Valley.Divine-Gifts-Mod", iconPath: "c-sharp.svg", altText: "" },
                { title: "Student Webpanel", description: "A PHP login system that allows the viewing of student data fetched via MySQL.", href: "https://github.com/Tochitos2/CO323-Assignment2-PHP-MySQL", iconPath: "php.svg", altText: "" },
                { title: "Jack Recursive Descent Parser", description: "A recursive descent parser for the Jack language, including a symbol table. Written in Java.", href: "https://github.com/Tochitos2/Jack-Recursive-Descent-Parser", iconPath: "java.svg", altText: "" },
                { title: "Cipher Cracking Tools", description: "A selection of command-line tools for cracking ceasar and transposition ciphers, written in Haskell and Python.", href: "https://github.com/Tochitos2/ciphercracking", iconPath: "code.svg", altText: "" }
            ]
        };    
    }

    render() {
        return (
            <div id="projects">
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
        window.removeEventListener('resize', this.setAlignment.bind(this));
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