import React from 'react'

export class FatalError extends React.Component{
    constructor(props){

       super(props)

       this.error=props.error
       
    }

    render(){


        return (
            <React.Fragment> 
            
                <div className="error-badge">
                <h2>💔Error: {this.error}</h2>
                <h3>😭</h3>
                <br />
            
                </div>
                
                {console.log("hdasd")}  
            </React.Fragment>
        )
    }

}

export default FatalError
