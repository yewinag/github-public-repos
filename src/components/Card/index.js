import React from 'react'

function Card() {
    return (
        <article className="repo-card">
            <div className="repo-card-header">
                <h5><a>Test Project</a></h5>
                <p>Last updated 4/7/21</p>
            </div>
            <div className="repo-card-body">
                <p>this project developed using blah blah blah blah blah blah blah</p>                                        
            </div>
            <div className="repo-card-footer">
                <p>TypeScript</p>
                <p>5.6K</p>    
                <p>MIT licence</p>
            </div>                                    
        </article>
    )
}

export default Card
