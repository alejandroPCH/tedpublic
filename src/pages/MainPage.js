import React from 'react'
import {Link} from 'react-router-dom'

import Api from '../components/ApiData'

import Attendances from '../components/Attendances'
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
            this.image=<div className="background-img"></div>

            
        }


        componentDidMount(){
        
          this.fetchData()
               
        
        }
        
      
        fetchData=async()=>{


          this.setState({loading:true,error:null})

          try{
            const data=await Api.badges.list()
            
            this.setState({loading:false,data:data})

          }catch(error){

            this.setState({loading:false,error:error})

          }
          
        }
  

      render(){
      

        if(this.state.loading===true){

          return (
  
            <React.Fragment>
            <Loading />

            {this.image}
            </React.Fragment>
  
          )
  
        }


      
      if (this.state.error) {

      return (
        
        
        
        <React.Fragment> 
       
        <div className="error-badge">
        <h2>Error: {this.state.error.message}</h2>
        <h3>:</h3>
          <br />
        <Link className="button button__primary" to="/"> 
          Return
        </Link>
        </div>
        
        {console.log("hdasd")}
        
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
