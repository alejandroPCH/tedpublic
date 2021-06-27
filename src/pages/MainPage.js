import React from 'react'
import {Link} from 'react-router-dom'

import api from '../components/ApiData'

import Attendances from '../components/Attendances'
import FatalError from '../components/FatalError'
import Loading from '../components/Loading'

import '../styles/MainPage.css'

export class MainPage extends React.Component{
    
    

        constructor(props){
          super(props)

          //its recomended incializate state in the constructor
          this.state={

            loading:true,        
            error:null,

            data:undefined
         
            }

            // this element is to don't make the browser load the image twice
            this.MainImage=<div className="background-img"></div>

            
        }


        componentDidMount(){
        
          this.fetchData()
               
        
        }
        
      
        fetchData=async()=>{


          this.setState({loading:true,error:null})

          try{
            const data=await api.badges.list()
            
            this.setState({loading:false,data:data})

          }catch(error){

            this.setState({loading:false,error:error})

          }
          
        }
  

      render(){
      
        // if there is an error that have no solution
        if (this.state.error) {

          return <FatalError error={this.state.error.message}/>
            
          }
    
      //when fetchData is bringing the information
       if(this.state.loading){

          return (
  
            <React.Fragment>
            <Loading />

            {this.MainImage}
            </React.Fragment>
  
          )
  
        }

      

      //this is the main page
    
      return (
      
        <React.Fragment>
       
       <div className="background-img"></div>
                  
        <div className="badges">
                                     
          <div className="no-style-div">                    
             
             <Attendances attendanceList={this.state.data} />
              
           </div>           
        </div>
        </React.Fragment>

        )
    
}
}
export default MainPage
