import React, { Component } from 'react'
import me from '../assets/images/me.jpg'
import Md5 from 'md5'

export class BadgePhoto extends Component {
  
    render() {

        const email=this.props.email
        let hash=0
        let result
        function photo(params) {
        // if the email box is empty... my photo will load
        if(email=='')hash="6bc16b40952ca1cf49877a510db07b3d"
        else hash=Md5(email)


        // i don't use my gravatar hash on the url because of the low quality of my photo, check it out if you want to see it anyways https://www.gravatar.com/avatar/6bc16b40952ca1cf49877a510db07b3d?d=identicon`
        result = hash=="6bc16b40952ca1cf49877a510db07b3d"? `${me}` :`https://www.gravatar.com/avatar/${hash}?d=identicon`;

        return result
        }
        


        return this.photo
    }
}

export default BadgePhoto
