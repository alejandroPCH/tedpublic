import React from 'react'

import '../global.css'
import '../styles/Badge.css'
import Logo from '../assets/images/ted-logo.png'
import {Link} from 'react-router-dom'


class Badge extends React.Component{


    
    //super necessary
    render(){

        //destructuring
        const { avatar,firstName,lastName,email,jobTitle,twitter }=this.props


        return (
        <div className="badge">



                
            <div className="badge__header">
                <Link to="/attendance" >
                <img src={Logo} alt="Ted Cover Page"></img>
                </Link>
            </div>
            
            <div className="badge__section--name">
                <img className="badge__avatar" src={avatar} alt="Profile Logo"></img>
                <h1>{firstName} <br/>{lastName}</h1>
            </div>
            
            <div className="badge__section--info">
                <h2 className="info--jobTitle">{jobTitle}</h2>
                <h3 className="info--email">{email}</h3>
                <div className="info--twitter">@{twitter}</div>
            </div>

            <div className="badge__footer"><p>#Ted</p></div>

        </div>

        )

    }


}

export default Badge