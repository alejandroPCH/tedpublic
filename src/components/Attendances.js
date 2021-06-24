import React from 'react'
import { Link } from 'react-router-dom'
export class attendances extends React.Component {
    render() {


        if(this.props.attendanceList.length===0){
            
            return(
            
                <React.Fragment> 
                <div className="error-badge">
                <h3>We couldn't find anyone :(</h3>
                <h2>Become our first Badge!</h2><br />
                <Link className="button button__primary" to="/new"> 
                Create my Badge
                </Link>
                </div>

                {console.log("hdasd")}
                </React.Fragment>
                
                )
            
                
        }
        return (

            
        <React.Fragment>
           


            <ul className="list-unstyled">

            {this.props.attendanceList.map((person)=>{
                // {console.log(person)}
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
