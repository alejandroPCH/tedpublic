import React from 'react'

export class attendances extends React.Component {
    render() {
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
            </ul>
        </React.Fragment>

        )
    }
}


export default attendances
