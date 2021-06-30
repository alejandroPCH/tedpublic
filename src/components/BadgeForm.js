import React from 'react'
import '../styles/BadgeData.css'

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

            <form className="values" action="" >

                <div className="values__item">
                
                    <label htmlFor="">First Name</label>
                    
                    <input /* am calling {this.props.onChange} because there is a prop sent as parameter*/
                         onChange={this.props.onChange} type="text" className="values__item--input" name="firstName" value={this.props.data.firstName} />

                </div>

                <div className="values__item">

                    <label htmlFor="">Last Name</label>
                    
                        <input onChange={this.props.onChange} type="text" className="values__item--input" name="lastName" value={this.props.data.lastName} /> 
                </div>
                       
              



                <div className="values__item">                       

                     <label htmlFor="">Job Title</label>
                    <input onChange={this.props.onChange} type="text" className="values__item--input" name="jobTitle" value={this.props.data.jobTitle} /> 
                
                </div>

                <div className="values__item">

                    <label htmlFor="">Email</label>

                    <input onChange={this.props.onChange} type="text" className="values__item--input" name="email" value={this.props.data.email} /> 
                </div>

                <div className="values__item">

                    <label htmlFor="">Twitter</label>
                    
                    <input onChange={this.props.onChange} type="text" className="values__item--input" name="twitter" value={this.props.data.twitter} /> 
                    
                </div>

             
               
                {this.props.error && 

                <div className="error-form">
                    <p className="error-form--red">Error: <span className="error-form--white">{this.props.error.message} 😭</span></p>

                </div>}
                
            </form>

            <button onClick={this.props.onSummit} className="button--primary button save">Save</button>
        </>
        )
    }


}

export default BadgeForm 
