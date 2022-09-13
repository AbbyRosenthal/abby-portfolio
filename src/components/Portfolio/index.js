import React, {useState} from 'react';
import Project from '../Project';

function Portfolio() {

    const [projects] = useState([
        {
            name: "Project One",
            description: "about project one",
            image: "Placeholder.png",
            deployedLink: "www.google.com",
            repo: "www.github.com/AbbyRosenthal"
        },
        {
            name: "Project TWo",
            description: "about project one",
            image: "Placeholder.png",
            deployedLink: "www.google.com",
            repo: "www.github.com/AbbyRosenthal"
        }
    ]);

    return (
        <section>
            <div>
                {projects.map(project =>(
                    <Project 
                    project = {project}
                    key = {project.name}
                    />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;