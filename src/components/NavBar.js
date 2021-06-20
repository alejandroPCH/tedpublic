import React from 'react'
import logo from '../assets/images/tedtalks-logo.png'
import '../styles/Navbar.css'

class NavBar extends React.Component{

    render(){

        return(
        <div className="navbar">

            <a href="#">
            
            <img className="navbar__ted-logo" src={logo}></img>
            </a>
        </div>) 

    }
    
}

export default NavBar