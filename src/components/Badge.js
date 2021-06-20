import React from 'react'

import '../global.css'
import '../styles/Badge.css'
import confCoverPage from '../assets/images/cover-page.png'
// // npm packages don't use an explicit path
// import 'bootstrap/dist/css/bootstrap.css'

class Badge extends React.Component{


    
    //super necessary
    render(){

        //destructuring
        const { avatar,firstName,lastName,jobTitle,twitter }=this.props


        return (
        <div className="badge">
                
            <div className="badge__header">
                <img src={confCoverPage} alt="Ted Talk Cover Page"></img>
            </div>
            
            <div className="badge__section-name">
                <img className="badge__avatar" src={avatar} alt="Profile Logo"></img>
                <h1>{firstName} <br/>{lastName}</h1>
            </div>
            
            <div className="badge__section-info">
                <h3>{jobTitle}</h3>
                <div>{twitter}</div>
            </div>

            <div className="badge__footer"><p>#TedTalk</p></div>

        </div>

        )

    }


}

export default Badge