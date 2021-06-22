import React from 'react'
import NavBar from '../components/NavBar';
import Badge from '../components/Badge'
import '../styles/NewBadge.css'

import BadgeForm from '../components/BadgeForm.js'
class NewBadge extends React.Component{

    state={form:{  

        firstName:'',
        lastName:'',
        email:'',
        jobTitle:'',
        twitter:'',
    }}

    handleChange=e=>{


        this.setState({


        form:{

            ...this.state.form,[e.target.name]:e.target.value

            }

        })
        console.log(this.state)

    }

    render(){
        
        
        return(
            <div>
                
                <NavBar />
                
                <div className="container">
                    <div className="row">
                        
                        <div className="badge__column column">

                        <Badge 
                        firstName={this.state.form.firstName}
                        lastName={this.state.form.lastName}
                        email={this.state.form.email}
                        jobTitle={this.state.form.jobTitle}
                        twitter={this.state.form.twitter}
                        avatar="https://www.gravatar.com/avatar?d=identicon"/>


                        </div>
                        <div className="form__column column">

                        <BadgeForm onChange={this.handleChange} data={this.state.form}/>

                        </div>
                    </div>
                
                </div>

            </div>
          

        )

    }


}

export default NewBadge