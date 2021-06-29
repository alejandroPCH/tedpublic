import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NoPublic extends Component {
    
    render() {
        
        return (
                 <div className="error-badge">
                <h3>We could not find anyone :(</h3>
                <h2>Become our first Badge!</h2><br />
                <Link className="button button--primary" to="/new"> 
                Create my Badge
                </Link>
                </div>

        )
    }
}

export default NoPublic
