import React, { Component } from 'react'

import {Link} from 'react-router-dom'
import '../styles/BadgeData.css'
import DeleteBadgeFromModal from './DeleteBadgeFromModal'
export function BadgeData(props){
    

   

        const person=props.person

        return (
            <React.Fragment>

            <h1 >{person.firstName} {person.lastName}</h1>

                <ul className="values">

                    <li className="values__item">First Name: <span  className="values__item--info">{person.firstName}</span>    </li>
                    <li className="values__item">Last Name: <span className="values__item--info">{person.lastName}</span>    </li>
                    <li className="values__item">Job Title: <span className="values__item--info">{person.jobTitle}</span></li>
                    <li className="values__item">Email: <span className="values__item--info">{person.email}</span></li>
                    <li className="values__item">Twitter: <span className="values__item--info">@{person.twitter}</span></li>


                </ul>
           
           <div>
                <div className="edit">


                    <Link className="button--primary button edit--button" to={`/tedpublic/${person.id}/edit`}>Edit Badge</Link>
            
                </div>

                <div className="delete">


                    <p className="delete--text">Do you want to delete your Badge? <a className="button-danger" onClick={props.handleOpen}>Delete Badge</a></p>

                   <DeleteBadgeFromModal modalIsOpen={props.modalIsOpen} isClose={props.handleClose} handleDeleteBadge={props.handleDeleteBadge}/>
              

            
                </div>

            </div>
            </React.Fragment>
        )
    }

export default BadgeData
