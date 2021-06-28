import React, { Component } from 'react'
import Badge from '../components/Badge'
import '../styles/New-Edit-Details-Badge.css'

import Md5 from 'md5'
import api from '../components/ApiData'
import Loading from '../components/Loading'
import FatalError from '../components/FatalError'
import me from '../assets/images/me.jpg'


export class BadgeDetails extends Component {
  

    state={
        loading:true,
        error:null,
        data:undefined,
    }



    componentDidMount(){

        this.fetchData()

    }

     fetchData=async()=>{

        this.setState({loading:true,error:null})

        try {
            

            const data= await api.badges.read(this.props.match.params.badgeId)
            this.setState({loading:false,data:data})


        } catch (error) {
            this.setState({loading:false,error:error})
            
        }

    }


    render() {
        const person=this.state.data

        if(this.state.loading)return<Loading/>
        if(this.state.error)return <FatalError error={this.state.error}/>
        
        const email=person.email
        let hash=0

        
        // if the email box is empty... my photo will load
        if(email=='')hash="6bc16b40952ca1cf49877a510db07b3d"
        else hash=Md5(email)

      person.avatarUrl=hash

        return (
            <div>
                
                
                <div className="container">
                    <div className="row">
                        
                    

                        <div className="badge__column column">

                        <Badge 
                        firstName={person.firstName}
                        lastName={person.lastName}
                        email={person.email}
                        jobTitle={person.jobTitle}
                        twitter={person.twitter}
                      
                        avatar={
   
                            
                        // i don't use my gravatar hash on the url because of the low quality of my photo, check it out if you want to see it anyways https://www.gravatar.com/avatar/6bc16b40952ca1cf49877a510db07b3d?d=identicon`
                        hash=="6bc16b40952ca1cf49877a510db07b3d"? `${me}` :`https://www.gravatar.com/avatar/${hash}?d=identicon` 
                        
                        }
                        />


                        </div>
                        <div className="form__column column">
                        <h1>{person.firstName} {person.lastName}</h1>

                    

                        </div>
                    </div>
                
                </div>

            </div>
          
        )
    }
}

export default BadgeDetails
