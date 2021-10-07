import React from 'react'
import Project from '../components/Project'
import info from '../utils/projects.json'

function portfolioPage() {
    return (
        <div>
            {info.map(({image, name, description, github, deployment})=>{
                return <Project
                image={image}
                name={name}
                description={description}
                github={github}
                deployment={deployment}
                key={name}
                />
            })}
        </div>
    )
}

export default portfolioPage
