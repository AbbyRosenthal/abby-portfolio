import React from 'react';

export default function Project({ project }) {
    const { name, description, image, deployedLink, repo } = project;

    return (
        <div key={name}>
            <p className="project-name">{name} | <a href={deployedLink}>Live Project</a> | <a href={repo}>GitHub Repo</a></p>
            <img className="project-picture" src={require(`../../assets/Placeholder.png`)} alt={name} />
        </div>
    )

}

