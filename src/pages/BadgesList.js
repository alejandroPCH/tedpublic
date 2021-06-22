import React from 'react'
import Logo from '../assets/images/ted-logo.png'

import NavBar from '../components/NavBar'

import '../styles/BadgesList.css'

export class BadgesList extends React.Component{
    state={
        data:
            [
                {
                  id: "40fc-a41f-05e62b5939-a72de30c42-9deb",
                  irstName: "Guillemo",
                  lastName: "Grady",
                  email: "Leann_Berge@gmail.com",
                  jobTitle: "Senior Software Engineer",
                  twitter: "GuillermoTropper",
                  avatarUrl: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
                },
                {
                  id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
                  firstName: "Marjorie",
                  lastName: "Rodriguez",
                  email: "Ilene66@hotmail.com",
                  jobTitle: "Human Research Architect",
                  twitter: "ajorRodriguez61545",
                  avatarUrl: "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
                },
                {
                  id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
                  firstName: "Daphney",
                  lastName: "Torphy",
                  email: "Ron61@hotmail.com",
                  jobTitle: "National Markets Officer",
                  twitter: "DaphneyTorphy96105",
                  avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
                }
              ],
        }
    
    render() {
        return (
            <>
            <NavBar />
            <div className="badges">
                <div className="badges__cover">
                   
                </div>
            </div>

            <div className="badges__container">
                <div className=".container--buttons">
            <a href ="/badges/new" className="button button__primary">
                New Attendance
            </a>
            </div>
                <h1>hola</h1>
            </div>
            </>
        )
    }
}

export default BadgesList
