import React from 'react'
import NavBar from './NavBar';

export default function Layout(props) {
    const children=props.children;

    return(<>
        
        <NavBar />
       
        

        {props.children}
        
        </>
        )
}
