import React from 'react'
import { Link } from 'react-router-dom'
import NoPublic from './NoPublic'
export class attendances extends React.Component {


    render() {

    if(this.props.attendanceList.length===0){        
        
     return <NoPublic />

    }

     return (

      <React.Fragment>
           
        <ul className="list-unstyled">

        {this.props.attendanceList.map((person)=>{
                // map is a function, so it return something

            return(       //key is an indentifier,
            
                <li key={person.id}className="attendance">
                    <img src={person.avatarUrl} alt="" className="attendance__avatar"/>
                    
                    <div className="no-style-div">
                        
                        <strong>{person.firstName} {person.lastName}</strong>
                        
                        <div className="attendance__twitter">
                        
                            <span className="attendance__twitter--logo"></span>@{person.twitter}
                        
                        </div>

                        <p>{person.jobTitle}</p>

                    </div>

                </li>      

                )

            })
        }

          <div className="badges__buttons">
            <Link to="/new" className="button button__primary">
             New Attendance
            </Link>
                
          </div>
        </ul>
      </React.Fragment>

        )
    }
}

export default attendances
