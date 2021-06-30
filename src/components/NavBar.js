import React from 'react'
import logo from '../assets/images/ted-logo.png'
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'
class NavBar extends React.Component{

    render(){

        return(
        <div className="navbar">

            <Link to="/tedpublic">
            
            <img className="navbar__ted-logo" src={logo}></img>
            </Link>
        </div>) 

    }
    
}

export default NavBar