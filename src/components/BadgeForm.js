import React from 'react'

class BadgeForm extends React.Component{


    render(){

        return(<div>
            <h1>New Attendant</h1>

            <form action="">
                <div className="form">
                <label htmlFor="">
                    First Name
                </label>
                <input type="text" className="form_control" name="first_name" />

                </div>

                <button>Save</button>
            </form>
        </div>
        )
    }


}

export default BadgeForm 