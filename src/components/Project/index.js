import React from 'react';

export default function Project({ project }) {
    const { name, description, image, deployedLink, repo } = project;

    return (
        <div key={name}>
            <h1 className="project-name">{name} </h1>
              <a className="nav-link active" href={deployedLink}>Live Project</a> | <a href={repo}>GitHub Repo</a> 
              <p> {description} </p> 
            <img className="project-picture" 
            //src={require(`../../assets/${image}`)} 
            alt={name} 
            />
        </div>
    )

}

