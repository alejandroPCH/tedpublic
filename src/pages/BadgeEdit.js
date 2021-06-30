import React from 'react'
import Badge from '../components/Badge'
import '../styles/New-Edit-Details-Badge.css'
import Md5 from 'md5'
import BadgeForm from '../components/BadgeForm.js'
import me from '../assets/images/me.jpg'
import api from '../components/ApiData'

import Loading from '../components/Loading'
import FatalError from '../components/FatalError'

class BadgeEdit extends React.Component{

    state={
        loading:true,
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

    componentDidMount(){
        
        this.fetchData()
    }

    async fetchData(e){

        this.setState({loading:true,error:null})

        try{

            const data=await api.badges.read(this.props.match.params.badgeId)
            this.setState({loading:false, form:data})

        }catch(error){

            this.setState({loading:false, error:error})

        }

    }

    handleSummit=async e=>{

        e.preventDefault()
        

        // const name= await this.state.form.firstName
        // const lastName= await this.state.form.lastName
        // const jobTitle= await this.state.form.jobTitle
        // const email= await this.state.form.email
        // const twitter= await this.state.form.twitter
        
    
        this.setState({loading:true,error:null})
        try {
            
                                    //remember that badges.update recieve 2 parameter
            await api.badges.update(this.props.match.params.badgeId,this.state.form)
            this.setState({loading:false})
           
            this.props.history.push('/attendance')


        } catch (error) {
            
            this.setState({loading:false,error:error})

        }

    }

    
    render(){
        
        if(this.state.loading)return<Loading/>
        if(this.state.error)return <FatalError error={this.state.error}/>
        const email=this.state.form.email
        let hash=0

        
        // if the email box is empty... my photo will load
        if(email=='')hash="6bc16b40952ca1cf49877a510db07b3d"
        else hash=Md5(email)

        this.state.form.avatarUrl=hash



        return(
            <div>
                
                
                <div className="container">
                    <div className="row">
                        
                    

                        <div className="badge__column column">

                        <Badge 
                        firstName={this.state.form.firstName||"Alejandro"}
                        lastName={this.state.form.lastName||"Pachas"}
                        email={this.state.form.email||"alejandropachas1@gmail.com"}
                        jobTitle={this.state.form.jobTitle||"Frontend Engineer"}
                        twitter={this.state.form.twitter||"alejantropper"}
                      
                        avatar={
   
                            
                        // i don't use my gravatar hash on the url because of the low quality of my photo, check it out if you want to see it anyways https://www.gravatar.com/avatar/6bc16b40952ca1cf49877a510db07b3d?d=identicon`
                        hash=="6bc16b40952ca1cf49877a510db07b3d"? `${me}` :`https://www.gravatar.com/avatar/${hash}?d=identicon` 
                        
                        }
                        />


                        </div>
                        <div className="form__column column">
                        <h1>Edit Attendant</h1>

                        <BadgeForm onSummit={this.handleSummit} onChange={this.handleChange} data={this.state.form} error={this.state.error}/>

                        </div>
                    </div>
                
                </div>

            </div>
          

        )

    }


}

export default BadgeEdit