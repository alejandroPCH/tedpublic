import React from 'react'
import '../styles/BadgeForm.css'


class BadgeForm extends React.Component{

    state={}

    handleSummit=(e)=>{

        console.log("El botón fue presionado")

        console.log(this.state)
        e.preventDefault()    

    }


    handleChange=(e)=>{
        
        
        // console.log(e.target.value)

        this.setState({ 

            [e.target.name]:e.target.value,
        })
        console.log(this.state)

    }

   

    
    render(){

        return(<>

            <form className="container__form" onSubmit={this.handleSummit} action="">
            <h1>New Attendant</h1>

                <div className="form firstName">
                
                    <label htmlFor="">First Name</label>
                    
                    <input /*on react you have an "onChange" event on an input*/
                         onChange={this.handleChange} type="text" className="form--input" name="firstName" value={this.state.FirstName} />

                </div>

                <div className="form lastName">

                    <label htmlFor="">Last Name</label>
                    
                        <input onChange={this.handleChange} type="text" className="form--input" name="lastName" value={this.state.LastName} /> 
                        </div>

                <div className="form jobTitle">
                         

                     <label htmlFor="">Job Title</label>
                    
                        <input onChange={this.handleChange} type="text" className="form--input" name="jobTitle" value={this.state.JobTitle} /> 
                        </div>

                <div className="form twitter">

                    <label htmlFor="">Twitter</label>
                    
                    <input onChange={this.handleChange} type="text" className="form--input" name="twitter" value={this.state.Twitter} /> 
                    
                </div>

                <button onClick={this.handleClick} className="container__button">Save</button>
            </form>
        </>
        )
    }


}

export default BadgeForm 
