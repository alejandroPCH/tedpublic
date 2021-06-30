import React from 'react'
import { Link } from 'react-router-dom'
import me from '../assets/images/me.jpg'
import NoPublic from './NoPublic'

import BadgeItem from './BadgeItem'
import Searcher from './Searcher'



function useSearchBadge(personArray){

  const [name , setName]=React.useState('')
  const [filteredArray,setFilteredArray]=React.useState(personArray)


//the argunment of useMemo is Other function
  React.useMemo(() => {
  

      // personArray.fitler is going to bring the badges that match with the word  
        // we need to save the filter operation in this variable in order to use it
      const result=personArray.filter(badge=>{
        //badge is just a named that i add, but it can be anyone

      //and here, all badges that match are going to be returned
      // no matter if is the first name or the last name
      return `${badge.firstName} ${badge.lastName}`
                .toLowerCase()
                  .includes(name.toLowerCase())
                            // the name and what the user typed needs to be in lower case
      })

    //and whe save it in state
    setFilteredArray(result)

  }  
  
  , [personArray,name])


  return {filteredArray,setName,name}
}



function Attendances(props){

  const personArray=props.attendanceList
  const  {filteredArray,setName,name}=useSearchBadge(personArray)


  let Photo=''
  



    if(filteredArray.length===0){        
        
      
     return(
      <React.Fragment>

      <Searcher name={name} setName={setName}/>
           
      <NoPublic />
     </React.Fragment>
      )

    }  

    return (

      <React.Fragment>
        <Searcher name={name} setName={setName}/>

       
           
        <ul className="list-unstyled">

            {filteredArray.map((person)=>{
            
                // map is a function, so it return something

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

        
        </ul>
        <div className="badges__buttons">
            <Link to="/new" className="button button--primary">
             New Attendance
            </Link>
                
          </div>
      </React.Fragment>

        )
}

export default Attendances
