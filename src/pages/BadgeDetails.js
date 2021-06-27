import React, { Component } from 'react'

import api from '../components/ApiData'
import Loading from '../components/Loading'
import FatalError from '../components/FatalError'
export class BadgeDetails extends Component {
  

    state={
        loading:true,
        error:null,
        data:undefined,
    }



    componentDidMount(){

        this.fetchData()

    }

     fetchData=async()=>{

        this.setState({loading:true,error:null})

        try {
            

            const data= await api.badges.read(this.props.match.params.badgeId)
            this.setState({loading:false,data:data})


        } catch (error) {
            this.setState({loading:false,error:error})
            
        }

    }


    render() {
        const person=this.state.data

        if(this.state.loading)return<Loading/>
        if(this.state.error)return <FatalError error={this.state.error}/>
        return (
            <div>
            {person.firstName} {person.lastName}</div>
        )
    }
}

export default BadgeDetails
