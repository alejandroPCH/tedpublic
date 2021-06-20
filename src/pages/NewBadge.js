import React from 'react'
import NavBar from '../components/NavBar';
import Badge from '../components/Badge'
import '../styles/NewBadge.css'
class NewBadge extends React.Component{

    render(){
        
        
        return(
            <div>
            <NavBar />

            <div className="container">
                <div className="row">
                    <div className="column">

                    <Badge firstName="Alejandro" lastName="Pachas" jobTitle="Frontend Engineer" twitter="@alejantropper" avatar="https://www.gravatar.com/avatar?d=identicon"/>


                    </div>
                </div>
            
            </div>

            </div>
          

        )

    }


}

export default NewBadge