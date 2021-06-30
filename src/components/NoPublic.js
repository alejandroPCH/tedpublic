import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NoPublic extends Component {
    
    render() {
        
        return (
                 <div className="error-badge">
                <h2>We could not find anyone :(</h2>
                <br />
                <Link className="button button--primary" to="/new"> 
                Create my Badge
                </Link>
                </div>

        )
    }
}

export default NoPublic
