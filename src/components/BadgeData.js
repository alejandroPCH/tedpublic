import React, { Component } from 'react'


import {Link} from 'react-router-dom'
import '../styles/BadgeData.css'

export class BadgeData extends Component {
    
    
    render() {
        const person=this.props.person

        return (
            <React.Fragment>

            <h1 >{person.firstName} {person.lastName}</h1>

                <ul className="values">

                    <li className="values__item">First Name: <span  className="values__item--info">{person.firstName}</span>    </li>
                    <li className="values__item">Last Name: <span className="values__item--info">{person.lastName}</span>    </li>
                    <li className="values__item">Job Title: <span className="values__item--info">{person.jobTitle}</span></li>
                    <li className="values__item">Email: <span className="values__item--info">{person.email}</span></li>
                    <li className="values__item">Twitter: <span className="values__item--info">{person.twitter}</span></li>


                </ul>
            <div>


                <Link className="button__primary button" to={`/${person.id}/edit`}>Edit Badge</Link>
           
            </div>

            <div>


                <p>Do you want to delete your Badge? <Link to={`/`} className="button-danger">Delete Badge</Link></p>
           
            </div>


            </React.Fragment>
        )
    }
}

export default BadgeData
