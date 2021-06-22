import React from 'react'
import Logo from '../assets/images/ted-logo.png'

import NavBar from '../components/NavBar'

import '../styles/BadgesList.css'

export class BadgesList extends React.Component{
    render() {
        return (
            <>
            <NavBar />
            <div className="badges">
                <div className="badges__hero">
                    <div className="badges__container">
                    </div>
                </div>
                <h1>hola</h1>
            </div>
            </>
        )
    }
}

export default BadgesList
