import React, { Component } from 'react'

import {Link} from 'react-router-dom'
import '../styles/BadgeData.css'
import DeleteBadgeFromModal from './DeleteBadgeFromModal'
import api from './ApiData'
export class BadgeData extends Component {
    
    state={

        modalIsOpen:false,


    }


    handleOpen=e=>{
        this.setState({modalIsOpen:true})

    }

    handleClose=e=>{
        this.setState({modalIsOpen:false})

    }
    
    handleDeleteBadge=async e=>{

        this.setState({loading:true, error:null})

        try {
            
            await api.badges.remove(this.props.person.id)
            this.props.history.push('/')





        } catch (error) {

            this.setState({loading:false,error:error})
            
        }
    }

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
                    <li className="values__item">Twitter: <span className="values__item--info">@{person.twitter}</span></li>


                </ul>
           
           <div>
                <div className="edit">


                    <Link className="button--primary button edit--button" to={`/${person.id}/edit`}>Edit Badge</Link>
            
                </div>

                <div>


                    <p>Do you want to delete your Badge? <a className="button-danger" onClick={this.handleOpen}>Delete Badge</a></p>

                   <DeleteBadgeFromModal modalIsOpen={this.state.modalIsOpen} isClose={this.handleClose} onDeleteBadge={this.handleDeleteBadge}/>
              

            
                </div>

            </div>
            </React.Fragment>
        )
    }
}

export default BadgeData
