import React from 'react'

import '../global.css'
import '../styles/Badge.css'
import confCoverPage from '../assets/images/cover-page.png'
// // npm packages don't use an explicit path
// import 'bootstrap/dist/css/bootstrap.css'

class Badge extends React.Component{


    
    //super necessary
    render(){


        return (
        <div className="badge">
                
            <div className="badge__header">
                <img src={confCoverPage} alt="Ted Talk Cover Page"></img>
            </div>
            
            <div className="badge__section-name">
                <img className="badge__avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="Profile Logo"></img>
                <h1>{this.props.firstName} <br/>{this.props.lastName}</h1>
            </div>
            
            <div className="badge__section-info">
                <h3>{this.props.jobTitle}</h3>
                <div>{this.props.twitter}</div>
            </div>

            <div className="badge__footer"><p>#TedTalk</p></div>

        </div>

        )

    }


}

export default Badge