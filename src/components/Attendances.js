import React from 'react'
import { Link } from 'react-router-dom'
import me from '../assets/images/me.jpg'
import NoPublic from './NoPublic'

import BadgeItem from './BadgeItem'

export class attendances extends React.Component {



    render() {

    if(this.props.attendanceList.length===0){        
        
     return <NoPublic />

    }  
   
    let Photo=''
     return (

      <React.Fragment>
           
        <ul className="list-unstyled">

        {this.props.attendanceList.map((person)=>{
          
                // map is a function, so it return something

                console.log(person.avatarUrl)
                if (person.avatarUrl==="6bc16b40952ca1cf49877a510db07b3d") {
    
                  Photo=me
                }else{


                        
                  Photo=person.avatarUrl
                }            

            return(       
                
                
                <li key={person.id}>
              <Link to={`/${person.id}/` } className="attendance">

              <BadgeItem badgeValue={person} profilePhoto={Photo}/>
               
              </Link>

                </li>      

            )

            })
        }

          <div className="badges__buttons">
            <Link to="/new" className="button button--primary">
             New Attendance

            </Link>
                
          </div>
        </ul>
      </React.Fragment>

        )
    }
}

export default attendances
