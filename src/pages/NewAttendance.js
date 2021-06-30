import React from 'react'
import Badge from '../components/Badge'
import '../styles/New-Edit-Details-Badge.css'
import Md5 from 'md5'
import BadgeForm from '../components/BadgeForm.js'
import me from '../assets/images/me.jpg'
import api from '../components/ApiData'

import Loading from '../components/Loading'

class NewBadge extends React.Component{

    state={
        loading:false,
        error:null,
        
        form:{  
        firstName:'',
        lastName:'',
        email:'',
        jobTitle:'',
        twitter:'',
        avatarUrl:''
    }}

    handleChange=e=>{


        this.setState({


        form:{

            ...this.state.form,[e.target.name]:e.target.value

            }

        })

    }

    handleSummit=async e=>{
        
        // if the md5 of the email summited by the form is my hash, it will do nothing, but if isn't,  the hash is going to be put in an url linked to a random photo

        if (this.state.form.avatarUrl!="6bc16b40952ca1cf49877a510db07b3d") {

        this.state.form.avatarUrl=`https://www.gravatar.com/avatar/${this.state.form.avatarUrl}?d=identicon` 
        }
        e.preventDefault()
        

        // const name= await this.state.form.firstName
        // const lastName= await this.state.form.lastName
        // const jobTitle= await this.state.form.jobTitle
        // const email= await this.state.form.email
        // const twitter= await this.state.form.twitter
        
    
        this.setState({loading:true,error:null})
        try {
            
            await api.badges.create(this.state.form)
            this.setState({loading:false})

            this.props.history.push('/tedpublic')

        } catch (error) {
            
            this.setState({loading:false,error:error})

        }

        }

    
    render(){
        
        const form=this.state.form
        const email=form.email
        let hash=0
        
        if(this.state.loading)return<Loading/>

     

        
        // if the email box is empty... my photo will load
        if(email=='')hash="6bc16b40952ca1cf49877a510db07b3d"
        else hash=Md5(email)

        form.avatarUrl=hash


        return(
            <div>
                
                
                <div className="container">
                    <div className="row">
                        
                    

                        <div className="badge__column column">

                        <Badge 
                        firstName={form.firstName||"Alejandro"}
                        lastName={form.lastName||"Pachas"}
                        email={form.email||"alejandropachas1@gmail.com"}
                        jobTitle={form.jobTitle||"Frontend Engineer"}
                        twitter={form.twitter||"alejantropper"}
                      
                        avatar={
   
                            
                        // i don't use my gravatar hash on the url because of the low quality of my photo, check it out if you want to see it anyways https://www.gravatar.com/avatar/6bc16b40952ca1cf49877a510db07b3d?d=identicon`
                        hash=="6bc16b40952ca1cf49877a510db07b3d"? `${me}` :`https://www.gravatar.com/avatar/${hash}?d=identicon` 
                        
                        }
                        />


                        </div>
                        <div className="form__column column">
                        <h1>New Attendant</h1>

                        <BadgeForm onSummit={this.handleSummit} onChange={this.handleChange} data={this.state.form} error={this.state.error}/>

                        </div>
                    </div>
                
                </div>

            </div>
          

        )

    }


}

export default NewBadge