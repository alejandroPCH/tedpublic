import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import '../styles/Modal.css'

function Modal(props) {
    
   if(props.modalIsOpen!=true)return null
   
   //props.children is just a generic composition value
   
   //.createPortal receive 2 parameters, what and where 
    return ReactDOM.createPortal(
           
        <React.Fragment>

            <div className="Modal">

                <div className="Modal__container">

                    <button className="Modal__container--close" onClick={props.isClose}>X</button>
    
                    {props.children}           
                    
                </div>
            </div>
           
           </React.Fragment>
           , document.getElementById('modal')  )

}

export default Modal
