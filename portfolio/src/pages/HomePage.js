import React from 'react'
import {Link} from 'react-router-dom'


function homePage() {
    return (
        <div>
            <h1>James's bio</h1>
            <p>lorem ipusm</p>
            <Link to = '/portfolio'>
                My Projects!
            </Link>
        </div>
    )
}

export default homePage
