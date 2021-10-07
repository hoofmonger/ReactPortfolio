import React from 'react'

function project({image, name, description, github, deployment}) {
    return (
        
            <li>
            <img src={image} alt={name + description} className="bigimage" /> 
                <a href={deployment}>Homepage Project</a>
                <a href={github}>GitHub Repository</a>
                <h1>
                    {name}
                </h1>
                <h2>
                    {description}
                </h2>
        </li>
        
    )
}

export default project
