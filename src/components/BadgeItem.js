import React, { Component } from 'react'

export class BadgeItem extends Component {
    static propTypes = {

    }

    render() {
        return (
        <React.Fragment>
                     <img src={this.props.profilePhoto} alt="" className="attendance__avatar"/>
                    
                    <div className="no-style-div">
                        
                        <strong>{this.props.badgeValue.firstName} {this.props.badgeValue.lastName}</strong>
                        
                        <div className="attendance__twitter">
                        
                            <span className="attendance__twitter--logo"></span>@{this.props.badgeValue.twitter}
                        
                        </div>

                        <p>{this.props.badgeValue.jobTitle}</p>

                    </div>
            </React.Fragment>
        )
    }
}

export default BadgeItem
