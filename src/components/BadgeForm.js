import React from 'react'
import '../styles/BadgeForm.css'


class BadgeForm extends React.Component{

  
    // handleChange=(e)=>{
        
        
    //     // console.log(e.target.value)
    //     // setState will put the properties you assign in state... and it will be saved
    //     this.setState({ 

    //         [e.target.name]:e.target.value,
    //     })

    // }


  
    render(){

        return(<>

            <form className="container__form" action="" onSubmit={this.props.onSummit}>
            <h1>New Attendant</h1>

                <div className="form firstName">
                
                    <label htmlFor="">First Name</label>
                    
                    <input /* am calling {this.props.onChange} because there is a prop sent as parameter*/
                         onChange={this.props.onChange} type="text" className="form--input" name="firstName" value={this.props.data.firstName} />

                </div>

                <div className="form lastName">

                    <label htmlFor="">Last Name</label>
                    
                        <input onChange={this.props.onChange} type="text" className="form--input" name="lastName" value={this.props.data.lastName} /> 
                </div>
                       
              



                <div className="form jobTitle">                       

                     <label htmlFor="">Job Title</label>
                    <input onChange={this.props.onChange} type="text" className="form--input" name="jobTitle" value={this.props.data.jobTitle} /> 
                
                </div>

                <div className="form email">

                    <label htmlFor="">Email</label>

                    <input onChange={this.props.onChange} type="text" className="form--input" name="email" value={this.props.data.email} /> 
                </div>

                <div className="form twitter">

                    <label htmlFor="">Twitter</label>
                    
                    <input onChange={this.props.onChange} type="text" className="form--input" name="twitter" value={this.props.data.twitter} /> 
                    
                </div>

                <button className="button__primary button">Save</button>
               
                {this.props.error && 

                <div className="error-form">
                    <p className="error-form--red">Error: <span className="error-form--white">{this.props.error.message} 😭</span></p>

                </div>}
            </form>
        </>
        )
    }


}

export default BadgeForm 
